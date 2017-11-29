var Rx = require('rxjs/Rx');

Rx.Observable.of(1,2,3)
Rx.Observable.of(1,2,3).map(function (x) { return x + '!!!'; })