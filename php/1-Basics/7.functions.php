<?php

function sumNumbers(int $a, int $b)
{
    return $a + $b;
}
echo sumNumbers(5, 20);

// Date and Time Function

// $d = date("dS F Y");
$d = date("dS F Y, g:i A");
echo "Todays date is $d <br>";

// Prints something like: Monday 8th of August 2005 03:12:46 PM
echo date('l jS \of F Y h:i:s A');
 
$year = date("Y");
echo "<br>";
echo "Copyright $year | All rights reserved <br>";


?>