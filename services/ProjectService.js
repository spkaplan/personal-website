// This is a "Service" (Business Logic Layer)
// It is pure Node.js code. It doesn't know about HTTP, Requests, or Responses.
// It just handles data.

export const ProjectService = {
    getAllProjects: () => {
        // In a real app, this would query a database (Postgres, MongoDB, etc.)
        // For now, it returns static data.
        return [
            {
                id: 1,
                title: "Key Management Service",
                description: "A highly-available, fault-tolerant, high-throughput service for managing cryptographic keys at Salesforce. Designed for extreme reliability and security compliance.",
                tags: ["Distributed Systems", "Security", "High Scale"]
            },
            {
                id: 2,
                title: "Machine Learning Platform",
                description: "Scalable platform for training, evaluating, and serving ML models at Expedia. Enabled data scientists to deploy experiments to production rapidly.",
                tags: ["Machine Learning", "Platform Engineering", "Big Data"]
            },
            {
                id: 3,
                title: "Personal Portfolio",
                description: "A modern full-stack application built to master the React/Next.js ecosystem. Features server-side rendering, API routes, and a clean component architecture.",
                tags: ["Next.js", "React", "Continuous Learning"]
            }
        ];
    }
};
