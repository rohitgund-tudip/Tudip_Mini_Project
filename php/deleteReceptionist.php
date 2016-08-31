<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
   $r_id = $request->id;
 
   $query = "DELETE FROM receptionist_table WHERE rec_id = '$r_id'";
   $comments = mysql_query($query);
   if(!empty($comments))
   {
      echo "0";
   }
   else {
      echo "1";
   }
?>

