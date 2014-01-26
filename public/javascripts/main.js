navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var video = document.querySelector('video');

function success(stream) {
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }

  video.play();
  document.querySelector('.controls').style.display = 'inline-block';
}

function error(err) {
  if (err === 'PERMISSION_DENIED') {
    return document.querySelector('.error').textContent =
      'You must allow access to the camera to see the demo work.';
  }

  document.querySelector('.error').textContent = err;
}

navigator.getUserMedia({ audio: false, video: true }, success, error);

var filters = document.querySelectorAll('input[type=radio]');

for (var i = 0; i < filters.length; i++) {
  filters[i].addEventListener('change', function(e) {
    video.className = e.target.value;
  });
}
