import { AppDataSource } from "../DataSource";
import { Videos } from "../entities/Videos";

export class DeleteVideosService{
    async execute(id: string){
        const videoRepositories = AppDataSource.getRepository(Videos);

        const service = await videoRepositories.findOneBy({id});

        if(!service){
            return new Error("Category does not exists!");
        }

        return videoRepositories.delete(id);
    }
}