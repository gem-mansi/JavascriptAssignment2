const frm = document.getElementById('form');
frm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    validate(); //function call 
    document.getElementById('name').value = ""; //default value
    document.getElementById('email').value = "";
    document.getElementById('contact').value = "";

})

function validate() {

    var ename = false;
    var eemail = false;
    var econtact = false;
    var nam = document.getElementById('name').value;
    var emal = document.getElementById('email').value;
    var contct = document.getElementById('contact').value;
    var mailfrmt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var r = /^[A-Za-z ]+$/;
    var phnno = /^\d{10}$/;

    if (mailfrmt.test(emal)) {
        eemail = true;

    } else {
        alert("Enter a valid email");

        eemail = false;
    }
    if (r.test(nam)) {
        ename = true;
    } else {
        alert("Name should contain only spaces and letters.");
        ename = false;
    }
    if (phnno.test(contct)) {
        econtact = true;
    } else {
        alert("Enter Valid Contact Number");
        econtact = false;
    }

    if (eemail && econtact && ename) {
        setData();
        setTable();

    }
}

function setData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    localStorage.setItem("uname", name);
    localStorage.setItem("uemail", email);
    localStorage.setItem("ucontact", contact);

}

function setTable() {
    const tableBody = document.getElementById('tableBody');
    const tr = document.createElement("tr");
    const td1 = document.createElement('td');
    const nameNode = document.createTextNode(localStorage.getItem("uname"));
    td1.appendChild(nameNode);
    const td2 = document.createElement('td');
    const emailNode = document.createTextNode(localStorage.getItem("uemail"));
    td2.appendChild(emailNode);
    const td3 = document.createElement('td');
    const contactNode = document.createTextNode(localStorage.getItem("ucontact"));
    td3.appendChild(contactNode);
    tr.append(td1, td2, td3);
    tableBody.append(tr);

}