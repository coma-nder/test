function gamesListCtrl($scope) {
	this.currentPage = 1; // initial
	this.per = 10; // initial

	this.$onInit = function () {
		this.games = angular.copy($scope.$ctrl.data.games);
		this.setPage();
	}

	this.setPage = function() {
    let filteredGames = [];
    if (!$scope.query) {
      filteredGames = this.games;
    } else {
      filteredGames = this.games.filter(game => $scope.query !== "" && game.Name.en.indexOf($scope.query) > -1);
    }
    let sortedGames = filteredGames.sort((a, b) => {
      if (a.Name.en.toUpperCase() < b.Name.en.toUpperCase()) return -1;
      if (a.Name.en.toUpperCase() > b.Name.en.toUpperCase()) return 1;
      return 0;
    });
    if ($scope.orderProp === '-Name.en') {
      sortedGames = sortedGames.reverse()
    }
		this.processedGames = sortedGames.slice((this.currentPage - 1) * this.per, this.currentPage * this.per);
	}

	// this.setPer = function(per) {
	// 	this.per = per;
	// }

  this.setCurrentPage = function(page) {
    this.currentPage = page;
  }
}

module.exports = {
  template: `
  <div class="games-info">
    <div class="games-info__item">
      <input ng-model="query"/>
        <button ng-click="$ctrl.setPage()">Search</button>
      </div>
    <div class="games-info__item">
      <select ng-model="orderProp">
        <option value="Name.en">A - Z</option>
        <option value="-Name.en">Z - A</option>
      </select>
      <button ng-click="$ctrl.setPage()">Sort</button>
    </div>
    <div class="games-info__item">Total games: {{ $ctrl.data.games.length }}</div>
  </div>
	  <ul class="games-list">
	    <li
	    	class="games-list__item"
	      ng-repeat="game in $ctrl.processedGames"
      >
      <img src="{{game.ImageFullPath}}"/>
	    	<p class="games-list__title">
	    		{{game.Name.en}}
        </p>
        <a 
	    			ng-href="https://www.gbchip.com/en/games/play/{{game.Url}}?demo=true"
            target="_blank"
            class="games-list__butt"
    			>
    				Start
  				</a>
	  	</li>
	  </ul>
    <pagination
      data="$ctrl.games"
      per="$ctrl.per"
      currentPage="$ctrl.currentPage"
    />
  `,
  controller: gamesListCtrl,
  transclude: true,
  bindings: {
    data: '='
  }
}