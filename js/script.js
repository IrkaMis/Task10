// function getFullName
function getFullName(firstName, secondName) {
    return firstName + " " + secondName;
  }
// alert(getFullName("Irena", "Miś"));

// function getPhoneNumber
function getPhoneNumber(phoneNumber) {
  if (typeof phoneNumber === "string" && phoneNumber.length >= 9) {
    return "+48" + phoneNumber;
  } else {
    return "+48 phone error";
  }
}
// alert(getPhoneNumber("123456789"));
// alert(getPhoneNumber(123456789));
// alert(getPhoneNumber("12345678"));

// function start
function start() {
  let fullName = getFullName("Irena", "Miś");
  let phoneNumber = getPhoneNumber("123456789");

  alert(fullName);
  alert(phoneNumber);
}

start();