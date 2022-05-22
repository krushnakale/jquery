function validateForm(){
  let  fName = document.getElementById("fname");
  let  lName = document.querySelector("#lname");
  let  email = document.querySelector("input[id='email']");
    alert("All elements retrieved");
    if(fName.value === "" || lName.value === "" || email.value === ""){
      alert("Required fields are blank");
      return false;
    }
}