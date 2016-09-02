<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $v_id = $request->id;
 
   $query = "DELETE FROM visitor_table WHERE sr_no = '$v_id'";
   $comments = mysql_query($query);
   if(!empty($comments))
   {
      echo "0";
   }
   else {
      echo "1";
   }
?>

