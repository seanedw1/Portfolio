<?
	include("/models/Views.Class.php");
	include("/models/WeatherAPI.Class.php");

	$views = new Views();
	$api = new WeatherAPI();

	if (!empty($_GET['action']))
	{
		if($_GET['action'] == "home")
		{
			$views->getView("header");
			$views->getView("form");
			$views->getView("footer");
		}

		if($_GET['action'] == 'lookup')
		{
			if(isset($_POST['tf_zip']) && !empty($_POST['tf_zip']))
			{
				$zipcode = $_POST['tf_zip'];
			}
			else
			{
				$zipcode = '32792';
			}
			$data = $api->get_weather_by_zip($zipcode);
			$views->getView("views/header.php");
			$views->getView("views/weather.php", $data);
			$views->getView("views/footer.php");

		}
	}
	else
	{
		header("Location: ?action=home");
	}
?>
