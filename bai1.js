let inpPhysic;
let inpChemistry;
let inpBiology;
inpPhysic = prompt('Input Physic point ');
inpChemistry = prompt('Input Chemistry point ');
inpBiology = prompt('Input Biology point ');
let Physics = parseInt(inpPhysic);
let Chemistrys = parseInt(inpChemistry);
let Biology = parseInt(inpBiology);
// if (Physics <= 10){
// }
// else {
//     alert('Yeu cau nhap lai')
// }
let avarage = (Physics+Chemistrys+Biology)/3;
let Summary = Physics+Chemistrys+Biology;
document.write('The Avarage Point is '+avarage);
document.write('<br>')
document.write('The Summary Point is '+Summary);



