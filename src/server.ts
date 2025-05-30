import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
        
        
        if(request.method === "GET" && request.url?.split("?")[0] === "/api/list")
        {
            await getListEpisodes(request, response);
        }

        if (request.method === "GET" && request.url?.split("?")[0] === "/api/episode")
        {
            await getFilterEpisodes(request, response);
        }
    }
);

server.listen(process.env.PORT, ()=>{
    console.log("servidor iniciado na porta " + process.env.PORT)
});


