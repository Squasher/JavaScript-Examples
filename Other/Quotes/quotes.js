fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const marquee = document.querySelector("marquee");
    for (let i of data) {
      const iTag = document.createElement("i");
      iTag.classList = "fas fa-fan text-danger mx-2";

      const spanTag = document.createElement("span");

      spanTag.innerText = `“${i.text}” - ${i.author}`;
      marquee.appendChild(iTag);
      marquee.appendChild(spanTag);
    }
  });