function findAllAnchors() {
  // Return all anchor tags <a> found in the document
  let allAnchors = document.querySelectorAll("a");
  return allAnchors;
}

function findFirstH3() {
  // Return the first h3 tag found in the document
  let firstH3 = document.querySelector("h3");
  return firstH3;
}

function findAllTextBlocks() {
  // There is a class called 'text-block'
  // Return all elements with this class
  let textBlocks = document.getElementsByClassName("text-block");
  return textBlocks;
}

function findAllNestedParagraphs() {
  // There is a div with the id "zen-requirements"
  // Return all the paragraph elements inside that div
  let zenRequirementParagraphs = document.getElementById("zen-requirements").querySelectorAll("p")
  return zenRequirementParagraphs;
}

function findTheFooter() {
  // Return the footer element
  let footer = document.querySelector("footer");
  return footer;
}

module.exports = {
  findAllAnchors,
  findFirstH3,
  findAllTextBlocks,
  findAllNestedParagraphs,
  findTheFooter,
};