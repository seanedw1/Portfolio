<!--sean edwards-->

<?php
if (isset($_POST["submit"])) {
  $filebasename = basename($_FILES['userfile']['name']);
  $ext = strtolower(substr($filebasename, strpos($filebasename, '.') + 1));
  if (
  ($ext == "jpg" || $ext == "png" || $ext == "gif") && ($_FILES["userfile"]["type"] == "image/jpeg" || $_FILES["userfile"]["type"] == "image/png" || $_FILES["userfile"]["type"] == "image/gif")) {
    $desired_dir = "uploads/";
    $file_name = $_FILES['userfile']['name'];
    if (file_exists($desired_dir . $file_name)) {
      echo "Error! " . $file_name . " filename already exits.";
    }else {
      $image = $_FILES["userfile"]["name"]; /* Displaying Image*/
      $img = "uploads/".$image;
      $main_email = $_POST["school_email"];
      move_uploaded_file($_FILES["userfile"]["tmp_name"], $desired_dir . $file_name);
      echo "Sucessfully Uploaded: " . $file_name . "<br /> Email on file is " . $main_email . "<br />";
      echo '<img width="500" max-height="500" src=" ' .$img .' ">';
    }
  }
}
?>
<?php require_once("activity2_2form.php");?>