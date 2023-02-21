import Dog from "./dog";
import dogs from "./data";

const likeBtn = document.getElementById("like-btn");
// const dislikeBtn = document.getElementById('dislike-btn')
const dogContentEl = document.getElementById("dog-content-el");

function getNewDoggo(dogs) {
  let dog = dogs.shift();
  return new Dog(dog);
}
let dog = getNewDoggo(dogs);

document.addEventListener("click", (e) => {
  if (e.target.id === "like-btn" || likeBtn.contains(e.target)) {
    dog = handleLike(dog, dogs);
    render();
  }
});
function handleLike(dog, dogsArray) {
  dog.hasBeenLiked = true;
  return getNewDoggo(dogsArray) || {};
}

function render() {
  dogContentEl.innerHTML = dog.getDogHtml();
}
render();
