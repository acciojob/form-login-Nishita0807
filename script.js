function getFormvalue() {
    //Write your code here
  var form = document.getElementById("form1");

    // Get the values of the first name and last name input fields
    var firstName = form.elements.fname.value;
    var lastName = form.elements.lname.value;

    // Check if both fields are filled
    if (firstName && lastName) {
        // Concatenate the first and last name
        var fullName = firstName + " " + lastName;

        // Display the full name using an alert
        alert(fullName);
    } else {
        // If one or both fields are empty, show an error message
        alert("Please fill in both the first name and last name fields.");
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}
