// mục lục 
function execute(url) {
    url = decodeURIComponent(url)
    // let id = /https:\/\/misskon.com\/([\w-]+(?:-\w+)*)/.exec(url);
    // if (id) id = id[1];
    // let newUrl = "https://misskon.com/" + id;
    let response= fetch(url);
    let doc = response.html();
    let div = doc.select(".pagination-list").first()
    let el = div.select("span")
    let data = [];  
    for (var i = el.size() - 1; i >= 0; i--) {
        var e = el.get(i);
        data.push({
            name: e.select("a").text(),
            url: encodeURIComponent(e.select("a").attr("href")).replace("%2F","/"),
            host: "https://misskon.com"
        })
    }

    return Response.success(data.reverse());
}