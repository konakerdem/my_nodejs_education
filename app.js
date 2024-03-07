var http=require('http'); //modules export
var fs=require('fs');
var PORT=8000; // server port


var server=http.createServer((req,res)=>{
if(req.url=='/')
    {   res.statusCode=200;
        fs.readFile('home.html',(err,data)=>{

            if(err)
            {   res.statusCode=404;
                res.write('<h1>An error was encountered while opening the page</h1>')
            }

            else
            {
                 res.write(data);
            }
         });

    }

    else if(req.url=='/products')
    {  
        res.statusCode=200;
        fs.readFile('product.html',(err,data)=>{

            if(err)
            {   res.statusCode=404;
                res.write('<h1>An error was encountered while opening the page</h1>')
            }

            else
            {
                 res.write(data);
            }
         });

       
    }
    else{
        res.statusCode=200;
        fs.readFile('404.html',(err,data)=>{

            if(err)
            {   res.statusCode=404;
                res.write('<h1>An error was encountered while opening the page</h1>')
            }

            else
            {
                 res.write(data);
            }
         });
    }
});










server.listen(PORT,()=>{
    console.log('Node.Js server at port 8000');
});