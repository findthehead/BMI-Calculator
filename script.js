function closePage() {
  window.close(); // Close the current window
}
function calculateBMI() {
  // Input validation
  var nam = encodeURIComponent(document.getElementById("Name").value.trim());
  var Height = parseFloat(document.getElementById("Height").value.trim());
  var Weight = parseFloat(document.getElementById("Weight").value.trim());

  // Check if input values are valid numbers
  if (isNaN(Height) || isNaN(Weight)) {
    alert("Please enter valid numeric values for Height and Weight.");
    return; // Exit the function early if input values are not valid
  }

  // Check for negative values
  if (Height <= 0 || Weight <= 0) {
    alert("Height and Weight must be positive values.");
    return; // Exit the function early if input values are negative
  }

  var bmi = Weight / ((Height / 100) * (Height / 100));
  var message = "Hi " + nam + ", your BMI is " + bmi.toFixed(2) + ". ";

  // Handle different BMI ranges
  if (bmi < 18.5) {
    message += "You are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    message += "You are healthy.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    message += "You are overweight.";
  } else if (bmi >= 30) {
    message += "You are obese.";
  } else {
    message += "Please enter valid input.";
  }

  // Display the message
  document.write(message);
}
