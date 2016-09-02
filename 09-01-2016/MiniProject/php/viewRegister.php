<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
   $postdata = file_get_contents("php://input");
   $request = json_decode($postdata);
    
   $username = $request->username;
   if($username == "admin")
   {
      $query = "SELECT * from visitor_table";
   }
   else
   {
      $query = "SELECT * from visitor_table WHERE added_by = '$username'";
   }
   $result = mysql_query($query);
   while ($row = mysql_fetch_assoc($result)) {
      $arr[] = $row;
   }
   echo json_encode($arr);
?>