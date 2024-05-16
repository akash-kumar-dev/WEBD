<?php

$servername = "localhost";
$username = "root";
$password = "11";
$database = "php";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Sorry we failed to connect: " . mysqli_connect_error());
} else {
    echo "Connection was successful<br>";
}

// Variables to be inserted into the table
$name = "Vikrant";
$destination = "Russia";

// Sql query to be executed

// $sql = "INSERT INTO student (name, age) VALUES ('rohan 2', 22), ('shubham', 24)";

// $sql = "INSERT INTO `phptrip` (`name`, `dest`) VALUES ('$name', '$destination')";

$sql = "INSERT INTO phptrip (name, dest) VALUES ('$name', '$destination')";

$result = mysqli_query($conn, $sql);



// Add a new trip to the Trip table in the database
if ($result) {
    echo "The record has been inserted successfully successfully!<br>";
} else {
    echo "The record was not inserted successfully because of this error ---> " . mysqli_error($conn);
}

?>
