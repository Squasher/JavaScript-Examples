let text = "/index.php/eingang";

let a = text.lastIndexOf("/"); //=

let b = text.substring(a+1);
console.log(b);

let qString = "?jahr=2015&submit=Senden&ansicht=bar";

let d = qString.indexOf('jahr=') + 5;
let c = qString.substr(d , 4);

console.log(c);

