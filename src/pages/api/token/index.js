import { NextApiRequest, NextApiResponse } from 'next';

class HelloHandler {
  async get(req, res) {
    try {
      const data = { message: 'Hello from Next.js API (Class-based)' };
      res.status(200).json(data);

    } catch (error) {
      console.error("Error in GET request:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async handle(req, res) {
    switch (req.method) {
      case 'GET':
        await this.get(req, res);
        break;
      case 'POST':
        await this.post(req, res);
        break;
      default:
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  }

}


const handler = async (req, res) => {
  const helloHandler = new HelloHandler();
  await helloHandler.handle(req, res);
};

export default handler;
