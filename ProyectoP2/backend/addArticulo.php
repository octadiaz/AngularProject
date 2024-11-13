<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
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
        // Leer los datos del cuerpo de la solicitud
        $data = json_decode(file_get_contents("php://input"));

        // Verificar que se hayan enviado los datos necesarios
        if (isset($data->descripcion) && isset($data->precio)) {
            // Preparar la consulta de inserción
            $sql = "INSERT INTO Articulos (Descripcion, Precio) VALUES (:descripcion, :precio)";
            $stmt = $conn->prepare($sql);

            // Vincular los valores de los parámetros
            $stmt->bindParam(':descripcion', $data->descripcion);
            $stmt->bindParam(':precio', $data->precio);

            // Ejecutar la consulta y verificar si se insertó correctamente
            if ($stmt->execute()) {
                echo json_encode(["message" => "Artículo agregado exitosamente"]);
            } else {
                echo json_encode(["error" => "Error al agregar el artículo"]);
            }
        } else {
            echo json_encode(["error" => "Datos incompletos"]);
        }
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
