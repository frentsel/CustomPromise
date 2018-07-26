const CustomPromise = function(callback) {

  const res = (fn, ...args) => fn && callOnce(fn, args);
  const rej = (fn, ...args) => fn && callOnce(fn, args);

  let callOnce = (fn, args) => {
    fn.apply(null, args);
    callOnce = () => { };
  };

  this.then = function(resolve, reject) {

    reject && (this.catch = function() { });

    callback(
      res.bind(null, resolve),
      rej.bind(null, reject)
    );

    return this;
  }

  this.catch = function(reject) {
    callback(
      function() { },
      rej.bind(null, reject)
    );
  }
}
