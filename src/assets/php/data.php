<?php
header("Content-type:text/html;charset=utf-8");

$servername = "localhost";
$username = "root";
$password = "root";



# 连接数据库的接口
$mysqli = new mysqli($servername, $username, $password);

if ($mysqli->connect_error) {
    die("连接失败" . $mysqli->connect_error);
}

$sql = "create database login3";

if ($mysqli->query($sql) === TRUE) {
    echo ("创建成功");
} else {
    echo ($mysqli->error);
}
$mysqli->close();
