export function formateDate(date: number) {
    const dateCurrent = new Date(date * 1000);
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    
    const day = dateCurrent.getDate();
    const monthIndex = dateCurrent.getMonth();
    const year = dateCurrent.getFullYear();
    
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}