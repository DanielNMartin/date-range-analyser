var listDate = [];
var endDate = new Date('2019-01-01');
var startDate = new Date('2017-01-01');
while (startDate.getTime() < endDate.getTime()) {
  startDate.setDate(startDate.getDate() + 41);
  var tempDate = new Date(startDate.getTime());
  var stringDate = tempDate.getDate() + ", " + (tempDate.getMonth() + 1) + ", " + tempDate.getFullYear() + " "
  listDate.push(stringDate);
};

console.log(listDate);
