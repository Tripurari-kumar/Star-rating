import "./styles.css";

let container= document.getElementById('star-container');
let stars= container.querySelectorAll('.star');

let filled=0;

function onStarClick(currentClicked, eventType){
  if(eventType==='clicked'){
    filled=currentClicked;
    let ratingCount= document.querySelector('.rating-count');
    ratingCount.innerText =` RatingCount: ${filled}`;
  }
  for(let i = 0 ; i < currentClicked; i++){
    stars[i].classList.add('filled');
  }
  for(let i=currentClicked ;i<stars.length;i++){
    stars[i].classList.remove('filled');
  }
}

container.addEventListener('click',(event)=>{
  //datasets can also be accesed from the events like 
  // event.target.dataset.index; also from the element as el.dataset.index
   let currentClicked= event.target.dataset.index;
   onStarClick(currentClicked, 'clicked');
})
   let currentClicked= event.target.dataset.index;
   onStarClick(currentClicked, 'clicked');
})

container.addEventListener('mouseover',(event)=>{
  let currentHover= event.target.dataset.index;
  onStarClick(currentHover, 'hover');
})

container.addEventListener('mouseout',()=>{
  onStarClick(filled, 'hover');
})



