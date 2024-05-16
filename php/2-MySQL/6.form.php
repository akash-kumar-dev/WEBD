<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $desc = $_POST['desc'];

    echo "Email: " . $email . " Description: " . $desc . " name : " . $name . "<br><br>";
}



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


// Run at once for creating Table only

// $sql = "CREATE TABLE contact_us (
//     s_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(20) NOT NULL,
//     email VARCHAR(20) NOT NULL,
//     desc1 VARCHAR(10)
// )";

// $result = mysqli_query($conn, $sql);
// if ($result) {
//     echo "The table was created successfully!<br>";
// } else {
//     echo "The table was not created successfully because of this error ---> " . mysqli_error($conn);
// }


$sql = "INSERT INTO contact_us (name, email, desc1) VALUES ('$name', '$email','$desc')";

$result = mysqli_query($conn, $sql);
if ($result) {
    echo "Data Saved Successfully!<br>";
} else {
    echo "The Data was not saved successfully because of this error ---> " . mysqli_error($conn);
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact us</title>
</head>
<body>
  
  <form action="/6.form.php" method="post">
    <h3>Contact us</h3>

    <label for="name">Name: </label>
    <input type="text" placeholder="" id="name" name="name"><br><br>

    <label for="email">Email: </label>
    <input type="text" placeholder="abc@xyz.com" name="email" id="email"><br><br>

    <label for="desc">Description: </label>
    <textarea name="desc" id="desc"></textarea><br><br>

    <button type="submit">Submit</button>
  </form>

</body>
</html>