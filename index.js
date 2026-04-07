
const DateJS = require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: Date.today().toString('M/d/yyyy'),
  };

  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  return combinedObject;
}

module.exports = {
  combineUsers,
};
