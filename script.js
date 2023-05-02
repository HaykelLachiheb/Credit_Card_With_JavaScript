var InputPart1 = document.getElementById('Input_Part1');
var CreditCardNumber = document.getElementById('Credit_Card_Number');


InputPart1.oninput = function (){

    

       if (InputPart1.value === ''){
        CreditCardNumber.innerText = "# # # # # # # # # # # # # # # #"
       }

       if ((InputPart1.value >= 0 ) && (InputPart1.value <= 9999999999999999 )){
         CreditCardNumber.innerText = InputPart1.value;
          
       } else

       {
        alert('You Should Set a Number !!!');  
        InputPart1.value = "";
    
       }

        if (InputPart1.value === ''){
            CreditCardNumber.innerText = "# # # # # # # # # # # # # # # #"
            
           }


};


var InputPart2 = document.getElementById('Input_Part2');
Name_Holder_Information = document.getElementById('Name_Holder_Information');


InputPart2.onkeyup = function () {

    var regex=/^[a-zA-Z]+$/;

    if (!InputPart2.value.match(regex))
    {

        
 
        alert("Must input string");
        InputPart2.value ="";
        Name_Holder_Information.innerText = "";
        
       
    } else

    {

        Name_Holder_Information.innerText = InputPart2.value.toUpperCase();
        
    };           

        
 

};









var Month = document.getElementById('Month');
var Year = document.getElementById('Year');
var Cvv_Number = document.getElementById('Cvv_Number');
var Month_Info = document.getElementById('Month_Info');
var Year_Info = document.getElementById('Year_Info');

Month.oninput = function () {

    
        Month_Info.innerText = Month.value;
    
    

};


var InputBackSide = document.getElementById('Input_BackSide');
var CvvNumber = document.getElementById('Cvv_Number');


CvvNumber.oninput = function () {

    if ((CvvNumber.value >=0) && (CvvNumber.value <= 9999)) {
             
        InputBackSide.innerText = CvvNumber.value;

    } else 
    {
        alert('You Should Enter A Number between 0 and 9999');
        CvvNumber.value="";
        InputBackSide.innerText = "";
    }

    
};



var CvvNumber = document.getElementById('Cvv_Number');
var Credit_Card = document.getElementById('Credit_Card');
var Credit_Card_BackSide = document.getElementById('Credit_Card_BackSide');



CvvNumber.onkeyups = function () {

    Credit_Card.style.transform = 'perspective(1000px) rotateY(0deg)';

    Credit_Card_BackSide.style.transform = 'perspective(1000px) rotateY(180deg)';


};
       
   
        
