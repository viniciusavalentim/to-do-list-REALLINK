<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$id=isset($_GET['id']) ? $_GET['id'] : die('ERROR: Record ID not found.');
 
include '../config/database.php';
 
try {
    $query = "SELECT id, title, description, status FROM tasks WHERE id = ? LIMIT 0,1";
    $stmt = $con->prepare( $query );
    $stmt->bindParam(1, $id);

    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}
 
catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
?>