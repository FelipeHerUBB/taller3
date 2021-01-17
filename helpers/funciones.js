function getFilteredByKey(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  }

  function findIn(array,key,value)
  {
    return array.find(function (e) { 
        return e[key] ==value; 
    }); 
  }

module.exports = {
    getFilteredByKey,
    findIn
};
