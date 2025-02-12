import { Type } from '@sinclair/typebox';
var Websites;
(function (Websites) {
    Websites["Target"] = "target";
    Websites["Walmart"] = "walmart";
})(Websites || (Websites = {}));
export const ScraperRequest = Type.Object({
    itemName: Type.String(),
    zipCode: Type.String(),
    website: Type.Enum(Websites)
});
export const ScraperResponse = Type.Object({
    success: Type.Boolean(),
    closestLocationTitle: Type.Optional(Type.String()),
    closestLocationAddress: Type.Optional(Type.String())
});
