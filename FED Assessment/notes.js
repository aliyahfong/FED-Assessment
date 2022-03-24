<!--a class="btn" href="mailto:name@email.com">CONTACT ME</a-->

    <!--product catalog-->
    <!--div>
        <div class="flex-container">
          <div class="flex-item-left">
            <img
              class="bergamot"
              src="images/bergamot.jpg"
              alt="bergamot-img"
              width="250"
              height="250"
            />
            <p>Bergamot</p>
            <p>RM 60.00</p>
          </div>
          <div class="flex-item-right">
            <img
              class="ylang"
              src="images/ylang ylang.jpg"
              alt="ylangylang-img"
              width="250"
              height="250"
            />
            <p>Ylang Ylang</p>
            <p>RM 50.00</p>
          </div>
          <div class="flex-item-left">
            <img
              class="rosemary"
              src="images/rosemary.jpg"
              alt="rosemary-img"
              width="250"
              height="250"
            />
            <p>Rosemary</p>
            <p>RM 40.00</p>
          </div>
          <div class="flex-item-right">
            <img
              class="lemongrass"
              src="images/lemongrass.jpg"
              alt="lemongrass-img"
              width="250"
              height="250"
            />
            <p>Lemongrass</p>
            <p>RM 50.00</p>
          </div>
          <!--2nd row items>
          <br>
    <div class = "flex-container2">
          <div class="flex-item-left">
            <img
              class="cinnamon"
              src="images/cinnamon.jpg"
              alt="cinnamon-img"
              width="250"
              height="250"
            />
            <p>Cinnamon</p>
            <p>RM 50.00</p>
          </div>
          <div class="flex-item-right">
            <img
              class="peppermint"
              src="images/peppermint.jpg"
              alt="peppermint-img"
              width="250"
              height="250"
            />
            <p>Peppermint</p>
            <p>RM 40.00</p>
          </div>
          <div class="flex-item-left">
            <img
              class="clarity"
              src="images/clarity.jpg"
              alt="peppermint-img"
              width="250"
              height="250"
            />
            <p>Clarity</p>
            <p>RM 50.00</p>
          </div>
          <div class="flex-item-right">
            <img
              class="balance"
              src="images/balance.jpg"
              alt="balance-img"
              width="250"
              height="250"
            />
            <p>Balance</p>
            <p>RM 50.00</p>
          </div>
        </div>
    </div>
</div>






alert("Do you want this?");

var myName = "Aliyah";
myName.length

var message = "Hello";
var name = "Angela";
name.toUpperCase();
name.toLowerCase();

//Write here
alert(message + " there, " + name);

var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");

var name = "Aliyah";
name.slice(1,3);

//3 lines can be into 1
var tweet = prompt("Compose your tweet:");
var tweetunder140 = tweet.slice(0,140);
alert(tweetunder140);

alert(prompt("Compose your tweet:").slice(0,140));


//-------------How to have capitalised name-----------------//

//1 Create a var that stores the name the user enters via prompt
var name = prompt("What is your name?");

//2 Capitalise the first letter of their name

//a isolate the first char
var firstChar = name.slice(0,1);

//b Turn the first char to upper capitalise
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name
var restofname = name.slice(1,name.length);

//c.1 if rest of the letters are capital and we wanna make it proper
restofname = restofname.toLowerCase();

//d concactenate the first char with the rest of the char
var capitalisedName = upperCaseFirstChar + restofname;

//3 We use the capitalise version of their name to greet them using an alert
alert("Hello, " + capitalisedName);


//basic maths
//1 Create a var that stores the name the user enters via prompt
var dogAge = prompt("What is your dog's age?");
var humanAge=((dogAge-2)*4)+21;
alert("Your dog is " + humanAge+ " years old in human years");

//inrement & decrement
var x = 5;
var y =3;
x++; //6
x--;//4
x+=2;//7
x+=y;//8
//other expression
-=
/=
*=

//creating functions -> series of instructions
function getmilk({
    alert("leaveHouse");
    alert("goright");
    alert(gohome);
})

//calling function
getmilk()

//lesson 118
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }

  Math.floor

  function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height);
    return Math.round(bmi);
    }
    
    var bmi = bmiCalculator(65, 1.8); 
    console.log(bmi);


    //bmi with if else condition

//random
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");
//console.log(loveScore);
if (loveScore ===100){ alert("Your love score is " + loveScore + "%. " + "You love each other like a volcano and a tornado");
    else{
        alert("Your love score is " + loveScore + "%" + "Better luck next time, hope you guys work it outout!");
    }
}

//other score range
if (loveScore > 50)
{ alert("Your love score is " + loveScore + "%. " + "You love each other like a volcano and a tornado"); }
else {
    
        alert("Your love score is " + loveScore + "%. " + "Better luck next time, hope you guys work it out!");
    }

    //my BMI calculation (incorrect)
    bmiCalculator (60, 2); function bmiCalculator (weight, height) {
        var bmi = weight / Math.pow(height,2); //var bmi = Math.round(weight / Math.pow(height,2));
        var interpretation;
        
    if (bmi <18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    
    if (bmi >= 18.5 && bmi <24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    
    if (bmi > 25) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
    }
    
    //my BMI calculation (correct)
    bmiCalculator(63,1.65);function bmiCalculator(weight,height) {
        var bmi = Math.round(weight / Math.pow(height,2));
        var interpretation;
        
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    
    if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }

    if (bmi >= 25) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
    }


    // Leap year calculation
    function isLeap(year) {
        if (year % 4 === 0){
            if (year % 100 === 0){
                if (year % 400 ===0){
                    return "Leap year."
                }
            } else {
                return "Leap year."
            }
        } else {
            return "Not leap year."
    }
    }

    //comparators and equality
    /* === is equal to (and cares about data type)
    !== is not equal to
    > greater than
    < lesser than
    >= greater than equal to
    <= lesser than equal to
    == is equal to (does not care of the data types)
    && and
    || or
    ! not */

    

//cross checking guest list
var guestList = ["Aliyah", "Bobby", "Lawanya", "Rovin", "Melor"];
var guestName = prompt("What is your name?");

 if (guestList.includes(guestName))
 {alert("Welcome"); }
else {
     alert("Sorry, better luck next time");
    }

    //fizzBuzz challenge video 132
    var output = [];
var count = 1; 
 
function fizzBuzz(){
    if(count % 3 === 0 && count % 5 ===0){
        output.push("fizzBuzz");
    }
else if (count % 3 === 0){
    output.push("Fizz");
} 
else if (count % 5 === 0) {
    output.push("Buzz");
}

else {
    output.push(count);
}
    
count++;

    console.log(output);
}

//who is buying lunch .132
function whosPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition =  Math.floor(Math.random() * numberOfPeople);
     var randomPerson = names[randomPersonPosition];
     return randomPerson + " is going to buy lunch today!";
 }
     
     console.log(output);
 

     //99 bottles --while loop (State)
     var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

//for loop (Iterate)
for(var i=1; i<2; i++){
 console.log(i);
}

//139 video
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var output = [];
        if(n ===1) {
            output = [0];
        }
        else if (n===2){
            output = [0, 1];
        }
        else {
            output = [0,1];
            
            for (var i=2; i < n; i++)
            output.push(output[output.length-2] + output[output.length-1]);
    }
    
             return output;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    

    //video 163 calculator function
    function add(num1, num2) {
      return num1 + num2;
      }
       
      function subtract(num1, num2) {
      return num1 - num2;
      }
       
      function multiply(num1, num2) {
      return num1 * num2;
      }
       
      function divide(num1, num2) {
      return num1 / num2;
      }
       
      function calculator(num1, num2, operator) {
      return operator(num1, num2);
      }

      //to look through each line of the function
      debugger;
      calculator(3,4,multiply)

      //create object in js
      var productObject = {
        nameOfproduct: "Bergamot",
        priceOfproduct: "RM50.00",
        descriptionOfproduct : "bergamot oil"
        }

        //constructor function
        function ProductList (nameOfproduct, priceOfproduct, descriptionOfproduct) {
          this.nameOfproduct = nameOfproduct;
          this.priceOfproduct = priceOfproduct;
          this.descriptionOfproduct = descriptionOfproduct;
          this.clean = function(){ //adding method in the function
            alert("cleaning in progress...")
          }
          }

          //insert object into function created
          var product1 = new ProductList ("Bergamot", "RM 50.00", "Bergamot oil");