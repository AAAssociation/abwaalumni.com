<?php
$field_firstname = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];
$field_topic = $_POST['cf_topic'];

$mail_to = 'info@abwaalumni.com';
$subject = .$field_topic;

$body_message = 'From: '.$field_firstname."\n";
$body_message .= 'E-mail: '.$field_email."\n\n\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'http://abwaalumni.com';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to info@abwaalumni.com');
		window.location = 'http://abwaalumni.com';
	</script>
<?php
}
?>