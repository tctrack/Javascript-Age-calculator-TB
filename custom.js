function ageCalculator(){
    var getDate = document.getElementById("date").value;
    var getMonth = document.getElementById("month").value;
    var getYear = document.getElementById("year").value;

    var curDate = new Date();
    var curDateNo = curDate.getDate();
    var curMonthNo = 1 + curDate.getMonth();
    var curYearNo = curDate.getFullYear();

    var monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (getDate > curDateNo) {
        curDateNo = curDateNo + monthDay[curMonthNo - 1];
        curMonthNo = curMonthNo - 1;
    }
    if (getMonth > curMonthNo) {
        curMonthNo = curMonthNo + 12;
        curYearNo = curYearNo - 1;
    }
    var d = curDateNo - getDate;
    var m = curMonthNo - getMonth;
    var y = curYearNo - getYear;
    
    document.getElementById("ageCalculate").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
    
}

document.getElementById('submitBtn').onclick = function(){
    ageCalculator()
};