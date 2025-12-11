import { getExperience } from '../../services/ExperienceService';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const experience = await getExperience();
        res.status(200).json(experience);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
