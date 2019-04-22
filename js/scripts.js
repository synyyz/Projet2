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
    createLogo();
    buildAccueil();
    buildRecettes();
    addCopyright();
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  document.title = data.documentTitle;
};


/**
 * Create the header's logo using my aunt's name.
 * @function createLogo
 */
var createLogo = function() {
  $(".navbar-brand").text(data.firstName + " " + data.lastName);
};


/**
 * Build the section "Accueil". Add the site title to the main header and
 * inject articles from JSON data.
 * @function buildAccueil
 */
var buildAccueil = function() {
  $("h1").text(data.documentTitle);

  var myArticles = [];

  data.articles.forEach(article => {
    myArticles.push(
      "<article class='col-sm'>" +
      "<img src='" + article.imgUrl + "' alt='" + article.imgUrl + "'>" +
      "<h3>" + article.title + "</h3>" +
      "<h4>" + article.subtitle + "</h4>" +
      "<p>" + article.content + "</p>" +
      "</article>"
    );
  });

  $("#accueil #articles").append(myArticles.join(""));
};


/**
 * Build recipes from JSON data.
 * @function buildRecettes
 */
var buildRecettes = function() {
  var myRecipes = [];

  data.recipes.forEach(recipe => {
    myRecipes.push(
      "<li class ='recipe'>" +
      "<img src='" + recipe.imgUrl + "' alt='No image.'>" +
      "<p>" + recipe.description + "</p>" +
      "<p>" + recipe.price + "$</p>" +
      "</li>"
    );
  });
  $("#recipes").append(myRecipes.join(""));
};


/**
 * Add my aunt's name to the copyright notice.
 * @function addCopyright
 */
var addCopyright = function() {
  $("footer span").text(data.firstName + " " + data.lastName);
};

