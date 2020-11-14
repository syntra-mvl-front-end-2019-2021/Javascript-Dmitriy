const previousbtn = document.querySelector('.citation-slider__previous');
const nextbtn = document.querySelector('.citation-slider__next');

let sliderInfo = {
  sliderElement:sliderElement,
  sliderItemCount:sliderContainer.children.length,
  
  currentSlide : 0,
  
}

function getSliderItemWidth(){
 const sliderItem = document.querySelector('citation-slider__item')


  return sliderItem.clientWidth;
}

function nextSlide(event){

  const itemWidth = getSliderItemWidth()
  sliderInfo.currentSlide++

  console.log(sliderInfo.sliderElement.style)
}
function previousSlide(event){
  if(sliderInfo.currentSlide === 0)
  {
    return;
  }
  const itemWidth = getSliderItemWidth()

  sliderInfo.currentSlide--

  console.log(event)

}

previousbtn.addEventListener('click', previousSlide);
nextbtn.addEventListener('click', nextSlide);