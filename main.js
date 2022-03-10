// 1-

// var num = window.prompt('Enter Your fav num');
// if( num != Number(num) )
// {
//     console.log('You must enter just numbers');
// }
// else
// {
//     console.log(Number(num));
// }

// ***********************************************************
// 2-

// var num = window.prompt('Check if the number can divide by 3 and 4')
// if( num != Number(num) )
// {
//     console.log('You must check just numbers');
// }
// else if(num %3 == 0 && num %4 == 0)
// {
//     console.log("yes");
// }
// else
// {
//     console.log('no');
// }

// ***********************************************************
// 3-

// window.alert('Check the max num');

// var num1 = window.prompt('Enter the First integer number');
// var num2 = window.prompt('Enter the Second integer number');

// if( num1 != Number(num1) || num2 != Number(num2) )
// {
//     console.log('You must check just numbers');
// }
// else if(num1>num2)
// {
//     console.log(num1);
// }
// else
// {
//     console.log(num2);
// }

// ***********************************************************
// 4-

// var num = window.prompt('Check if the num is positive or Negative');

// if (num != Number(num))
// {
//     console.log('You must check just number');
// }
// else if (num <0)
// {
//     console.log('Number is Negative');
// }
// else
// {
//     console.log('Number is positive');
// }

// ***********************************************************
// 5- 

// function max(num1,num2,num3)
// {
//     if ( num1>num2 && num1 > num3)
//     {
//         console.log('max num is: '+num1);
//     }
//     else if( num2>num1 && num2 > num3)
//     {
//       console.log('max num is: '+num2);
//     }
//     else
//     {
//         console.log('max num is: '+num3);
//     }
// }
// function min(num1,num2,num3)
// {
//     if ( num1<num2 && num1 < num3)
//     {
//         console.log('min num is: '+num1);
//     }
//     else if( num2<num1 && num2 < num3)
//     {
//       console.log('min num is: '+num2);
//     }
//     else
//     {
//         console.log('min num is: '+num3);
//     }
// }
// window.alert('Check the min and the max num between 3 numbers');

// var num1 = window.prompt('Enter the first number');
// var num2 = window.prompt('Enter the second number');
// var num3 = window.prompt('Enter the third number');
// if( num1 != Number(num1) || num2 != Number(num2) || num3 != Number(num3))
// {
//     console.log('You must check just numbers');
// }
// else
// {
//     max(num1,num2,num3);
//     min(num1,num2,num3);
// }


// ***********************************************************
// 6-

// var num = window.prompt('Check if the num is even or odd');

// if (num != Number(num))
// {
//     console.log('You must check just number');
// }
// else if(num %2 ==0)
// {
//     console.log('The Number is Even');
// }
// else
// {
//     console.log('The Number is odd');
// }

// ***********************************************************
// 8-

// var char = window.prompt('Check the type of Charcter');

// if( char== Number(char))
// {
//     console.log('You must check just Charcter');
// }
// else if (char == 'a' || char == 'A' || char == 'e' || char=='E'||char=='i'||char=='I'||char=='o'||char=='O'||char=='u'||char=='U')
// {
//     console.log('Vowel Charcter');
// }
// else
// {
//     console.log('consonant Charcter');
// }

// ***********************************************************
// 9-

// var num = window.prompt('Enter the num you want to print to it');
// if (num != Number(num))
// {
//     console.log('You must enter just number');
// }
// for(var i=1;i<=num;i++)
// {
//     console.log(i);
// }

// ***********************************************************
// 10-

// var num = prompt('Enter the num that you want to print its multiplication table');
// if (num != Number(num))
// {
//     console.log('You must enter just number');
// }
// else
// {
//     for(var i=0 ;i<12;i++)
//     {
//         var multiplication= i * num;
//         multiplication = Number(multiplication);
//         console.log(Number (num) + multiplication);
//     }
// }

// ***********************************************************
// 11-

// var num = prompt('Enter the number that u want o print all even nums to it');
// if (num != Number(num))
// {
//     console.log('You must enter just number');
// }
// else
// {
//         for(var i=2 ; i< num ; i+=2)
//         {
//             console.log(i);
//         }
// }

// ***********************************************************
// 12-

// var num = prompt('Enter the number you want to add power for it');
// var power = prompt('Enter the power for the last num');
// if (num != Number(num) || power != Number(power))
// {
//     console.log('You must enter just number');
// }
// else
// {
//    var result = Math.pow(num, power);
//    console.log(num +"^"+power +"="+result);
// }

// ***********************************************************
// 13-  

// var p = prompt('Enter your grade of Physics');
// var c = prompt('Enter your grade of Chemistrey');
// var m = prompt('Enter your grade of Mathmatics');
// var e = prompt('Enter your grade of English');
// var a = prompt('Enter your grade of arabic');

// if (p != Number(p) || c != Number(c) || m != Number(m) || e != Number(e) || a != Number(a) )
// {
//     console.log('You must enter just number');
// }
// else
// {
//     var sum = Number(p) + Number(c) + Number(m) + Number(e) + Number(a);
//     console.log("Total marks = "+sum);
//     var avg = sum/5;
//     console.log("Average marks = "+avg);
//     var per = (sum/500)*100;
//     console.log("Percentage = "+per+"%")
// }

// ***********************************************************
// 14-

// var monthNumber = prompt('Enter the month number to check days in it');
// if (monthNumber == 1 ||monthNumber== 3 ||monthNumber== 5 ||monthNumber== 7 ||monthNumber== 8 ||monthNumber== 10 || monthNumber== 12)
// {
//     console.log("Days in that month = 31 ");
// }
// else if(monthNumber == 2)
// {
//     console.log("Days in that month = 28 ");
// }
// else if(monthNumber == 4 ||monthNumber== 6 ||monthNumber== 9 ||monthNumber== 11 )
// {
//     console.log("Days in that month = 30 ");
// }
// else
// {
//     console.log(" Sorry, there is no month by this number");
// }

// ***********************************************************
// 15-

// var p = prompt('Enter your grade of Physics');
// var c = prompt('Enter your grade of Chemistrey');
// var m = prompt('Enter your grade of Mathmatics');
// var e = prompt('Enter your grade of English');
// var a = prompt('Enter your grade of arabic');

// if (p != Number(p) || c != Number(c) || m != Number(m) || e != Number(e) || a != Number(a) )
// {
//     console.log('You must enter just number');
// }
// else
// {
//     var sum = Number(p) + Number(c) + Number(m) + Number(e) + Number(a);
//     var avg = sum/5;
//     var per = (sum/500)*100;
//     var grad;
//     if(per>=90)
//     {
//         grad = "A"
//     }
//     else if(per>=80)
//     {
//         grad = "B"
//     }
//     else if(per>=70)
//     {
//         grad = "C"
//     }
//     else if(per>=60)
//     {
//         grad = "D"
//     }
//     else if(per>=40)
//     {
//         grad = "E"
//     }
//     else if(per<40)
//     {
//         grad = "F"
//     }  
//     console.log("Percentage = "+per+"%" + " : Grad " +grad);
// }

// ***********************************************************
// 16-

// var monthNumber = prompt('Enter the month number to check days in it');
// switch(monthNumber)
// {
//     case "1":
//     {
//         console.log('Days in that month = 31')
//         break;
//     }
//     case "3" :
//     {
//         console.log('Days in that month = 31')
//         break;
//     }
//     case "5" :
//     {
//         console.log('Days in that month = 31')
//         break;
//     }
//     case "7" :
//     {
//         console.log('Days in that month = 31')
//         break;
//     }
//     case "8" :
//     {
//         console.log('Days in that month = 31')
//         break;
//     }
//     case "10" :
//     {
//         console.log('Days in that month = 31')
//         break;
//     }
//     case "12" :
//     {
//         console.log('Days in that month = 31')
//         break;
//     }
//     case "2" :
//     {
//         console.log('Days in that month = 28')
//         break;
//     }
//     case "4" :
//     {
//         console.log('Days in that month = 30')
//         break;
//     }
//     case "6" :
//     {
//         console.log('Days in that month = 30')
//         break;
//     }
//     case "9" :
//     {
//         console.log('Days in that month = 30')
//         break;
//     }
//     case "11" :
//     {
//         console.log('Days in that month = 30')
//         break;
//     }
//     default : 
//     {
//         console.log('Sorry, there is no month by this number')
//         break;
//     }
// }

// ***********************************************************
// 17-

