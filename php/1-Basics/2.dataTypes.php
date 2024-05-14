<?php

$name = "Harry";
$income = 200;

/* php data types
1. String
2. Integer
3. Float
4. Boolean
5. Object
6. Array
7. NULL
*/

// String - sequence of characters
$name = "Harry";
echo $name;
echo "<br>";
$friend = 'Rohan';


// Integer - Non decimal number
$income = 455;
$debts = -655;


// Float - Decimal point number
$income = 344.5;
$debts = -45.5;


// Boolean - Can be either true or false
$x = true;
$is_friend = false;
echo var_dump($x);  // Right way to display Data Type
echo "<br>";
echo var_dump($is_friend);
echo "<br>";

// Object - Instances of classes
// Employee is a class ---> harry can be one object

// Array - Used to store multiple values in a single variable
$friends = array("rohan", "shubham", "skillf", "Larry");
echo var_dump($friends);
echo "<br>";
echo $friends[0];
echo "<br>";

//echo $friends[4]; // will throw an error as the size of array is 4

// NULL
$name = NULL;
echo var_dump($name);

?>