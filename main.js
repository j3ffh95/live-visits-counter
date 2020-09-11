const countElement = document.querySelector("#count");

function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/john-doe/youtube/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      countElement.innerHTML = res.value;
    });
}
