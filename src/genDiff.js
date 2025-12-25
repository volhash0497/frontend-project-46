import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);

  const result = {};
  for (const key of keys) {
    if (_.has(obj1, key) !== _.has(obj2, key)) {    
        if (_.has(obj1, key)) {
            const newValue = obj1[key];
            result[`- ${key}`] = newValue; 
        } else {
            const newValue = obj2[key];
            result[`+ ${key}`] = newValue;
        }   
    }

    if (_.has(obj1, key) === _.has(obj2, key)) {
        if (obj1[key] === obj2[key]) {
            result[`  ${key}`] = obj1[key];
        } else {
            result[`- ${key}`] = obj1[key];
            result[`+ ${key}`] = obj2[key];
        }
      
    }
    
  }
  return result;
}



//export default genDiff;