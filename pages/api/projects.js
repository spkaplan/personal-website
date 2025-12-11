import { ProjectService } from '../../services/ProjectService';

export default function handler(req, res) {
    // The Controller's job is ONLY to handle HTTP (Request -> Response)
    // It delegates the "Thinking" to the Service.

    if (req.method === 'GET') {
        const projects = ProjectService.getAllProjects();
        res.status(200).json(projects);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
