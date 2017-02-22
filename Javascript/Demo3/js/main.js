$(function(){



$('#due-date').datepicker();



$('#edit').button({
	icons: {
		primary:"ui-icon-pencil"
	}
}).on('click', function(){

});



$('#dele').button({
	icons: {
		primary:"ui-icon ui-icon-closethick"
	}
}).on('click',function(){
$('input[type="checkbox"]:checked').parent().hide(function(){
$(this).fadeOut(9000);
}); //deletes checked inputs

});

/*
.click(function(){
	$(this).remove();
});// closes remove funtion removes
*/

$('#add-todo').button({
	icons: {
		primary:"ui-icon-circle-plus"
	}
}).click(function(){
$('#new-todo').dialog('open');
});//ends click function
	$('#new-todo').dialog({
		width:350,
		height:300,
		modal:true,
		autoOpen: false,
		close: function(){
			$('#new-todo input').val(''); //clear fields
		}, //closes close function
			buttons:{
				"Add task" : function(){
					var taskName =$('#task').val();
					var duedate = $('#due-date').val();

var beginLi ='<li class="ui-state-default"><input type="checkbox">'; //list item
var taskLi = '<span class="task">'+ " " + taskName + " "+'</span>';
var dateLi ='<span class="due-date">'+ " "+ duedate + '</span>';
var endLI = '</li>';
$('#todo-list').prepend(beginLi + taskLi + dateLi + endLI);
$('#todo-list').hide().slideDown(250).find('li:first')
		.animate({
			'background-color':'rgb(255,255,204)'
		},250)
			.animate({
				'background-color': 'white'
			},750).animate; //end animate
			$(this).dialog('close');
},//closes add task function
"cancel" : function(){
$(this).dialog('close');
} //closes cancel function
			}//closes buttons

	});//closes dialog


//marking as complete

$('#todo-list').on('click','.done',function(){
	var taskItem = $(this).parent('li');
	taskItem.slideUp(250,function(){
		var $this = $(this);
		$this.detach();
		$('#completed-list').prepend($this);
		$this.slideDown();
	});//closes slide up function
});//closes click function



//hover state

$('li').hover( function(){
$(this).addClass('ui-state-hover');
}, //end of hover in 
function(){
	$(this).removeClass('ui-state-hover');
});







//sortable
$(".sortlist").sortable({
connectWith: '.sortlist',
cursor: 'pointer',
placeholder: 'ui-state-highlight',
cancel: '.delete,.done'
});//closes sortable
//delete

$('.sortlist').on('click','.delete',function(){
$(this).parent('li').effect('puff',function(){
$(this).remove();
});//closes effect function
});//closes click function



}); // document ready closes