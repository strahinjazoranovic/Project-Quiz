<<<<<<< Updated upstream
<?php
// Database connection variables
$servername = "localhost";
$username = "root"; // Default for XAMPP
$password = ""; // Default for XAMPP
$dbname = "jsquiz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Data to insert
$name = $_POST['name'];
$email = $_POST['email'];

// SQL query to insert data
$sql = "INSERT INTO your_table_name (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
=======
<<<<<<< HEAD
<<<<<<< HEAD
<?php
// Database connection variables
$servername = "localhost";
$username = "root"; // Default for XAMPP
$password = ""; // Default for XAMPP
$dbname = "jsquiz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Data to insert
$name = $_POST['name'];
$email = $_POST['email'];

// SQL query to insert data
$sql = "INSERT INTO your_table_name (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
=======
<?php
// Database connection variables
$servername = "localhost";
$username = "root"; // Default for XAMPP
$password = ""; // Default for XAMPP
$dbname = "jsquiz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Data to insert
$name = $_POST['name'];
$email = $_POST['email'];

// SQL query to insert data
$sql = "INSERT INTO your_table_name (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
>>>>>>> 8155ba567d919feba3b606e8381cdac573439d63
=======
<?php
// Database connection variables
$servername = "localhost";
$username = "root"; // Default for XAMPP
$password = ""; // Default for XAMPP
$dbname = "jsquiz";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Data to insert
$name = $_POST['name'];
$email = $_POST['email'];

// SQL query to insert data
$sql = "INSERT INTO your_table_name (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
>>>>>>> d6daccfa47b9b79e794eebfc9124f8859f6c5c46
>>>>>>> Stashed changes
?>