import "./modules/nav";
import {
  updatePosts
} from "./modules/API-interface";
import {
  createArticle
} from "./modules/createArticle";

console.log("hello from main!");
//updatePosts();
document.querySelector("#post-container").appendChild(createArticle());