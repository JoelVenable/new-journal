import {
  API
} from "./API";
import {
  showArticle
} from "./showArticle";
import {
  buildDOMElement
} from "./buildDOMElement";



module.exports = {
  updatePosts: function (pageNo) {
    console.log("hello from updatePosts()");
    API.getPosts()
      .then(posts => {
        let articleContainer = document.querySelector("#post-container");
        posts.forEach(post => {
          articleContainer.appendChild(showArticle(post));
        });
      });
  },
  showCategoryOptionBox: function (tabIndex) {
    return API.getCategories()
      .then(categories => buildOptions(categories, "category", tabIndex));
  },
  showMoodOptionBox: function (tabIndex) {
    return API.getMoods()
      .then(moods => buildOptions(moods, "mood", tabIndex));
  }
};

function buildOptions(options, type, tabIndex) {
  let fragment = document.createDocumentFragment();
  let select = buildDOMElement("select", fragment, null, ["form-aux"], `select-${type}`, {
    name: "options",
    "data-label": type,
    tabIndex: tabIndex
  });
  options.forEach(option => {
    buildDOMElement("option", select, option.name, null, `${type}-option-${option.id}`, {
      value: option.id
    });
    // <select name="options" class="form-aux" data-label="Options" tabindex="5">
    //   <option selected="selected" value="">How'd You Find Sartre</option>
    //   <option value="">From a friend</option>
    //   <option value="">Found Sartre online</option>
    //   <option value="">Previous client</option>
    //   <option value="">Through advertising</option>
    // </select>
  });
  return fragment;
}