import { ScraperRequest, ScraperResponse } from '../schemas/Scraper';
import checkItemStock from '../scraper';
async function scraperRoutes(fastify, options) {
    // Health Check
    fastify.get('/', async (request, reply) => {
        return { message: 'Item Checker API 0.0.1' };
    });
    // POST Route for Checking Stock
    fastify.post('/checkStock', {
        schema: {
            body: ScraperRequest,
            response: {
                200: ScraperResponse,
                400: ScraperResponse, // Handles bad requests
            },
        },
    }, async (request, reply) => {
        const { itemName, zipCode, website } = request.body;
        try {
            const result = await checkItemStock(itemName, zipCode);
            return reply.send(result); // 200 OK
        }
        catch (e) {
            return reply.status(400).send({
                success: false,
                error: e.message || 'Failed to check item stock',
            });
        }
    });
}
export default scraperRoutes;
