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
    console.log(data);
    return data + ' + extra text';
  })
  .then(console.log)
  .catch(console.error);
```