import { FastifyInstance } from 'fastify';
import { ScraperRequest, ScraperRequestType, ScraperResponse, ScraperResponseType } from '../schemas/scraper';
import { Type } from '@sinclair/typebox';
import checkItemStock from '../scraper';

async function scraperRoutes(fastify: FastifyInstance, options: any) {
    fastify.get('/', async (request, reply) => {
        return { message: 'Item Checker API 0.0.1' };
    });

    fastify.post<{ Body: ScraperRequestType; Reply: ScraperResponseType }>('/checkStock', {
        schema: {
            body: ScraperRequest,
            response: {
                200: ScraperResponse,
                400: ScraperResponse,// Handle bad requests
            }
        }
    }, async (request, reply) => {  
        const { itemName, zipCode, website } = request.body;
        // call the scraper function in here

        try{
            // try to get the item from the specified website by calling the function
            const result = await checkItemStock(itemName, zipCode)
            return reply.send(result)
        } catch(e){
            return reply.status(400).send({ success: false });
        }
    });
}

export default scraperRoutes;  // Export the routes for Fastify to register
