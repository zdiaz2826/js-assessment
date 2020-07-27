exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return  arr.reduce(function(a, b){
      return a + b;
  }, 0);
  },

  remove: function(arr, item) {

    return arr.filter( e => e !== item);
  },

  removeWithoutCopy: function(arr, item) {
    Array.prototype.remove = function(value) {
      for (let i = this.length; i--; ) {
        if (this[i] === value) {
          this.splice(i, 1);
        }
      }
    }
    arr.remove(item);
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift()
    return arr;
  },

  concat: function(arr1, arr2) {

    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0,  item);
    return arr;
  },

  count: function(arr, item) {
    const x = arr.filter(e => e === item);

    return x.length;

  },

  duplicates: function(arr) {
    const array = arr.slice().sort();
    let duplicates = [];
    let result = []

    for( let i = 0; i < array.length; i++) {
      if(array[i+1] === array[i]) {
        duplicates.push(array[i])
      }
    }
    for( i = 0; i < duplicates.length; i++) {
      if(duplicates[i] !== duplicates[i + 1]) {
        result.push(duplicates[i])
      }
    }

    return result;
  },

  square: function(arr) {
    return arr.map(x => x * x)
  },

  findAllOccurrences: function(arr, target) {
    let indexes = [];
    for(let i = 0; i < arr.length; i++)
        if (arr[i] === target)
            indexes.push(i);
    return indexes;
  }
};
ç