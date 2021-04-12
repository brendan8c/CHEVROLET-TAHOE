<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$tel = $_POST['tel'];


// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Имя в соцсети:</b> $tel<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth = true;
//$mail->SMTPDebug = 2;
$mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
};

// Настройки вашей почты
$mail->Host = 'smtp.yandex.ru'; // SMTP сервера вашей почты
$mail->Username = 'name@yandex.ru'; // Логин на почте
$mail->Password = 'parol'; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('name@yandex.ru', 'My_site'); // Адрес почты и имя отправителя


$mail->addAddress('name@gmail.com'); // Получатель письма
// $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

// Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile=tempnam(
            sys_get_temp_dir(),
            sha1($file['name'][$ct])
        );
        $filename=$file['name'][$ct];
        if (move_uploaded_file(
            $file['tmp_name'][$ct],
            $uploadfile
        )) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }
}
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // $mail->send();

    if (!$mail->send()) {
        return $mail->ErrorInfo;
    } else {
        return true;
    }