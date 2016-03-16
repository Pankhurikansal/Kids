
kids.controller('MainCtrl', function($scope, $stateParams,$ionicSlideBoxDelegate) {
	$scope.animals =[
    { 
        "name": "Dog",
        "imgscr": "img/alpha/D-Dog.png"
    },
  
    {
        "name": "Lion",
        "imgscr": "img/alpha/L-Lion.png"
    },
    {
        "name": "Tiger",
         "imgscr": "img/alpha/T-Tiger.png"
    },
	  {
        "name": "Cat",
         "imgscr": "img/alpha/C-Cat.png"
    },
	 {
        "name": "Elephant",
         "imgscr": "img/alpha/E-Elephant.png"
    },
	 {
        "name": "Monkey",
         "imgscr": "img/alpha/M-Monkey.png"
    },
	 {
        "name": "Horse",
         "imgscr": "img/alpha/H-Horse.png"
    },
	 {
        "name": "Giraffe",
         "imgscr": "img/alpha/G-Girafee.png"
    },
	 {
        "name": "Parrot",
         "imgscr": "img/alpha/P-Parrot.png"
    },
	 {
        "name": "Zebra",
         "imgscr": "img/alpha/Z-Zebra.png"
    }
];

$scope.fruits=[
    { 
        "name": "Apple",
        "imgscr": "img/fruits/Apple.png"
    },
    {
        "name": "Mango",
         "imgscr": "img/fruits/mango.png"
    },
    {
        "name": "Banana",
        "imgscr": "img/fruits/banana.png"
    },
    {
        "name": "Cherry",
         "imgscr": "img/fruits/cherry.png"
    },
	 {
        "name": "Grapes",
        "imgscr": "img/fruits/grapes.png"
    },
	 {
        "name": "Guava",
        "imgscr": "img/fruits/guava.png"
    },
	 {
        "name": "Orange",
        "imgscr": "img/alpha/O-Orange.png"
    },
	 {
        "name": "Pear",
        "imgscr": "img/fruits/pear.png"
    },
	{
        "name": "Litchi",
        "imgscr": "img/fruits/litchi.png"
    },
	{
        "name": "Papaya",
        "imgscr": "img/fruits/papaya.png"
    },
	
];

$scope.vegetables =[
    { 
        "name": "Potatoe",
        "imgscr": "img/vegetables/potatoe.png"
    },
    {
        "name": "Tomatoes",
         "imgscr": "img/vegetables/tomatoe.png"
    },
    {
        "name": "LadyFinger",
        "imgscr": "img/vegetables/ladyfinger.png"
    },
    {
        "name": "Onion",
         "imgscr": "img/vegetables/onion.png"
    },
	{
        "name": "Radish",
         "imgscr": "img/vegetables/radish.png"
    },
	{
        "name": "Carrot",
         "imgscr": "img/vegetables/carrot.png"
    },
	{
        "name": "Brinjal",
         "imgscr": "img/vegetables/brinjal.png"
    },
	{
        "name": "Capsicum",
         "imgscr": "img/vegetables/capsicum.png"
    },
	
	
];
 $scope.bodyPart =[
	{ 
        "name": "Eyes",
        "imgscr": "img/bodyparts/eyes.png"
    },
	 { 
        "name": "Ears",
        "imgscr": "img/bodyparts/ears.png"
    },
	 { 
        "name": "Nose",
        "imgscr": "img/bodyparts/nose.png"
    },
	 { 
        "name": "Hands",
        "imgscr": "img/bodyparts/hand.png"
    },
	 { 
        "name": "Legs",
        "imgscr": "img/bodyparts/legs.png"
    },
]; 

$scope.colours =[
    { 
        "name": "Red",
        "imgscr": "img/Colours/red.png"
    },
    {
        "name": "Yellow",
         "imgscr": "img/Colours/yellow.png"
    },
    {
        "name": "Green",
        "imgscr": "img/Colours/green.png"
    },
    {
        "name": "Blue",
         "imgscr": "img/colours/blue.png"
    },
	 {
        "name": "Pink",
         "imgscr": "img/Colours/pink.png"
    },
	 {
        "name": "Purple",
         "imgscr": "img/colours/purple.png"
    },
	 {
        "name": "Orange",
         "imgscr": "img/Colours/orange.png"
    },
	 {
        "name": "Brown",
         "imgscr": "img/Colours/Brown.png"
    },
	 {
        "name": "Black",
         "imgscr": "img/Colours/black.png"
    },
	
];
$scope.next=function(){
	$ionicSlideBoxDelegate.next();
}
$scope.previous=function(){
	$ionicSlideBoxDelegate.previous();
}

})
.controller('AlphaCtrl', function ($scope,$window,$timeout) {
  $scope.letters = ['A-Apple', 'B-Ball', 'C-Cat', 
            'D-Dog', 'E-Elephant', 'F-Frog', 'G-Girafee', 'H-Horse' , 'I-Igloo' , 'J-Jug','K-king' ,'L-Lion','M-Monkey','N-Nest','O-Orange','P-Parrot','Q-Queen','R-Ring' ,'S-Sun','T-Tiger','U-Umbrella','V-Van','W-watch','X-Xmax Tree','Y-Yatch' , 'Z-Zebra'];
            var time = 0;
		
          $scope.testname = function (letter) {
                setTimeout(function () {
                    $scope.test = letter;
                     $scope.$apply();
                }, time);
                time = time + 2000;
                return letter; 
            } 
			 
			$scope.gohome = function()
			{
				$window.location = '#/app/homescreen'
			}
			
})
.controller('numberCtrl', function ($scope,$window) {
  $scope.numbers = ['1-One', '2-Two', '3-Three', 
            '4-Four', '5-Five', '6-Six', '7-Seven', '8-Eight' , '9-Nine' , '10-Ten'];
            var time = 0;
            $scope.testname = function (numbers) {
                setTimeout(function () {
                    $scope.num = numbers;
                    $scope.$apply();
                }, time);
                time = time + 2000;
                return numbers;
            }
			$scope.gohome = function()
			{
				$window.location = '#/app/homescreen'
			}
			
})

.controller('Playlist', function ($scope,$window) {
	$scope.alpha =function()
	{
		$window.location = '#/alpha';
	};
	$scope.number=function()
	{
		$window.location = '#/number';
	};
	
});


