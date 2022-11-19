<?php 
	include('conn.php');
	session_start();
	if(isset($_POST['email'])){
		$email=$_POST['email'];
		$password=md5($_POST['password']);
 $conn = new mysqli('localhost','root','','register');
		$query=$conn->query("select * from user where username='$username' and password='$password'");
 
		if ($query->num_rows>0){
			$row=$query->fetch_array();
			$_SESSION['user']=$row['userid']; 
		}
		else{
			?>
  				<span>Login Failed. User not Found.</span>
  			<?php 
		}
	}
?>