import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcast-repository"


export const serviceFilterEpisodes = async (request: IncomingMessage) => {

    const queryString = request.url?.split("?")[1];
    const value = queryString?.split("=")[1];
    const podcastName = value ?? "";

    const data = await repoPodcast(podcastName);
    return data;
}