<!DOCTYPE>
<html>
<head>
	<title>sean mid term 2</title>
</head>
<body>
<!-- sean edwards -->
<form action="" method="post">
<h1>Enter Student Grades</h1>
<br>
<br>
<input type="text" name="studentsName" value="" placeholder="please enter students name" required />
<br>
<br>
<input type="text" name="studentsPercent"  value="" placeholder="Please enter students grade" required />
<br>
<br>
<input type="submit" name="submit" value="submit">
<br>
<br>
</form>
<hr>
</body>
</html>

<?php

	$user = "root";
	$pass = "root";
	$dbh = new PDO("mysql:host=localhost;dbname=myssl;port=8889", $user, $pass);
	echo "<br>";
			echo "<table width=100% align=center";
			echo "<tr>";
			echo "<th>Students ID</th>";
			echo "<th>Students Name</th>";
			echo "<th>Students Percentage</th>";
			echo "<th>Students Letter Grade</th>";
			echo "<th>Action</th></tr>";
 $stmt = $dbh -> prepare("select * from grades order by studentId ASC;");
			$stmt->execute();
			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

			foreach ($result as $row) {
				echo 
				'<tr><td>'.$row['studentid'].'</td><td>'.$row['studentsName'].'</td><td>'.$row['studentsPercent'].'</td><td>'.$row['studentsLetterGrade'].'</td>
				<td><a href="delete.php?id='.$row['studentid'].'">Delete</a></td>';
			}


if(isset($_POST["submit"])){

 // > greater than
 // < less than
 // >=greater than or equal to
 // <=less than or equal to

	if((($_POST["studentsName"] !=null) && (is_string($_POST["studentsName"]))) && (($_POST["studentsPercent"] != null)
		&& (is_numeric($_POST["studentsPercent"])))) {
		//if studends percent is greater than 0 but less than 100
	if($_POST["studentsPercent"] >= 0 && $_POST["studentsPercent"] <= 100){
	function studentArray(){
	$studName = $_POST["studentsName"];
	$studPercent = $_POST["studentsPercent"];

	if($studPercent <= 100 && $studPercent >= 90){
		$studLetterGrade = "A";
	}elseif ($studPercent <= 89 && $studPercent >= 80){
		$studLetterGrade = "B";
	}elseif ($studPercent <= 79 && $studPercent >= 70){
		$studLetterGrade = "C";
	}elseif ($studPercent <= 69 && $studPercent >= 60){
		$studLetterGrade = "D";
	}else{
		$studLetterGrade = "F";
		}
	return array ("name" => $studName, "percent" => $studPercent, "letter" => $studLetterGrade);
		}

				$data = studentArray();


	$user = "root";
	$pass = "root";

	$dbh = new PDO("mysql:host=localhost;dbname=myssl;port=8889",$user,$pass);
$sth = $dbh->prepare("INSERT INTO grades(studentsName, studentsPercent,studentsLetterGrade) value(:name, :percent, :letter)");
	$sth -> execute($data);
				
	header('Location: studentsinclass.php');
			}

	}else{
		//if no number is inputted
		echo "<p>Please input a grade percentage between 0-100</p>";
	}

	}else{

		echo "<p>Please  make sure that put a name and a percentage</p>";
	 }

?>