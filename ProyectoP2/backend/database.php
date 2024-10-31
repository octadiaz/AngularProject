<!-- CONEXION LOCAL
/* class Database {
    private $host = "127.0.0.1"; // Cambia si es necesario (servidor de MySQL)
    private $db_name = "ip2"; // Nombre de la base de datos
    private $username = "root"; // Usuario de MySQL
    private $password = ""; // Contraseña de MySQL
    public $conn;
    mysql://root:ZXHBWZboOoEVVhHEMfakGmIrywyHocoE@junction.proxy.rlwy.net:26706/railway */

/*  public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Error en la conexión: " . $exception->getMessage();
        }
        return $this->conn;
    }
} */

<?php
class Database {
    private $host;
    private $db_name;
    private $username;
    private $password;
    public $conn;

    public function __construct() {
        // Usar las variables de entorno para configurar la conexión
        $this->host = getenv("DB_HOST");
        $this->db_name = getenv("DB_NAME");
        $this->username = getenv("DB_USER");
        $this->password = getenv("DB_PASSWORD");
    }

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
