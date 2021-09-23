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
 document.getElementById('dinoName').textContent = dinoName;
}

async function getDinoImage(){
 const response = await fetch('/dinoimage');
 const data = await response.json();
 let dinoImage = data.value[Math.floor(Math.random()*data.value.length)];
 let dinoImageUrl = dinoImage.thumbnailUrl;
 let dinoAlt = dinoImage.name;
 console.log(dinoImageUrl,dinoAlt);
 if(document.getElementById('dinoImage')!==null){
  document.getElementById('dinoImage').remove();
 }
 const img = document.createElement('img');
 img.id = "dinoImage";
 img.src = dinoImageUrl;
 img.alt = dinoAlt;
 document.getElementById('dinoName').appendChild(img);
 
}