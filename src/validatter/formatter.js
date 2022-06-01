let str = "  functionUp   "
let trimm = function()
{
    let a = str.trim()
    console.log(a)
}
let UpperCase = function()
{
    let b = str.toUpperCase()
    console.log(b)
}
let LowerCase = function()
{
    let c = str.toLowerCase()
    console.log(c)
}

module.exports.x = trimm
module.exports.y = UpperCase
module.exports.z = LowerCase