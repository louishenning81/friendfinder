$("#add-btn").on("click", function (event) {
    event.preventDefault();

    var newUser = {
      name: $("#name").val().trim(),
      link: $("#link").val().trim(),
      Q1: $("input[name=inlineRadioOptions]:checked").val(),
      Q2: $("input[name=inlineRadioOptions2]:checked").val(),
      Q3: $("input[name=inlineRadioOptions3]:checked").val(),
      Q4: $("input[name=inlineRadioOptions4]:checked").val(),
      Q5: $("input[name=inlineRadioOptions5]:checked").val(),
      Q6: $("input[name=inlineRadioOptions6]:checked").val(),
      Q7: $("input[name=inlineRadioOptions7]:checked").val(),
      Q8: $("input[name=inlineRadioOptions8]:checked").val(),
      Q9: $("input[name=inlineRadioOptions9]:checked").val(),
      Q10: $("input[name=inlineRadioOptions10]:checked").val()
      };

      console.log(newUser)
    })

    // Question: What does this code do??
  //   $.post("/api/tables", newUser)
  //     .then(function (data) {
  //       $.get("/api/tables", function (data) {
  //         console.log(data[4] = true);
  //         if (data[4] === true) {
  //           alert("sorry you've been waitlisted")
  //         }
  //         else {
  //           console.log(data);
  //           alert("Adding your reservation...");
  //         }
  //       })

  //     });

  // });