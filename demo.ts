//Firstly Hello World!!
alert("Hello World!!")
//Arthematic Class
class arthmatic 
{
	//Variables
	public num1 : Number ;
	public num2 : Number ;
	///Methods
	public add(num1,num2)
	{
		console.log(num1+num2);
	}
	public sub(num1,num2)
	{
		console.log(num1-num2);
	}
	public mul(num1,num2)
	{
		console.log(num1*num2);
	}
	public div(num1,num2)
	{
		console.log(num1/num2);
	}
}
////Objects of Class Arthematic
var a1 = new arthmatic()     /// Addition
a1.add(12,12.2)
var a2 = new arthmatic()     ///Subtraction
a2.sub(12,12.2)
var a3 = new arthmatic()     ///Multiplication
a3.mul(12,12.2)
var a4 = new arthmatic()     ///Divison
a4.div(12,12.2)
