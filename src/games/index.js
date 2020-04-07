import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './games.routes.js'

import pagination from '../pagination/pagination.component'
import gamesList from '../games-list/games-list.component'
import GamesService from './games.service'

export default angular.module('gamesApp.games', [uirouter])
  .config(routes)
  .component('pagination', pagination)
  .component('gamesList', gamesList)
  .service('GamesService', GamesService)
  .name
  