var path = require('path');

class PathDemo { 
    constructor(url){
        this.url = url
        console.log(path.extname('index.coffee.md'))
        console.log(path.relative('/data/orandea/impl/bbb', '/data/orandea/impl/bbb'))
        console.log(path.resolve('/foo', './bar', './baz'))
        console.log(path.resolve('/foo/bar/1/', './tmp/file/'));
        console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
        
    }

}

const obj =  new PathDemo('/home/deq/node-training/')