<?php

$age = 12;

// If else ladder
if ($age > 18) {
    echo "You can drink water with chai and alcohol";
} elseif ($age > 13) {
    echo "You can drink chai only with water. No alcohol for you";
} else {
    echo "You can drink water only";
}

// Switch statement
echo "<br><hr>";


switch ($age) {
    case 12:
        echo "You are 12 years old <br>";
        break;

    case 45:
        echo "You are 45 years old <br>";
        break;

    case 56:
        echo "You are 56 years old boy <br>";
        break;

    default:
        echo "Your age is weird <br>";
        break;

}


?>