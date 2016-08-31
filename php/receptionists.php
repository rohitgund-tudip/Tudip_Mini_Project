<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $name = $request->name;
   $email = $request->email;
   $phoneNo = $request->phoneNo;
   $userName = $request->userNm;
   $pass = $request->pass;
   $query = "INSERT INTO receptionist_table (full_name, email, phoneno, username, password) VALUES ('$name', '$email', '$phoneNo', '$userName', '$pass')";
   $comments = mysql_query($query);
   if(!empty($comments))
   {
      echo "0";
   }
   else {
      echo "1";
   }
?>

