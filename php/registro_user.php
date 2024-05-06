<?php
    include 'Conexion_bd.php';

    $nombre_com = $_POST["nom_r"];
    $usuario = $_POST["user_r"];
    $correo = $_POST["correo_r"];
    $password = $_POST["pass_r"];

    $query = "INSERT INTO usuarios (nombre_lr, usuario_lr, correo_lr, password_lr)
            VALUES ('$nombre_com', '$usuario', '$correo', '$password')";

    $ejecutar = mysqli_query($conexion, $query);
?>