import { getAllFeedback } from '@/lib/db-admin';
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const siteId = req.query.siteId;
  const feedback = await getAllFeedback(siteId);

  res.status(200).json({ feedback });
};
