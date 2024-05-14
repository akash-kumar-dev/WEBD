<?php

// while loop
$i = 0;
while ($i < 5) {
    echo "The value of i is ";
    echo $i + 1;
    echo "<br>";
    $i += 1;
}

echo "<br><hr>";

// Foor Loops
for ($index=1; $index < 6; $index++) { 
    // for(initialization;condition; updation)
    echo "The number is $index <br>";
}



echo "<br><hr>";

// Do while loop
$j = 0;

do{
    echo "$j ";
    $j++;
}while($j<5);


// foreach Loop

$arr = array("Bananas", "Apples", "Harpic", "Bread", "Butter");

// for ($i=0; $i < count($arr); $i++) { 
//     echo $arr[$i];
//     echo "<br>";
// }

// Better way to do this - foreach loops
foreach ($arr as  $value) {
    echo "$value <br>";
}

?>