import puppeteer, { Page } from 'puppeteer';
import { ScraperRequest, ScraperResponse, ScraperResponseType } from './schemas/Scraper.js';

interface StockResult {
  success: boolean;
  stores?: Array<{
    name: string;
    status: string;
  }>;
  error?: string;
}

async function checkItemStock(
  searchTerm: string,
  zipCode: string
): Promise<ScraperResponseType> {
    
  try {
    const browser = await puppeteer.launch({
            headless: false  // Set to true for production
          });
    const page: Page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});

    // Navigate to search page and wait for it to load
    await page.goto('https://www.target.com');
    await page.waitForSelector('[data-test="@web/Search/SearchButton"]');

    // Type search term and click search
    await page.type('input[name="searchTerm"]', searchTerm);
    await page.click('[data-test="@web/Search/SearchButton"]');

    // Wait for first product title and click it
    await page.waitForSelector('[data-test="product-title"]');
    await page.click('[data-test="product-title"]');

    //Wait for and click location edit button with specific class
    // await page.waitForSelector('button.styles_ndsBaseButton__W8Gl7.styles_md__X_r95.styles_mdGap__9J0yq.styles_ndsButtonTertiary__o5l2m.styles_md__WQZR0');
    // await page.click('button.styles_ndsBaseButton__W8Gl7.styles_md__X_r95.styles_mdGap__9J0yq.styles_ndsButtonTertiary__o5l2m.styles_md__WQZR0');

    await page.waitForSelector('button:has-text("Edit your location")');
    await page.click('button:has-text("Edit your location")');
    // Wait for modal to appear and input zip code
    await page.waitForSelector('#zip-or-city-state');
    await page.type('#zip-or-city-state', zipCode);

    
    // Click lookup button and wait for results
    await page.click('button:has-text("Look up")');
    await page.waitForSelector('[data-test="fiatsStoreCard"]');

    // Get all store cards and extract information
    const stores = await page.$$eval('[data-test="fiatsStoreCard"]', (cards) => {
      return cards.map((card) => {
        const nameElement = card.querySelector('h3');
        const statusElement = card.querySelector('.sc-7a240559-1');
        
        return {
          name: nameElement?.textContent || 'Unknown Store',
          status: statusElement?.textContent || 'Status Unknown'
        };
      });
    });

    // Filter to only show in-stock stores
    const inStockStores = stores.filter(store => 
      store.status.toLowerCase().includes('in stock')
    );

    await page.close();

    inStockStores.length = 1
    if (inStockStores.length === 0) {
      throw new Error(`No stores with ${searchTerm} in stock are found!`)
    }

    return{
        success: true,
        closestLocationTitle: "Filler Informaiton Store for now",
        closestLocationAddress: "Closest address of item in stock" 
    } as ScraperResponseType
  } catch (error: any) {
    // await browser?.close(); // Ensure browser closes even on error
    return { success: false }; // Return false instead of throwing an error
  }
}

export default checkItemStock;