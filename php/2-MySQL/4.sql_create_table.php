<?php

// Connecting to the Database
$servername = "localhost";
$username = "root";
$password = "11";
$database = "php";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Die if connection was not successful
if (!$conn) {
    die("Sorry we failed to connect: " . mysqli_connect_error());
} else {
    echo "Connection was successful<br>";
}

// Create a table in the db

// $sql = "CREATE TABLE `phptrip` (
//     `sno` INT(6) NOT NULL AUTO_INCREMENT,
//     `name` VARCHAR(12) NOT NULL,
//     `dest` VARCHAR(6) NOT NULL,
//     PRIMARY KEY (`sno`)
// )";

$sql = "CREATE TABLE student (
    rollno INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age INT(5)
)";

$result = mysqli_query($conn, $sql);


// Check for the table creation success
if ($result) {
    echo "The table was created successfully!<br>";
} else {
    echo "The table was not created successfully because of this error ---> " . mysqli_error($conn);
}

mysqli_close($conn);

?>
