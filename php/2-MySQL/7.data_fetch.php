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

$sql = "SELECT * FROM phptrip";
$result = mysqli_query($conn, $sql);

// find the numbers of record
echo mysqli_num_rows($result);
echo "<br>";

// Display the rows returned by the sql query
if (mysqli_num_rows($result) > 0) {

    // mysqli_fetch_assoc($result);     // -> fetch request one by one, after next call it fetches the next row
    // echo var_dump(mysqli_fetch_assoc($result));
    // echo "<br>";
    // echo var_dump(mysqli_fetch_assoc($result));

    while ($row = mysqli_fetch_assoc($result)) {
        // echo var_dump($row);
        echo $row['sno'] . " Hello " .$row['name'] . " welcome to " . $row['dest'];
        echo "<br>";
    }
}

?>