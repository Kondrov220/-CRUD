import { updateStudent } from "../api/update.js";
import { getStudents } from "../api/get.js";
import { makeList } from "../markUp/markUp.js";

export const collectModalInfoEdit = (form , id) => {
    console.log(id);
    console.log(form);
  form.addEventListener("submit", async (e) => {
    console.log("1");
    e.preventDefault();
    e.target.elements.name.value = document.querySelector("#name").innerHTML
    e.target.elements.age.value = document.querySelector("#age").innerHTML
    e.target.elements.course.value = document.querySelector("#course").innerHTML
    e.target.elements.skills.value = document.querySelector("#skills").src
    e.target.elements.email.value = document.querySelector("#email").innerHTML
    e.target.elements.isEnrolled.checked = document.querySelector("#isEnrolled").checked

    const name = e.target.elements.name.value;
    const age = parseInt(e.target.elements.age.value);
    const course = e.target.elements.course.value;
    const skills = e.target.elements.skills.value;
    const email = e.target.elements.email.value;
    const isEnrolled = e.target.elements.isEnrolled.checked;

    const newStudent = {
      name,
      age,
      course,
      skills,
      email,
      isEnrolled,
    };

    await updateStudent(newStudent, id);
    await getStudents().then((data) => {
      console.log(data);
      document.querySelector("tbody").innerHTML = makeList(data);
    });
     name = e.target.elements.name.value = "";
     course = e.target.elements.course.value = "";
     skills = e.target.elements.skills.value = "";
     email = e.target.elements.email.value = "";
     isEnrolled = e.target.elements.isEnrolled.checked = false;
    console.log(newStudent);
  });
};