function execute(url) {
    let id = /porn-images-xxx.com\/(image|story)\/([a-z0-9-]+)\/?/.exec(url);

    if (id) id = id[2];
    let response = fetch("https://porn-images-xxx.com/image/" + id + "/");

    let data = [];
    data.push({
        name: response.html().select("#title").text(),
        url: "https://porn-images-xxx.com/story/" + id
    })

    return Response.success(data);
}