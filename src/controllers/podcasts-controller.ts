import {IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episode-service";
import { serviceFilterEpisodes } from "../services/filter-episode-service";
import { StatusCode } from "../utils/status-code";

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpisodes(); 
    response.writeHead(StatusCode.OK, {'content-type':"application/json"});
    response.end(JSON.stringify(content))
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    const content = await serviceFilterEpisodes(request);
    response.writeHead(StatusCode.OK, {'content-type':"application/json"});
    response.end(JSON.stringify(content));
}