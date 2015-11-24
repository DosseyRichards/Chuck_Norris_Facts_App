


var facts = [
	"Chuck Norris and Superman once fought each other on a bet. The loser had to start wearing his underwear on the outside of his pants.",
	"Chuck Norris can cut through a hot knife with butter.",
	"Chuck Norris can divide by zero.",
	"Chuck Norris can lead a horse to water AND make it drink.",
	"Chuck Norris can light a fire by rubbing two ice-cubes together.",
	"Chuck Norris can pick oranges from an apple tree and make the best lemonade you ever tasted.",
	"Chuck Norris can program hardware with his bare fists.",
	"Chuck Norris can slam a revolving door.",
	"Chuck Norris can unscramble scrambled eggs.",
	"Chuck Norris can win a game of Connect Four in only three moves.",
	"Chuck Norris died 20 years ago, Death just hasn't built up the courage to tell him yet.",
	"Chuck Norris does not do pushups, he does Earth downs.",
	"Chuck Norris does not flush the toilet, he scares the sh*t out of it.",
	"Chuck Norris does not get frostbite. Chuck Norris bites frost.",
	"Chuck Norris does not read books. He stares them down until he gets the information he wants.",
	"Chuck Norris does not sleep. He waits.",
	"Chuck Norris does not wear a watch. HE decides what time it is.",
	"Chuck Norris has already been to Mars; that's why there are no signs of life.",
	"Chuck Norris has counted to infinity - twice.",
	"Chuck Norris is the only man to punch a cyclops between the eyes.",
	"Chuck Norris knows Victoria's Secret.",
	"Chuck Norris once got bit by a rattle snake. After three days of pain and agony, the rattle snake died.",
	"Chuck Norris runs until the treadmill gets tired.",
	"Chuck Norris' hand is the only hand that can beat a Royal Flush.",
	"Fear of spiders is arachnophobia. Fear of tight spaces is claustrophobia. Fear of Chuck Norris is called logic",
	"Outer space exists because it is afraid to be on the same planet with Chuck Norris.",
	"People wanted to add Chuck Norris to Mount Rushmore, but the granite was not tough enough for his beard.",
	"Some magicans can walk on water. Chuck Norris can swim through land.",
	"The Universe is not expanding. It is running away from Chuck Norris.",
	"There is no theory of evolution. Just a list of animals Chuck Norris allows to live.",
	"There is no chin behind Chuck Norris' beard. There is only another fist.",
	"There was a street named after Chuck Norris, but it had to be changed because nobody crosses Chuck Norris and lives.",
	"When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris."
];



var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.chuck_Fact = "";
	$scope.click = function(){
	var fact_len = facts.length-1;
	var random_chuck_fact_key = Math.floor((Math.random() * fact_len) + 0);
    $scope.chuck_Fact =  facts[random_chuck_fact_key];



	}
});



