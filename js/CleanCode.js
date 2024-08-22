const formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    CheckInfo()
})

function CheckInfo() {
    // Basic Info
    const atualDate = new Date();
    const myBirthDay = document.getElementById('day').value;
    const myBirthMonth = document.getElementById('month').value;
    const birthYear = document.getElementById('years').value;



    // Current date details
    const currentDay = atualDate.getDate();
    const currentMonth = atualDate.getMonth() + 1; // getMonth() retorna de 0 a 11
    const currentYear = atualDate.getFullYear();


    let ageYears = currentYear - parseInt(birthYear);
    let ageMonths = currentMonth - parseInt(myBirthMonth);
    let ageDays = currentDay - parseInt(myBirthDay);

    // Ajustes para meses e dias
    if (ageDays < 0) {
        const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const daysInPreviousMonth = new Date(currentYear, previousMonth, 0).getDate();
        ageDays += daysInPreviousMonth;
        ageMonths -= 1;
    }

    if (ageMonths < 0) {
        ageMonths += 12;
        ageYears -= 1;
    }

    function CheckData(data1, data2, data3) {
        if (data1 === '') {
            document.getElementById('dayNum').innerText = '--';
            document.getElementById('dayNum').classList.add('active-1');
          
        } else {
            document.getElementById('dayNum').innerText = ageDays;
        }

        if (data2 === '') {
            document.getElementById('monthsNum').innerHTML = '--';
        } else {
            document.getElementById('monthsNum').innerHTML = ageMonths;
        }

        if (data3 === '') {
            document.getElementById('yearsNum').innerText = '--';
        } else {

            document.getElementById('yearsNum').innerText = ageYears;
        }
    }
    CheckData(myBirthDay, myBirthMonth, birthYear);

}