import {IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episode-service";
import { serviceFilterEpisodes } from "../services/filter-episode-service";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: PodcastTransferModel = await serviceListEpisodes(); 
    response.writeHead(content.statusCode, {'content-type':"application/json"});
    response.write(JSON.stringify(content.body));
    response.end();
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(request);
    response.writeHead(content.statusCode, {'content-type':"application/json"});
    response.write(JSON.stringify(content.body));
    response.end();
}