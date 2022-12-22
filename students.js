// All the Code for All Students Page Goes Here

let userData = JSON.parse(localStorage.getItem("admission"));
document.querySelector("#filter").addEventListener("change", handleFilter);
function handleFilter() {
  let sort = document.querySelector("#filter").value;
  let filteredList = userData.filter(function (el) {
    return el.course == sort;
  });
  display(filteredList);
  if(sort=="all" || sort==""){
    display(userData);
  }
}
display(userData);

let accept = JSON.parse(localStorage.getItem("admission-accepted")) || [];
window.addEventListener("load", function () {
  display(userData);
});

let reject = JSON.parse(localStorage.getItem("admission-rejected")) || [];
window.addEventListener("load", function () {
  display(userData);
});

function display(userData) {
  document.querySelector("tbody").innerHTML = "";
  userData.forEach(function (el,i) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.name;

    let td2 = document.createElement("td");
    td2.innerText = el.email;

    let td3 = document.createElement("td");
    td3.innerText = el.course;

    let td4 = document.createElement("td");
    td4.innerText = el.gender;

    let td5 = document.createElement("td");
    td5.innerText = el.phone;

    let td6 = document.createElement("td");
    td6.innerText = "Accept";
    td6.style.backgroundColor = "green";
    td6.style.color = "white";

    td6.addEventListener("click", function () {
      acceptFunc(el);
    });

    let td7 = document.createElement("td");
    td7.innerText = "Reject";
    td7.style.backgroundColor = "red";
    td7.style.color = "white";

    td7.addEventListener("click", function () {
      rejectFunc(el,i);
    });

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
  function acceptFunc(e,i) {
    accept.push(e);
    localStorage.setItem("admission-accepted", JSON.stringify(accept));
    userData.splice(i,1)
    localStorage.setItem("admission", JSON.stringify(userData));
     display(userData);
  }

  function rejectFunc(e,i) {
    reject.push(e);
    localStorage.setItem("admission-rejected", JSON.stringify(reject));
    userData.splice(i,1)
    localStorage.setItem("admission", JSON.stringify(userData));
    display(userData);
  }
}

// function Delete(i){
//   userData.splice(i,1);
//   localStorage.setItem("admission", JSON.stringify(userData));
//   display(userData);
// }