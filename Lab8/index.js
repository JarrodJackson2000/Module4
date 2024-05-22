const moment = require("moment");

const momentTimezone = require("moment-timezone");
/* 1. Calculate the number of days between
your birthdate and the current date */

function calculateDaysBetween() {
  let birthday = moment("20001220");
  let today = moment();
  let daysBetween = today.diff(birthday, "days");
  console.log(`There is ${daysBetween} days between ${today} and ${birthday}`);
}

calculateDaysBetween();

/* 2. Display the number of years, months,
and days between your birthdate and
current date
Example: 24 years, 8 months, and 26 days */

function calculateDaysBetweenFormatted() {
  let birthday2 = moment("2000-12-20");
  let today2 = moment();

  let years = today2.diff(birthday2, "years");
  birthday2.add(years, "years");

  let months = today2.diff(birthday2, "months");
  birthday2.add(months, "months");

  let days = today2.diff(birthday2, "days");

  console.log(`${years} years, ${months} months, and ${days} days`);
}

calculateDaysBetweenFormatted();

/* 3. Given two dates, display the date closest
to the current date */

function differentDates(date1, date2) {
  let var1 = moment(date1);
  let var2 = moment(date2);
  let check1 = var1.diff(moment());
  let check2 = var2.diff(moment());
  check1 > check2 ? console.log(date1) : console.log(date2);
}

differentDates("2000-12-20", "1981-11-13");

/* 4. Given two dates, display whether the first
date is before or after the second date */

function firstDate(first, second) {
  let date1 = moment(first);
  let date2 = moment(second);
  let checkDate1 = date1.diff(moment());
  let checkDate2 = date2.diff(moment());
  checkDate1 < checkDate2
    ? console.log("The first date is before the second date")
    : console.log("The first date is after the second date");
}

firstDate("2000-12-20", "2010-12-20");

/* 5. Display the current time in London */

let timeInLondon = moment().tz("Europe/London");

console.log(`Current time in London is: ${timeInLondon}`);
