var date = document.querySelector(".date")
var month = document.querySelector(".month")
var year = document.querySelector(".year")
var hour = document.querySelector(".hour")
var minit = document.querySelector(".minit")
var sec = document.querySelector(".sec")
var am = document.querySelector(".am");
//  var sun =[]
function clock(){
    // date
    let create = new Date();
     let one = create.getDate();
     date.innerHTML=one
    // month
    //  let array =["sun","mon","tue","wed","thu","fri","sat"]
     let two = create.getMonth();
     month.innerHTML=two+1


    //  year

    let three = create.getFullYear()
    // three=three.toString()
    year.innerHTML =three-2000

    // hour
    let four = create.getHours()
    if( four>12){
        
        hour.innerHTML =four-12;
  
    }
else if(four==0){
    hour.innerHTML =four+12;
}
   else{
     hour.innerHTML=four;
   }
   if(four<12){
      am.innerHTML="AM";
   }
   else{
    am.innerHTML="PM";
   } 
    // minites
    let five = create.getMinutes()
    minit.innerHTML = five;

    // seconds

    let six =create.getSeconds()
    sec.innerHTML = six;



     

     
     
}
setInterval(clock,1000);