
<?php
$forms = $_POST['formdata'];
$value = $_POST['value'];
$file = "../".$value.".js";
$codeer = file_get_contents($file);
$vals= $forms;
$codeer = str_replace("]",",".stripslashes($vals)."]",$codeer);
$send = file_put_contents($file, $codeer);
?>
<?php
?>
