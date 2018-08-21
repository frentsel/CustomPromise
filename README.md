# CustomPromise
Custom javascript Promise implementation

#### Example
```javascript
const promise = new CustomPromise((resolve, reject) => {
  // setTimeout(resolve, 1000, 'success');
  setTimeout(reject, 1000, 'error');
});

promise
  .then(
    console.log,
    console.error
  )
  .catch(console.error);
```
#### Promises chaining
```javascript
promise
  .then((data) => {
    console.log('data: ', data);
    return data + ' + extra text';
  })
  .then(console.log)
  .catch(console.error);
```

#### Source
```javascript
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
```