var myApp = angular.module('app', ['ui.router']);

myApp.config(function($stateProvider) {
	var states = [
    { 
      name: 'user', 
      url: '/user', 
      templateUrl:'/dataPages/user.html'  
    },
    
    { 
      name: 'todo', 
      url: '/todo', 
      templateUrl:'/dataPages/todo.html' 
    },
    
    { 
      name: 'meetings', 
      url: '/meetings', 
      templateUrl:'/dataPages/meetings.html'     
    }
  ]
  
  states.forEach(function(state){
	  $stateProvider.state(state);
  })
  
});

