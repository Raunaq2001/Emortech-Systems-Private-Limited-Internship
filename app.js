function checkPassword(){
  let password1=document.getElementById("newPassword").value;
  let password2=document.getElementById("reEnter").value;
  let pass1Len=password1.length;
  let pass2len=password2.length;
  let letters = /^[A-Za-z]+$/;
  if(password1 !== password2 || pass1Len < 8 || pass2len <8){
    showError();
  }else{
    if(password1.match(letters) || password2.match(letters)){
      showError();
    }
    else{
        document.getElementById("heading").innerHTML="Password Changed";
        document.getElementById("form").remove();
        let tag = document.createElement("p");
        tag.setAttribute( "class", "Success" );
        let text = document.createTextNode("Your password has been updated! Now get back in the driver seat, racers are waiting for you!");
        tag.appendChild(text);
        let element = document.querySelector(".main");
        element.appendChild(tag);
        // Button
        let newElement = document.createElement("button");
        newElement.setAttribute( "class", "buttonSuccess btn btn-dark font-weight-bold" );
        newElement.innerHTML="JOIN A RACE";
        element.appendChild(newElement);
    }
  }
}
function showError(){
  let tag = document.createElement("p");
  tag.setAttribute( "class", "Error" );
  let text = document.createTextNode("Passwords do not match.");
  tag.appendChild(text);
  let element = document.querySelector(".main");
  element.appendChild(tag);
}
function mySubmitFunction(e) {
  e.preventDefault();
}
