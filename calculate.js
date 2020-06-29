// calculate tip
function calculateTip(){
    var billamt= document.getElementById("amount").value;
    var serviceQual=document.getElementById("service").value;
    var numOfPeople=document.getElementById("people").value;

    //validate input
    if(billamt === " " || serviceQual==0){
        alert("Please enter values!!");
        return;
    }

    //calculate tip

    var total=(billamt*serviceQual)/numOfPeople;
    total=Math.round(total*100)/100;
    total=total.toFixed(2);
    //alert('your tip is '+total);
    document.getElementById("result").style.display="inline-block";
    document.getElementById("result").innerHTML="your tip is: "+total;


}

document.getElementById("calculate").onclick=function(){calculateTip();};