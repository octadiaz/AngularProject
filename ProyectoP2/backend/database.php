<?php
class Database {
    private $host = "127.0.0.1"; // Cambia si es necesario (servidor de MySQL)
    private $db_name = "ip2"; // Nombre de la base de datos
    private $username = "root"; // Usuario de MySQL
    private $password = ""; // Contraseña de MySQL
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Error en la conexión: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>
