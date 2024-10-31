<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include_once 'database.php';

// Crear una instancia de la clase Database y obtener la conexión
$database = new Database();
$conn = $database->getConnection();

// Manejar solicitudes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Leer los datos del cuerpo de la solicitud PUT
$data = json_decode(file_get_contents("php://input"));

if ($conn && isset($data->index) && isset($data->venta)) {
    try {
        // Extraer los valores de la solicitud
        $index = (int)$data->index; // Índice de la fila
        $venta = $data->venta;

        // Consulta SQL para actualizar las ventas en la fila específica usando el ID
        $sql = "UPDATE Venta 
                SET SantaFe = :santaFe, Rosario = :rosario, SantoTome = :santoTome, Rafaela = :rafaela, Parana = :parana 
                WHERE id = :id";

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':santaFe', $venta->SantaFe);
        $stmt->bindParam(':rosario', $venta->Rosario);
        $stmt->bindParam(':santoTome', $venta->SantoTome);
        $stmt->bindParam(':rafaela', $venta->Rafaela);
        $stmt->bindParam(':parana', $venta->Parana);
        $stmt->bindParam(':id', $index, PDO::PARAM_INT);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            echo json_encode(["message" => "Venta actualizada exitosamente."]);
        } else {
            echo json_encode(["error" => "No se pudo actualizar la venta."]);
        }
    } catch (PDOException $exception) {
        // Devolver un mensaje de error si ocurre un problema con la consulta
        header('Content-Type: application/json');
        echo json_encode(["error" => "Error en la consulta: " . $exception->getMessage()]);
    }
} else {
    // Devolver un mensaje de error si no se pudo conectar o si faltan datos
    header('Content-Type: application/json');
    echo json_encode(["error" => "Datos inválidos o no se pudo conectar a la base de datos."]);
}
?>
