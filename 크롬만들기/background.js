const images = ["1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images [Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

// console.log(bgImage); // html에서 img src=""로도 가능

document.body.appendChild(bgImage);



