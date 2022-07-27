import type { NextApiRequest, NextApiResponse } from 'next';

import { allPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const query = allPostsQuery();

    const data = await fetch("https://9sxrxo1l.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%20%7C%20order(_createdAt%20desc)%7B%0A%20%20%20%20_id%2C%0A%20%20%20%20%20caption%2C%0A%20%20%20%20%20%20%20video%7B%0A%20%20%20%20%20%20%20%20asset-%3E%7B%0A%20%20%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20%20%20url%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20userId%2C%0A%20%20%20%20%20%20postedBy-%3E%7B%0A%20%20%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20%20%20userName%2C%0A%20%20%20%20%20%20%20%20image%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20likes%2C%0A%20%20%20%20comments%5B%5D%7B%0A%20%20%20%20%20%20comment%2C%0A%20%20%20%20%20%20_key%2C%0A%20%20%20%20%20%20postedBy-%3E%7B%0A%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20userName%2C%0A%20%20%20%20%20%20image%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A").then(res => res.json())
      .then(data => {return data; });
    console.log(data);

    res.status(200).json(data.result);
  } else if (req.method === 'POST') {
    const doc = req.body;
    console.log(doc);
    
    client.create(doc).then(() => {
      res.status(200).json('video created');
    });
  }
}
