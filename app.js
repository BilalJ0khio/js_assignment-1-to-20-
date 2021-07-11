
// chapter#1  alert

 // alert("HOlla my friend");
// alert("Error!Please enter valid password");
// alert("Welcome to js land.. \n Happy coding! ");
// alert("welcome to js land...");
// alert("Happy Codings!");

// chapter#2  variables

// let userNAme;
// var myName="Bilal Ahmed";
// var message="Hello World";
// alert(message);
// let name,age,skill;
// name="Bilal Ahmed";
// age="23";
// skill="Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(skill);

// var variable;
// alert(variable=" PIZZA \n PIZZ \n PIZ \n PI \n P");
// let email;
// email="jokhiobilal.11@gmail.com";
// alert("My email address is " + email);
// var book = "A smarter wat to learn Javascript";
// alert("I am trying to learn from the book" + " " + book);
// var anything;
// anything="YAh! I can write HTML content through JavaScript";
// document.write(anything);
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

// chapter#3

// var age;
// age=23;
// alert( age);
// var track=3;
// alert("You Have visited this site" + " " + track + " " + "times");
// var birthYear=1998;
// document.write("My birth year is"+" "+birthYear + "<br>" + "data type of my declared variable is number" );
// let v_Name="Kashif Rasheed",p_Title="T-shirt(s)",quantity=5;
// document.write(v_Name +" " + "ordered" + " " + quantity + " " + p_Title + " on ABC Clothing store");

// chapter#4

// Declare 3 variables in one statement.
// 2. Declare 5 legal & 5 illegal variable names.
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _

// var var1,var2 ,var3;
// var this_,is,leggal,$variable,_s;
// var 34, 3var, v a r, *variable, "is";
// document.write("Rules for naming javascript variables"+"<br>"+"variable names can contain $ and undescore numbers letters"+"<br>"+"variable must begin with a letter underscore or dollar"+"<br>"+"variable names are case sensitive"+"<br>"+"variable names should not be JS keywords");




//chapter#5

// var ask=prompt("select the operation (+  -  *  /)" + " \n" + "select any one of them ");

// if( ask=="+"||ask=="-" || ask=="/" || ask=="%")
// { 
//   var number1=+prompt("enter your number1"); 
//   var number2=+prompt("enter your number2");
 
// if(ask=="+")
//  {
// var add=number1+number2;
// document.write("sum of "+number1+" and "+ number2+" is " + add);
// }
// else if(ask=="-"){
//     var sub=number1-number2;
//     document.write("sub of "+number1+" and "+ number2+" is " + sub);
    
// }
// else if(ask=="*"){
//     var mul=number1*number2;
//     document.write("mul of "+number1+" and "+ number2+" is " + mul);
    
// }
// else if(ask=="/"){
//     var div=number1/number2;
//     document.write("division of "+number1+" and "+ number2+" is " + div);
    
// }
// else if(ask=="%"){
//     var mod=number1%number2;
//     document.write("Mod of "+number1+" and "+ number2+" is " + mod);
//     }
// }
// else{
//     alert("The operation you are performing is not available yet!");
// }

// var variable;
// document.write("value after variable declaration is" +" "+ variable+" "  + "<br>");
// variable=5;
// document.write("initial value: " + variable);
// variable++;
// document.write("<br>"+ "value after increment is: "+variable);
// variable=variable+7;
// document.write("<br> "+"value after addition is: "+variable);
// variable--;
// document.write("<br>"+"value after decrement is: "+variable);
// variable=variable%3;
// document.write("<br>"+"The remainder is: "+variable);

// var ticket_Cost=600;
// var cost_Of_five=ticket_Cost*5;
// document.write("Total cost to buy 5 tickets to a movie is"+ " "+ cost_Of_five +" PKR");

// var number;
// number=+prompt("enter any number");
// for(var i=1;i<=10;i++)
// {
//     var table=number*i;
//     document.write(number + " * " + i + " = " + table +"<br>" );
// }
// var c=25,f=70;
// var temp_F,temp_C;
// temp_F=(c*9/5)+32;
// temp_C=(f-32)*5/9;
// document.write(c+ "C " + " is " +temp_F+"F <br>");
// document.write(f+ "F " + " is " +temp_C+"C");

// var price_Of_Item_1=650;
// var price_Of_Item_2=100;
// var ordered_Quantity_Item_1=3;
// var ordered_Quantity_Item_2=7;
// var ship_Chrg=100;
// var item1,item2,total;
// item1=price_Of_Item_1*ordered_Quantity_Item_1;
// item2=price_Of_Item_2*ordered_Quantity_Item_2;
// total=item1+item2+ship_Chrg;
// document.write("price of item 1 is "+price_Of_Item_1+"<br> quantity of item 1 is " +ordered_Quantity_Item_1+"<br> price  of item 2 is " +price_Of_Item_2+"<br> Quantity of item 2 is "+ ordered_Quantity_Item_2+"<br> shipping charges"+ship_Chrg );
// document.write(" <br>Total cost of your order is  " + total);

// var total_Marks,obt_Marks,per;
// total_Marks=980;
// obt_Marks=804;
// per=(obt_Marks/total_Marks)*100
// document.write("Total marks: "+total_Marks+"<br>" + "Marks obtained: " +obt_Marks+"<br>" + "percentage: " + per +"%" );

// var us_D=10,sa_R=25,pkr,pkr1;
// var total =  104.80 * us_D +  28 * sa_R;
// document.write("Total currency in PKR: " + total);

// var number = 11;
// number= ((number+5)*10)/2
// document.write(number);
// var c_year=2021,b_year=1998,age;
// age=c_year - b_year;
// document.write("current year "+c_year+" <br> birth year: "+b_year+"<br> your age is: "+age )

 
// var r,c_Circle,a_Circle,pie=3.142;
// r = +prompt("enter radius");
// c_Circle = 2 * pie * r
// a_Circle = pie * (r*r);
// document.write("RAdius of circle: " + r);
// document.write(" <br>The circumference is: "+ c_Circle);
// document.write("<br>The area is: " + a_Circle);

// var fav_Snack="lays with milo";
// var age=15;
// var max_Age=65;
// var amm_Per_Day=3;
// var year=365*3;
// var total= year * (max_Age-age);
// document.write("you will need "+" "+ total+fav_Snack + " "+ "to last you until the rip old age of  " +max_Age);

// chapter#6t09
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a=10;
// document.write("the value of a is: "+a + "<br>"+"<br>" );
// ++a;
// document.write(" Now the  value of a is: "+ a +"<br>"+"<br>");
// document.write("the value of a++ is: "+ a++ + "<br>"+"<br>");
// document.write("Now the value of a is: "+ a + "<br>"+"<br>");
// document.write("The value of --a is: "+ --a + "<br>"+"<br>");
// document.write("Now the value of a is: "+ a + "<br>"+"<br>");
// document.write("The value of a-- is: "+ a-- + "<br>"+"<br>");
// document.write("Now the value of a is: " + a + "<br>"+"<br>");

// 2. What will be the output in variables a, b & result after execution of the following script:

// var a=2,b=1;
// var result= --a - --b + ++b + b--;
//  1 -   0 +   1 + 1=3
// document.write("a is: "+ a +"<br>");
// document.write("b is: "+ b +"<br>");
// document.write("result is: "+ result);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// var x=5;
// x=+prompt("enter e new number");

// if(x!=5)
// {

//     for(var i=1;i<=10;i++)
//     {
//         document.write(x + " X " + i + " = " + " "+  (x*i) + "<br>");
//     }
// }
// else {
//     for(var i=1;i<=10;i++)
//     {
//         document.write(5 + " X " + i  + " = " + " "+  (5*i) + "<br>");
//     }   
//}

// 6 .Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// var eng ,mt,phy;
// var eng_O,mt_O,phy_O;
// var eng_T=100,math_T=100,phys_T=100;
// eng=prompt("enter the name of first subject");
// mt=prompt("enter the name of 2nd subject");
// phy=prompt("enter the name of 3rd subject");

// eng_O=+prompt("Marks obtained in english");
// mt_O=+prompt("Marks obtained in math");
// phy_O=+prompt("Marks obtained in physics");

// totalMarkseng=(eng_O*100)/eng_T;
// totalMarksmt=(mt_O*100)/math_T;
// totalMarksphy=(phy_O*100)/phys_T;

// document.write("Subject Total Marks Obtained Marks Percentage" + "<br>")
// document.write(eng + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +eng_T+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +eng_O+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +totalMarkseng+"%"+"<br> <br>");

// document.write(mt + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +math_T+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +mt_O+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +totalMarksmt+"%"+"<br> <br>");

// document.write(phy + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +phys_T+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +phy_O+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +totalMarksphy+"%"+"<br> <br> ");
// var total_Marks=eng_T+math_T+phys_T;
// var total_Marks_Obtained=eng_O+mt_O+phy_O;
// var total_percentage=(totalMarksphy+totalMarksmt+totalMarkseng)/3;
// document.write("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total_Marks+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total_Marks_Obtained+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+total_percentage+"%");

//chapter 9 to 11
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// var city=prompt("enter city name");

// if(city=="karachi")
// {
//      alert("Welcome to city of lights");
// }

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am

// var gender=prompt("Enter your Gender");
// if(gender=="male")
// {
//     alert("good morning sir ")
// }
// else {
//     alert("good morning ma'am")
// }

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var signal_Color=prompt("Enter signal color");
// if(signal_Color=="red")
// alert("Must Stop");
// else if(signal_Color=="green")
// alert("Move now");
// else if(signal_Color=="yellow")
// alert("Ready to move fellas");
// else
// alert("enter only red || green || yellow");

// 4 .Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuel_Remain=+prompt("Enter your remainig Fuel in Car");
// if(fuel_Remain<0.25)
// alert("please refill the fuel in yourcar");

// .5 Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a.var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true"); }
// condition will be true


//  var b = 82;
// if (b++ === 83)
// alert("given condition for variable b is true");
//this condition will be false first if will check the number is equal to 83 and then it will increment by plus 1

// var c = 12;
// if (c++ === 13){ alert("condition 1 is true"); }
// if (c === 13){ alert("condition 2 is true"); }
// if (++c < 14){ alert("condition 3 is true"); }
// if(c === 14){ alert("condition 4 is true"); }
//in first condition c is 12 in second c=13 in 3rd c=14 in fourth c=14;

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost)
// { alert("The cost equals");}
// if (true){ alert("True"); }
// if (false){ alert("False"); }

// if("car" < "cat")
//     alert("car is smaller than cat"); 
// else
//  alert("what a drag"); 

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// var cal_Ttl=100,eng_Ttl=100,isl_Ttl=100;
// var cal_obt,eng_obt,isl_obt;
// cal_obt=+prompt("enter your calculus marks");
// eng_obt=+prompt("enter your english marks");
// isl_obt=+prompt("enter your islamiat marks");
// var total_obt = (cal_obt + eng_obt + isl_obt);
// var total=(cal_Ttl+eng_Ttl+isl_Ttl);
// var percentage= (total_obt/3);

// if(percentage>=80)
// {
//    var grade="A-one";
//    var remark="Excellent";
//     document.write("Total marks:"+" "+ total+"<br>"+"Marks obtained:"+" "+total_obt+"<br>" +"percentage:"+" "+ percentage + "<br>" + "Grade:"+" "+ grade+"<br>"+"Remarks:"+" " + remark);
// }
// else if(percentage>=70)
// {
//    var grade="A";
//    var remark="Good";
//     document.write("Total marks:"+" "+ total+"<br>"+"Marks obtained:"+" "+total_obt+"<br>" +"percentage:"+" "+ percentage + "<br>" + "Grade:"+" "+ grade+"<br>"+"Remarks:"+" " + remark);
// }
// else if(percentage>=60)
// {
//    var grade="B";
//    var remark="You need to improve";
//     document.write("Total marks:"+" "+ total+"<br>"+"Marks obtained:"+" "+total_obt+"<br>" +"percentage:"+" "+ percentage + "<br>" + "Grade:"+" "+ grade+"<br>"+"Remarks:"+" " + remark);
// }
// else if(percentage < 60)
// {
//    var grade="Fail";
//    var remark="Khair a try again";
//     document.write("Total marks:"+" "+ total+"<br>"+"Marks obtained:"+" "+total_obt+"<br>" +"percentage:"+" "+ percentage + "<br>" + "Grade:"+" "+ grade+"<br>"+"Remarks:"+" " + remark);
// } 

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var secret_Num=710;
// var user_Guess=+prompt(" Guess the secret number");
// if(user_Guess==secret_Num)
// alert("Bingo! Correct answer");
// else if(user_Guess>secret_Num&& user_Guess<(secret_Num+2))
// alert("Close Enough bro to the corect asnwer");
// else 
// alert("try again");

// 3 .Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var num=+prompt("eneter the number");
// var divisible=num%3;
// if(divisible==0)
// alert(num+" "+" is divisible by 3 " );

// 9.Write a program that checks whether the given input is an even number or an odd number.

// var num=+prompt("eneter the number");
// var  even=num%2;
// if(even==0)
// alert(num+" "+" is even " );
// else
// alert("odd");

// var temp=+prompt("Enter the temperature in your city");
// if(temp>40)
// {
//     alert("Its too hot outside");
// }
// else if(temp>30)
// alert("The weather today is normal");
// else if(temp>20)
// alert("Todaya's weather is cool");
// else if(temp>10)
// alert("WOW! Its Cold outside");
// else
// alert("Antartica boss");

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var ask=prompt("select the operation (+  -  *  /)" + " \n" + "select any one of them ");
// if( ask=="+"||ask=="-" || ask=="/" || ask=="%")
// { 
//   var number1=+prompt("enter your number1"); 
//   var number2=+prompt("enter your number2");
 
// if(ask=="+")
//  {
// var add=number1+number2;
// document.write("sum of "+number1+" and "+ number2+" is " + add);
// }
// else if(ask=="-"){
//     var sub=number1-number2;
//     document.write("sub of "+number1+" and "+ number2+" is " + sub);
    
// }
// else if(ask=="*"){
//     var mul=number1*number2;
//     document.write("mul of "+number1+" and "+ number2+" is " + mul);
    
// }
// else if(ask=="/"){
//     var div=number1/number2;
//     document.write("division of "+number1+" and "+ number2+" is " + div);
    
// }
// else if(ask=="%"){
//     var mod=number1%number2;
//     document.write("Mod of "+number1+" and "+ number2+" is " + mod);
//     }
// }
// else{
//     alert("The operation you are performing is not available yet!");
// }

//chapter 12-13
// Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var a=prompt("Enter the character (enter only a,A,z,Z)");
//  a.charCodeAt();

// if(a.charCodeAt()==97)
// {
//     alert(a+" its a lower case letter");
// }
// else if(a.charCodeAt()==65)
// alert(a+" its a  upper case letter");

//     else if(a.charCodeAt()==122)
//     alert(a+" its a lower case letter");

// else if(a.charCodeAt()==90)
// alert(a+" its a upper case letter");
// else if((isNaN(a))===false)
// {
//     alert(a + " its a number");
// }
// else
// alert("this char is in progress")

//Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// var num1,num2;
// num1=+prompt("enter number 1");
// num2=+prompt("enter number 2");

// if(num1>num2)
// alert(num1+"  is greater than "+ num2);
// else if(num1<num2)
// alert(num1+" is less than "+ num2);
// else if(num1==num2)
// alert( num1+" is same as" + num2);

//Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num1=+prompt("Entet a number to check weather is 0 or not or positive ");
// if(num1>0)
// alert(num1+" its a positive number");
// else if(num1<0)
// alert(num1+" its a negative number");
// else if (num1==0)
// alert(num1+" its zero its neutral");

//. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var checkVowel=prompt("Enter the character");

// if(checkVowel=="a"||checkVowel=="e"||checkVowel=="i"||checkVowel=="o"||checkVowel=="u"||checkVowel=="U"||checkVowel=="O"||checkVowel=="I"||checkVowel=="E"||checkVowel=="A")
// alert(checkVowel+" its a vowel");
// else
// alert(checkVowel + " its consonant");
//Write a program that

// Write a program that
// a. Store correct password in a JS variable. 
//b. Asksusertoenterhis/herpassword
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// var password="this is javascript"
// var valPassword=prompt("Enter the correct password");
// // alert(valPassword.length);
// if(valPassword.length!=0 && password==valPassword)
// alert("corect password");
// else
// alert("enter correct password");
// This if/else statement does not work. Try to fix it: 

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day"; 
// }
// else
// greeting = "Good evening"; 

// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var timeFormate=+prompt(" what format you want 24hrs or 12 hrs")
// if(timeFormate==24)
// {
// var time=+prompt("enter time in 4 digits");
// if(time>=0000 && time<1200)
//     alert("Good Morning");
// else if(time>=1200 && time<1700)
// alert("Good Afternoon");
// else if(time>=1700 && time<2100)
// alert("Good Evening")
// else if(time>=2100 && time<=2359)
// alert("Good Night")
// }
// else
// alert("12hrs format is not available");

//chapter 14-16

//chapter 17-20;
//Declare and initialize an empty multidimensional array. (Array of arrays)


// var array=["ammar","bilal","rafay","basit"];
// alert(array[0][1]);
// var array=[ 
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]    
// ]
//console.log(array[1][3]);    //2nd row 4th column
// console.log(array);

// Write a program to print numeric counting from 1 to 10.

// var count=1;
// for(count;count<=10;count++)
// {
//     document.write(count+"<br>");
// }

//Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var num=+prompt("enter the num for table");
// var length=+prompt("enter length");
// document.write("multiplication table of "+ num + " length "+ length +"<br>");
// for(var i=0;i<=length;i++)
// document.write( num + " x "+ i + " = "+ num*i + "<br>");

// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits=["apple","banana","mango","orange","strawberry"];

// for(var i=0 ;i< fruits.length;i++)
// document.write("Element at index " + i + " is " + fruits[i]+"<br>");


// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var num,rev,even,odd;

// for(num=1;num<=15;num++)
// {document.write( num);
// if( num==15 ) 
//     {   document.write("<br>")
//         break;}
//  document.write(" , ");
// }

// for(rev=10;rev>=1;rev--)
// {
// document.write(rev);
// if(rev==1)
// {
//     document.write("<br>")
//         break;}
//  document.write(" , ");

// }

// for(i=0;i<=20;i++)
// {
//     if((i%2)==0)
//      document.write(i);
     
//      if(i==20)
//      {
//          document.write("<br>")
//              break;}
            
//             if(i%2==0)
//              document.write(" , ");
//             }


//             for(i=0;i<=20;i++)
// {
//     if((i%2)==0)
//      document.write(i+1);
     
//      if(i==20)
//      {
//          document.write("<br>")
//              break;}
            
//             if(i%2==0)
//              document.write(" , ");
//             }
            

//             var ta=2
//             for(var i=1;i<=10;i++)
//             {
//                 document.write(ta*i+"k ");
//             }



// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.

// var a=["cake","apple pie","cookie","chips","patties"];
// var search=prompt("search the item");

// var flag=1;
// for(var i=0;i<=a.length;i++)
// {
//     if(search==a[i])
    
//     {document.write(a[i]+" found  at index" + i);
//     flag=0;
//     break;
// }

// }
// if(flag==1)
// alert( search+" is not available");

// Write a program to identify the largest number in the given array.

// var a=[5,6,7,8,91,3,12,43,45,65,444];
// var max,i;

// max=a[0];

// for(i=1;i<=a.length-1;i++)
// {

//     if(max<a[i])
//          max=a[i]
// }
// console.log("the largest number is "+ max);

// // Write a program to identify the smallest number in the given array.
// var a=[1,2,3,45,65,67,98,56,1];
// var max,i;

// min=a[0];

// for(i=1;i<=a.length-1;i++)
// {

//     if(min>a[i])
//          min=a[i]
// }
// console.log("the smallest number is "+ min);


// Write a program to print multiples of 5 ranging 1 to 100.

// var mul=5;
// for(var range=1;range<=20;range++)
// console.log((mul*range) + " ,");

// Declare an empty array using JS literal notation to store student names in future.
// Declare an empty array using JS object notation to store student names in future.
// Declare and initialize a strings array. Declare and initialize a numbers array. Declare and initialize a boolean array.
// Declare and initialize a mixed array.
// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var studentsName=[];
// var studentNames= new Array();
// var string=["heloo world"];
// var num=[1,2,3,4];
// var boolean=[true,false];
// alert(num);
// var mixed=["this is",1,true];
// alert(mixed);


// var arr=["SSC" ,"HSC","BCS","BS","BCOM","MS","M.PHIL.","PhD"]
// document.write("Qualifications"+"<br><br>");

// for(var i=0;i<=arr.length-1;i++)
// document.write( (i+1) + ") " + arr[i]+"<br>");

// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var students=["Bilal","Kashif","Mitran"];
// var marks=[100,456,470];
// var total=500;
// for(var i=0;i<students.length;i++)
// {
//     document.write("Score of "+students[i]+" is "+marks[i]+". percentage: "+(marks[i]/total)*100+"%"+"<br>" );
// }

//var array=["red","green","blue","white","black"];
//console.log(array);
//  array=["bilal ahmed jokhio"];
// console.log(array);
// array.shift();
// console.log(array);
// array.splice(2,2,"olive","brown");
// array.splice(5,0,"yellow");
// array.splice(3,2,"purple");
// console.log(array);

// Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then

// var colors=["yellow","red","green","blue"];
// console.log(colors);
// colors.unshift(prompt("what color do you like to add at the beginning"));
// console.log(colors);
// colors.push(prompt("what color would you like to add at the end or the array"));
// console.log(colors);
// colors.unshift(prompt("add 1"),prompt("add2"));
// console.log(colors);
// colors.shift();
// console.log(colors);
// colors.pop();
// colors.splice(prompt("which index you want to add"),0,prompt("add color"));
// colors.splice(prompt("at what index you want to delete the colors"),prompt("how many you want to delete"));
// console.log(colors);


// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var scores=[345,230,480,120,5,6,7,8];

// for(i=0;i<scores.length;i++)
// {
//     for(var j=0;j<(scores.length-1-i);j++)
//     {
//         if(scores[j]>scores[j+1])
//         {
//             var temp;
//             temp=scores[j];
//             scores[j]=scores[j+1];
//             scores[j+1]=temp;
//         }
//     }
// }
// console.log(scores);

// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var  cities=["karachi","hyderabad","dadu","larkana","sehwan"];
//   console.log(cities.slice(2,4)); 


// Write a program to create a single string from the below mentioned array:

// var arr=["this" , "is","my","cat"];
// console.log(arr.join());

// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var array=[];
// for(var i=0;i<5;i++)
// array[i]=prompt("enter value"+i);
// console.log(array);

// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)
// var array=[];
// for(var i=4;i>=0;i--)
// array[i]=prompt("enter value");

// console.log(array);

// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

// var manufacturers=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// for( var i=0 ;i<manufacturers.length; i++ )
// document.write(manufacturers[i]+"<br>");

//chapter 1 t0 20 complete
// end



