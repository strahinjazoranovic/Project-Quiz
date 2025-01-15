<?php
// Include the database connection file
include '../database/db_connect.php';

// Initialize variables for messages
$message = "";
$toastClass = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $username = htmlspecialchars(trim($_POST['username']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = trim($_POST['password']);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "Invalid email format";
        $toastClass = "#dc3545"; // Danger color
    } else {
        try {
            // Check if email already exists
            $checkEmailStmt = $conn->prepare("SELECT email FROM userdata WHERE email = ?");
            $checkEmailStmt->bind_param("s", $email);
            $checkEmailStmt->execute();
            $checkEmailStmt->store_result();

            if ($checkEmailStmt->num_rows > 0) {
                $message = "Email ID already exists";
                $toastClass = "#007bff"; // Primary color
            } else {
                // Hash the password
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);

                // Prepare and bind
                $stmt = $conn->prepare("INSERT INTO userdata (username, email, password) VALUES (?, ?, ?)");
                $stmt->bind_param("sss", $username, $email, $hashed_password);

                if ($stmt->execute()) {
                    $message = "Account created successfully";
                    $toastClass = "#28a745"; // Success color
                } else {
                    $message = "Error: " . $stmt->error;
                    $toastClass = "#dc3545"; // Danger color
                }

                $stmt->close();
            }

            $checkEmailStmt->close();
        } catch (Exception $e) {
            $message = "Unexpected error occurred: " . $e->getMessage();
            $toastClass = "#dc3545"; // Danger color
        } finally {
            $conn->close();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>Register</title>
</head>
<body class="bg-light">
    <div class="container mt-5">
        <!-- Toast Notification -->
        <?php if ($message): ?>
            <div class="toast align-items-center text-white border-0 mb-3" role="alert" style="background-color: <?php echo $toastClass; ?>;">
                <div class="d-flex">
                    <div class="toast-body">
                        <?php echo $message; ?>
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        <?php endif; ?>

        <!-- Registration Form -->
        <form method="post" class="form-control p-4" style="max-width: 400px; margin: auto;">
            <h2 class="text-center mb-4">Register</h2>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-success">Register</button>
            </div>
        </form>
    </div>
    <script>
        // Show toast notification
        const toastElList = [].slice.call(document.querySelectorAll('.toast'));
        const toastList = toastElList.map(toastEl => new bootstrap.Toast(toastEl));
        toastList.forEach(toast => toast.show());
    </script>
</body>
</html>
