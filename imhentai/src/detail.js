function execute(url) {
    const doc = Http.get(url).html()

    return Response.success({
        name: doc.select(".title .pretty").first().text(),
        cover: doc.select("#cover img").first().attr("src"),
        author: doc.select("a[href^=/artist/]").first().text(),
        description: doc.select("#tags").html(),
        detail: doc.select("#info").html(),
        host: "https://imhentai.xxx",
        ongoing: false,
        nsfw: true
    });
}