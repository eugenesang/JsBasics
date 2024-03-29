// falsy data
let falsyData=[false, "", '', ``, 0,-0, NaN, undefined, null, 0n];
// nullish data
let nullishData=[null, undefined];
//checking if a value is falsy
function isFalsy(data){
  if(data){
    return false;
  }else{
    return true;
  }
};
// short hand
function _isFalsy(data){
  return data || true;
};
// Nullish coalescing-> checks that a variable is null or undefined only
function isNullish(data){
  return data ?? true;
}
