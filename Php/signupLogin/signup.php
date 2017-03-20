  <body>
    <?php
      if (isset($_POST['username'])) {
        if ($_POST['password'] != '' && $_POST['username'] != '') {
          function makeArray(){
            $salt = "SaltyHash";
            $epass = md5($_POST['password'].$salt);
            $euser = $_POST['username'];

            return array("USER NAME: " => $euser, "Salted PASSWORD: " => $epass);

          }
          echo "<h2>CONGRATULATIONS!</h2> Your membership account sign-up was sucessfull.";
          echo "<table with=100% align=left border=0><tr><td>";

          $data = makeArray();

          foreach ($data as $attribute => $data) {
            echo "<p align=left color=#ff4136>{$attribute}{$data}";
          }
          $tmp_file = $_FILES['userfile']['tmp_name'];
          $target_file = basename($_FILES['userfile']['name']);
          $upload_dir = "uploads";

          if (move_uploaded_file($tmp_file, $upload_dir . "/" . $target_file)) {
            echo "File Uploaded sucessfully";
            echo "<br/><br/>Your Profile Photo: " . $target_file;
            echo "<br/><br/><img src='" . $upload_dir . "/" . $target_file . "'width='200'/>";
          }else {
            echo "<br/><br/>Profile Picture: No photo was uploaded.";
          }
          echo "<br/><br/><a href='index.html'>Please try logging in Now!</a>";
          echo "</td></tr></table>";

          $user = 'root';
          $pass = 'root';
          $dbh = new PDO('mysql:host=localhost;dbname=myssl;port=8889', $user, $pass);


          $salt = "SaltyHash";
          $epass = md5($_POST['password'].$salt);
          $euser = $_POST['username'];

          $stmt = $dbh->prepare("insert into users_ssl (firstName, lastName, mainEmail, altEmail, username, password, userPic)
          values(:fname, :lname, :school_email, :alt_email, :username, :password, :userPic)");
          $stmt ->bindParam(':username',$euser);
          $stmt ->bindParam(':password', $epass);
          $stmt ->bindParam(':userPic', $target_file);
          $stmt ->bindParam(':lname',$_POST['lname']);
          $stmt ->bindParam(':fname',$_POST['fname']);
          $stmt ->bindParam(':school_email',$_POST['school_email']);
          $stmt ->bindParam(':alt_email',$_POST['alt_email']);
          $stmt ->execute();
        }else {
          echo "Sorry, you must submit ALL registration fields to proceed.<br><br>";
          echo "<a href='index.html'>Try Again</a><br><br>";
        }
      }
    ?><br>
    <?php
    var_dump($_POST);
    ?>

  </body>
