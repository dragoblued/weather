const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];
const countDays = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]
function checkLeapYear(year: number) {
    return  (year % 400) ? ((year % 100) ? ((year % 4) ? false : true) : false) : true;
}

export function formateDate(date: number) {
    const dateCurrent = new Date(date * 1000);
    const day = dateCurrent.getDate();
    const monthIndex = dateCurrent.getMonth();
    const year = dateCurrent.getFullYear();
    
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

export function getMonth(month: number) {
    return monthNames[month];
}

export function getDays(month: number, year: number) {
    if (month == 1) {
        if (checkLeapYear(year) == true) {
            return 29;
        }
    }
    return countDays[month];
}