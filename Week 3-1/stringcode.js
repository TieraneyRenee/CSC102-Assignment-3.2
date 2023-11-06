function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";

    //Variables that we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //filling in the Variables
    firstName = document.getElementById("fName").value; //working on inputting first name
    console.log("The first name was input as " + firstName)

    lastName = document.getElementById("lName").value; //working on inputting last name
    console.log("The last name was input as " + lastName)

    zipCode = document.getElementById("zipCode").value; //working on inputting zipcode
    console.log("The zipcode was input as " + zipCode)

    fullName = firstName + " " + lastName; //' " " ' is concatenation. Working on inputting the full name
    console.log("The fullname was input as " + fullName)

    fullNameLength = fullName.length; //working on inputting the full name length
    console.log("The fullname has " + fullNameLength + " characters");

    zipCodeNumb = parseInt(zipCode); //takes 'letters' that are numbers and turns them into numbers
    console.log("The zipcode number is " + zipCodeNumb);

    //Things to check for.. fullNameLength is less than 20 characters. zipCode has only 5 digits.
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name";  //this is done as protection. Overwhelming system with too much data will cause it to error out and allow access. This is called Buffer Overflow.  
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid Zipcode"; //limiting the number of digits that the zipcode can have. '!' means 'not' so if the zipcode is put in with less than or more than 5 digits then it will not be accepted.
    } else {
        alert("User Credentials passed. Welcome to the site, " + fullName + "!") //if both the fullNameLength and the zipCode pass then an alert will display.
    }

}
