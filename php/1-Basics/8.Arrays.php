<?php

// Associative arrays
$favCol = array(
    'shubham' => 'red',
    'rohan' => 'green',
    'harry' => 'brown',
    8 => 'this'
);

// echo $favCol['harry'];
// echo "<br>";
// echo $favCol['rohan'];
// echo "<br>";
// echo $favCol[8]; 

foreach ($favCol as $key => $value) {
    echo "<br>Favorite color of $key is $value";
}



// MultiDimensional Array


// Creating a 2 dimensional array
$multiDim = array(
    array(2, 5, 7, 8),
    array(1, 2, 3, 1),
    array(4, 5, 0, 1)
);


// echo var_dump($multiDim);
// echo $multiDim[1][2];

// Printing the contents of a 2 dimensional array

// for ($i=0; $i < count($multiDim); $i++) { 
//     echo var_dump($multiDim[$i]);
//     echo "<br>";
// }

for ($i = 0; $i < count($multiDim); $i++) {
    for ($j = 0; $j < count($multiDim[$i]); $j++) {
        echo $multiDim[$i][$j];
        echo " ";
    }
    echo "<br>";
}

?>