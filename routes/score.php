
<?php
$connection = mysql_connect("localhost", "root", "juanita1"); // Establishing Connection with Server
$db = mysql_select_db("jkready", $connection); // Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$score = $_POST['score'];
$username = $_POST['username']
if($score !=''){
//Insert Query of SQL
$query = mysql_query("insert into scores(score) values ('$score')");
echo "<br/><br/><span>High Score Recorded...!!</span>";
}
else{
echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
}
}
mysql_close($connection); // Closing Connection with Server
?>
