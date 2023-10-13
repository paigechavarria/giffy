
const form = document.querySelector('#searchForm');
const input = document.querySelector('.search');
const rmvBtn = document.querySelector('.remove');
const div = document.querySelector('.images');


//accessing gif api
async function getGif(term){
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', 
    {
        params: {
            q: term,
            api_key: 'e2bS5EWmO5aqMVsKyFZ2QigxbOZAikPw',
        }
    });
    findOneGif(res.data.data);
}

//setting image src to a random index of the filtered results
function findOneGif(gif){
    const idx = Math.floor(Math.random() * gif.length)
    const img = document.createElement('img');
    img.src = gif[idx].images.original.url;
    img.style.height = '100px'
    img.style.margin = '10px'
    div.append(img);
}



form.addEventListener('submit', function(e){
    e.preventDefault();
    getGif(input.value);
    input.value = '';
})



rmvBtn.addEventListener('click', function(e){
    e.preventDefault();
    div.innerHTML = '';
})