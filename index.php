<<<<<<< Updated upstream
<!DOCTYPE html>
<html>
<head>
    <title>Start Page</title>
</head>
<body>
    <h1>Welcome to My Project</h1>
    <p>This is a placeholder homepage with dummy data.</p>
</body>
</html>
<?php
include 'db_connect.php';

$sql = "SELECT * FROM your_table_name"; // Replace with your table
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }
} else {
    echo "No data found";
}

$conn->close();
=======
<<<<<<< HEAD
<!DOCTYPE html>
<html>
<head>
    <title>Start Page</title>
</head>
<body>
    <h1>Welcome to My Project</h1>
    <p>This is a placeholder homepage with dummy data.</p>
</body>
</html>
<?php
include 'db_connect.php';

$sql = "SELECT * FROM your_table_name"; // Replace with your table
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }
} else {
    echo "No data found";
}

$conn->close();
=======
<!DOCTYPE html>
<html>
<head>
    <title>Start Page</title>
</head>
<body>
    <h1>Welcome to My Project</h1>
    <p>This is a placeholder homepage with dummy data.</p>
</body>
</html>
<?php
include 'db_connect.php';

$sql = "SELECT * FROM your_table_name"; // Replace with your table
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }
} else {
    echo "No data found";
}

$conn->close();
>>>>>>> d6daccfa47b9b79e794eebfc9124f8859f6c5c46
>>>>>>> Stashed changes
?>