import { AppDataSource } from "../DataSource";
import { Videos } from "../entities/Videos";
import { Category } from "../entities/Category";

type VideosRequest = {
    name: string;
    description: string; 
    duration: number;
    category_id: string;
};

export class CreateVideoService{
    async execute({ name, description, duration, category_id }: VideosRequest): Promise<Videos | Error>{
        
        const videosRepositories    = AppDataSource.getRepository(Videos);

        const categoryRepositories  = AppDataSource.getRepository(Category);
        const categoryId = await categoryRepositories.findOne({
            where:{
                id: category_id
            }
        });
        if(!categoryId){
            return new Error("Category does not exists!");
        }

        const video = videosRepositories.create({ name, description, duration, category_id });

        await videosRepositories.save(video);

        return video;

    }
}