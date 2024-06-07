<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true);

    if ($data) {
        include '../config/database.php';

        try {
            $query = "UPDATE tasks 
                      SET title=:title, description=:description, status=:status 
                      WHERE id = :id";
            $stmt = $con->prepare($query);

            $id = $data['id'];
            $title = $data['title'];
            $description = $data['description'];
            $status = $data['status'];

            $stmt->bindParam(':id', $id);
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':description', $description);
            $stmt->bindParam(':status', $status);

            if ($stmt->execute()) {
                echo json_encode(array('result' => 'success'));
            } else {
                echo json_encode(array('result' => 'fail'));
            }

        } catch (PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }
    } else {
        echo json_encode(array('result' => 'fail', 'message' => 'Invalid JSON'));
    }
} else {
    echo json_encode(array('result' => 'fail', 'message' => 'Invalid request method'));
}
?>