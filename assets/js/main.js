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

var anchorForId = function(id) {
  var anchor = document.createElement("a");
  anchor.className = "article__anchor";
  anchor.href      = "#" + id;
  anchor.innerHTML = "#";
  return anchor;
};

var linkifyAnchors = function(level, containingElement) {
  var headers = containingElement.getElementsByTagName("h" + level);
  for (var h = 0; h < headers.length; h++) {
    var header = headers[h];

    if (typeof header.id !== "undefined" && header.id !== "") {
      header.appendChild(anchorForId(header.id));
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Load the actual plugins.
  var list = document.querySelector('.supported-plugins');
  if (list != null) {
    load_plugins(list);
  }

  // // Toggle the nav on click on mobile.
  // var toggle = document.querySelector('.nav__toggle');

  // if (toggle) {
  //   var toggle_button = toggle.firstElementChild;
  //   var sidebar = document.querySelector('.main__sidebar');

  //   toggle.onclick = function() {
  //     sidebar.classList.toggle("main__sidebar--mobile-hidden")

  //     if (sidebar.classList.contains("main__sidebar--mobile-hidden")) {
  //       toggle_button.innerHTML = "&#9776;";
  //     } else {
  //       toggle_button.innerHTML = "&#10006;"
  //     }
  //   };
  // }

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

  // Add header anchor links
  var contentBlock = document.getElementsByClassName("article__content")[0];
  if (!contentBlock) {
    return;
  }
  for (var level = 1; level <= 6; level++) {
    linkifyAnchors(level, contentBlock);
  }

});
