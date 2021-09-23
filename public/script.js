const load = document.getElementById('load');

load.addEventListener('click',() => {
 getDinoName();
 getDinoImage();
});

async function getDinoName(){
 const response = await fetch('/dinoname');
 const data = await response.json();
 let dinoName = data[0].join(' ');
 console.log(data[0].join(' '));

}

async function getDinoImage(){
 const response = await fetch('/dinoimage');
 const data = await response.json();
 let dinoImage = data.value[Math.floor(Math.random()*data.value.length)].thumbnailUrl;
 console.log(dinoImage);

}