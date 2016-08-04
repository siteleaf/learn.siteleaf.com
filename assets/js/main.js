var get = function (url, func) {
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('load', func)
  xhr.open('GET', url)
  xhr.send()
}

// Performs the request to get plugins.
var load_plugins = function(list) {
  get('https://api.siteleaf.com/v2/versions', function () {
    display_plugins(list, JSON.parse(this.responseText))
  });
};

// Displays a list of plugins.
var display_plugins = function(list, plugins) {
  for (var gem in plugins) {
    var item;

    item = document.createElement('li');
    item.innerHTML = '<a href="https://rubygems.org/gems/' + gem + '">' + gem + '</a>' + ' (' + plugins[gem] + ')';

    list.appendChild(item);
  }
}

var load_status = function (element) {
  get('https://6m245s2fvklg.statuspage.io/api/v2/status.json', function () {
    var data = JSON.parse(this.responseText);
    var status = data && data.status && data.status.indicator;
    if (status) {
      element.classList.add('status--' + status)
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Load the actual plugins.
  var list = document.querySelector('.supported-plugins');
  if (list != null) {
    load_plugins(list);
  }

  var status = document.querySelector('.js-status');
  if (status) {
    load_status(status)
  }

  // Toggle search focused class
  var search_input = document.querySelector('.search__input'),
    search = document.querySelector('.search');

  if (search_input) {
    search_input.onfocus = function() {
      search.classList.add('search--focused');
    };
    search_input.onblur = function() {
      search.classList.remove('search--focused');
    };
  }

  // Keyboard shortcuts for prev and next articles
  var prev = document.querySelector('#prev'),
    next = document.querySelector('#next');
  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 37) { // left
      console.log(e.keyCode)
      if (prev !== null) {
        window.location.href = prev.getAttribute('href');
      }
    } else if (e.keyCode == 39) { // right
      if (next !== null) {
        window.location.href = next.getAttribute('href');
      }
    }
  };

});
