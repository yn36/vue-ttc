<?php
header("Content-type:text/html;charset=utf-8");    //设置编码
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "login";
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
 mysqli_set_charset($conn,'utf8'); //设定字符集 
// 检测连接
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
// 使用 sql 创建数据表
$sql = "CREATE TABLE user (
 id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(30) NOT NULL,
 password VARCHAR(30) NOT NULL
 );";
if (mysqli_query($conn, $sql)) {
    echo "数据表 user 创建成功";
} else {
    echo "创建数据表错误: " . mysqli_error($conn);
}
mysqli_close($conn);
?>