$("#add-btn").on("click", function (event) {
    event.preventDefault();

    var newTable = {
      name: $("#name").val().trim(),
      phoneNumber: $("#phone-number").val().trim(),
      email: $("#email").val().trim(),
      uniqueId: $("#unique-id").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/tables", newTable)
      .then(function (data) {
        $.get("/api/tables", function (data) {
          console.log(data[4] = true);
          if (data[4] === true) {
            alert("sorry you've been waitlisted")
          }
          else {
            console.log(data);
            alert("Adding your reservation...");
          }
        })

      });

  });