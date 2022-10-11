import Koa from 'koa'
import { router } from './router.js'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

export const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
