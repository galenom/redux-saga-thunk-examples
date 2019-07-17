const failPromise = new Promise((resolve, reject) => reject({ code: 500, error: '5XX Server'}));
const successPromise = new Promise((resolve, reject) => resolve('data from the api'))

describe('< ES6 promises', () => {
  test('show failure promise', (done) => {
    failPromise
      .then((unusedApiData) => {
        console.log('success');
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      })
  })

  test('show success promise', (done) => {
    successPromise
      .then((apiResponse) => {
        console.log(apiResponse);
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      })
  })
})

describe('ES6+ promises', () => {
  test('show failure promise', async () => {
    try {
      const response = await failPromise;
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  })

  test('show success promise', async() => {
    try {
      const response = await successPromise;
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  })
})