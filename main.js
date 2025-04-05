const name = document.querySelector("#courseName");
const category = document.querySelector("#courseCategory");
const price = document.querySelector("#coursePrice");
const description = document.querySelector("#courseDescription");
const capacity = document.querySelector("#courseCapacity");
const addBtn = document.querySelector("#click");


/* creat local storage */
let courses = [];
if(localStorage.getItem("courses") != null){
    courses = JSON.parse(localStorage.getItem("courses"));
    displayCourses();

}
 

addBtn.addEventListener("click" ,(e)=>{
    e.preventDefault();
    const course = {
        name:name.value,
        category:category.value,
        price:price.value,
        description:description.value,
        capacity:capacity.value,
    }

    courses.push(course);
    localStorage.setItem("courses",JSON.stringify(courses));

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "course added scuccessfully"
      });



    displayCourses();
});
/* creat local storage */


/* read local storage */

function displayCourses(){
    const result = courses.map((course ,index)=>{    
        return ` 
        <tr>
        <td>${index+1}</td>
        <td>${course.name}</td>
        <td>${course.category}</td>
        <td>${course.price}</td>
        <td>${course.description}</td>
        <td>${course.capacity}</td>
        </tr>
        `;

    }).join(' ');
    document.querySelector("#data").innerHTML = result;

};


/* read local storage */

