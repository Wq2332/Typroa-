## 节点 MySQL 2

[![绿卫士徽章](https://camo.githubusercontent.com/c0d93ade5f4d48d520b1385c52c90a513ed7974504ee0682d88304919a272e81/68747470733a2f2f6261646765732e677265656e6b65657065722e696f2f7369646f72617265732f6e6f64652d6d7973716c322e737667)](https://greenkeeper.io/) [![NPM 版本](https://camo.githubusercontent.com/3717418bc83eded40b22560767a698ac495b2f01e77a7edfe71cd4603499d0f6/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6d7973716c322e737667)](https://npmjs.org/package/mysql2) [![NPM 下载](https://camo.githubusercontent.com/204fd828bc2172c8a0eef35d737e0f54268e2678694280f173c83be923f1bdc0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f6d7973716c322e737667)](https://npmjs.org/package/mysql2) [![Node.js 版本](https://camo.githubusercontent.com/69b8d4e1bf48a1094ec352b3f44a7b130322965895fb7c328428d6569d11e8c4/687474703a2f2f696d672e736869656c64732e696f2f6e6f64652f762f6d7973716c322e737667)](http://nodejs.org/download/) [![Linux 构建](https://camo.githubusercontent.com/5fea56fdc2653848f8592f8b93f735ac292443bd08511bd025883ab8ab795495/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f7369646f72617265732f6e6f64652d6d7973716c322f6d61737465722e7376673f6c6162656c3d6c696e7578)](https://travis-ci.org/sidorares/node-mysql2) [![Windows 构建](https://camo.githubusercontent.com/042af51adc1cf7caed796a2bc9cb8adad284fd1292b9eae90a6cf986938fb6b1/68747470733a2f2f696d672e736869656c64732e696f2f6170707665796f722f63692f7369646f72617265732f6e6f64652d6d7973716c322f6d61737465722e7376673f6c6162656c3d77696e646f7773)](https://ci.appveyor.com/project/sidorares/node-mysql2) [![执照](https://camo.githubusercontent.com/cc63a56f27c0b4c4359b786a56bfa6986f987f4007a9b975635e060d24bdb96f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6d7973716c322e7376673f6d61784167653d32353932303030)](https://github.com/sidorares/node-mysql2/blob/master/License)

[简体中文 简体中文](https://github.com/sidorares/node-mysql2/blob/master/documentation_zh-cn)

> Node.js 的 MySQL 客户端，专注于性能。支持预处理语句、非 utf8 编码、二进制日志协议、压缩、ssl[更多](https://github.com/sidorares/node-mysql2/tree/master/documentation)

**目录**

- [MySQL2 的历史和原因](https://github.com/sidorares/node-mysql2/blob/master/README.md#history-and-why-mysql2)
- [安装](https://github.com/sidorares/node-mysql2/blob/master/README.md#installation)
- [第一次查询](https://github.com/sidorares/node-mysql2/blob/master/README.md#first-query)
- [使用准备好的语句](https://github.com/sidorares/node-mysql2/blob/master/README.md#using-prepared-statements)
- [使用连接池](https://github.com/sidorares/node-mysql2/blob/master/README.md#using-connection-pools)
- [使用 Promise 包装器](https://github.com/sidorares/node-mysql2/blob/master/README.md#using-promise-wrapper)
- [API 和配置](https://github.com/sidorares/node-mysql2/blob/master/README.md#api-and-configuration)
- [文档](https://github.com/sidorares/node-mysql2/blob/master/README.md#documentation)
- [致谢](https://github.com/sidorares/node-mysql2/blob/master/README.md#acknowledgements)
- [贡献](https://github.com/sidorares/node-mysql2/blob/master/README.md#contributing)

## MySQL2 的历史和原因

MySQL2 项目是[MySQL-Native](https://github.com/sidorares/nodejs-mysql-native)的延续。协议解析器代码从头开始重写，api 更改以匹配流行的[mysqljs/mysql](https://github.com/mysqljs/mysql)。MySQL2 团队正在与[mysqljs/mysql](https://github.com/mysqljs/mysql)团队合作，将共享代码分解并移至[mysqljs](https://github.com/mysqljs/mysql)组织下。

MySQL2 大部分 API 与[mysqljs](https://github.com/mysqljs/mysql)兼容，并支持大部分功能。MySQL2 还提供了这些附加功能

- 更快/更好的性能
- [准备好的报表](https://github.com/sidorares/node-mysql2/tree/master/documentation/Prepared-Statements.md)
- MySQL 二进制日志协议
- [MySQL 服务器](https://github.com/sidorares/node-mysql2/tree/master/documentation/MySQL-Server.md)
- 对编码和整理的扩展支持
- [承诺包装](https://github.com/sidorares/node-mysql2/tree/master/documentation/Promise-Wrapper.md)
- 压缩
- SSL 和[身份验证开关](https://github.com/sidorares/node-mysql2/tree/master/documentation/Authentication-Switch.md)
- [自定义流](https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md)
- [汇集](https://github.com/sidorares/node-mysql2/blob/master/README.md#using-connection-pools)

## 安装

MySQL2 没有本地绑定，可以毫无问题地安装在 Linux、Mac OS 或 Windows 上。

```bash
npm install --save mysql2
```

## 第一次查询

```js
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);
```

## 使用准备好的语句

使用 MySQL2，您还可以获得准备好的语句。使用准备好的语句，MySQL 不必每次都为相同的查询准备计划，这会带来更好的性能。如果您不知道为什么它们很重要，请查看这些讨论

- [准备好的语句如何防止 SQL 注入攻击](http://stackoverflow.com/questions/8263371/how-can-prepared-statements-protect-from-sql-injection-attacks)

MySQL 提供了`execute`帮助器来准备和查询语句。您还可以使用`prepare`/`unprepare`方法手动准备/取消准备语句。

```js
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

// execute will internally call prepare and query
connection.execute(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Rick C-137', 53],
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

    // If you execute same statement again, it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  }
);
```

## 使用连接池

连接池通过重用以前的连接来帮助减少连接到 MySQL 服务器所花费的时间，当你完成它们时让它们保持打开而不是关闭。

这改善了查询的延迟，因为您避免了建立新连接所带来的所有开销。

```js
// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
```
池不会预先创建所有连接，而是按需创建它们，直到达到连接限制。

您可以以与连接相同的方式使用池（使用`pool.query()`and `pool.execute()`）：

```js
// For pool initialization, see above
pool.query("SELECT field FROM atable", function(err, rows, fields) {
   // Connection is automatically released when query resolves
})
```

或者，也可以手动从池中获取连接并稍后返回：
```js
// For pool initialization, see above
pool.getConnection(function(err, conn) {
   // Do something with the connection
   conn.query(/* ... */);
   // Don't forget to release the connection when finished!
   pool.releaseConnection(conn);
})
```

## 使用 Promise 包装器

MySQL2 也支持 Promise API。这与 ES7 异步等待非常有效。

```js
async function main() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
  // query database
  const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
}
```

MySQL2 使用`Promise`范围内可用的默认对象。但是您可以选择`Promise`要使用的实现
```js
// get the client
const mysql = require('mysql2/promise');

// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');

// create the connection, specify bluebird as Promise
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test', Promise: bluebird});

// query database
const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
```

MySQL2 还在 Pools 上公开了一个 .promise() 函数，因此您可以从同一个池创建一个 promise/non-promise 连接
```js
async function main() {
  // get the client
  const mysql = require('mysql2');
  // create the pool
  const pool = mysql.createPool({host:'localhost', user: 'root', database: 'test'});
  // now get a Promise wrapped instance of that pool
  const promisePool = pool.promise();
  // query database using promises
  const [rows,fields] = await promisePool.query("SELECT 1");
```

MySQL2 在 Connections 上公开了一个 .promise() 函数，以“升级”现有的 non-promise 连接以使用 Promise
```js
// get the client
const mysql = require('mysql2');
// create the connection
const con = mysql.createConnection(
  {host:'localhost', user: 'root', database: 'test'}
);
con.promise().query("SELECT 1")
  .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then( () => con.end());
```

## 数组结果

如果您有两个同名的列，您可能希望以数组而不是对象的形式获取结果，以防止它们发生冲突。[这是与Node MySQL](https://github.com/mysqljs/mysql)库的偏差。

例如：`select 1 as foo, 2 as foo`。

您可以在连接级别（适用于所有查询）或查询级别（仅适用于该特定查询）启用此设置。

### 连接选项

```js
const con = mysql.createConnection(
  { host: 'localhost', database: 'test', user: 'root', rowsAsArray: true }
);

```

### 查询选项

```js
con.query({ sql: 'select 1 as foo, 2 as foo', rowsAsArray: true }, function(err, results, fields) {
  console.log(results) // will be an array of arrays rather than an array of objects
  console.log(fields) // these are unchanged
});

```

## API 和配置

MySQL2 大部分 API 与[Node MySQL](https://github.com/mysqljs/mysql)兼容。您应该查看他们的 API 文档以查看所有可用的 API 选项。

[如果您发现与Node MySQL](https://github.com/mysqljs/mysql)有任何不兼容，请通过问题跟踪器报告。我们将优先修复报告的不兼容问题。

## 文档

[您可以在此处](https://github.com/sidorares/node-mysql2/tree/master/documentation)找到更详细的文档。您还应该检查各种代码[示例](https://github.com/sidorares/node-mysql2/tree/master/examples)以了解高级概念。

## 致谢

- 内部协议由@sidorares [MySQL-Native编写](https://github.com/sidorares/nodejs-mysql-native)
- 常量、SQL 参数插值、池化、`ConnectionConfig`取自[node-mysql 的类](https://github.com/mysqljs/mysql)
- 基于@TooTallNate代码的SSL升级[代码](https://gist.github.com/TooTallNate/848444)
- [与MariaSQL](https://github.com/mscdex/node-mariasql/)客户端兼容的安全连接/压缩连接 api 标志。
- [贡献者](https://github.com/sidorares/node-mysql2/graphs/contributors)

## 贡献

想要改进的东西`node-mysql2`。请查看[Contributing.md](https://github.com/sidorares/node-mysql2/blob/master/Contributing.md)以获取有关如何开始的详细说明。


[npm-image]: https://img.shields.io/npm/v/mysql2.svg
[npm-url]: https://npmjs.org/package/mysql2
[node-version-image]: http://img.shields.io/node/v/mysql2.svg
[node-version-url]: http://nodejs.org/download/
[travis-image]: https://img.shields.io/travis/sidorares/node-mysql2/master.svg?label=linux
[travis-url]: https://travis-ci.org/sidorares/node-mysql2
[appveyor-image]: https://img.shields.io/appveyor/ci/sidorares/node-mysql2/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/sidorares/node-mysql2
[downloads-image]: https://img.shields.io/npm/dm/mysql2.svg
[downloads-url]: https://npmjs.org/package/mysql2
[license-url]: https://github.com/sidorares/node-mysql2/blob/master/License
[license-image]: https://img.shields.io/npm/l/mysql2.svg?maxAge=2592000
[node-mysql]: https://github.com/mysqljs/mysql
[mysql-native]: https://github.com/sidorares/nodejs-mysql-native