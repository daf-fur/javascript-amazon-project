const xhr = new XMLHttpRequest();
 
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); //asynchronous, does not wait for anything, immediately runs next code


// 19:49:47