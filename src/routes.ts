import express from "express";

var routes = express.Router();

import { CreateCategoryController } from './controller/CreateCategoryControllers';
import { CreateVideoControllers } from "./controller/CreateVideoControllers";
import { DeleteCategoryController } from "./controller/DeleteCategoryController";
import { DeleteVideoControllers } from "./controller/DeleteVideoControllers";
import { GetAllCategoriesController } from "./controller/GetAllCategoriesController";
import { GetAllVideosControllers } from "./controller/GetAllVideosControllers";
import { UpdateCatagoryControllers } from "./controller/UpdateCatagoryControllers";
import { UpdateVideoControllers } from "./controller/UpdateVideoControllers";

routes.post("/categories",       new CreateCategoryController().handle);
routes.get("/categories",        new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id",    new UpdateCatagoryControllers().handle);
routes.post("/videos",           new CreateVideoControllers().handle);
routes.get("/videos",            new GetAllVideosControllers().handle);
routes.delete("/videos/:id",     new DeleteVideoControllers().handle);
routes.put("/videos/:id",        new UpdateVideoControllers().handle);

export { routes };