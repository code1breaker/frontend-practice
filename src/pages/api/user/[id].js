
export default async function handler(req, res) {
    const {
      query: { id, search },
      method,
      body,
    } = req;

    console.log(id,search,"jhkk")
  
    if (method === 'PUT') {
      const { name, email } = body;
  
      if (!name || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Simulate update logic
      return res.status(200).json({
        message: 'User updated',
        user: { id, name, email },
      });
    } else {
      res.setHeader('Allow', ['PUT']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  }