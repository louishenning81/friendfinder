var users = require("../data/friends.js");


module.exports = function (app) {



    app.get("/api/friends", function (req, res) {
        res.json(users);
    });




    app.post("/api/friends", function (req, res) {
        var newUser = req.body;

        console.log(newUser.scores);

        // console.log(users[0].score);


        var resultarr = [];

        function nextarray(arr) {
            console.log("length = " + users.length);
            for (i = 0; i < users.length; i++) {
                console.log("Round : " + i);
                var user = arr[i].score;
                comp(user, newUser.scores)
            };
        }

        function comp(arr1, arr2) {
            var total = 0;
            for (j = 0; j < arr2.length; j++) {
                var compNum = Math.abs(arr1[j] - parseInt(arr2[j]));
                total += compNum;
                console.log(total);
            }
            resultarr.push(total);
            total = 0;
        };



        nextarray(users);
        console.log(resultarr);
        users.push(newUser);
        console.log(users.length);
        console.log(users[resultarr.indexOf(Math.min(...resultarr))]);
        res.json(users[resultarr.indexOf(Math.min(...resultarr))]);






    });

    

}





