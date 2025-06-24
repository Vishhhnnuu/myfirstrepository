//1.Arthematic Operators
let a=10;
let b=5;
console.log("Arthematic operators");
console.log("a=",a,"b=",b)
let sum =a+b;
let difference = a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let exponent = a**b;
console.log("Sum:",sum);
console.log("difference:",difference);
console.log("product:",product);
console.log("quotient:",quotient);
console.log("remainder:",remainder);
console.log("exponent:",exponent);




//2.Assignment Operators
let x=10;
x+=5;
x-=5;
x*=5;
x/=5;
x%=5;
console.log("Assignment Opertors: ");
console.log("x after assignment:",x);
console.log("\n");


//3.comparison Operators
let isEqual = (a==b);
let isStrictEqual = (a === b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a !== b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);
console.log("Comprasion Opreators:");
console.log("Is Equal:", isEqual);
console.log("Is Strict Equal :", isStrictEqual );
console.log("is Not Equal:", isNotEqual);
console.log("Is Strict Not Equal :", isStrictNotEqual);
console.log("IS  Greater Than:",isGreaterThan );
console.log("IS Less Than:",isLessThan );
console.log("IS Greater Than Or Equal :", isGreaterThanOrEqual);
console.log("IS Less Than Or Equal :", isLessThanOrEqual);  



//4.Logical operators
let andOperator=(a>0&&b>0);
let orOperator =(a>0||b>0);
let notOperator=!(a<b);
console.log("Logical operators");
console.log("AND operator",andOperator);
console.log("OR operator",orOperator);
console.log("NOT operator",notOperator);
console.log("/n");


//5.Bitwise oprators
// Bitwise operators perform operations on binary Representation
let bitwiseAnd = a & b;
let bitwiseOr = a | b;
let bitwiseXor = a  ^  b;
let bitwiseNot =  ~a;
let leftShift = a << 1;
let rightShift = a >> 1;
console.log("Bitwise Operators:");
consolw.log("Bitwise AND:",bitwiseAnd);
consolw.log("Bitwise OR:",bitwiseOr);
consolw.log("Bitwise NOT:",bitwiseNot);
consolw.log("Left Shift:",leftShift);
consolw.log("Right Shift :",rightShift );
console.log("/n")




//6.Ternary Operator
let age = 18;
let eligibility=(age >= 18)?"Eligible to vote": "Not Eligible to vote";
console.log("Ternary OPerator");
console.log("Eligibility:",eligibility);
console.log("/n");






//7.Typeof operator
let variableType = typeof a;
console.log("Typeof Operator:");
console.log("Type of variable 'a':", variableType);
console.log("\n");





