import { getProjects } from '../../services/ProjectService';

export default async function handler(req, res) {
    // The Controller's job is ONLY to handle HTTP (Request -> Response)
    // It delegates the "Thinking" to the Service.

    if (req.method === 'GET') {
        const projects = await getProjects();
        res.status(200).json(projects);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
