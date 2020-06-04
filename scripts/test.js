/*
 * @Author: dingmeng
 * @Date: 2020-06-04 17:59:57
 * @LastEditors: dingmeng
 * @LastEditTime: 2020-06-04 18:19:36
 * @FilePath: \新建文件夹\scripts\test.js
 * @name: 
 */ 
'use strict';

去问驱蚊器我1
12313
12313123
去啊委屈饿·2131232213
123
123
123
1
31、
reswer
res
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});
1/sdasdwetwrtwrwrw4345rfdfgdfg
// Ensure environment variables are read.
require('../config/env');
dge4r5tetrfe
rertet
const jest = require('jest');
const execSync = require('child_process').execSync;
let argv = process.argv.slice(2);

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Watch unless on CI or explicitly running all tests
if (
  !process.env.CI &&
  argv.indexOf('--watchAll') === -1
) {
  // https://github.com/facebook/create-react-app/issues/5210
  const hasSourceControl = isInGitRepository() || isInMercurialRepository();
  argv.push(hasSourceControl ? '--watch' : '--watchAll');
}


jest.run(argv);
