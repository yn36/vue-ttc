<?php

header("Content-type:text/html;charset=utf-8");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "login3";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error) {
	die("连接失败".$conn->connect_error);
}


$sql = "CREATE TABLE USER (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
username varchar(30) NOT NULL UNIQUE,
password varchar(30) NOT NULL
)";


if($conn -> query($sql) === TRUE) {
	echo "数据表创建成功";
}else {
	echo ($conn->error);
}


$conn->close();
?>