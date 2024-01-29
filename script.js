var dateDiffInDays = function (date1, date2) {
  //write your code here
	const val = Date.parse(date1);
    const val2 = Date.parse(date2);
    const val3 = 24*60*60*1000;
    return parseInt((val2 - val)/val3);
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

















