<?php
session_start();

if (isset($_POST['email'])){
    
    include_once 'dbh.inc.php';

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $select = "SELECT * FROM `user` WHERE email = '$email' AND username = '$username'";

    $result = mysqli_query($con, $select);

    if (mysqli_num_rows($result) > 0) {
        $_SESSION['signup_error'] = "Username and Email Must be Unique";
        header('Location:../signup.php?error=user_already_exists');
        exit();
    } else {
        $sql = "INSERT INTO `user` (`username`, `email`, `password`) 
                VALUES ('$username', '$email', '$password');";

        if ($con->query($sql) === true) {
            // Redirect to login page before any output
            header('Location:../login.php');
            exit(); // Ensure that no further code is executed after the header redirection
        } else {
            $_SESSION['signup_error'] = "Error: {$sql}";
            header('Location:../signup.php?error=something_went_wrong');
            exit();
        }
    }

    $con->close();
}
else{
    header('Location:../signup.php');
    exit();
}
?>
