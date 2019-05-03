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
  showCategoryOptionBox: function (fragment, tabIndex) {
    return API.getCategories()
      .then(categories => {
        let select = buildDOMElement("select", fragment, null, ["form-aux"], "select-category", {
          name: "options",
          "data-label": "Categories",
          tabIndex: tabIndex
        })
        categories.forEach(category => {
          buildDOMElement("option", select, category.name, null, `category-option-${category.id}`, {
            value: category.id
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
      });
  }
};