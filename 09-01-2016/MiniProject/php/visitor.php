<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $name = $request->vname;
   $email = $request->email;
   $phoneNo = $request->phoneNo;
   $inTime = $request->intime;
   $outTime = $request->outtime;
   $username = $request->username;
	
   $query = "INSERT INTO visitor_table (visitor_name, email,phoneno, inTime, outTime, added_by) VALUES ('$name', '$email', '$phoneNo', '$inTime', '$outTime', '$username')";
   $comments = mysql_query($query);
   if(!empty($comments))
   {
      echo "0";
   }
   else
   {
      echo "1";
   }
?>