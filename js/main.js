const btnDarkMode = document.querySelector(".dark-mode-btn");

// Проверка темной темы в localStorage 

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add('dark');
} 

// Проверка темной темы на уровне настроек

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add('dark');
}

// Если меняются системные настройки на др. тему, то тема так же меняется

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
  const newColorScheme = event.matches ? "dark" : "light";

  //alert ('Change screen theme!!')

  if (newColorScheme === "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
  } else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove('dark');
  }

})

// Включение ночного режима по кнопке 

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
  localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light');
      
  }

}