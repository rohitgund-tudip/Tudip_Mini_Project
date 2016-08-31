<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $id = $request->id;
   $name = $request->name;
   $email = $request->email;
   $phoneNo = $request->phoneno;
   $userName = $request->username;
   $pass = $request->pass;
   $query = "UPDATE receptionist_table 
	SET full_name = '$name', email = '$email', phoneno = '$phoneNo', username = '$userName', password = '$pass' 
	WHERE rec_id = '$id'";
   $comments = mysql_query($query);
   if(!empty($comments))
   {
      echo "0";
   }
   else {
      echo "1";
   }
?>
