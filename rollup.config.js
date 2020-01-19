export default {
    input: 'dist/index.js',
    output: 'dist/bundles/cordova.angular.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.cordova.angular',
    globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    }
}

