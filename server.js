let express = require("express");
let app = express()
let parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({
    extended: false
}))

app.use(express.static('public'));

app.get("/", function(req, res) {
    console.log("At root endpoint");
    res.send("<h1>Inside of endpoint for root. Hello!</h1>");
})

app.get("/anotherget", function(req, res) {
    res.send("<h1>Inside the other endpoint</h1>")
})

app.post("/postendpoint", function(req, res){
    console.log("In the post end point", req.body)
    res.send({
        message: "Look you saved something at this post",
        success: true
    })
})

app.listen(3000, function(){
    console.log("Listening on port 3000");
})