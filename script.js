function changePortraitStyle() {
    const portrait = document.querySelector('.portrait');
    portrait.style.display = "block";
  }
  
  document.querySelector('.portrait').addEventListener('click', changePortraitStyle);

  // Create a function to create a light and dark mode button   
  function changeMode() {
    const html = document.querySelector('html');
    html.classList.toggle('dark');  // Add or remove the class "dark" to the HTML element
}

document.querySelector('button').addEventListener('click', changeMode);