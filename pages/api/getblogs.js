import * as fs from 'fs';

//http://localhost:3000/api/getblogs?slug=how-to-learn-flask
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error reading file' });
      return;
    }
    
    
    res.status(200).json(JSON.parse(data));
  });
}
