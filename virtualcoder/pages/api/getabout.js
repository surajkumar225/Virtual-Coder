// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getabout?slug=about-virtual-coder

import * as fs from 'fs';

export default function handler(req, res) {

  fs.readFile(`aboutdata/${req.query.slug}.json`, 'utf-8', (err, data)=> {

      if (err){
        res.status(500).json({error: "Internal server error"})
      }

    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}
