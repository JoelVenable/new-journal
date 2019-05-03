import {
  buildDOMElement
} from "./buildDOMElement";


module.exports.showArticle = function (articleObject) {
  let fragment = document.createDocumentFragment();
  let article = buildDOMElement("article", fragment, "", ["post"], `article--${articleObject.id}`, );
  if ("postImage" in articleObject) {
    let mediaDiv = buildDOMElement("div", article, null, ["post-media"]);
    let thumbnail = buildDOMElement(
      "div",
      mediaDiv,
      null,
      ["thumbnail", "img-scale-in"],
      null, {
        "data-hover-easing": "easeInOut",
        "data-hover-speed": "700",
        "data-hover-bkg-color": "#ffffff",
        "data-hover-bkg-opacity": "0.9"
      });
    let img = buildDOMElement("img", thumbnail, null, [], null, {
      src: articleObject.postImage.url,
      alt: articleObject.postImage.alt
    });
  }
  let postContent = buildDOMElement("div", article, null, ["post-content"]);
  buildDOMElement("h2", postContent, articleObject.postTitle, ["post-title"]);
  let infoDiv = buildDOMElement("div", postContent, null, ["post-info"]);
  buildDOMElement("span", infoDiv, articleObject.date, ["post-date"]);
  buildDOMElement("span", infoDiv, "/");
  buildDOMElement("span", infoDiv, `Feeling: ${articleObject.mood}`, ["post-author"]);
  buildDOMElement("p", postContent, articleObject.content);
  return fragment;
};