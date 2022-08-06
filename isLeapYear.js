function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    } else {
        return false;
    }
}

const isMyYear = isLeapYear(1999);
console.log('my leap year:', isMyYear);
const isHerLeapYear = isLeapYear(2000);
console.log('her leap year', isHerLeapYear);