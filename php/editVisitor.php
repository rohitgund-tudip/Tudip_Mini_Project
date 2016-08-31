<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $id = $request->id;
   $name = $request->name;
   $email = $request->email;
   $phoneNo = $request->phoneno;
   $inTime = $request->inTime;
   $outTime = $request->outTime;
   $query = "UPDATE visitor_table 
	SET visitor_name = '$name', email = '$email', phoneno = '$phoneNo', inTime = '$inTime', outTime = '$outTime' 
	WHERE sr_no = '$id'";
   $comments = mysql_query($query);
   if(!empty($comments))
   {
      echo "0";
   }
   else {
      echo "1";
   }
?>
