<?php
$servername = "localhost";
$username = "quizgala_sd";
$password = "UL{M#1uUc~I_";
$dbname = "quizgala_db";

$con = mysqli_connect($servername, $username, $password, $dbname);

if (!$con) {
    die("Connection to the database failed due to" . mysqli_connect_error());
}
?>