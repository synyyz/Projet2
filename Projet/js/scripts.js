// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    getArticle(data);
    // function3()...
    // function4()...
    // etc.
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 *  $.ajax({
    url: url,
    data: data,
    success: function(data){
      var $atitle=$('<h1>').text(data.articles[0].title);
      $("#ar1").append($atitle);
    },
    dataType: 'jsonp',
    type: 'GET'
});
 */
var updateDocumentTitle = function() {
  // Some code...
  document.title = "Recette";
};
var getArticle =function(data){
  $.ajax({
    url:"https://api.jsonbin.io/b/5c951b129c83133c027b0810",
    data: data,
    error: function() {
    $('#ar1').html('<p>An error has occurred</p>');
    },
    dataType: 'jsonp',
    success: function(data) {
    var $title = $('<h1>').text(data.articles[0].title);
    
    $('#ar1')
    .append($title)
    s
    },
    type: 'GET'
    });
}