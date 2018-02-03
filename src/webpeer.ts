import { Context, Request, Response, Middleware } from "koa";
import Koa = require("koa");
import Router = require("koa-router");
import koaBody = require("koa-body");
import { Server } from "http";
import exception from "./exception";

async function run() {
  const app = new Koa();
  app.use(koaBody());
  
  const router = new Router();
  router.get("/register", )
  
  app.use(router.routes())
}