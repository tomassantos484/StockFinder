async function checkItemStock(searchTerm, zipCode) {
    try {
        // first query and find the first item returned
        const encodedKeyword = encodeURIComponent(searchTerm);
        const itemSearchURL = `https://redsky.target.com/redsky_aggregations/v1/web/plp_search_v2?key=9f36aeafbe60771e321a7cc95a78140772ab3e96&channel=WEB&count=24&default_purchasability_filter=true&include_dmc_dmr=true&include_sponsored=true&include_review_summarization=false&keyword=${encodedKeyword}&new_search=true&offset=0&page=%2Fs%2F${encodedKeyword}&platform=desktop&pricing_store_id=2581&scheduled_delivery_store_id=2581&spellcheck=true&store_ids=2581%2C626%2C2615%2C2830%2C2584&useragent=Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10_15_7%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F132.0.0.0+Safari%2F537.36&visitor_id=0194FB5649F702019FB22185FEC45FF1&zip=95054`;
        const response = await fetch(itemSearchURL, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)...",
                "Accept": "application/json",
            }
        });
        console.log(itemSearchURL);
        const data = (await response.json());
        console.log("DATA:", JSON.stringify(data, null, 2));
        const firstTcin = data.data.search.products[0].tcin;
        const itemNameOnTarget = data.data.search.products[0].item.product_description.title;
        console.log("NAME: " + itemNameOnTarget);
        console.log(firstTcin); // "91651393"
        // now I have the item id num pass it to the check for stock function
        const storeId = "2581";
        const state = "CA";
        const latitude = "37.400";
        const longitude = "-121.980";
        const visitor_id = "0194FB5649F702019FB22185FEC45FF1";
        const channel = "WEB";
        const key = "9f36aeafbe60771e321a7cc95a78140772ab3e96";
        const page = `/p/A-${firstTcin}`;
        const url = `https://redsky.target.com/redsky_aggregations/v1/web/product_fulfillment_v1?key=${key}&is_bot=false&tcin=${firstTcin}&store_id=${storeId}&zip=${zipCode}&state=${state}&latitude=${latitude}&longitude=${longitude}&scheduled_delivery_store_id=${storeId}&paid_membership=false&base_membership=false&card_membership=false&required_store_id=${storeId}&visitor_id=${visitor_id}&channel=${channel}&page=${encodeURIComponent(page)}`;
        const res = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)...",
                "Accept": "application/json",
            }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = (await res.json());
        const product = json.data.product;
        const fulfillment = product.fulfillment;
        if (fulfillment.is_out_of_stock_in_all_store_locations) {
            const availableStores = [];
            return {
                success: false,
                stores: availableStores
            };
        }
        // Filter store options to include only those with available stock
        const availableStores = fulfillment.store_options
            .filter((option) => {
            const hasQuantity = option.location_available_to_promise_quantity > 0;
            const orderPickupAvailable = option.order_pickup?.availability_status === "IN_STOCK";
            const inStoreOnlyAvailable = option.in_store_only?.availability_status === "IN_STOCK";
            return hasQuantity || orderPickupAvailable || inStoreOnlyAvailable;
        })
            .map((option) => ({
            location_id: option.location_id,
            store_name: option.store.location_name,
            mailing_address: option.store.mailing_address,
            store_positions: product.store_positions,
        }));
        console.log(availableStores);
        if (availableStores.length < 1) {
            return {
                itemName: "None",
                success: false,
                stores: availableStores
            };
        }
        return {
            itemName: itemNameOnTarget,
            success: true,
            stores: availableStores
        };
    }
    catch (error) {
        const availableStores = [];
        console.log(error);
        return { itemName: "None",
            success: false, stores: availableStores };
    }
}
export default checkItemStock;
