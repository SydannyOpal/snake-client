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
    conn.write('Say: snaakelit')
  return conn;
});

module.exports = {connect};