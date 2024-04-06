function execute() {
    return Response.success([
        {title: "Fakku Comics", input: "/comics/album/Fakku-Comics/{0}", script: "gen.js"},
        {title: "Fakku Comics Date", input: "/comics/album/Fakku-Comics?sort=date/{0}", script: "gen.js"},
        {title: "Hentai and Manga English", input: "/comics/album/Hentai-and-Manga-English/{0}", script: "gen.js"},
        {title: "VARIOUS AUTHORS", input: "/comics/album/various-authors/{0}", script: "gen.js"},
        {title: "FAKE CELEBRITIES SEX PICTURES", input: "/comics/album/fake-celebrities-sex-pictures/{0}", script: "gen.js"}
         
    ]);
}