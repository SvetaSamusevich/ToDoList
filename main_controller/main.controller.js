angular
  .module('app')
  .controller('ToDoContr',function($scope){
	// initialize list of todos
	$scope.todos=[
	    {done: true, text: 'first'},
	    {done:false, text:'second'}
	];
	// function to add new todo 
	$scope.addTodo = function(){
		var newTodo = {
			done: false,
			text: $scope.todoText
		};
		
		$scope.todos.push(newTodo);
		$scope.todoText = '';
	};
	//function to delete a todo
	$scope.removeTodo = function (start){
		$scope.todos.splice(start, 1);
	}
	//function to move an item
	$scope.move = function(index, direction){
		
		if(direction === 'up'){
			if(index === 0){
				return;
			}
			index = index -1;			
		}
		
		if(direction === 'down'){
			if(index === $scope.todos.length - 1){
			return;
		   }
		}
		
		var todo = $scope.todos[index];
		$scope.todos.splice(index + 2, 0, todo);
		$scope.todos.splice(index, 1);
	}
})