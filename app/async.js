exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value)
      },1000)
    })
    return myPromise
  },

  manipulateRemoteData: function(url) {

    const myPromise = new Promise ((resolve, reject) => {
      let array = [];
      fetch(url)
        .then(resp => { return resp.json()})
        .then(data => {
          const people = data.people;
          people.forEach(element => {
            array.push(element.name)
            resolve(array.sort())
          });
        })
    })

      return myPromise;
  }
};
