const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

/*
xhr.addEventListener("error", () => console.log("Request failed"));
xhr.addEventListener("loadend", () => console.log("Request finished"));
*/

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send(); //asynchronous, does not wait for anything, immediately runs next code

// 20:03:36
