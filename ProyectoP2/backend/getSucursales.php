<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Manejo de solicitud OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include_once 'database.php';

// Crear una instancia de la clase Database y obtener la conexión
$database = new Database();
$conn = $database->getConnection();

if ($conn) {
    try {
        // Consulta SQL para obtener el nombre y dirección de las sucursales
        $sql = "SELECT Nombre_Suc, Dir_Suc FROM Sucursales";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        // Obtener los resultados en un array asociativo
        $sucursales = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Devolver los resultados en formato JSON
        header('Content-Type: application/json');
        echo json_encode($sucursales);
    } catch (PDOException $exception) {
        // Devolver un mensaje de error si ocurre un problema con la consulta
        header('Content-Type: application/json');
        echo json_encode(["error" => "Error en la consulta: " . $exception->getMessage()]);
    }
} else {
    // Devolver un mensaje de error si no se puede conectar a la base de datos
    header('Content-Type: application/json');
    echo json_encode(["error" => "No se pudo conectar a la base de datos"]);
}
?>
