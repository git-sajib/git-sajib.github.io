<?php

if(isset($_POST["submit"])) {

    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];
    

    $mailTo = "info@devsajib.com";
    $headers = "From: ".$mailFrom; 
    $txt = "You have received an e-mail from".$name.".\n\n".$message;
    
    mail($mailTo, $headers, $txt, $message);
    header("Location: success.php");
}

?>