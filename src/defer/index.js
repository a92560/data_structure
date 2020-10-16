function defer(delay = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay * 1000);
  })
}

defer(5).then(res => {
  console.log('res: ', res);
})
