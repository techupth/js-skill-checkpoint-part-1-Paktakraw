// Question #3
let userPassword = "swnalWadqQq";
// เริ่มเขียนโค้ดตรงนี้
checkPasswordStrength = (userPassword) => {
  if (userPassword.length > 10) {
    return "Strong";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  } else {
    return "Week";
  }
};
console.log(checkPasswordStrength(userPassword));
