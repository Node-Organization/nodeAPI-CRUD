import { AppDataSource } from "../DataSource";
import { Category } from "../entities/Category";


export class GetAllCategoriesService{
    async execute(){
        const categoryRepositories = AppDataSource.getRepository(Category);

        const categories = await categoryRepositories.find();

        return categories;
    }
}