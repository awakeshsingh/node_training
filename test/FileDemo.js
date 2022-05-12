// const fs = require('file-system')
var fs = require('fs'); 

class FileSystemDemo { 
    
    createDirectory(dirPath = null){
        if(dirPath!=null){
            try{
                fs.mkdir(dirPath,{recursive:true},(error)=>{
                    if(error){
                        console.error(error)
                    }
                    console.log("directory created sucessfully")
                })    
            }catch(e){
                console.log(e)
            }
            
        }
    }

    changeDirecotryPermission(path = null,mode = null){
        if(path != null && mode!=null){
            fs.chmod(path,mode)
            .then(data=>{
                console.log("data : ",data)
            })
            .catch(err=>{
                console.log("err : ",err)
            })
        }
    }

    readLocalFile(path = null){
        if(path!=null){
            return fs.promises.readFile(path,{encoding:'utf8',flag:'r'})
        }
    }

    async readAgain(path = null){
        if(path!=null){
            let dataFin = ''
           await fs.promises.readFile(path,{encoding:'utf8',flag:'r'})
            .then(data=>{
                dataFin =  Promise.resolve(data)
            })
            .catch(err=>{
                console.log("err : ",err.message)
            })
           return dataFin
        }
    }

    async callIt(path){
        let data = await this.readAgain(path)
        console.log("data : ",data)
    }
    async writeLocalFile(fileName = null){
        if(fileName){
            const data = await this.readLocalFile('/home/deq/node-training/data.txt')
            if(data){
                fs.writeFile("abc2.txt", data, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            }
           
        }
    }

    readAndWriteFile(path= null){
        if(path!=null){
            fs.promises.readFile(path,{encoding:'utf8',flag:'r'})
            .then(data=>{
                fs.writeFile("abc.txt", data, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            })
            .catch(err=>{
                console.log("err : ",err.message)
            })
        }
    }

    readFileWithStrams(fileName = null){
        if(fileName){
            var readStream = fs.createReadStream(fileName,{
                flag: 'a+',
                encoding: 'UTF-8',
                start: 5,
                end: 64,
                highWaterMark: 16
            });
            readStream.on('open', function (data) {
                console.log("data : ",data)
            });
            
            // This catches any errors that happen while creating the readable stream (usually invalid names)
            readStream.on('error', function(err) {
                res.end(err);
            });
            
        }
    }
}


const myObj = new FileSystemDemo()
// myObj.changeDirecotryPermission("1/2/3/4",0777)
// myObj.readAndWriteFile('/home/deq/node-training/data.txt')
// myObj.writeLocalFile('/home/deq/node-training/write.txt')
// myObj.readFileWithStrams('/home/deq/node-training/data.txt')
myObj.callIt('/home/deq/node-training/data.txt')
