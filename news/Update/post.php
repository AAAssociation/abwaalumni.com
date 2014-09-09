
<?php
$forms = $_POST['formdata'];
$file = "../school.js";
$codeer = file_get_contents($file);
$codeer = str_replace("]",",".$forms."]",$codeer);
$send = file_put_contents($file, $codeer);
?>
<script>
	window.location = 'http://abwaalumni.com';
</script>
<?php
?>
 