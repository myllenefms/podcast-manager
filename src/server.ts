import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
        
        
        if(request.method === HttpMethod.GET && request.url?.split("?")[0] === Routes.LIST)
        {
            await getListEpisodes(request, response);
        }

        if (request.method === HttpMethod.GET && request.url?.split("?")[0] === Routes.EPISODE)
        {
            await getFilterEpisodes(request, response);
        }
    }
);

server.listen(process.env.PORT, ()=>{
    console.log("servidor iniciado na porta " + process.env.PORT)
});


