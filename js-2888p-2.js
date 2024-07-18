//get the data

const usersData = "https://jsonplaceholder.typicode.com/users";

async function fetchData() {
  try {
    const response = await fetch(usersData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("API died,error");
  }
}
<<<<<<< HEAD:js-2888p-1.js

//Card function part

=======
//Card function
>>>>>>> 3351dbc2290fc6d02c05efeacb74369e1d35668d:js-2888p-2.js
function createCardFunction(dataList) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  dataList.forEach((user) => {
    const card = document.createElement("div");
    card.innerHTML = `
          <div class="card">
        <div class="card-body">
          <h5 class="card-title">Information</h5>
          <p class="card-text">
            <i class="fa fa-user" aria-hidden="true"></i>
             Personal:
        
            <ul>
                <li>ID:${user.id}</li>
                <li>Name:${user.name}</li>
                <li>Username:${user.username}</li>
            </ul>
            <i class="fa-solid fa-map-location-dot"></i>
        Address: 
        <ul>  
            <li>Address:${user.address.city}</li>
        </ul>
        <i class="fa fa-building" aria-hidden="true"></i>
        Company:
        <ul>
            <li>Company:${user.company.name}</li>
        </ul>
        <i class="fa-solid fa-circle-info"></i>
        General:
        <ul>
            <li>Email:${user.email}</li>
            <li>Phone:${user.phone}</li>
            <li>Website:${user.website}</li>
        </ul>
          </p>
        </div>
      </div>
         `;
         container.append(card)
  });
}
//Load card function

async function loadCard() {
  const data = await fetchData();
  console.log(data);
  createCardFunction(data);
}

loadCard();
