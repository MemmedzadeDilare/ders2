$(document).ready(function () {
  $("#log-in").submit(function (e) {
    e.preventDefault();
    if ($("#email").val() == "") {
      $("#email").addClass("is-invalid");
    }
    if ($("#password1").val() == "") {
      $("#password1").addClass("is-invalid");
    }
    let mail = $("#email").val();
    let pass = $("#password1").val();
    let users = [{
      email: "Elmir@gmail.com",
      pasword: "123"
    },
    {
      email: "Yehya@gmail.com",
      pasword: "12345"
    }
    ]
    for (var i = 0; i <= Number(localStorage.getItem("number")); i++) {
      if (mail == localStorage.getItem(`user${i}-email`) && pass == localStorage.getItem(`user${i}-password`)) {
        window.location.assign("ugurlu.html");
      } else if (users[i].email == mail && users[i].pasword == pass) {
        window.location.assign("ugurlu.html");
      }
      if (mail != localStorage.getItem(`user${i}-email`) && pass != localStorage.getItem(`user${i}-password`) || users[i].email != mail && users[i].pasword != pass) {
        alert("Bele bir istifadeci yoxdur");
      }
    }

  });
  $("#email").keyup(function () {
    if ($("#email").val() != "") {
      $("#email").removeClass("is-invalid");
      $("#email").addClass("is-valid");
    }
  });
  $("#password1").keyup(function () {
    if ($("#password1").val() != "") {
      $("#password1").removeClass("is-invalid");
      $("#password1").addClass("is-valid");
    }
  })
});