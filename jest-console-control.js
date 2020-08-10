const __CONSOLE = global.console;
const __NOCONSOLE = { log: jest.fn() };

const OUTPUT = {
  off: () => {
    global.console = __NOCONSOLE;
  },
  on: () => {
    global.console = __CONSOLE;
  },
  toggle: () => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    global.console === __CONSOLE ? OUTPUT.off() : OUTPUT.off();
  },
};

OUTPUT.off();

