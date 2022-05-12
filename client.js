const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', function(data) {

    console.log("connected user says:", data);

  })

  conn.on('connect', function() {
    console.log('connected')
    conn.write('Name: SYD')

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // },2000);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 3000);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 4000);
  return conn;
};

module.exports = {connect};