var express=require('express');
var app=express();

const PORT=process.env.PORT||3000;

/*
app.use( function(req,res,next){
	if(req.header('x-forwarded-proto')=='http')
	{
		next();
	}
	else{
		res.redirect('http://'+req.hostname+req.url);
	}
});
*/
app.use(express.static('public'));



var server=app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});