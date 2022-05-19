import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteCategoryService();

        const result = await service.execute(id);

        if(service instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(204).end();
    }
}