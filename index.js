var listDate = [];
var startDate = '2017-01-01';
var endDate = '2019-01-01';
var dateMove = new Date(startDate);
var strDate = startDate;
while (strDate < endDate) {
  var strDate = dateMove.toISOString().slice(0, 10);
  listDate.push(strDate);
  dateMove.setDate(dateMove.getDate() + 41);
};
console.log(listDate);
