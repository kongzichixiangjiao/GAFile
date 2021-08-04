var Extension = {
  randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
      default:
        return 0;
    }
  },
  // {
  //   page: 1,
  //   psize: 20
  // }
  // page=1&psize=20

  dicToUrlParamString: param => {
    let params = [];

    for (const key in param) {
      params.push([key, encodeURIComponent(param[key])]);
    }
    // [[page, 1], [pszie, 20]]
    return params.map(value => value.join('=')).join('&');
    // [[page, 1], [pszie, 20]]
    // [page=1, psize=20]
    // page=1&psize=20
  }
}

export default Extension


/*
  console.log(randomNum(1, 10));
*/
