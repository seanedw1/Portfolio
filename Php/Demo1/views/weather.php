<?php


if(is_string($data)){

?>

<br><br><h2>Error - sorry, that zip code doesnt exist!</h2>
<p><?php echo $data ?><br><br><a href="?action=home"><h3>Try another zip</h3></a></p>

<?

} else {

?> 

<h1>weather for <?php echo $data['location'][0]["city"] ?>, <?php echo $data['location'][0]['region'] ?></h1>
current date: <? echo $data['current']['data'] ?>

<hr/>

<p>temperature: <?php echo $data['current']['temp'] ?>&deg;F</p>

<div class="center">
	<img src="http://l.yimg.com/a/i/us/we/52/<? echo $data['current']['code'] ?>.gif"
	   width="200" height="200" />

	   <p><? echo $data['current']['text']?></p>
</div>

<p><b>forecast:</b></p>
<p><?php echo $data['forecast'][0]['day']?> - <?php echo $data['forecast'][0]['text']?>. High:
<? echo $data['forecast'][0]['high']?> Low: <? echo $data['forecast'][0]['low']?></p>

<?

echo "<p><a href='?action=home'>try another zip code</a></p>";

}
?>
