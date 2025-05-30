# Podcast Manager

### Descrição
um app ao estilo netflix para centralizar diferentes episódios de podcasts separados por categoria

### Domínio
Podcasts em vídeo

### Features
- Listar episódios de podcasts em sessões
    - [Saúde, Fitness, Humor, Autoconhecimento]
- Filtrar episódios por nome de podcast

## Como
### Feature 
    GET: Listar episódios de podcasts em sessões
#### Como vou implementar
    Vou retornar em uma API REST (json) nome do podcast, nome do episódio, foto de capa, link do vídeo, catoria
    
````js 
    [
        {
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            videoID: "",
            cover: "linkdafoto",
            link: "youtube.com.br",
            category: ["humor"]
        },
        {
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            videoID: "",
            cover: "linkdafoto",
            link: "youtube.com.br",
            category: ["humor"]
        }
    ]
````

### Feature 
    GET: Listar episódios de podcasts baseado na nome escolhida
#### Como vou implementar
    Vou retornar em uma API REST (json) os episódios com o nome escolhida pelo client