const box = document.querySelector('.pictures');
const input = document.getElementById('input');
const search = document.getElementById('search');
const image = document.querySelectorAll('.img');


let url = 'https://api.unsplash.com/search/photos?query=programming&per_page=12&client_id=NcmCL4MmPT9G2qZyjZ2rCp2L0jFG8KUYgQXCeiW_Nco';


async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  
  let pic = document.querySelectorAll('.img')
    pic.forEach(el => el.remove())
        for (let i=0; i< data.results.length; i++){
            const img = document.createElement('div')
            img.classList.add('img')
            img.style.backgroundImage = 'url('+data.results[i].urls.regular+')'
            box.append(img)
        }
}
  getData();

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
    searchImage()
})

function searchImage(){
  url = 'https://api.unsplash.com/search/photos/?query=' +input.value+ '&per_page=12&client_id=NcmCL4MmPT9G2qZyjZ2rCp2L0jFG8KUYgQXCeiW_Nco';
  getData()
}