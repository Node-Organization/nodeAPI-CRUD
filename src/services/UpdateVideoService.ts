import { AppDataSource } from "../DataSource";
import { Videos } from "../entities/Videos";

type VideosRequest = {
    id: string;
    name: string;
    description: string; 
    duration: number;
    category_id: string;
};

export class UpdateVideoService{
    async execute({ id, name, description, duration, category_id }:VideosRequest){
        const videoRepositories = AppDataSource.getRepository(Videos);
        
        const video = await videoRepositories.findOneBy({id});

        if(!video){
            return new Error("Category does not exists!");
        }

        video.name        = name        ? name        : video.name;
        video.description = description ? description : video.description;
        video.duration    = duration    ? duration    : video.duration;
        video.category_id = category_id ? category_id : video.category_id;

        await videoRepositories.save(video);

        return video;
    }
}