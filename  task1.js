//1 Change the size of a heading
const firstButton = document.createElement("button");
firstButton.innerHTML = "Change the size of a heading";
firstButton.style.color = "DarkSalmon";
const divContener = document.getElementById("firstdiv"); //
divContener.append(firstButton);
changesize = () => {
  const firsthead = document.getElementById("head1");
  firsthead.style.fontSize = "50px";
};
firstButton.addEventListener("click", changesize);

//2 Change the font style of a paragraph
const secondButton = document.createElement("button");
secondButton.innerHTML = "Change the font style of a paragraph";
secondButton.style.color = "RosyBrown";
divContener.append(secondButton); // the div already defined 
const firstParagraph = document.getElementById("firstp");
changefontstyle = () => {
  firstParagraph.style.fontStyle = "italic";
};
secondButton.addEventListener("click", changefontstyle);

//3 Highlight a paragraph with back-ground
const thirdbutton = document.createElement("button");
thirdbutton.innerHTML = "Highlight a paragraph with back-ground";
thirdbutton.style.color = "DimGrey";
divContener.append(thirdbutton);
backgroundchange = () => {
  firstParagraph.style.background = "AntiqueWhite";
};
thirdbutton.addEventListener("click", backgroundchange);

//4 Hide an Image
const fourthbutton = document.createElement("button");
fourthbutton.innerHTML = "Hide an Image";
fourthbutton.style.color = "#806D5B";
divContener.append(fourthbutton);
const firstImge = document.getElementById("img1");
firstImge.style.width = "230px";
firstImge.style.height = "200px";
 hideimge = ()  => {
  firstImge.style.display = "none";
}
fourthbutton.addEventListener("click", hideimge);

//5 Alternate between two images
const fifthButton = document.createElement("button");
fifthButton.innerHTML = "Alternate between two images";
fifthButton.style.color = "BurlyWood";
divContener.append(fifthButton);
//new imge
const createimge = document.createElement("imge");
createimge.innerHTML =
  "<img src=https://www.filterforge.com/more/help/images/size200.jpg>";

const imgeplace = document.getElementById("imgecontener");
 Alternate = ()  => {
  firstImge.style.display = "none";
  imgeplace.append(createimge);
}
fifthButton.addEventListener("click", Alternate);

//6 Change an image when the mouse moves onto it, and then back to the original image when the mouse moves off of it.
const createnewimge = document.createElement("imge");
createnewimge.innerHTML =
  "<img src=https://i.pinimg.com/564x/ce/ec/4b/ceec4b056e8c54db51945637f0d31de9.jpg>";
 changeImgeHover = () => {
  firstImge.style.display = "none";
  imgeplace.append(createnewimge);
}
 changeImgeHover2 = ()  => {
  firstImge.style.display = "block";
  // createl6.style.display =  "none" ;
  createnewimge.remove();
}
imgeplace.addEventListener("mouseover", changeImgeHover);
imgeplace.addEventListener("mouseleave", changeImgeHover2);

// 7 Create a script which creates an alert on the page when a user right clicks on a specific image.
//imge
const imgeforalert = document.getElementById("img0");
imgeforalert.style.width = "150px";
imgeforalert.style.hideimge = "150px";
 createAlert = ()  => {
  alert("Hello! I am an alert box!");
}
imgeforalert.addEventListener("contextmenu", createAlert);

// 8 Create an alert on the page when a user enters data into a input.
const inputBoxforalert = document.getElementById("inputBox");
 createAlertForInput = () => {
  alert("Hello! It's nice to hear from you");
}
inputBoxforalert.addEventListener("change", createAlertForInput);

// 9 Create an alert to let the user know when the page has loaded
window.onload = function () {
  alert("page was loaded");
};

// 10 Highlight all paragraphs when the mouse moves over them (then revert back once it has moved past them).
const allParagraphs = document.querySelectorAll("p");
const changeBackground = () => {
  allParagraphs.forEach((element) => {
    element.style.backgroundColor = "IndianRed";
  });
};
const originalBackground = () => {
  allParagraphs.forEach((element) => {
    element.style.backgroundColor = "white";
  });
};
allParagraphs.forEach((element) => {
  element.addEventListener("mouseover", changeBackground);
  element.addEventListener("mouseleave", originalBackground);
});
