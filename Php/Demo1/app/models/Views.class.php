<?

class Views{

	function getView($view,$data=array()){

		require 'app/views/' . $view . '.php';
}



}
?>
