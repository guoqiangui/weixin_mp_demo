function sayHello(name) {
  console.log('你好，' + name);
}

function sayGoodbye(name) {
  console.log(`再见，${ name }`);
}

module.exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;