function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}


window.onload = function() {
  document.getElementById("valid").disabled = true;
}

function requiredValues() {
  var name = document.getElementById("UserName");
  var email = document.getElementById("UserPhone");
  var phone = document.getElementById("UserEmail");

  if (name.value != '' && email.value != '' && phone.value != '')
      document.getElementById("valid").disabled = false;
  else
      document.getElementById("valid").disabled = true;
}


function verifyEmailAndPhone(){
  var email = document.getElementById("UserEmail");
  var phone = document.getElementById("UserPhone");

  if (email.value == 'milosevicnina@null.net' && phone.value == '062433779'){
    alert('You have successfully signed up yourself to giveaway')
  }
  else {
    alert('Email or phone already used!');
  }
}


var typeString = ['Iphone 11 pro'];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('type').innerHTML = text;
        setTimeout(type, 200);
      }());

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }

var countDownDate = new Date("July 10, 2021 20:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
  //
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "GIVEAWAY IS FINISHED";
  }
}, 1);

$('.carousel').carousel({
  interval: 1500
})
function myFunction() {
     document.getElementById("UserName").focus();
}
