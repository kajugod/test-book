function execute() {
    return Response.success([
        { title: "Top", input: "top", script: "gen.js" },
        { title: "Artists", input: "artists", script: "gen.js" },
        { title: "Kantai Collection", input: "kantai-collection-doujins-22720", script: "gen.js" },
        { title: "Fate Grand Order", input: "fate-grand-order-doujins-28615", script: "gen.js" },
        { title: "Hentai Magazine", input: "hentai-magazine-chapters-2766", script: "gen.js" },
        { title: "Hentai Manga", input: "hentai-manga-214", script: "gen.js" },
    ]);
}