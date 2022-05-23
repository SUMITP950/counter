let ban = 0;
function increment() {
  ban++;
  document.getElementById("counter").innerHTML = ban;
}

function decrement() {
  ban--;
  document.getElementById("counter").innerHTML = ban;
}
function reset() {
  ban = 0;
  document.getElementById("counter").innerHTML = `<span>${ban}</span>`;
}
