import { AppDataSource } from "../DataSource";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateCatagoryService{
    async execute({ id, name, description }: CategoryUpdateRequest){
        const updateCatagoryRepositories = AppDataSource.getRepository(Category);
        
        const category = await updateCatagoryRepositories.findOneBy({id});

        if(!category){
            return new Error("Category does not exists!");
        }

        category.name        = name        ? name        : category.name;
        category.description = description ? description : category.description;

        await updateCatagoryRepositories.save(category);

        return category;
    }
}