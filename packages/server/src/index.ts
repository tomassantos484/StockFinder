import fastify from 'fastify';
import { formatStoreName } from '@devweek/shared/src/utils'; 
import checkItemStock from './scraper';
const server = fastify();

// Alternatively, if you configure TS path aliases, you can import from '@my-monorepo/shared/src/utils'.

import puppeteer from 'puppeteer';
import scraperRoutes from './routes/scraperRoutes.js';
server.get('/ping', async (request, reply) => {
  return 'pong\n'
})
server.register(scraperRoutes)
server.listen({ port: 3002, host: 'localhost' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})












// async function main() {
//   // Launch the browser
//   const browser = await puppeteer.launch({
//     headless: false  // Set to true for production
//   });

//   try {
//     // Example search parameters
//     const searchTerm = 'fire stick';
//     const zipCode = '94040';

//     // Check stock
//     const result = await checkItemStock(browser, searchTerm, zipCode);

//     if (result.success) {
//       console.log('Item found in stock!');
//       result.stores?.forEach(store => {
//         console.log(`Store: ${store.name}`);
//         console.log(`Status: ${store.status}`);
//         console.log('---');
//       });
//     } else {
//       console.log('Error:', result.error);
//     }

//   } catch (error) {
//     console.error('Error running stock checker:', error);
//   } finally {
//     // Always close the browser
//     await browser.close();
//   }
// }

// // Run the script
// main().catch(console.error);