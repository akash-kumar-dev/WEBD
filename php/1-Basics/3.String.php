<?php 

$name = "Harry";
echo $name;
echo "<br>";

// Length of string -> strlen($name)
echo "The length of " . "my string is " . strlen($name);    //cancatination of String
echo "<br>";

// Word count
echo str_word_count($name);
echo "<br>";

// Reversing a string (strrev)
echo strrev($name);
echo "<br>";

// Searching a component in a string (strpos)
$sentense = "Harry is a good boy";
echo strpos($sentense, "is");   // returns index of staring word
echo "<br>";

// Replace a string (str_replace)
echo str_replace("Harry", "Rohan", $sentense);
echo "<br>";

// Repeat a string (str_repeat)
echo str_repeat($name, 4);      // repeat $name 4times
echo "<br>";

// trim spaces
echo "<pre>";
echo rtrim("    this is a good boy     ");
echo "<br>";
echo ltrim("    this is a good boy     ");
echo "</pre>";

?>