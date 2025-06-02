import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcast-repository"
import { PodcastTransferModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (request: IncomingMessage): Promise <PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode : 0,
        body : []
    }
    
    const queryString = request.url?.split("?")[1];
    const value = queryString?.split("=")[1];
    const podcastName = value ?? "";

    const data = await repoPodcast(podcastName);

    responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
}