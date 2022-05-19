
import { AppDataSource } from "../DataSource";
import { Videos } from "../entities/Videos";

export class GetAllVideosService{
    async execute(){
        const videosRepository = AppDataSource.getRepository(Videos);

        const videos = await videosRepository.find({
            relations: ["category"],
        });

        return videos;
    }
}