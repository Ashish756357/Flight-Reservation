<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate the form data (you can add more validation if needed)
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
    } else {
        // Assuming you want to send an email with the feedback
        $to = "your@example.com"; // Change this to your email address
        $subject = "Feedback from website";
        $body = "Name: $name\nEmail: $email\nMessage: $message";

        // Send the email
        if (mail($to, $subject, $body)) {
            echo "Thank you for your feedback!";
        } else {
            echo "Oops! Something went wrong. Please try again later.";
        }
    }
}
?>
