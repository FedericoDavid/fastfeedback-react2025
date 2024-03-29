import { db } from '@/lib/firebase-admin';
import { getUserSites } from '@/lib/db-admin';
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const siteId = req.query.siteId;
  const { feedback, error } = await getUserSites(siteId);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ feedback });
};
