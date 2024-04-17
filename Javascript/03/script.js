var date = new Date();

var dd = date.getDate();
var mm = date.getMonth()+1; //jan start from zero 
var yyyy = date.getFullYear();  

//handle zeros
if(dd < 10){
    dd = '0' + dd;
}

if(mm <10){
    mm = '0' + mm;
}

var  today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);
