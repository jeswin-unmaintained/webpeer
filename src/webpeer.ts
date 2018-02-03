import { Context, Request, Response, Middleware } from "koa";
import Koa = require("koa");
import Router = require("koa-router");
import koaBody = require("koa-body");
import { Server } from "http";
import exception from "./exception";
import * as registrationAPI from "./api/registration";

async function run() {
  const app = new Koa();
  app.use(koaBody());
  
  const router = new Router();
  router.get("/register", registrationAPI.register);
  router.get()
  
  app.use(router.routes())
}