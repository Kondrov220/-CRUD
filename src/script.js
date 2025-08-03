import { getStudents } from "./api/get.js";
import { makeList } from "./markUp/markUp.js";
import { collectModalInfo } from "./form/get.js";
import { deleteStudent } from "./api/delate.js";
// import { updateIceCreamApi } from "./api/updateIceCreamApi.js";
import { collectModalInfoEdit } from "./form/update.js";

getStudents().then((data) => {
  console.log(data);
  document.querySelector("tbody").innerHTML = makeList(data);
});


collectModalInfo(document.querySelector("#add-student-form"));

// Операція видалення
document.querySelector("tbody").addEventListener("click", async (event) => {
  if (event.target.textContent === "Delete") {
    const item = event.target.parentElement.parentElement;
    console.log(item);
    console.log(item.id);
    await deleteStudent(item.id);
    await getStudents().then((data) => {
      console.log(data);
      document.querySelector("tbody").innerHTML = makeList(data);
    });
  }
});

  document.querySelector("tbody").addEventListener("click", async (event) => {
  if (event.target.textContent === "Edit") {
      console.log("test")
      document.querySelector("#add-student-btn").classList.add("hidden");
      document.querySelector("#update-student-btn").classList.remove("hidden");
    collectModalInfoEdit(document.querySelector("#add-student-form"), event.target.parentElement.parentElement.id);
  }
});

//операція редагування
// document.querySelector(".edit-button").addEventListener("click", async () => {
//   collectModalInfoEdit(document.querySelector(".edit-form"))

// });