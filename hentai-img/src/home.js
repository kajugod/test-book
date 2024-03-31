function execute() {
    return Response.success([
        {title: "Home", input: "https://hentai-img.com/", script: "gen.js"},
        {title: "Ranking", input: "https://hentai-img.com/ranking/", script: "gen.js"},
        {title: "Ranking Image", input: "https://hentai-img.com/ranking-images/", script: "gen.js"},
        {title: "AI Generated", input: "https://hentai-img.com/search/keyword/AI+Generated/", script: "gen.js"},
        {title: "Tag", input: "https://hentai-img.com/tag/", script: "gen.js"},
        {title: "Pixiv", input: "https://hentai-img.com/search/tag/pixiv/", script: "gen.js"},      
        {title: "Pixiv Search", input: "https://hentai-img.com/search/keyword/pixiv/page/1/", script: "gen.js"},
        {title: "离为火火", input: "https://hentai-img.com/search/keyword/离为火火/page/1/", script: "gen.js"}
    ]);
}