// const date = new Date('August 19, 1975 23:15:30')
// console.log(date)
// console.log("year :",date.getFullYear())
// console.log("month :",date.getMonth())
// console.log("day :",date.getDay())
// console.log("Time :",date.getTime())
// console.log("day :",date.toJSON())

const repl = require('repl');

const options = { useColors: true };

const firstInstance = repl.start(options);
const secondInstance = new repl.REPLServer(options);


