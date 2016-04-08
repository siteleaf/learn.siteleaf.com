// Performs the request to get the plugins, then runs the display function
load_plugins = function(list) {
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('load', function () { display_plugins(list, JSON.parse(this.responseText)) })
  xhr.open('GET', 'https://api.siteleaf.com/v2/versions')
  xhr.send()
};

// Displays a list of plugins
display_plugins = function(list, plugins) {
  for (var gem in plugins) {
    var item;

    item = document.createElement('li');
    item.innerHTML = '<a href="https://rubygems.org/gems/' + gem + '">' + gem + '</a>' + ' (' + plugins[gem] + ')';

    list.appendChild(item);
  }
}

var list = document.querySelector('.supported-plugins');
if (list != null) {
  load_plugins(list);
}
