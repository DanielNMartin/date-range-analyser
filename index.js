
function dateRangeAnaliser(startDate, endDate, step ) {
var listDate = [];
while (startDate.getTime() < endDate.getTime()) {
  startDate.setDate(startDate.getDate() + step);
  var tempDate = new Date(startDate.getTime());
  var stringDate = tempDate.getDate() + ", " + (tempDate.getMonth() + 1) + ", " + tempDate.getFullYear() + " "
  listDate.push(stringDate);
};

 return listDate;
}

/*
var startDate = new Date('2017-01-01');
var endDate = new Date('2019-01-01');
console.log(dateRangeAnaliser(startDate, endDate, 41));

var startDate1 = new Date('2020-01-01');
var endDate1 = new Date('2022-01-01');
console.log(dateRangeAnaliser(startDate1, endDate1, 10));
*/
