export const makeList = (arr) => {
  return arr
    .map(
      (student) => `
        <tr id="${student.id}">
         <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.course}</td>
<td>${Array.isArray(student.skills) ? student.skills.join(", ") : student.skills}</td>
          <td>${student.email}</td>
          <td>${student.isEnrolled}</td>
          <td>
            <button data-id="${student.id}" class="delete-btn">Delete</button>
            <button data-id="${student.id}" class="edit-btn">Edit</button>
          </td>
        </tr>
      `
    )
    .join("");
};
