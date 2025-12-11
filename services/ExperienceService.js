export const ExperienceService = {
    getAllExperience: () => {
        return [
            {
                id: 1,
                company: "Salesforce",
                roles: [
                    {
                        title: "Director Software Engineering",
                        duration: "Aug 2025 - Present",
                        location: "Bellevue, Washington, United States",
                        description: "Building and leading a productive, operationally excellent, engineering team. Developing a highly-available, fault-tolerant, high-throughput, scalable Key Management Service."
                    },
                    {
                        title: "Senior Manager, Software Engineering",
                        duration: "Aug 2022 - Aug 2025",
                        location: "Bellevue, Washington, United States",
                        description: "Led multiple teams delivering critical infrastructure services."
                    },
                    {
                        title: "Manager, Software Engineering",
                        duration: "Feb 2021 - Aug 2022",
                        location: "Bellevue, Washington, United States",
                        description: "Managed a team of 8 engineers focused on platform reliability."
                    }
                ]
            },
            {
                id: 2,
                company: "Expedia Group",
                roles: [
                    {
                        title: "Senior Software Development Engineer",
                        duration: "Jun 2019 - Aug 2019",
                        location: "Bellevue, WA",
                        description: "Engineer on the Risk Modeling team, building a machine learning platform to scalably train, evaluate, and serve machine learning models."
                    },
                    {
                        title: "Software Development Engineer II",
                        duration: "Jul 2017 - Jun 2019",
                        location: "Bellevue, WA",
                        description: "Full stack development for travel booking platforms."
                    },
                    {
                        title: "Software Development Engineer I",
                        duration: "Dec 2016 - Jul 2017",
                        location: "Bellevue, WA",
                        description: "Backend development in Java/Spring."
                    }
                ]
            }
        ];
    }
};
