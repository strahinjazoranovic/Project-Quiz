<?php
$host = 'localhost';
$user = 'root'; // Default user for XAMPP
$password = ''; // Default password for XAMPP
$database = 'quiz_db';

// Connect to database
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch questions
$sql = "SELECT id, question, option1, option2, option3, option4 FROM questions";
$result = $conn->query($sql);

$questions = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $questions[] = $row;
    }
}

// Return as JSON
echo json_encode($questions);

$conn->close();
?>
