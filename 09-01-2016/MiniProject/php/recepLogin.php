<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $email = $request->email;
   $pass = $request->pass;
   $query = "SELECT email, password from receptionist_table where email='$email' and password='$pass'";
   $comments = mysql_query($query);
   $row = mysql_fetch_array($comments) or die(mysql_error());
   if(!empty($row['email']) AND !empty($row['password']))
   {
      echo "0";
   }
   else
   {
      echo "1";
   }
?>