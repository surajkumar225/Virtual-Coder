// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {

  let data = await fs.promises.readdir("aboutdata");
  let myfile;
  let moreaboutus = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    
        console.log(item)
        myfile = await fs.promises.readFile(('aboutdata/' + item), 'utf-8')
        moreaboutus.push(JSON.parse(myfile))
  }

    res.status(200).json(moreaboutus)

  // fs.promises.readdir("aboutdata", (err, data)=> {
  //   console.log(data);
  //   let moreaboutus = [];
  //   data.forEach((item)=> {
  //     console.log(item)
  //     fs.readFile(('aboutdata/' + item), (d)=> {
  //       moreaboutus.push(d)
  //     })
  //   })
  //   res.status(200).json(moreaboutus)
  // })
}