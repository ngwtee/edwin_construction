<?php 
$errors = '';
$myemail = 'ngonidzashegwt@gmail.com';

if( isset($_POST['name'])) {
	if(empty($_POST['name'])  || 
  	empty($_POST['email']) || 
   	empty($_POST['subject']) || 
   	empty($_POST['message'])) {
		$errors .= "\n Error: all fields are required";
	}else {
		$name = $_POST['name'];
		$email_address = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];
	}
}else {
	if(empty($_POST['firstname'])  || 
	empty($_POST['lastname']) || 
	empty($_POST['address']) ||  
	empty($_POST['message']) || 
	empty($_POST['interval']) || 
	empty($_POST['number'])){
    	$errors .= "\n Error: all fields are required";
	}else {
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$email_address = $_POST['email'];
		$cmessage = $_POST['message'];
		$interval = $_POST['interval'];
		$number = $_POST['number'];
	}
}

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail; 

	if( isset($_POST['name'])) {
		$email_subject = "Contact form submission: $name";
		$email_body = "You have received a new message. ".
		" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message";
	}else {
		$email_subject = "Contact form submission: $firstname " . $lastname;
		$email_body = "You have received a new message. ".
		" Here are the details:\n Number: $number \n Email: $email_address \n Interval: $interval \n Message \n $message";
	}
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
if( isset($_POST['name'])) {
	echo '<a href="contact.html"><button> OK </button></a>';
}else{
	echo '<a href="pricing.html"><button> OK </button></a>';
}
?>



</body>
</html>