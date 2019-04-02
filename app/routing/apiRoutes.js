module.exports = function (app) {

    var users = require("../data/friends.js");
    
    app.get("/api/friends", function(req, res){
        return res.json(users);
    });
    

    app.post("/api/friends", function (req, res) {
        var newUser = req.body;

        console.log(newUser);
        
        console.log(users);
        
        // app.get("/api/friends", function (req, res) {
        //     var users = res.body;
        //     console.log(users);
        // })
        // tables.push(users);

        // res.json(newTable);
    });
}


