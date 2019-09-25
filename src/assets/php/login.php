
<?php

header("Content-type:text/html;charset=utf-8");
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "login3";

$name = $_POST['username'];
$pwd = $_POST['password'];

 //echo $name;
 //echo $pwd;
$mysqli = new mysqli($servername, $username, $password, $dbname);
if($mysqli->connect_error) {
	die("连接失败" . $conn->connect_error);
}

# 预处理
# 初始化
$stmt = $mysqli->stmt_init();
# sql
$sql = "select password from user where username =?";

# 开始预处理
if($stmt->prepare($sql)) {
	#绑定数据
	$stmt->bind_param("s", $name);
	# 执行预处理
	$stmt->execute();
	# 绑定结果
	$stmt->bind_result($passwords);
	# 获取结果
	$stmt->fetch();
	
	
	  // echo $passwords;
	
	
	if($passwords) {
		if($passwords != $pwd) {
			echo "0";
		}else{
			echo "1";
		}
	}else{
		echo "2";
	}
	
	$stmt->close();
}
$mysqli->close();

