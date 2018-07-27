# CustomPromise
Custom Promise on javascript

## Use cases
```
new CustomPromise((resolve, reject) => {
  // setTimeout(resolve, 1000, ['Date', new Date()]);
  setTimeout(reject, 1000, ['Date', new Date()]);
})
  .then(
    console.log.bind(null, 'Resolved:'),
    console.log.bind(null, 'Rejected:')
  )
  .catch(console.log.bind(null, 'Catch:'));
```