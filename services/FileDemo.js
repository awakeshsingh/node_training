/* eslint-disable class-methods-use-this */
// const fs = require('file-system')
const fs = require('fs');

class FileSystemDemo {
  createDirectory(dirPath = null) {
    if (dirPath != null) {
      try {
        fs.mkdir(dirPath, { recursive: true }, (error) => {
          if (error) {
            console.error(error);
          }
          console.log('directory created sucessfully');
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      throw new Error('invalid path');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  changeDirecotryPermission(path = null, mode = null) {
    if (path != null && mode != null) {
      fs.chmod(path, mode)
        .then((data) => {
          console.log('data : ', data);
        })
        .catch((err) => {
          console.log('err : ', err);
        });
    } else {
      throw new Error('invalid path');
    }
  }

  readLocalFile(path = null) {
    if (path != null) {
      return fs.promises.readFile(path, { encoding: 'utf8', flag: 'r' });
    }
    throw new Error('invalid path');
  }

  async readAgain(path = null) {
    if (path != null) {
      let dataFin = '';
      await fs.promises.readFile(path, { encoding: 'utf8', flag: 'r' })
        .then((data) => {
          dataFin = Promise.resolve(data);
        })
        .catch((err) => {
          console.log('err : ', err.message);
        });
      return dataFin;
    }
    throw new Error('invalid path');
  }

  async callIt(path) {
    const data = await this.readAgain(path);
    console.log('data : ', data);
  }

  async writeLocalFile(fileName = null) {
    if (fileName) {
      const data = await this.readLocalFile('/home/deq/node-training/data.txt');
      if (data) {
        fs.writeFile('abc2.txt', data, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
      }
    } else {
      throw new Error('invalid fileName');
    }
  }

  readAndWriteFile(path = null) {
    if (path != null) {
      fs.promises.readFile(path, { encoding: 'utf8', flag: 'r' })
        .then((data) => {
          fs.writeFile('../public/abc.txt', data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
        })
        .catch((err) => {
          console.log('err : ', err.message);
        });
    } else {
      throw new Error('invalid path');
    }
  }
}

const myObj = new FileSystemDemo();
// myObj.changeDirecotryPermission("public/1/2/3/4",0777)
myObj.readAndWriteFile('/home/deq/node-training/data.txt');
// myObj.writeLocalFile('/home/deq/node-training/write.txt')
// myObj.readFileWithStrams('/home/deq/node-training/data.txt')
// myObj.callIt('/home/deq/node-training/data.txt')
