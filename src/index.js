import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import './styles/index.scss'

import games from './games'

angular.module('gamesApp', [uirouter, games])
  .config(routes)

console.log('DONE');

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('>>>');
  })
 }