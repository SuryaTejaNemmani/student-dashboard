function login(e) {
    e.preventDefault();

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    localStorage.setItem(
        "user",
        JSON.stringify({
            username: user,
            password: pass,
        }),
    );
    window.location.href = "dashboard.html";
}

function logout() {
    console.log("hi");
    localStorage.removeItem("user");
}

function addStudents(e) {
    e.preventDefault();

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let cgpa = document.getElementById("cgpa").value;
    let branch = document.getElementById("branch").value;

    students.push({
        name: name,
        rollno: roll,
        cgpa: cgpa,
        branch: branch,
    });
    localStorage.setItem("students", JSON.stringify(students));
    window.location.href = "viewStudents.html";
}

function getStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let tb = document.getElementsByTagName("tbody")[0];
    for (let st of students) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        td1.textContent = st["name"];
        td2.textContent = st["rollno"];
        td3.textContent = st["cgpa"];
        td4.textContent = st["branch"];

        let a1 = document.createElement("a");
        a1.textContent = "Edit";
        a1.href = "#";

        let a2 = document.createElement("a");
        a2.textContent = "Delete";
        a2.href = "#";

        td5.append(a1, " | ", a2);
        tr.append(td1, td2, td3, td4, td5);
        tb.appendChild(tr);

        a1.onclick = () => {
            localStorage.setItem("name", st["name"]);
            localStorage.setItem("rollno", st["rollno"]);
            localStorage.setItem("cgpa", st["cgpa"]);
            localStorage.setItem("branch", st["branch"]);

            window.location.href = "editStudent.html";
        };

        a2.onclick = (event) => {
            event.preventDefault();
            let idx = students.findIndex((st1) => st.rollno == st1[rollno]);
            students.splice(idx, 1);
            localStorage.setItem("students", JSON.stringify(students));
            getStudents();
        };
    }

    if (students.length == 0) {
        console.log("hi");
        emp = document.getElementsByClassName("emp")[0];
        emp.textContent = "There are no Students";
    }
}

function setDetails() {
    let name = document.getElementById("name");
    let roll = document.getElementById("roll");
    let cgpa = document.getElementById("cgpa");
    let branch = document.getElementById("branch");

    name.value = localStorage.getItem("name");
    roll.value = localStorage.getItem("rollno");
    cgpa.value = localStorage.getItem("cgpa");
    branch.value = localStorage.getItem("branch");

    localStorage.removeItem("name");
    localStorage.removeItem("rollno");
    localStorage.removeItem("cgpa");
    localStorage.removeItem("branch");
}
