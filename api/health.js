export default function handler(req, res) {
  res.status(200).json({ 
    status: 'success', 
    message: 'Backend serverless service running on Vercel v1.0' 
  });
}