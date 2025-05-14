<?php

function setUpConnection()
{

    $host = "db4free.net";
    $username = "da_dev140525";
    $password = "zxngh@sb_db#140522";
    $database = "da_sandbox_db";

    try {
        
        $connection = new mysqli($host, $username, $password, $database);

        return $connection;
    
    } catch (mysqli_sql_exception $e) {
        
        echo("Connection failed: " . $e->getMessage()); // development environment
        // die("db_connection_failed"); // production environment
    }
}

// search database
function searchDB($query)
{
    $connection = setUpConnection();
    $resultSet = $connection->query($query);
    $connection->close();
    return $resultSet;
}

// insert, update, delete
function iudDB($query)
{
    $connection = setUpConnection();
    $status = $connection->query($query);
    $connection->close();
    return $status;
}
?>
