app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.post("/api/tables", function (req, res) {
    var newTable = req.body;

    console.log(newTable);

    if (tables.length < 5) {
        tables.push(newTable);
    } else {
        waitlist.push(newTable);
    }

    res.json(newTable);
});