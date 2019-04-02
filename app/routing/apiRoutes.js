module.exports = function(app) {

app.get("../data/friends.js", function (req, res) {
    return res.json(tables);
});

app.post("./../api/friends", function (req, res) {
    var newTable = req.body;

    console.log(newTable);

    if (tables.length < 5) {
        tables.push(newTable);
    } else {
        waitlist.push(newTable);
    }

    res.json(newTable);
});
}