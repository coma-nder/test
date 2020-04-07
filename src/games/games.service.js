export default class GamesService {
  constructor($http) {
    this.$http = $http
  }
  getData() {
    return this.$http.get('https://www.gbchip.com/api/v1/games?lang=en')
  }
}
