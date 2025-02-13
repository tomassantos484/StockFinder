import { Static, Type } from '@sinclair/typebox'
enum Websites {
    Target = 'target',
    Walmart = 'walmart',
}

const MailingAddress = Type.Object({
    address_line1: Type.String(),
    city: Type.String(),
    state: Type.String(),
    postal_code: Type.String(),
  });
  
  const Store = Type.Object({
    location_id: Type.String(),
    store_name: Type.String(),
    mailing_address: MailingAddress,
    store_positions: Type.Array(Type.Any()), 
  });

export const ScraperRequest = Type.Object({
    itemName: Type.String(),
    zipCode: Type.String(),
    website: Type.Enum(Websites)
})


export const ScraperResponse = Type.Object({
    itemName: Type.String(),
    success: Type.Boolean(),
    stores: Type.Array(Type.Any()),
  });




export type ScraperResponseType = Static<typeof ScraperResponse>
export type ScraperRequestType = Static<typeof ScraperRequest>