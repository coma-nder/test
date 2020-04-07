routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('games', {
    url: '/',
    template: `
    <div class="games-header"
      <h3> very cool casino </h3>
    </div>
      <games-list data="$resolve.games.data"></games-list>
    `,
    resolve: {
      games: ['GamesService', (GamesService) => {
        return GamesService.getData();
      }]
    }
  });
}