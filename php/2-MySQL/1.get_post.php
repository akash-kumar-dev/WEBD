<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];
  $password = $_POST['pass'];

  echo "Email: " . $email . "Password: " . $password;
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Get-Post</title>
</head>
<body>
  
  <form action="/" method="post">
    <h3>Form Control</h3>
    <label for="email">Email: </label>
    <input id="email" type="text" placeholder="abc@xyz.com" name="email">
    <br>
    <label for="password">Password: </label>
    <input type="password" id="password" name="pass"><br>
    <button type="submit">Submit</button>
  </form>

</body>
</html>