// All the JS Code for the Add Students Page Goes Here
let userData=JSON.parse(localStorage.getItem("admission")) || [];
let form=document.querySelector("#form");
form.addEventListener("submit",user)


function user(e){
    e.preventDefault();
    let data={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        gender:form.gender.value,
        course:form.course.value,
    }
    userData.push(data);
    // console.log(userData)
    localStorage.setItem("admission",JSON.stringify(userData));
    window.location.reload()
}