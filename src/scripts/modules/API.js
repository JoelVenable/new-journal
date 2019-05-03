const localServer = "http://localhost:8088/";

module.exports.API = {
  getPosts: () => fetchJson(`${localServer}entries`),
  addNewPost: (entry) => {
    return pushJson(`${localServer}entries`, "POST", entry);
  },
  updatePost: (entry, id) => {
    return pushJson(`${localServer}entries/${id}`, "PUT", entry);
  },
  deletePost: (id) => pushJson(`${localServer}entries/${id}`, "DELETE"),
  getCategories: () => fetchJson(`${localServer}categories`),
  getMoods: () => fetchJson(`${localServer}moods`)
};


function fetchJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function pushJson(url, method, object) {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  });
}