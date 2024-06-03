<?php
    include ("Conexion_bd.php");
    if ($_SERVER["REQUEST_METHOD"] =="POST") {
    $nombre_com = $_POST["nom_r"];
    $usuario = $_POST["user_r"];
    $correo = $_POST["correo_r"];
    $password = password_hash($_POST["pass_r"], PASSWORD_DEFAULT);

    $query = "INSERT INTO usuarios (nombre_lr, usuario_lr, correo_lr, password_lr)
            VALUES ('$nombre_com', '$usuario', '$correo', '$password')";

    $ejecutar = mysqli_query($conexion, $query);
    }
?>