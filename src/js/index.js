
// set title of section in html body
const changeSection = (title) => {
  var sectionTitle = document.getElementsByClassName("child")[0];
  sectionTitle.innerHTML = "Section-" + title + " Javascript";
};



// changing the section to 5
changeSection("5");
