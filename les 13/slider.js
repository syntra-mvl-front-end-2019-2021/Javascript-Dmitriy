let slider = document.querySelector("#slider");
let container = document.createElement("div");
let previous = document.createElement("div");
let next = document.createElement("div");
container.classList.add("container");
previous.classList.add("previous");
next.classList.add("next");

let doggos = [
  "IMG_20201001_011102.jpg",
  "IMG_20200923_203232.jpg",
  "IMG_20200918_085021.jpg",
  "IMG_20200922_090328.jpg",
  'IMG_20201019_104945.jpg'
];

let info = {
  sliderElement: container,
  slide: 0,
};

function getWidth() {
  let item = document.querySelector(".item");
  return item.clientWidth;
}

function nextButton() {
  let itemWidth = getWidth();
  if (info.slide === doggos.length-1) {
    next.classList.add("hide");
  }
  else {
    info.slide++;
    next.classList.remove("hide");
  info.sliderElement.style.left =
    -1 * info.slide * itemWidth + "px";
    
  }
  
}

function previousButton() {
  let itemWidth = getWidth();

  if (info.slide === 1) {
    previous.classList.add("hide");
  }
  else{
  info.slide--;

  info.sliderElement.style.left =
    -1 * info.slide * itemWidth + "px";}
}
Promise.all(doggos)
  .then(function (images) {
    slider.appendChild(container);
    slider.appendChild(previous);
    slider.appendChild(next);
    for (let i = 0; i < images.length; i++) {
      let image = document.createElement("img");
      image.setAttribute("src", images[i]);
      image.classList.add("item");
      container.appendChild(image);
    }
  })
  .catch(function (images) {
    console.log("Error" + images);
  });
next.addEventListener("click", nextButton);
previous.addEventListener("click", previousButton);










// unction newPromiseCallback(resolve, reject) {
//   setTimeout(function () {
//     resolve('Hello Promise');
//     // reject(new Error('Hello Error'));
//   }, 2000);
// }

// let newPromise = new Promise(newPromiseCallback);

// console.log(newPromise);

// function newPromiseResolved(result) {
//   console.log(result);
// }

// function newPromiseError(error) {
//   console.log(error);
// }

// function newPromiseDone() {
//   console.log("I'm done");
// }

// // newPromise.then(newPromiseResolved);
// // newPromise.catch(newPromiseError);
// // newPromise.finally(newPromiseDone).then(newPromiseResolved, newPromiseError);

// setTimeout(function () {
//   newPromise.finally(newPromiseDone);
// }, 5000);

// function loadScriptPr(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Script load error for ${src}`));

//     document.head.append(script);
//   });
// }

// loadScriptPr('/article/promise-chaining/one.js')
//   .then(function (script) {
//     return loadScriptPr('/article/promise-chaining/two.js');
//   })
//   .then(function (script) {
//     return loadScriptPr('/article/promise-chaining/three.js');
//   })
//   .then(function (script) {
//     // use functions declared in scripts
//     // to show that they indeed loaded
//     // one();
//     // two();
//     // three();
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(script);

//   document.head.append(script);
// }

// loadScript('1.js', function (error, script) {
//   if (error) {
//     // handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', function (error, script) {
//       if (error) {
//         // handleError(error);
//       } else {
//         // ...
//         loadScript('3.js', function (error, script) {
//           if (error) {
//             // handleError(error);
//           } else {
//             // ...continue after all scripts are loaded (*)
//           }
//         });
//       }
//     });
//   }
// });

// const previousbtn = document.querySelector('.citation-slider__previous');
// const nextbtn = document.querySelector('.citation-slider__next');

// let sliderInfo = {
//   sliderElement:sliderElement,
//   sliderItemCount:sliderContainer.children.length,
  
//   currentSlide : 0,
  
// }

// function getSliderItemWidth(){
//  const sliderItem = document.querySelector('citation-slider__item')


//   return sliderItem.clientWidth;
// }

// function nextSlide(event){

//   const itemWidth = getSliderItemWidth()
//   sliderInfo.currentSlide++

//   console.log(sliderInfo.sliderElement.style)
// }
// function previousSlide(event){
//   if(sliderInfo.currentSlide === 0)
//   {
//     return;
//   }
//   const itemWidth = getSliderItemWidth()

//   sliderInfo.currentSlide--

//   console.log(event)

// }

// previousbtn.addEventListener('click', previousSlide);
// nextbtn.addEventListener('click', nextSlide);