alert("Connected!");

/* ACCOUNT */

function openAccount(){

    document.getElementById("accountPopup")
    .style.display = "flex";
}

function closeAccount(){

    document.getElementById("accountPopup")
    .style.display = "none";
}

function loginUser(event){

    event.preventDefault();

    alert("✅ Login Successful!");

    document.getElementById("accountPopup")
    .style.display = "none";
}

/* ABOUT POPUP */

function openAbout(){

    document.getElementById("aboutPopup")
    .style.display = "flex";
}

function closeAbout(){

    document.getElementById("aboutPopup")
    .style.display = "none";
}

/* SEARCH COURSES */

function searchCourses(){

    let input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    let cards =
    document.querySelectorAll(".box2");

    cards.forEach(function(card){

        let course =
        card.getAttribute("data-course") || "";

        course = course.toLowerCase();

        if(course.includes(input)){

            card.style.display = "block";
        }

        else{

            card.style.display = "none";
        }

    });
}

/* COURSE DETAILS */

function showCourseDetails(title, description, skills){

    document.getElementById("coursePopup")
    .style.display = "flex";

    document.getElementById("courseTitle")
    .textContent = title;

    document.getElementById("courseDescription")
    .textContent = description;

    document.getElementById("courseSkills")
    .textContent = skills;
}

function closeCoursePopup(){

    document.getElementById("coursePopup")
    .style.display = "none";
}

/* ENROLLMENT FORM */

function openForm(course){

    document.getElementById("popup")
    .style.display = "flex";

    document.getElementById("courseName")
    .value = course;
}

function closeForm(){

    document.getElementById("popup")
    .style.display = "none";
}

function submitForm(event){

    event.preventDefault();

    document.getElementById("successMsg")
    .style.display = "block";

    setTimeout(function(){

        alert("Welcome to LearnSphere 🚀");

        document.getElementById("popup")
        .style.display = "none";

        document.getElementById("successMsg")
        .style.display = "none";

    }, 2000);
}