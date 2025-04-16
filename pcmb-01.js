// Sem 01 & 02 
const students_01_02 = {
    "abhranil@gmail.com":"jn-01",
    "nil2":"jn-03",

}

// Sem 01 
const students_01 = {
    "nil@gmail.com":"jn-02",
    "nil":"jn-04",

}


but.addEventListener('click', f1);
const fname = document.getElementById('full-name');
const emailf = document.getElementById('email');
const butf = document.getElementById('but');

function f1() {
    if (emailf.value in students_01_02 && students_01_02[emailf.value] === fname.value || emailf.value in students_01 && students_01[emailf.value] === fname.value) {
        window.location.href = 'pcmb-01.html';
    }else if (emailf.value === '') {}
    
    else {
        alert('Please enter a valid information');
    }
}

butf.addEventListener('click', f1());