let quotes = [
   `“No one is perfect - that’s why pencils have erasers.” -Wolfgang Riebe`,
   `“Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.” -Bonnie Blair`,
   `“It always seems impossible until it is done.” -Nelson Mandela`,
   `“Keep your face to the sunshine and you cannot see a shadow.” -Helen Keller`,
   `“Positive thinking will let you do everything better than negative thinking will.” -Zig Ziglar`,
   `“Once you replace negative thoughts with positive ones, you’ll start having positive results.” -Willie Nelson`,
   `“The only time you fail is when you fall down and stay down.” -Stephen Richards`,
   `“When you are enthusiastic about what you do, you feel this positive energy. It’s very simple.” -Paulo Coelho`,
   `“Positive anything is better than negative nothing.” -Elbert Hubbard`,    
];

const marquee = document.querySelector('marquee');

for(let i of quotes){
    const iTag = document.createElement("i");
    iTag.classList = "fas fa-fan text-danger mx-2";

    const spanTag = document.createElement("span");

    spanTag.innerText = i;
    marquee.appendChild(iTag);
    marquee.appendChild(spanTag);
}


