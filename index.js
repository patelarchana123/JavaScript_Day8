// create table element
let table = document.createElement('table');
// create body element
let body = document.createElement('body');
// append table to body
document.body.appendChild(table);


//create table header
let  tableheader = table.createTHead();
//create tr 
let  tableheaderrow = tableheader.insertRow();

// create td 
let tableHeadres = [{name:"Name"},{age:"Age"},{email:"Email"}];
let Person = [{name:"Archana",age:21,email:"adipatel2820@gmail.com"}];
tableHeadres.forEach(element => {
    let td = tableheaderrow.insertCell(); 
    td.appendChild(document.createTextNode(Object.values(element)[0]));
});
// create table body
let tablebody = table.createTBody();

Person.forEach(element=>{
    let tablebodyrow = tablebody.insertRow();
    for (const value of tableHeadres) {
    let tbodyRowCell = tablebodyrow.insertCell(); 
    let key = Object.keys(value)[0];
    tbodyRowCell.appendChild(document.createTextNode(element[key]));
    }
})

table.setAttribute("border",1);

