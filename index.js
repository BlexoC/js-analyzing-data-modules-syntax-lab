


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

const combineUsers =() => {
  let arg = [...arg]
  let combinedObject = {
    users: [],
    merge_date: M/d/yyyy ,
  };
  for (let i =0; i <arg.length; i++){
    combinedObject.users(...combinedObject.users, ...arg[i].users)   
  }
  return combinedObject;

}