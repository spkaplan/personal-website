const experienceData = [
    {
        id: 1,
        company: "Salesforce",
        role: "Director of Engineering",
        period: "2021 - Present",
        description: "Leading the Core Infrastructure team responsible for the reliability and scalability of the main CRM platform. Managing a distributed team of 25+ engineers.",
        achievements: [
            "Reduced system downtime by 40% through the implementation of a new chaos engineering practice.",
            "Spearheaded the migration of legacy monolith services to a microservices architecture, improving deployment velocity by 300%.",
            "Mentored 3 Senior Engineers to Staff level and established a new internal technical leadership program."
        ],
        techStack: ["Java", "Spring Boot", "Kubernetes", "AWS", "Terraform"]
    },
    {
        id: 2,
        company: "Expedia Group",
        role: "Principal Software Engineer",
        period: "2018 - 2021",
        description: "Technical lead for the Booking Engine modernization project. Architected high-throughput payment processing systems.",
        achievements: [
            "Designed and implemented a fault-tolerant payment gateway handling $2B+ in annual transaction volume.",
            "Optimized database query performance, reducing average latency by 200ms across the booking flow.",
            "Introduced GraphQL to the organization, reducing over-fetching and improving mobile app performance."
        ],
        techStack: ["Kotlin", "GraphQL", "Cassandra", "Kafka", "Redis"]
    },
    {
        id: 3,
        company: "Amazon",
        role: "Senior Software Engineer",
        period: "2015 - 2018",
        description: "Core contributor to the AWS Key Management Service (KMS). Focused on cryptography and high-availability distributed storage.",
        achievements: [
            "Implemented a novel key rotation algorithm that zero-downtime compliance for enterprise customers.",
            "Reduced service latency by 15% by optimizing the hardware security module (HSM) interface.",
            "Authored internal whitepaper on distributed consensus protocols used for state management."
        ],
        techStack: ["Java", "C++", "DynamoDB", "Cryptography", "Distributed Systems"]
    }
];

export const getExperience = async () => {
    // Simulate API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(experienceData);
        }, 100);
    });
};
