
function dateRangeAnaliser (startDate, endDate, step) {
  var listDate = [];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  while (startDate.getTime() < endDate.getTime()) {
    startDate.setDate(startDate.getDate() + step);
    var tempDate = new Date(startDate.getTime());
    var stringDate = days[tempDate.getDay()] + ', ' + tempDate.getDate() + ', ' + (tempDate.getMonth() + 1) + ', ' + tempDate.getFullYear() + '<br>';
    listDate.push(stringDate);
  };

  return listDate;
}

function showAlert (event) {
  var startDate = new Date(document.getElementById('startDate').value);
  var endDate = new Date(document.getElementById('endDate').value);
  document.write(dateRangeAnaliser(startDate, endDate, parseInt(document.getElementById('dateRangeIncrement').value, 10)));
}

/*
var startDate = new Date('2017-01-01');
var endDate = new Date('2019-01-01');
console.log(dateRangeAnaliser(startDate, endDate, 41));  */

/*
var startDate1 = new Date('2020-01-01');
var endDate1 = new Date('2022-01-01');
console.log(dateRangeAnaliser(startDate1, endDate1, 10));

*/

