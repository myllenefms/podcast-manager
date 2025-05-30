import { repoPodcast } from "../repositories/podcast-repository"


export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repoPodcast(podcastName);
    return data;
}