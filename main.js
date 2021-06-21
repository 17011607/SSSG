var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
	var url = request.url;
	console.log(url)	
	if(request.url == '/'){
		url = '/index.html';
   	 }
	else if(request.url == '/test.txt'){
	response.writeHead(200);
	response.end(fs.readFileSync(__dirname+url));
	response.end();
	return;
    	}
    	else{
		response.writeHead(404);
		
   	 }
 
});
app.listen(3000);
