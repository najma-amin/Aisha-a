var maleList = {

    Sunday : "Kwasi",
    Monday : "Kwadwo",
    Tuesday : "Kwabena",
    Wednesday : "Kwaku",
    Thursday : "Yaw",
    Friday :"Kofi",
    Saturday : "Kwame"

};

var femaleList = {
    Sunday : "Akosua",
    Monday : "Adwoa",
    Tuesday : "Abenaa",
    Wednesday : "Akua",
    Thursday : "Yaa",
    Friday : "Afua",
    Saturday : "Ama"

}
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function validateFunction(){

    var akan = "" //to receive relevant akan male/female name

    var gender = document.forms["userinput"]["gender"].value;

    var date = document.forms["userinput"]["date"].value;

    var confirmDate = new Date(date); //assign date format

    var confirmDay = confirmDate.getDay();

    if (gender === "Male"){
        akan = maleNames[confirmDay];
    } else if (gender === "Female"){
        akan = femaleNames[confirmDay]
    } else {
        alert ("Invalid input. Try again");
    }

    alert("Your Akan name is " + akan);
    // return akan;
}

