// ======================================================
// js / scripts.js
// ======================================================

// Replacement images for missing images
// ======================================================

var altImages = {
  articles: ["article1.svg", "article2.jpg", "article3.jpg"],
  recipes: ["recette1.jpg","recette2.jpg","recette3.jpg","recette4.jpg","recette5.jpg","recette6.jpg","recette7.jpg","recette8.jpg","recette9.jpg","recette10.jpg","recette11.jpg","recette12.jpg"]
};


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

  data.articles.forEach((article, index) => {
    myArticles.push(
      "<article id='article" + index + "'class='col-sm card'>" +
      "<img class='card-img-top' src='./assets/" + altImages.articles[index] + "' alt='" + article.imgUrl + "'>" +
      "<div class='card-body'>" +
      "<h3 class='card-title'>" + article.title + "</h3>" +
      "<h4 class='card-subtitle mb-2'>" + article.subtitle + "</h4>" +
      "<p class='card-text'>" + article.content + "</p>" +
      "</div>" +
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

  data.recipes.forEach((recipe, index) => {
    myRecipes.push(
      "<li id='recipe" + index + "' class ='recipe card'>" +
      "<img class='card-img-top' src='./assets/" + altImages.recipes[index] + "' alt='No image.'>" +
      "<div class='card-body'>" +
      "<div class='p-3 mb-2 bg-danger text-white'>"+"<p class='card-text'>" + recipe.description + "</p>" +
      "</div>"+
      "<div class='shadow p-3 mb-5 bg-white rounded' >"+"<p class='card-text text-success'>" + recipe.price + "$</p>"+
      "</div>"+
      "</div>" +
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
}