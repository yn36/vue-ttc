<?php

header("Content-type:text/html;charset=utf-8");

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "login3";

$user = $_POST["username"];
$pass = $_POST["password"];

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("连接失败" . $conn->connect_error);
}

//预处理

$stmt = $conn->stmt_init();
$sql = "insert into user (username, password) values (?, ?)";
# 开始预处理$sql
if ($stmt->prepare($sql)) {
    #绑定数据
    $stmt->bind_param("ss", $user, $pass);
    if ($stmt->execute() === true) {
        echo 1;
        exit;
    } else {
        echo 0;
        exit;
    }
    $stmt->close();
}

$conn->close();
