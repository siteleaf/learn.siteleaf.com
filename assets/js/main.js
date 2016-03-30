display_plugins = function() {
  var data = $.ajax({
    type: "GET",
    url: "https://api.siteleaf.com/v2/versions",
    error: function() {
      console.log("could not load");
    },
    success: function(data) {
      var list = document.querySelector('.supported-plugins')

      if (list != null) {
        for (var gem in data) {
          var item = document.createElement('li');
          item.innerHTML = '<a href="https://rubygems.org/gems/' + gem + '">' + gem + '</a>' + ' (' + data[gem] + ')';

          list.appendChild(item);
        }
      }
    }
  });


};

$(document).ready(function () {

  display_plugins();

  // load_plugins();

});
