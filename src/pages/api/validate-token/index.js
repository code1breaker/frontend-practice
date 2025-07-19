import { NextApiRequest, NextApiResponse } from 'next';

class ValidateTokenHandler {
  async post(req, res) {
    const {token} = req.body
    const {id, password}  = req.headers

    console.log({id, password} ,"dasdashdasjdghjg")

    try {
        if(!id || !password || id!="SSO" || password!="password" ) {
            return res.json({message:"Unauthorized"})
        }
        
        res.status(200).json({token,message:"Valid"});

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
  const validateTokenHandler = new ValidateTokenHandler();
  await validateTokenHandler.handle(req, res);
};

export default handler;
