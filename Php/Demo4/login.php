  <body>
    <?php
      $user = 'root';
      $pass = 'root';
      $salt = 'SaltyHash';
  $dbh = new PDO('mysql:host=localhost;dbname=myssl;port=8889', $user, $pass);

      if ($_POST['username_li'] != '' && $_POST['password_li'] != '') {

        $usernameInput = $_POST['username_li'];
        $passwordInput = md5($_POST['password_li'].$salt);

        $sth = $dbh->prepare('select userid, firstName, lastName, mainEmail, altEmail, username, password, userPic
        from users_ssl where username = :username and password = :password');
        $sth ->bindParam(':username',$usernameInput);
        $sth ->bindParam(':password', $passwordInput);
        $sth->execute();

        $result = $sth->fetchAll();
        if (isset($result[0]['userid'])) {
          echo "Congratulations!!! You have Sucessfully Logged in. Enjoy :-)";
          echo "<a href='index.html'>Home</a>&nbsp;|&nbsp";
          echo "<a href='dashboard.php'>Dashboard</a>&nbsp;&nbsp;<br><br>";

          foreach ($result as $row) {
            $sth = $dbh->prepare('select username, userPic from users_ssl where username = :username');
            $sth->bindParam(':username', $row['username']);
            $sth->execute();
            $result = $sth->fetchAll();

            echo "<p>";
            $userid = $row['userid'];
            foreach ($result as $row) {
              $photo = $row['userPic'];
              $username = $row['username'];
            };
            if (!empty($photo)) {
              echo "<img src=\"images/" . $photo . "\" class=\"right userPhoto\"/><br>";
            }else {
              echo "Avatar STATUS: You did not provide an avatar photo during sign-up";
            }

            echo "</p>";
            echo "<ul class=\"right userSection\">
            <li> Your User ID is: ".$userid."</li>
            <li> Your Username is: ".$username."</li>
            </ul>";
          };
        }else {
          echo "So Sorry - Your Login Failed <br> The User Name or Password is incorrect. Please try again...<br>";
          echo "<a href='index.html'>Go Back?</a><br><br>";
        }
      }else {
        echo "Sorry, you must submit both LOGIN feilds to proceed.<br><br>";
        echo "<a href='index.html'>Try again?</a><br><br>";
      }
    ?>

  </body>
