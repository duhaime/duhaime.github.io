/* allow users to toggle the active tab */
(function() {

  var tabNames = {
    0: 'posts',
    1: 'about'
  };

  setActiveTab = function(e) {
    var selectedIndex = e.target.getAttribute('data-tab-index');

    // highlight the active tab
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab, i) {
      tab.className = i == selectedIndex ? 'tab active' : 'tab'
    })

    // make the relevant tab content visible
    var tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(function(tab, i) {
      var display = i == selectedIndex ? 'block' : 'none';
      tab.style.display = display;
    })
  }

  addListeners = function() {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab, i) {
      tabs[i].addEventListener('click', function(e) {
        setActiveTab(e)
      }, false)
    })
  }

  initialize = function() {
    // show the first tab content option
    var tabContent = document.querySelectorAll('.tab-content');
    tabContent[0].style.display = 'block';

    // add the click listeners to show/hide content as users click tabs
    addListeners();
  }

  initialize();
})();