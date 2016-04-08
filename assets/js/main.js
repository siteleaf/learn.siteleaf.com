// Performs the request to get plugins.
load_plugins = function(list) {
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('load', function () { display_plugins(list, JSON.parse(this.responseText)) })
  xhr.open('GET', 'https://api.siteleaf.com/v2/versions')
  xhr.send()
};

// Displays a list of plugins.
display_plugins = function(list, plugins) {
  for (var gem in plugins) {
    var item;

    item = document.createElement('li');
    item.innerHTML = '<a href="https://rubygems.org/gems/' + gem + '">' + gem + '</a>' + ' (' + plugins[gem] + ')';

    list.appendChild(item);
  }
}

// Load the actual plugins.
var list = document.querySelector('.supported-plugins');
if (list != null) {
  load_plugins(list);
}

// Toggle the nav on click on mobile.
var toggle = document.querySelector('.nav__toggle');
var toggle_button = toggle.firstElementChild;
var sidebar = document.querySelector('.main__sidebar');

toggle.onclick = function () {
  sidebar.classList.toggle("main__sidebar--mobile-hidden")

  if (sidebar.classList.contains("main__sidebar--mobile-hidden")) {
    toggle_button.innerHTML = "&#9776;";
  } else {
    toggle_button.innerHTML = "&#10006;"
  }
};

$(function () {


  var section_toggle = $('.nav__section-toggle');

  section_toggle.on("click", function() {
    var list = $(this).siblings('.nav__list')

    list.toggleClass('nav__list--mobile-hidden');

    console.log(list);
  });
});
