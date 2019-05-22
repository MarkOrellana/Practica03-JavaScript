<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Crear Nuevo Usuario</title>
    <style type="text/css" rel="stylesheet">
    .error{
        color:red;
    }
    </style>
</head>
<body>
    <?php
    include '../PracticaValidaDatos/base/crearbase.php';
$cedula=isset($_POST["cedula"]) ? trim($_POST["cedula"]):null;
$nombres=isset($_POST["nombres"]) ? mb_strtoupper(trim($_POST["nombres"]),'UTF-8'):null;
$apellidos=isset($_POST["apellidos"]) ? mb_strtoupper(trim($_POST["apellidos"]),'UTF-8'):null;
$direccion=isset($_POST["direccion"]) ? mb_strtoupper(trim($_POST["direccion"]),'UTF-8'):null;
$telefono=isset($_POST["telefono"]) ? trim($_POST["telefono"]):null;
$correo=isset($_POST["correo"]) ? trim($_POST["correo"]):null;
$fechaNacimiento=isset($_POST["fecha"]) ? trim($_POST["fecha"]):null;
$sql="INSERT INTO usuario VALUES(0,'$cedula','$nombres','$apellidos','$direccion','$telefono','$correo','$fechaNacimiento','N',null, null)";
if($conn->query($sql)==TRUE){
    echo "<p>BIENVENIDO, PASASTE LAS VALIDACIONES.</p>";
}else{
    if($conn->errno==1062){
        echo"<p class='error'>La persona con cedula $cedula ya se encuentra registrada en el sistema.</p>";

    }else{
        echo"<p class='error'>Error:".msqli_error($conn)."</p>";

    }
}
$conn->close();
echo"<a href='../PracticaValidaDatos/index_usuario.html'>Regresar</a>";
?>

    </body>
</html>
