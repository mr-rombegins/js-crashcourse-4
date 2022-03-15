fetch("http://localhost:3000/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const url = "http://localhost:3000/users";

async function getAllUser() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getAllUser();

async function getUser(userId) {
  const response = await fetch(`${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}

getUser(8);

let user = {
  firstName: "Victor",
  lastName: "Seayrom",
  username: "VictorSeayrom",
  email: "victorseayrom@email.com",
  gender: "Male",
};
async function createUser(userInfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

// createUser(user);

const mail = {
  email: "bbleesingc@gmail.edu",
};
async function updateUser(userId, mail) {
  const response = await fetch(`${url}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(mail),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(mail);
}
// updateUser(13, mail);

async function deleteUser(userId) {
  const response = await fetch(`${url}/${userId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
}
// deleteUser(8);
