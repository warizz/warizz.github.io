(() => {
  function copyToClipboard(element_id) {
    const textarea = document.createElement('textarea');
    textarea.textContent = document.getElementById(element_id).innerText;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('copied');
  }

  function fetchCat() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
          const res = JSON.parse(xmlhttp.response);
          document.getElementById('img-cat-gif').src = res.data.image_url;
        } else if (xmlhttp.status == 400) {
          // alert('There was an error 400');
        } else {
          // alert('something else other than 200 was returned');
        }
      }
    };

    xmlhttp.open("GET", 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat', true);
    xmlhttp.send();
  }

  if ('serviceWorker' in navigator) {
    window
      .addEventListener('load', () => {
        navigator
          .serviceWorker
          .register('sw.js')
          .then((registration) => console.log('ServiceWorker registration successful with scope: ', registration.scope))
          .catch((err) => console.log('ServiceWorker registration failed: ', err));
      });
  }

  document
    .querySelector('button[name="btn-copy-phone-number"]')
    .addEventListener('click', () => copyToClipboard('txt-phone-number'))

  document
    .querySelector('button[name="btn-copy-mail"]')
    .addEventListener('click', () => copyToClipboard('txt-mail'))

  document.getElementById('footer-year').innerHTML = new Date().getFullYear();

  fetchCat();
})();
