<?php 

include "connection.php";

// echo(iudDB("INSERT INTO `role`(`role_name`) VALUES('Actor')"));

$resultSet = searchDB("SELECT * FROM `role`");
$rowCount = $resultSet->num_rows;

for ($i=0; $i < $rowCount; $i++) { 
  $row = $resultSet->fetch_assoc();

  echo("role: " . $row["role_name"]);
}
?>