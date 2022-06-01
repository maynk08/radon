const printDate = function() {
let date = new Date()
console.log(date.getDate())
}

const printMonth = function(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
console.log(month)

}
const getBatchInfo = function(){
    console.log(" Radon, W3D2, the topic for today is Nodejs module system")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo