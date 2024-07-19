//STEPS:
//get Query string user id
//make fetch data with user id you get
//create cards with data

function getUserId() {
  const idOrderArray = new URLSearchParams(window.location.search);
  const userId = Number(idOrderArray.get("userId"));
  if (isNaN(userId) === false) {
    if (userId > 0) {
      return userId;
    } else {
      const newId = Number(prompt("Pls enter a user Id"));
      if (isNaN(newId) === false && newId > 0) {
        return newId;
      } else {
        alert("Input value is not valid!");
        throw Error("Invalid User Id");
      }
    }
  } else {
    alert("Input value is not valid!");
    throw Error("Invalid User Id");
  }
}

import { fetchData } from "./utils.js";

function createCardFunction(data) {
  const container = document.getElementById("container");
  data.forEach((post) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
         <div>
         <p> Title:${post.title}</p>
          <p> Body:${post.body}</p>
         </div>
         `;
    container.appendChild(newCard);
  });
}

async function loadCard(userId) {
  const requestUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const data = await fetchData(requestUrl);
  createCardFunction(data);
}
const userId = getUserId();
loadCard(userId);
