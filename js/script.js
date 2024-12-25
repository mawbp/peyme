document.addEventListener('DOMContentLoaded', () => {
  function loadPage(page){
    fetch(page)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
        attachEventHandlers();
      });
  }

  function attachEventHandlers(){
    const startButton = document.getElementById("startButton");
    if(startButton){
      startButton.addEventListener("click", () => {
        loadPage('../pages/menu.html');
      });
    }
  }

  loadPage('../pages/home.html');
});