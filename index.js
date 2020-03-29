const app = require("express")();
const http = require("http").Server(app);

app.set("view engine", "ejs")

app.get("/", (req, res) => {

    res.render(__dirname+"/homepage/index.ejs");

});

app.get("/images/:image", (req, res) => {
    console.log(req.params)
    res.sendFile(__dirname+"/images/"+req.params.image);
})

http.listen(process.env.PORT || 3000, () => {
    console.log("listening on *:"+(process.env.PORT || 3000));
});
