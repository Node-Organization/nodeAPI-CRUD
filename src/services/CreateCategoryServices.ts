
import { AppDataSource } from "../DataSource";
import { Category } from "../entities/Category";

type CategoryRequest = {
    name: string;
    description: string;
};

export class CreateCategoryServices{
    async execute({ name, description }:CategoryRequest): Promise<Category | Error> {
        
        const categoryRepositories = AppDataSource.getRepository(Category);

        if(await categoryRepositories.findOneBy({name})){
            return new Error("Category already exists");
        }

        const category = categoryRepositories.create({
            name,
            description
        });

        await categoryRepositories.save(category);

        return category;
    }
}