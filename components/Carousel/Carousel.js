/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  //create elements
  const carousel = document.createElement("div");
  const left = document.createElement("div");
  const img = document.createElement("img");
  const right = document.createElement("div");

  let list = [left, img, right];
  //add classes
  carousel.classList.add("carousel");
  left.classList.add("left-button");
  right.classList.add("right-button");
  //append
  list.forEach(item => carousel.appendChild(item));

  //create image array

  const mountains = "./assets/carousel/mountains.jpeg";
  const computer = "./assets/carousel/computer.jpeg";
  const trees = "./assets/carousel/trees.jpeg";
  const turntable = "./assets/carousel/turntable.jpeg";
  let imgArr = [mountains, computer, trees, turntable];

  let count = 0;
  img.src = imgArr[count];

  left.addEventListener("click", switchLeft);
  right.addEventListener("click", switchRight);

  function switchRight() {
    if (count < imgArr.length - 1) {
      count++;
      img.src = imgArr[count];
      TweenMax.set(img, { xPercent: 0 }, 0);
      TweenMax.from(img, 0.8, { xPercent: -50, ease: Power1.easeOut });
    } else {
      count = 0;
      img.src = imgArr[count];
      TweenMax.set(img, { xPercent: 0 }, 0);
      TweenMax.from(img, 0.8, { xPercent: -50, ease: Power1.easeOut });
    }
  }

  function switchLeft() {
    if (count === 0) {
      count = imgArr.length - 1;
      img.src = imgArr[count];
      TweenMax.set(img, { xPercent: 0 }, 0);
      TweenMax.from(img, 0.8, { xPercent: -50, ease: Power1.easeOut });
    } else {
      count--;
      img.src = imgArr[count];
      TweenMax.set(img, { xPercent: 0 }, 0);
      TweenMax.from(img, 0.8, { xPercent: -50, ease: Power1.easeOut });
    }
  }

  //content
  left.textContent = "<";
  right.textContent = ">";
  return carousel;
}

const body = document.querySelector("body");
let newCarousel = createCarousel();
console.log(newCarousel);
body.appendChild(newCarousel);
