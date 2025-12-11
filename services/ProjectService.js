const projectData = [
    {
        id: 1,
        title: "Distributed Key-Value Store",
        description: "A high-performance, strongly consistent key-value store built from scratch in Go. Features Raft consensus for replication and a Log-Structured Merge (LSM) tree for storage engine.",
        tags: ["Go", "Raft", "Distributed Systems", "LSM Tree"],
        link: "https://github.com/sam/kv-store"
    },
    {
        id: 2,
        title: "ML Deployment Platform",
        description: "An automated MLOps platform for deploying and scaling machine learning models on Kubernetes. Includes model versioning, A/B testing, and drift detection.",
        tags: ["Python", "Kubernetes", "TensorFlow", "FastAPI", "React"],
        link: "https://github.com/sam/ml-platform"
    },
    {
        id: 3,
        title: "Personal Portfolio V2",
        description: "This website! A modern, high-performance SPA built with Next.js. Features a unique split-screen navigation, glassmorphism UI, and seamless state transitions.",
        tags: ["Next.js", "React", "CSS Modules", "SPA", "UX Design"],
        link: "https://github.com/sam/portfolio"
    }
];

export const getProjects = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projectData);
        }, 100);
    });
};
