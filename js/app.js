/* Put some script here */

(function () {

  function $(id) {
    return document.getElementById(id);
  }

  function A() {
    return parseFloat($("op1").value);
  }

  function B() {
    return parseFloat($("op2").value);
  }

  function result(text) {
    $("res").innerHTML = "Result: " + text;
  }

  function degToRad(x) {
    return x * Math.PI / 180;
  }



  $("add-button").addEventListener("click", () => {
    result(A() + B());
  });

  $("sub-button").addEventListener("click", () => {
    result(A() - B());
  });

  $("mul-button").addEventListener("click", () => {
    result(A() * B());
  });

  $("div-button").addEventListener("click", () => {
    if (B() === 0) {
      result("Помилка: ділення на нуль");
      return;
    }
    result(A() / B());
  });

 

  $("log-button").addEventListener("click", () => {
    if (A() <= 0) {
      result("Помилка: log(a), a > 0");
      return;
    }
    result("ln = " + Math.log(A()));
    loadHelp("log.json");
  });

  $("sin-button").addEventListener("click", () => {
    result("sin = " + Math.sin(degToRad(A())));
    loadHelp("sin.json");
  });

  $("tan-button").addEventListener("click", () => {
    result("tan = " + Math.tan(degToRad(A())));
    loadHelp("tan.json");
  });

  

  function loadHelp(file) {
    $ajaxUtils.sendGetRequest(
      "data/" + file,
      function (data) {
        $("content").innerHTML =
          "<h3>" + data.name + "</h3>" +
          "<p>" + data.description + "</p>" +
          "<img src='images/" + data.image_name +
          "' alt='" + data.name +
          "' style='max-width:300px'>";
      },
      true
    );
  }

})();
