const CustomPromise = function CustomPromise(callback) {

  let param;
  let applyFn = (fn, ...args) => fn && callOnce(fn, args);
  let callOnce = (fn, args) => {
    param = fn.apply(null, param ? [param] : args);
    (param === undefined) && (callOnce = () => { });
  };

  this.then = function(resolve, reject) {

    reject && (this.catch = () => { });

    callback(
      applyFn.bind(null, resolve),
      applyFn.bind(null, reject)
    );

    return this;
  }

  this.catch = function(reject) {
    callback(
      function() { },
      applyFn.bind(null, reject)
    );
  }
}
