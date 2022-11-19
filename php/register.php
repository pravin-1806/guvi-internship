<?php
	$firstName = $_POST['firstname'];
	$lastName = $_POST['lastname'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$repassword = $_POST['repassword'];
	$number = $_POST['number'];

	$conn = new mysqli('localhost','root','','register');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstname, lastname, email, password, repassword, number) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $firstname, $lastname, $email, $password, $repassword, $number);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>