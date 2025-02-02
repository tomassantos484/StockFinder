import Fastify from 'fastify';
import { formatStoreName } from '@devweek/shared/src/utils'; 
// Alternatively, if you configure TS path aliases, you can import from '@my-monorepo/shared/src/utils'.

const server = Fastify();
