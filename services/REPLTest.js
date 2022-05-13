const repl = require('repl');

const replServer = repl.start({ prompt: '> ' });
// replServer.displayPrompt(true)
replServer.defineCommand('sayhello', {
  help: 'Say hello',
  action(name) {
    this.clearBufferedCommand();
    console.log(`Hello, ${name}!`);
    this.displayPrompt();
  },
});
replServer.defineCommand('saybye', function saybye() {
  console.log('Goodbye!');
  this.close();
});
replServer.defineCommand('saygoodmorning', () => {
  console.log('Good Morning');
});
