routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('games', {
    url: '/',
    template: `
    <div class="container">
      <div class="page-header">
        <h3>-= very cool casino =-</h3>
      </div>
      <pagination data="$resolve.games.data"></pagination>
      <games-list data="$resolve.games.data"></games-list>
    </div>
    `,
    resolve: {
      games: ['GamesService', (GamesService) => {
        return GamesService.getData();
      }]
    }
  });
}