// Button Percentage

var tipPer = 0;
    $("button").click(function(){
       const btnPercentage=$(this).attr("value")/100;
        tipPer = btnPercentage;

    });
   
//  Custom Percentage

custom = document.querySelector("#customInput");
custom.addEventListener("change", function () {
    const cunstomNumber = document.getElementById("customInput").value/100;
    tipPer=cunstomNumber;
  });


// Calculation

function calculate(){
    const bill = document.getElementById("billInput").value;
    const noOfPeople = document.getElementById("noOfPeople").value; 
    
    const  tip = bill * Number(tipPer);
    const total_amount = parseFloat(bill) + parseFloat(tip);
    const tip_per_person = (tip / noOfPeople);
    const total_per_person = (total_amount / noOfPeople);
    document.getElementById("tipPerPerson").innerHTML = Number(tip_per_person).toFixed(2);
    document.getElementById("totalPerPerson").innerHTML = Number(total_per_person).toFixed(2);
}

// RESET

$("#reset").click(function(){
    document.location.reload(true);
  });