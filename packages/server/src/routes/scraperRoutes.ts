import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { ScraperRequest, ScraperRequestType, ScraperResponse, ScraperResponseType } from '../schemas/Scraper';
import checkItemStock from '../scraper';

async function scraperRoutes(fastify: FastifyInstance, options: any) {
    // Health Check
    fastify.get('/', async (request, reply) => {
        return { message: 'Item Checker API 0.0.1' };
    });

    // POST Route for Checking Stock
    fastify.post<{ Body: ScraperRequestType; Reply: ScraperResponseType }>('/checkStock', {
        schema: {
            body: ScraperRequest,
            response: {
                200: ScraperResponse,
                400: ScraperResponse, // Handles bad requests
            },
        },
    }, async (
        request: FastifyRequest<{ Body: ScraperRequestType }>,
        reply: FastifyReply
    ) => {
        const { itemName, zipCode, website } = request.body;

        try {
            const result = await checkItemStock(itemName, zipCode);
            return reply.send(result); // 200 OK
        } catch (e: any) {
            return reply.status(400).send({
                success: false,
                error: e.message || 'Failed to check item stock',
            });
        }
    });
}


export default scraperRoutes;