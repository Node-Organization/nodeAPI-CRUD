import { AppDataSource } from "../DataSource";
import { Category } from "../entities/Category";

export class DeleteCategoryService{
    async execute(id: string){
        const deleteCategorRepositories = AppDataSource.getRepository(Category);
        
        const service = await deleteCategorRepositories.findOneBy({ id });

        if(!service){
            return new Error("Category does not exists!")
        }

        await deleteCategorRepositories.delete(id);
    }
}