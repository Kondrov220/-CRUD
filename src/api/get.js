export const getStudents = async () => {
  try {
   return await fetch("http://localhost:3000/students")
  .then((res) => res.json())
  } catch (error) {
    console.log(error)
  }
}