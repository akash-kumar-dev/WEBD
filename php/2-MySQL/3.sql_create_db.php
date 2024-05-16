<?php

$servername = "localhost";
$username = "root";
$password = "11";

$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
    die("failed to connect" . mysqli_connect_error());
} else {
    echo "connection successful <br>";
}

// create a DB
$sql = "CREATE DATABASE php";
$result = mysqli_query($conn, $sql);

if ($result) {
    echo "The DB created successfully.";
} else {
    echo "DB not saved ERROR " . mysqli_error($conn);
}


?>