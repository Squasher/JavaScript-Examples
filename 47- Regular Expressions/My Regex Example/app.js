document.querySelector('#email').addEventListener('input', validate);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //const re = /^[A-Za-z0-9]{2,}@{1}[A-Za-z0-9]{2,}.{1}([A-Za-z]){2,4}$/;
    return re.test(email);
  }
  
  function validate() {
    const result = document.querySelector("#result");
    const email = document.querySelector('#email').value;
  
    if (validateEmail(email)) {
      result.innerHTML = "Email is valid";
      /* 
      * Override CSS Classes
      * for adding a class use classList.add('className') 
      * and use classList.remove('className') for removing a class
      */
      result.classList = 'h6 text-success';
    } else {
      result.innerHTML = "Email is not valid";
      result.classList = 'h6 text-danger';
    }
    return false;
  }