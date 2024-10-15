import { apiKey } from "./apiKey.js";

const getPicBtn = document.querySelector('#getPic'); 
getPicBtn.addEventListener('click', retrievePic); 

function retrievePic() {
  const date = document.querySelector('#date').value;

  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  const title = document.querySelector('.title'); 
  const description = document.querySelector('.description'); 
  const img = document.querySelector('img'); 
  const iframe = document.querySelector('iframe')

  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      console.log(result); 
      title.innerText = result.title; 
      description.innerText = result.explanation; 
      if (result.media_type === 'image') {
        img.classList.remove('hidden');
        img.src = result.hdurl; 
        iframe.classList.add('hidden'); 
      }
      else {
        iframe.classList.remove('hidden');
        iframe.src = result.hdurl;
        img.classList.add('hidden');
      }
    });
}

