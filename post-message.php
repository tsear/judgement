<?php
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST") {
   $message = mysqli_real_escape_string($conn,$_POST['message']);
   $username = $_SESSION['login_user'];
   
   $sql = "INSERT INTO messages (username, message) VALUES ('$username', '$message')";
   
   if ($conn->query($sql) === TRUE) {
       echo "New message posted successfully";
   } else {
       echo "Error: " . $sql . "<br>" . $conn->error;
   }
}
?>
