createSlider($container,imgArr){
  let sliderInfo={
    $sliderContainer:$container
    sliderElement: container,
    slide: 0,
  }
  function createMarkup(){
    let slider = document.querySelector("#slider");
let container = document.createElement("div");
let previous = document.createElement("div");
let next = document.createElement("div");

container.classList.add("container");

next.classList.add("next");
next.addEventListener("click", nextButton);

previous.classList.add("previous");
previous.addEventListener("click", previousButton);

$sliderContainer.$container.appendChild(container);
$sliderContainer.$container.appendChild(previous);
$sliderContainer.$container.appendChild(next);

  }

  function getWidth() {
    let item = document.querySelector(".item");
    return item.clientWidth;
  }

}


function insertimg(imgArr){
  imgArr.forEach(String => {

    const $item = document.createElement('div')
    const $img = document.createElement('img')

    $item.classList.add('item')
    $img.classList.add('image')
    $img.src = imgURL

    $item.append($img)
    sliderInfo.sliderElement.append($item)
    
  });
}

