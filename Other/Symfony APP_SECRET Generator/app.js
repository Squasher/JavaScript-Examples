const output = document.querySelector("#app_secret");
const msg = document.querySelector("#success_msg");

function generateAppSecret(length) {
  let result = "";
  const characters = "abcdef0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return (output.value = result);
}

function copyToClipboard() {
  const cssClasses = `form-control p-2 text-white text-center my-2`;

  const hideMsg = () => {
    msg.classList.add("d-none");
  };
  
  if (output.value) {
    output.select();
    document.execCommand("copy");
    msg.innerHTML = "Text has been copied to the clipboard successfully";
    msg.classList = `${cssClasses} bg-success`;
    setTimeout(hideMsg, 3000);
  } 
  else {
    msg.innerHTML = "You cannot copy empty field!!!";
    msg.classList = `${cssClasses} bg-danger`;
    setTimeout(hideMsg, 3000);
  }
}