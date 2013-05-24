(function(){
  var join$ = [].join;
  this.include = function(){
    var DB, SC, KEY, BASEPATH, HMAC_CACHE, hmac, ref$, Text, Html, Csv, Json, RealBin, sendFile, IO, api;
    this.use('bodyParser', this.app.router, this.express['static'](__dirname),  this.express['static'](__dirname + "/static/resources"),  this.express['static'](__dirname + "/static/"));
	//this.app.use(this.express.static(__dirname + "/static"));
	this.app.use("/resources", this.express.static(__dirname + "/static"));
	this.app.use("/js-repl", this.express.static(__dirname + "/js-repl"));
	this.app.set('views', __dirname + '/views');
    this.app.set('view engine', 'ejs');
	console.log("__dirname:" + __dirname);
    this.include('dotcloud');
    this.include('player-broadcast');
    this.include('player-graph');
    this.include('player');
    CSV = require('ya-csv');
    colnames = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK"]
    DB = this.include('db');
    SC = this.include('sc');
    KEY = this.KEY;
    BASEPATH = this.BASEPATH;
    HMAC_CACHE = {};
    hmac = !KEY
      ? function(it){
        return it;
      }
      : function(it){
        var encoder;
        return HMAC_CACHE[it] || (HMAC_CACHE[it] = (encoder = require('crypto').createHmac('sha256', KEY), encoder.update(it.toString()), encoder.digest('hex')));
      };
    ref$ = ['text/plain', 'text/html', 'text/csv', 'application/json'].map((function(it){
      return it + "; charset=utf-8";
    })), Text = ref$[0], Html = ref$[1], Csv = ref$[2], Json = ref$[3];
    RealBin = require('path').dirname(require('fs').realpathSync(__filename));
    sendFile = function(file){
      return function(){
        this.response.type(Html);
        return this.response.sendfile(RealBin + "/" + file);
      };
    };
	
	isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
	
	
		this.all('/slurpcsv/:room/', function(req, myres){
		        var room, this$ = this;
				var recnum=0;
				var csv,curcel,csvstr="";
        room = this.params.room;
		console.log("slurpcsv/");
		var request = require('request');
		//request.get('http://fe:8001/d/test.csv', function (error, response, body) {
		//request.get('http://www.ijis.iarc.uaf.edu/seaice/extent/plot.csv', function (error, response, body) {
		request.get('http://aima.cs.berkeley.edu/data/iris.csv', function (error, response, body) { 
		if (!error && response.statusCode != 1200) {
			var csv = body;
			//console.log(csv);
			var fs = require('fs');
				fs.writeFile("/tmp/test", csv, function(err) {
					if(err) {
						console.log(err);
					} else {
						console.log("The file was saved!");
						
								var reader = CSV.createCsvFileReader("/tmp/test", {
		    'separator': ',',
		    'quote': '"',
		    'escape': '"',       
		    'comment': '',
		});
reader.addListener('data', function(data) {
   console.log(data);
   recnum++;
   console.log(recnum);
   csvstr="";
for (x in data) { 
            //console.log(colnames);
            
            //console.log(colnames);
			if (isNumber(data[x])) {
			curcel = colnames[x]+recnum ; csvstr+="set "+curcel+" value t "+data[x]+"\n";  
			//this.SC[this.room].ExecuteCommand("set "+curcel+" value t "+data[x]+"\n");
			}
	}		
			 SC._get(room, IO, function(){
		          var ref$;
		          if ((ref$ = SC[room]) != null) {
		            //console.log("executing");
		            ref$.ExecuteCommand(csvstr);
                            console.log("TRYING :"+csvstr);
		          }
	                      //console.log("emitting");
		          IO.sockets['in']("log-" + room).emit('data', {
		            type: 'execute',
		            cmdstr: csvstr,
		            room: room
		          });
			}); 
	
//console.log(sys.inspect(SC));	
});

						
						
					}
				});
			//this.myres.send(csv);

		}
console.log(sys.inspect(this.myres));
});
console.log(sys.inspect("test"));
return("OK");
});
	
		this.all('/proxy', function(req, myres){
		        var room, this$ = this;
				var recnum=0;
				var csv,curcel,csvstr="";
        room = this.params.room;
		console.log("slurpcsv/");
		var request = require('request');
		//request.get('http://fe:8001/d/test.csv', function (error, response, body) {
		//request.get('http://www.ijis.iarc.uaf.edu/seaice/extent/plot.csv', function (error, response, body) {
		return(request.get(this.req.query.hlocation, function (error, hresponse, body) { 
		if (!error && hresponse.statusCode != 1200) {
			var csv = body;
			console.log(csv);
			 return this$.response.send(csv);
			return(csv);
			 //return this.response.send(200, csv);
		}
//console.log(sys.inspect(this.myres));
}));
console.log(sys.inspect(this.req.query));
     return this.response.send(200, csv);
//return(csv);
});

	
	
	
    this.get({
      '/': sendFile('index.html')
    });
    this.get({
      '/favicon.ico': function(){
        return this.response.send(404, '');
      }
    });
    this.get({
      '/_new': function(){
        var room;
        room = require('uuid-pure').newId(10, 36).toLowerCase();
        return this.response.redirect(KEY
          ? BASEPATH + "/" + room + "/edit"
          : BASEPATH + "/" + room);
      }
    });
    this.get({
      '/_start': sendFile('start.html')
    });
    this.get({
      '/:room': KEY
        ? function(){
          var ref$;
          switch (false) {
          case !((ref$ = this.query.auth) != null && ref$.length):
            return sendFile('index.html').call(this);
          default:
            return this.response.redirect(BASEPATH + "/" + this.params.room + "?auth=0");
          }
        }
        : sendFile('index.html')
    });
    this.get({
      '/:room/edit': function(){
        var room;
        room = this.params.room;
        return this.response.redirect(BASEPATH + "/" + room + "?auth=" + hmac(room));
      }
    });
    this.get({
      '/:room/view': function(){
        var room;
        room = this.params.room;
        return this.response.redirect(BASEPATH + "/" + room + "?auth=0");
      }
    });
    IO = this.io;
    api = function(cb){
      return function(){
        var this$ = this;
        return SC._get(this.params.room, IO, function(arg$){
          var snapshot, ref$, type, content;
          snapshot = arg$.snapshot;
          if (snapshot) {
            ref$ = cb.call(this$.params, snapshot), type = ref$[0], content = ref$[1];
            if (content instanceof Function) {
              return content(SC[this$.params.room], function(rv){
                this$.response.type(type);
                return this$.response.send(200, rv);
              });
            } else {
              this$.response.type(type);
              return this$.response.send(200, content);
            }
          } else {
            this$.response.type(Text);
            return this$.response.send(404, '');
          }
        });
      };
    };
    this.get({
      '/_/:room/cells/:cell': api(function(){
        var this$ = this;
        return [
          Json, function(sc, cb){
            return sc.exportCell(this$.cell, cb);
          }
        ];
      })
    });
    this.get({
      '/_/:room/cells': api(function(){
        return [
          Json, function(sc, cb){
            return sc.exportCells(cb);
          }
        ];
      })
    });
    this.get({
      '/_/:room/html': api(function(){
        return [
          Html, function(sc, cb){
            return sc.exportHTML(cb);
          }
        ];
      })
    });
    this.get({
      '/_/:room/csv': api(function(){
        return [
          Csv, function(sc, cb){
            return sc.exportCSV(cb);
          }
        ];
      })
    });
    this.get({
      '/_/:room/coltwo': api(function(){
        return [
          Csv, function(sc, cb){
            return sc.exportCSVcolumn(cb);
          }
        ];
      })
    });
    this.get({
      '/_/:room/col/:colnum': api(function(){
        var this$ = this; // god knows why
        //console.log("requested column number:"+this$.colnum);
        return [
          Csv, function(sc, cb){
            return sc.exportCSVcolumn_spec(cb,this$.colnum);
          }
        ];
      })
    });
    this.get({
      '/_/:room': api(function(it){
        return [Text, it];
      })
    });
    this.put({
      '/_/:room': function(){
        var buf, this$ = this;
        buf = '';
        this.request.setEncoding('utf8');
        this.request.on('data', function(chunk){
          return buf += chunk;
        });
        return this.request.on('end', function(){
          return SC._put(this$.params.room, buf, function(){
            this$.response.type(Text);
            return this$.response.send(201, 'OK');
          });
        });
      }
    });
    this.post({
      '/_/:room': function(){
        var room, command, this$ = this;
        room = this.params.room;
        command = this.body.command;
        if (!command) {
          this.response.type(Text);
          return this.response.send(400, 'Please send command');
        }
	else
	{
	console.log("recv cmd:"+command);
	}
        if (!Array.isArray(command)) {
          command = [command];
        }
        return SC._get(room, IO, function(){
          var ref$;
          if ((ref$ = SC[room]) != null) {
            ref$.ExecuteCommand(join$.call(command, '\n'));
          }
          IO.sockets['in']("log-" + room).emit('data', {
            type: 'execute',
            cmdstr: join$.call(command, '\n'),
            room: room
          });
          return this$.response.json(202, {
            command: command
          });
        });
      }
    });

	
	    this.get({
      '/_/:room/recalcc/:cell': api(function(){
        var this$ = this;
        return [
          Json, function(sc, cb){
            return sc.exportCell(this$.cell, cb);
          }
        ];
      })
    });

	    this.get({
      '/_/:room/recalc/:cell': api(function(){
        var this$ = this;
		        var room, command, this$ = this;
   
        command = ["recalc"];
		SC[this.room].ExecuteCommand("recalc\n");
		
		
		//console.log(sys.inspect(SC["c"])); 


      return [
          Json, function(sc, cb){

/*		  
SC._get(room, IO, function(){
          var ref$;
          if ((ref$ = SC[room]) != null) {
            ref$.ExecuteCommand(join$.call(command, '\n'));
          }
          IO.sockets['in']("log-" + room).emit('data', {
            type: 'execute',
            cmdstr: join$.call(command, '\n'),
            room: room
          });
          return sc.exportCell(this$.cell, cb)["datavalue"];
        }); 
  */ 
            return sc.exportCell(this$.cell, cb);
          }
        ];
        
  
      })
    });
		
	
    this.post({
      '/test/:room': function(){
        var room, csv, recnum, curcel, this$ = this;
        room = this.params.room;
        //csv = this.body.csv;
        console.log(this.req.files);
        try {fnum=Object.keys(this.req.files).length;console.log("Number of posted files:"+fnum);} catch (e) {console.log("no posted files");fnum=0;}
        if (fnum>0) {
                var csvstr="loadclipboard version\\c1.5\\n";
		recnum=0;
		var reader = CSV.createCsvFileReader(this.req.files.filedata.path, {
		    'separator': ',',
		    'quote': '"',
		    'escape': '"',       
		    'comment': '',
		});
reader.addListener('data', function(data) {
   //console.log(data);
   recnum++;
for (x in data) { curcel = colnames[x]+recnum ; csvstr+="cell\\c"+curcel+"\\ct\\c"+data[x]+"\\n";  }
});
reader.addListener('end', function() {
    csvstr+="\npaste A1:"+curcel+" values\nredisplay\nrecalc";
    console.log(csvstr);
    //SC[room].ExecuteCommand(csvstr);	  
    console.log("end");

        return SC._get(room, IO, function(){
          var ref$;
          if ((ref$ = SC[room]) != null) {
            console.log("executing");
            ref$.ExecuteCommand(csvstr);
          }
                      console.log("emitting");
          IO.sockets['in']("log-" + room).emit('data', {
            type: 'execute',
            cmdstr: csvstr,
            room: room
          });
          return this$.response.json(202, {
            "INVIATO": "SENT"
          });
        });

	
});

	}
return ("ok");

      }
    });


    this.post({
      '/prova/:room': function(){
        var room, csv, recnum, curcel, this$ = this;
        room = this.params.room;
        //csv = this.body.csv;
        console.log(this.req.files);
        try {fnum=Object.keys(this.req.files).length;console.log("Number of posted files:"+fnum);} catch (e) {console.log("no posted files");fnum=0;}
        if (fnum>0) {
                var csvstr="loadclipboard version\\c1.5\\n";
		recnum=0;
		var reader = CSV.createCsvFileReader(this.req.files.filedata.path, {
		    'separator': ',',
		    'quote': '"',
		    'escape': '"',       
		    'comment': '',
		});
reader.addListener('data', function(data) {
   //console.log(data);
   recnum++;
for (x in data) { 
			curcel = colnames[x]+recnum ; csvstr+="cell\\c"+curcel+"\\ct\\c"+data[x]+"\\n";  
			 SC._get(room, IO, function(){
		          var ref$;
		          if ((ref$ = SC[room]) != null) {
		            console.log("executing");
		            ref$.ExecuteCommand("set "+curcel+" value t "+data[x]+"\n");
                            console.log("TRYING set "+curcel+" value t "+data[x]+"\n");
		          }
	                      console.log("emitting");
		          IO.sockets['in']("log-" + room).emit('data', {
		            type: 'execute',
		            cmdstr: "set "+curcel+" value t "+data[x]+"\n",
		            room: room
		          });
			});
	}
});

	}
return ("ok");

      }
    });
	
	this.all('/rtgfx/:uno/:due', function(req, res){
console.log("rtgfx/");
//console.log(sys.inspect(this)); 
//res.render('rt_chart.ejs', {layout:false,locals:{para:req.params,uno:req.params.uno,due:req.params.due}});
this.render('rt_chart.ejs', {layout:false,locals:{para:this.req.params,uno:this.req.params.uno,due:this.req.params.due}});
});





    this.post({
      '/_': function(){
        var ref$, room, snapshot, this$ = this;
        ref$ = this.body, room = ref$.room, snapshot = ref$.snapshot;
        return SC._put(room, snapshot, function(){
          this$.response.type(Text);
          return this$.response.send(201, 'OK');
        });
      }
    });
    this.on({
      disconnect: function(){
        var id, key, room, i$, ref$, len$, client;
        id = this.socket.id;
        CleanRoom: for (key in IO.sockets.manager.roomClients[id]) {
          if (/^\/log-/.exec(key)) {
            room = key.substr(5);
            for (i$ = 0, len$ = (ref$ = IO.sockets.clients(key.substr(1))).length; i$ < len$; ++i$) {
              client = ref$[i$];
              if (client.id !== id) {
                continue CleanRoom;
              }
            }
            if ((ref$ = SC[room]) != null) {
              ref$.terminate();
            }
            delete SC[room];
          }
        }
      }
    });
    return this.on({
      data: function(){
        var ref$, room, msg, user, ecell, cmdstr, type, auth, reply, broadcast, this$ = this;
        ref$ = this.data, room = ref$.room, msg = ref$.msg, user = ref$.user, ecell = ref$.ecell, cmdstr = ref$.cmdstr, type = ref$.type, auth = ref$.auth;
        room = (room + "").replace(/^_+/, '');
        reply = function(data){
          return this$.emit({
            data: data
          });
        };
        broadcast = function(data){
          return this$.socket.broadcast.to(this$.data.to
            ? "user-" + this$.data.to
            : "log-" + room).emit('data', data);
        };
        switch (type) {
        case 'chat':
          DB.rpush("chat-" + room, msg, function(){
            return broadcast(this$.data);
          });
          break;
        case 'ask.ecells':
          DB.hgetall("ecell-" + room, function(_, values){
            return broadcast({
              type: 'ecells',
              ecells: values,
              room: room
            });
          });
          break;
        case 'my.ecell':
          DB.hset("ecell-" + room, user, ecell);
          break;
        case 'execute':
          if (auth === '0' || KEY && hmac(room) !== auth) {
            return;
          }
          DB.multi().rpush("log-" + room, cmdstr).rpush("audit-" + room, cmdstr).bgsave().exec(function(){
            var ref$;
            if ((ref$ = SC[room]) != null) {
              ref$.ExecuteCommand(cmdstr);
            }
            return broadcast(this$.data);
          });
          break;
        case 'ask.log':
          this.socket.join("log-" + room);
          this.socket.join("user-" + user);
          DB.multi().get("snapshot-" + room).lrange("log-" + room, 0, -1).lrange("chat-" + room, 0, -1).exec(function(_, arg$){
            var snapshot, log, chat;
            snapshot = arg$[0], log = arg$[1], chat = arg$[2];
            SC[room] = SC._init(snapshot, log, DB, room, this$.io);
            return reply({
              type: 'log',
              room: room,
              log: log,
              chat: chat,
              snapshot: snapshot
            });
          });
          break;
        case 'ask.recalc':
          this.socket.join("recalc." + room);
          SC._get(room, this.io, function(arg$){
            var log, snapshot;
            log = arg$.log, snapshot = arg$.snapshot;
            return reply({
              type: 'recalc',
              room: room,
              log: log,
              snapshot: snapshot
            });
          });
          break;
        case 'stopHuddle':
          if (this.KEY && KEY !== this.KEY) {
            return;
          }
          DB.del(['audit', 'log', 'chat', 'ecell', 'snapshot'].map(function(it){
            return it + "-" + room;
          }), function(){
            var ref$;
            if ((ref$ = SC[room]) != null) {
              ref$.terminate();
            }
            delete SC[room];
            return broadcast(this$.data);
          });
          break;
        case 'ecell':
          if (auth === '0' || KEY && auth !== hmac(room)) {
            return;
          }
          broadcast(this.data);
          break;
        default:
          broadcast(this.data);
        }
      }
    });
  };
}).call(this);
