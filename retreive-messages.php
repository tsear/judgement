<?php
$sql = "SELECT * FROM messages";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Username: " . $row["username"]. " - Message: " . $row["message"]. "<br>";
    }
} else {
    echo "0 results";
}
?>
