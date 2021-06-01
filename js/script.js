// function getFullName
function getFullName(firstName, secondName) {
    alert(firstName + " " + secondName);
  }

getFullName("Irena", "Miś");


// function getPhoneNumber
function getPhoneNumber(phoneNumber) {
  if (typeof phoneNumber === "string" && phoneNumber.length >= 9) {
    alert("+48" + phoneNumber);
  } else {
    alert("+48 phone error");
  }
}

getPhoneNumber("123456789");
getPhoneNumber(123456789);
getPhoneNumber("12345678");