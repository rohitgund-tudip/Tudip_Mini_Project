<?php
   $con = mysql_connect("localhost","root","");
   mysql_select_db("ROHIT_GUND_GUESTBOOK", $con);
  
   $query = "SELECT * from receptionist_table";
  
   $result = mysql_query($query);
   while ($row = mysql_fetch_assoc($result)) {
      $arr[] = $row;
   }
   echo json_encode($arr);
?>