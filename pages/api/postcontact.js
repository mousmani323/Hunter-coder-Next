import * as fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = await fs.promises.readdir('contactdata');
      const newFileName = `contactdata/${data.length + 1}.json`;

      await fs.promises.writeFile(newFileName, JSON.stringify(req.body));
      res.status(200).json({ message: 'Data saved successfully' }); // Sending a simple response
    } catch (error) {
      console.error('Error writing data:', error);
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.status(200).json(["allblogs"]);
  }
}
