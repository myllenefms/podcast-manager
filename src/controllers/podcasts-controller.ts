import {IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episode-service";
import { serviceFilterEpisodes } from "../services/filter-episode-service";

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpisodes(); 
    response.writeHead(200, {'content-type':"application/json"});
    response.end(JSON.stringify(content))
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const content = await serviceFilterEpisodes(request);
    response.writeHead(200, {'content-type':"application/json"});
    response.end(JSON.stringify(content));
}