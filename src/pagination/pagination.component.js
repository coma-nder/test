function paginationCtrl($scope) {
	this.$onInit = function () {
    this.per = angular.copy($scope.$ctrl.per);
    this.currentPage = angular.copy($scope.$ctrl.currentPage);
    let games = angular.copy($scope.$ctrl.data);
    this.totalPages = Math.floor(games.length / this.per);
    this.pages = [...Array(this.totalPages)].map((_, index) => index + 1)
  }

  this.selectPage = function(page) {
		this.currentPage = page;
		this.gamesListCtrl.setCurrentPage(page);
		this.gamesListCtrl.setPage();
  }
}

module.exports = {
  template: `
	  <ul class="pagination">
	    <li 
	    	ng-repeat="page in $ctrl.pages"
	    	ng-class="['pagination__item', { 'pagination__item--current': page === $ctrl.currentPage }]"
	    	ng-click="$ctrl.selectPage(page)"
    	>
	    	{{page}}
	  	</li>
	  </ul>`,
  controller: ['$scope', paginationCtrl],
  transclude: true,
  require: {
    gamesListCtrl: '^gamesList'
  },
  bindings: {
    data: '=',
    per: '=',
    currentPage: '&'
  }
}