function gamesListCtrl() {
  this.orderProp = 'Name.en';
}
module.exports = {
  template: `
  <div class="container">
    <div class="row text-center games-sort">
      <div class="col-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Search:</span>
          </div>
          <input ng-model="$ctrl.query.Name.en" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
        </div>
      </div>

      <div class="col-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Sort by:</label>
          </div>
          <select ng-model="$ctrl.orderProp" class="custom-select" id="inputGroupSelect01">
            <option value="Name.en">A - Z</option>
            <option value="-Name.en">Z - A</option>
          </select>
        </div>
      </div>
      <div class="col-4">
        <p>Total games: <strong>{{ $ctrl.data.games.length }}</strong></p>
      </div>
    </div>
  
    <ul class="row list-unstyled games-list">
      <li ng-repeat="game in $ctrl.data.games | filter:$ctrl.query | orderBy:$ctrl.orderProp" class="col-3">
        <div class="text-center">
          <img src="{{game.ImageFullPath}}" class="img-fluid"/>
          <p><strong>{{game.Name.en}}</strong></p>
          <button class="btn btn-warning btn-block">Start</button>
        </div>
      </li>
    </ul>
  </div>
  `,
  controller: gamesListCtrl,
  bindings: {
    data: '='
  }
}

// {
//   "ID":"3192",
//   "Image":"/gstatic/games/evosw/315/roulette.jpg",
//   "Url":"998/104",
//   "Name":{
//     "en":"Roulettes",
//     "ru":"Рулетки"
//   },
//   "Description":[

//   ],
//   "MobileUrl":"998/104",
//   "Branded":0,
//   "SuperBranded":0,
//   "hasDemo":0,
//   "CategoryID":[
//     "37",
//     "33"
//   ],
//   "SortPerCategory":{
//     "33":0,
//     "37":0
//   },
//   "MerchantID":"998",
//   "AR":"16:9",
//   "IDCountryRestriction":"23",
//   "Sort":"100065",
//   "PageCode":"104",
//   "MobilePageCode":"104",
//   "MobileAndroidPageCode":null,
//   "MobileWindowsPageCode":null,
//   "ExternalCode":null,
//   "MobileExternalCode":null,
//   "ImageFullPath":"https://static.egamings.com/games/evosw/roulette.jpg",
//   "WorkingHours":null,
//   "LaunchCode":"104",
//   "isRestricted":false
// }

// https://www.gbchip.com/en/games/play/991/815?demo=true
