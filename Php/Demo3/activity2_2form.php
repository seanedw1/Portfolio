<!--sean edwards-->

<!doctype html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h2>Form</h2>
        <form action="activity2_2validate.php" method="post" enctype="multipart/form-data">
              Select File: <input type="file" name="userfile" /><br />
            School Email: <input type="email" name="school_email" value="" required /><br />
            Personal Email: <input type="email" name="personal_email" value="" required /><br />
            Username: <input type="text" name="username" value="" required /><br />
            Password: <input type="password" name="password" value="" required /><br /><br />
            <input type="submit" name="submit" value="Submit" />
        </form>
    </body>
</html>