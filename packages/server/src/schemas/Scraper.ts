import { Static, Type } from '@sinclair/typebox'
enum Websites {
    Target = 'target',
    Walmart = 'walmart',
}
export const ScraperRequest = Type.Object({
    itemName: Type.String(),
    zipCode: Type.String(),
    website: Type.Enum(Websites)
})
export const ScraperResponse = Type.Object({
    success: Type.Boolean(),
    closestLocationTitle: Type.Optional(Type.String()),
    closestLocationAddress: Type.Optional(Type.String())

})


export type ScraperResponseType = Static<typeof ScraperResponse>
export type ScraperRequestType = Static<typeof ScraperRequest>