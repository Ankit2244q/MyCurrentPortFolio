const API_kEY = "api_key = abc3ff8df126b4c0fe3bd3c3fb543e13";
const BASE_URL= "https://www.themoviedb.org/"
const API_URL =  BASE_URL + '/discover/movie?sort_by=popularity.desc &'
*API_kEY;

const main = document.getElementById('main')
const form = document.getElementById('form')

const IMG_URL ='https://image.tmdb.org/t/p/w500/';



getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
       console.log(data.results)
        showMovies(data.results);
    })
}  

   function showMovies(data){
      
    main.innerHTML = '';

    data.forEach(movie => {
        const{title , poster_path , vote_average , overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie')
        movieEl.innerHTML =  ` 
        <img src="${IMG_URL + poster_Path}" alt="${title}">
        <div class="movieinfo">
            <h3>${title}</h3>   
            <span class="${getColor(vote_average)}">${vote_average}"</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
          
        </div>

        `


 
      main.appendChild(movieEl);
        


    });
    
   }  


   function getColor(vote)
   {
       if(vote >= 8)
       return "green"
       else if(vote <= 5)
       return "orange"
       else
       return "red"
   }
   form.addEventListener('submit',(e)=> {
       e.preventDefault();
       const searchTerm = search.value;

   })