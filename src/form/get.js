import { getStudents } from "../api/get.js";
import { post } from "../api/post.js";
import { makeList } from "../markUp/markUp.js";

export const collectModalInfo = (form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.elements.name.value;
    const age = parseInt(form.elements.age.value);
    const course = form.elements.course.value;
    const skills = form.elements.skills.value.split(",").map(skill => skill.trim());
    const email = form.elements.email.value;
    const isEnrolled = form.elements.isEnrolled.checked;

    const newStudent = {
      name,
      age,
      course,
      skills,
      email,
      isEnrolled,
    };

    await post(newStudent);
    const updatedList = await getStudents();
    document.querySelector("tbody").innerHTML = makeList(updatedList);
    form.reset(); // Очистити форму
  });
};
