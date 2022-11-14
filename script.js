const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById ('toggle-icon');
const image1 = document.getElementById('image1');


// switch theme dynamically 
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

// Event listener 
toggleSwitch.addEventListener('change', switchTheme);