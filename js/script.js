document.getElementById("myalert").style.display = "none";
function result() {
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var maleNames = [
    "kwasi",
    "kwadwa",
    "kwabena",
    "kwaku",
    "yaw",
    "kofi",
    "kwame"
  ];
  var dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var date = new Date(year + "/" + month + "/" + day);
  var dayOfWeek = date.getDay();
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  console.log(date);

  if (parseInt(day) > 0 && parseInt(day) < 31);
  else {
    alert("invalid input");
    document.getElementById("allme").style.display = "none";
  }

  if (male.checked == true) {
    document.getElementById("myalert").style.display = "block";
    document.getElementById("dayweek").innerHTML = dayOfTheWeek[dayOfWeek];
    document.getElementById("akanname").innerHTML = maleNames[dayOfWeek];
  } else if (female.checked == true) {
    document.getElementById("myalert").style.display = "block";
    document.getElementById("dayweek").innerHTML = dayOfTheWeek[dayOfWeek];
    document.getElementById("akanname").innerHTML = femaleNames[dayOfWeek];
  }
}
// return akan;
