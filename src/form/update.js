import { updateStudent } from "../api/update.js";
import { getStudents } from "../api/get.js";
import { makeList } from "../markUp/markUp.js";

export const collectModalInfoEdit = (form , id) => {
console.log("ID:", id);              // має бути число або рядок
console.log("ID typeof:", typeof id);
      const row = document.getElementById(id);
  const cells = row.querySelectorAll("td");
  form.querySelector("#name").value = cells[1].textContent;
  form.querySelector("#age").value = cells[2].textContent;
  form.querySelector("#course").value = cells[3].textContent; 
  form.querySelector("#skills").value = cells[4].textContent;
  form.querySelector("#email").value = cells[5].textContent;
  document.querySelector("#update-student-btn").addEventListener("click", async (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value;
    const age = form.querySelector("#age").value;
    const course = form.querySelector("#course").value;
    const skills = form.querySelector("#skills").value;
    const email = form.querySelector("#email").value;
    const isEnrolled = form.querySelector("#isEnrolled").checked;

        const newStudent = {
      name,
      age,
      course,
      skills,
      email,
      isEnrolled,
    };

     updateStudent(newStudent, id);
     getStudents().then((data) => {
      console.log(data);
      document.querySelector("tbody").innerHTML = makeList(data);
    });
     form.querySelector("#name").value = "";
     form.querySelector("#age").value = "";
     form.querySelector("#course").value = "";
     form.querySelector("#skills").value = "";
     form.querySelector("#email").value = "";
     form.querySelector("#isEnrolled").checked = false;
    console.log(newStudent);
          document.querySelector("#update-student-btn").classList.add("hidden");
      document.querySelector("#add-student-btn").classList.remove("hidden");
  });



  };