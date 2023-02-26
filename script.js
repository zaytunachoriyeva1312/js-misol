//var a = prompt("Sonni kiriting");

//if (a % 5 == 0 && a % 3 == 0) {
 //   console.log("a soni 5 ga ham 3ga ham  bo'linadi");
//} else if (a % 3 == 0) {
  //  console.log("A soni 3ga bo'linadi");
//} else if (a % 5 == 0 ) {
//    console.log("A soni 5ga bo'linadi");
//} else {
 //   console.log("A soni 3ga ham 5ga ham bo'linmaydi");
//}




//Uyga vazifa

var xarajat=prompt("Sayohat uchun ajratgan pulingiz?(so'mda)");

var a=500;
    b=250;
    c=120;
var result=(a+b)*10650.34+c*11650.03;
    console.log(result);

var siteTitle1=document.querySelector(".text1");
var siteTitle2=document.querySelector(".text2");


if(xarajat >= result){
    siteTitle1.textContent="Oq yo'l, Alisher!";
}else{
    siteTitle2.textContent="Alisher, ozgina sabr qilish kerak ekan!";
}
