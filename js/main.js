// change avatar section
let elChooseInput = document.querySelector(".choose-input");
let elChooseImg = document.querySelector(".choose-img");
let choosenImg = null;
elChooseInput.addEventListener("change", function (e) {
  elChooseImg.setAttribute("src", URL.createObjectURL(e.target.files[0]));
  choosenImg = URL.createObjectURL(e.target.files[0]);
  choosenImg.className = "w-[50%]";
});

// notification static version
function notification() {
  alert("You do not have any notifications.");
}
// modal and user adding
let openModalButton = document.getElementById("modalButton");
let modal = document.getElementById("modal");
let submitButton = document.getElementById("submitButton");
let list = document.getElementById("list");
let searchInput = document.getElementById("searchInput");
let studentData = JSON.parse(localStorage.getItem("studentData")) || [];

openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
// submit input info
submitButton.addEventListener("click", () => {
  const form = document.getElementById("studentForm");
  const inputs = form.querySelectorAll("input");

  const inputValues = {};
  inputs.forEach((input) => {
    inputValues[input.name] = input.value;
  });

  studentData.push(inputValues);
  localStorage.setItem("studentData", JSON.stringify(studentData));

  form.reset();
  modal.classList.add("hidden");
  getData(studentData);
});
// main function
function getData(user) {
  let tr = "";
  user.forEach((user, index) => {
    tr += `
      <tr class="h-[70px]">
         <td></td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.number}</td>
        <td>${user.enroll}</td>
        <td>${user.date}</td>
        <td><button onclick="deleteData(${index})"><img src="./images/admin/delete.svg" alt="delete"></button></td>
        <td><button onclick="editData(${index})"><img src="./images/admin/edit.svg" alt="edit"></button></td>
        <td><button onclick="moreInfo(${index})"><img src="./images/admin/more.svg" alt="more"></button></td> 
      </tr>
    `;
  });
  //   search section
  searchInput.addEventListener("input", () => {
    const inputVal = searchInput.value.toLowerCase();
    const searchedStudents = user.filter((user) =>
      user.name.toLowerCase().includes(inputVal)
    );
    getData(searchedStudents);
  });
  //   asdfghjklkjhgfd
  list.innerHTML = tr;
}
// datani delete qilish button
function deleteData(index) {
  studentData.splice(index, 1);
  localStorage.setItem("studentData", JSON.stringify(studentData));
  getData(studentData);
}
// datani edit qilish button
function editData(index) {
  const user = studentData[index];
  const form = document.getElementById("studentForm");
  form.name.value = user.name;
  form.email.value = user.email;
  form.number.value = user.number;
  form.enroll.value = user.enroll;
  form.date.value = user.date;
  modal.classList.remove("hidden");
  deleteData(index);
}
// more info button
function moreInfo(index) {
  window.location.href = "dashboard.html";
}
// dfdsasdc
getData(studentData);
// logout section
let logoutButton = document.getElementById("logoutButton");
let logoutModal = document.getElementById("logoutModal");
let confirmLogoutButton = document.getElementById("confirmLogoutButton");
let cancelLogoutButton = document.getElementById("cancelLogoutButton");

logoutModal.addEventListener("click", () => {
  logoutModal.classList.add("hidden");
});
logoutButton.addEventListener("click", () => {
  logoutModal.classList.remove("hidden");
});

confirmLogoutButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
cancelLogoutButton.addEventListener("click", () => {
  logoutModal.classList.add("hidden");
});
// skip to login section
let skipButton = document.getElementById("skipButton");
skipButton.addEventListener("click", () => {
  logoutModal.classList.remove("hidden");
});
//log out from modal
function log() {
  window.location.href = "index.html";
}
function skip() {
  window.location.href = "index.html";
}
let profileName = document.querySelector(".profile-name");
profileName.textContent = JSON.parse(localStorage.getItem("username"));
let profileName2 = document.querySelector(".profile-name2");
profileName2.textContent = JSON.parse(localStorage.getItem("username"));
