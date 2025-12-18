export const professionalData = {
    hero: {
        title: "Engineering Leader.",
        subtitle: "I am an Engineering Director with over 9 years of experience building critical infrastructure at scale (Salesforce, Expedia). I believe in servant leadership and extreme ownership, empowering teams to deliver fault-tolerant, high-throughput systems while fostering a culture of trust and continuous improvement."
    },
    navItems: [
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' }
    ],
    experience: [
        {
            id: 1,
            company: "Salesforce",
            role: "Engineering Director",
            period: "2020 - Present",
            description: "Leading the Core Infrastructure team responsible for platform scalability and reliability.",
            achievements: [
                "Managed a team of 15 senior engineers.",
                "Reduced infrastructure costs by 20% through optimization.",
                "Deployed 5-nines availability release pipeline."
            ],
            techStack: ["Java", "Kubernetes", "AWS"]
        },
        {
            id: 2,
            company: "Expedia Group",
            role: "Principal Engineer",
            period: "2016 - 2020",
            description: "Architected the new booking engine microservices.",
            achievements: [
                "Migrated legacy monolith to microservices.",
                "Improved booking latency by 300ms."
            ],
            techStack: ["Scala", "Kafka", "Cassandra"]
        }
    ],
    skills: [
        {
            title: "Leadership & Strategy",
            skills: ["Engineering Management", "Technical Strategy", "Team Building", "Agile/Scrum", "Mentorship", "Hiring"]
        },
        {
            title: "System Architecture",
            skills: ["Distributed Systems", "Microservices", "Cloud Native", "AWS/Azure", "System Design", "Scalability"]
        },
        {
            title: "Frontend Development",
            skills: ["React", "Next.js", "JavaScript/TypeScript", "CSS/Sass", "UI/UX Design", "Performance Optimization"]
        },
        {
            title: "Backend & DevOps",
            skills: ["Node.js", "Python", "Go", "Docker", "Kubernetes", "CI/CD Pipelines"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Personal Portfolio",
            description: "A high-performance, accessible, and responsive personal website built with Next.js.",
            tags: ["Next.js", "React", "CSS Modules"]
        },
        {
            id: 2,
            title: "Cloud Scaler",
            description: "An open-source tool for auto-scaling Kubernetes clusters based on custom metrics.",
            tags: ["Go", "Kubernetes", "Prometheus"]
        }
    ],
    landing: {
        teaserTitle: "Professional",
        gatewayTitle: "The Professional",
        gatewaySubtitle: "Director. Leader. Builder.",
        ctaText: "Enter Professional Site"
    },
    landingImage: "/assets/professional-bg.png"
};