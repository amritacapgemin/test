var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = dd + '/' + mm + '/' + yyyy;


var d = new Date();

var curr_date = d.getDate();

var d = new Date(); 
console.log( d.toLocaleString() ); 

console.log("todat date",curr_date );
