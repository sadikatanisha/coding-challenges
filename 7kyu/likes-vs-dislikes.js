// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  let state = "Nothing";

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = "Nothing";
    } else {
      state = buttons[i];
    }
  }

  return state;
}
function likeOrDislike(buttons) {
  return buttons.reduce(
    (state, button) => (button === state ? Nothing : button),
    Nothing
  );
}

console.log(likeOrDislike(["Dislike"]), "Dislike");
console.log(likeOrDislike(["Like", "Like"]), "Nothing");
console.log(likeOrDislike(["Dislike", "Like"]), "Like");
console.log(likeOrDislike(["Like", "Dislike", "Dislike"]), "Nothing");

console.log(likeOrDislike(["Dislike", "Dislike"]), "Nothing");
// console.log(likeOrDislike([Like, Like, Like]), Like);
// console.log(likeOrDislike([Like, Dislike]), Dislike);
// console.log(likeOrDislike([Dislike, Like, Dislike]), Dislike);
console.log(
  likeOrDislike([
    "Like",
    "Like",
    "Dislike",
    "Like",
    "Like",
    "Like",
    "Like",
    "Dislike",
  ]),
  "Dislike"
);
console.log(likeOrDislike([]), "Nothing");
