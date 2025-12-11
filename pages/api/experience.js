import { ExperienceService } from '../../services/ExperienceService';

export default function handler(req, res) {
    if (req.method === 'GET') {
        const experience = ExperienceService.getAllExperience();
        res.status(200).json(experience);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
