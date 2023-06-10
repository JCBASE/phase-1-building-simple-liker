// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll('.like-glyph');
for (const glyph of articleHearts) {
  glyph.addEventListener('click', likeCallback);
}

function likeCallback(e) {
  const heart = e.target;
  if (heart.textContent === EMPTY_HEART) {
  mimicServerCall()
  .then(function () {
    heart.textContent = FULL_HEART;
    heart.classList.add('activated-heart')
  }) 
  .catch(function (error) {
    document.querySelector('#modal').classList.remove('hidden')
    document.querySelector('#modal-message').textContent = error;
    setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000);
    heart.classList.remove('activated-heart');
    heart.textContent = EMPTY_HEART;
  })
}
  if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
