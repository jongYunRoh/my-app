
const { format } = require('date-fns');
var d = new Date();
console.log(d); // 2023-04-01T13:29:45.171Z

var formatedD = format(d, 'yyyy-MM-dd');
console.log(formatedD); // 2023-04-01