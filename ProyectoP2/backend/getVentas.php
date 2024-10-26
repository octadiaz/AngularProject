<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Termina la solicitud aquí si es una solicitud preflight
    http_response_code(200);
    exit();
}

include_once 'database.php';

// Crear una instancia de la clase Database y obtener la conexión
$database = new Database();
$conn = $database->getConnection();

if ($conn) {
    try {
        // Consulta SQL para obtener todas las ventas desde la tabla `Venta`
        $sql = "SELECT * FROM Venta";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        // Obtener los resultados en un array asociativo
        $ventas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Devolver los resultados en formato JSON
        header('Content-Type: application/json');
        echo json_encode($ventas);
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
