// Imports removed as they are unused in the data object


export const resumeData = {
    personalInfo: {
        name: "Rohit Yadav",
        tagline: "Software Engineer & Full Stack Developer",
        location: "Lucknow, India",
        email: "Ry538663@gmail.com",
        phone: "+91 9565314883",
        linkedin: "https://www.linkedin.com/in/rohit-yadav-46390a245/",
        github: "https://github.com/ry538663",
        about: "Passionate Software Engineer with a strong foundation in Web Development and problem-solving. Dedicated to writing clean, maintainable code and building user-centric applications.",
        avatar: "/images/profile.png",
        resumeLink: "/Rohit_Yadav_Resume.pdf"
    },
    education: [
        {
            school: "Babu Banarasi Das University, Lucknow",
            degree: "Bachelor of Technology (CSE)",
            date: "Jul 2022 – May 2026",
            gpa: "8.35 (till 7th sem)",
            description: "Focus on Computer Science & Engineering. Consistent academic performer."
        },
        {
            school: "P M P T Rajkaran V P I C J B C Ayodhya",
            degree: "Intermediate (Class XII)",
            date: "2022",
            gpa: "70.6%",
            description: "Completed Intermediate Examination from U.P. Board with distinction in Mathematics and Physics.",
            certificate: "/Intermediate_Certificate.jpg"
        },
        {
            school: "Ram Sureman J R Balika I C Asnahra Chhapiya Gonda",
            degree: "High School (Class X)",
            date: "2020",
            gpa: "76%",
            description: "Completed High School Examination from U.P. Board with strong foundation in Science and Mathematics.",
            certificate: "/HighSchool_Certificate.jpg"
        }
    ],
    experience: [
        {
            company: "AlkaTech Software Solution Pvt. Ltd",
            logo: "/images/companies/alkatech.jpg",
            title: "Software Engineer Intern",
            date: "Oct 2024 – Mar 2025",
            location: "Lucknow, Uttar Pradesh",
            type: "Hybrid",
            description: [
                "Collaborated with a team of developers to design, develop, and test web-based applications using technologies such as JavaScript, React, Node.js, Next.js, etc.",
                "Contributed to writing clean, maintainable, and efficient code following industry best practices."
            ],
            certificate: "https://drive.google.com/file/d/1J5Hpp2GK70-5MTEHPT3cG575Ig55CYDo/view"
        }
    ],
    projects: [
        {
            title: "Real-Time Web Application for Autonomous Accident Detection",
            description: "Developed an automated smart web application to detect and manage accidental and emergency situations in real time. Integrates sensors, GPS, and a web dashboard.",
            techStack: ["React.js", "Django", "Python", "Google Maps API", "IoT (ESP32)"],
            link: "https://github.com/ry538663/accidental.git",
            image: "/images/projects/accident-detection.png"
        },
        {
            title: "Revolutionizing Voting System",
            description: "Designed and developed a secure, automated voter verification system using MERN stack to streamline the voting process with QR code-based digital voting pass.",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
            link: "https://github.com/ry538663/Voting-Process.git",
            image: "/images/projects/voting-system.png"
        },
        {
            title: "Aqua Monitoring System",
            description: "IoT-based solution for real-time water quality monitoring. Tracks pH, turbidity, temperature, and water levels with a web dashboard for analysis and alert automation.",
            techStack: ["Arduino/ESP32", "Python", "Node.js", "Firebase", "HTML/CSS/JS", "MQTT"],
            link: "https://github.com/ry538663/AQUA-Monitoring.git",
            image: "/images/projects/aqua-monitoring.png"
        },
        {
            title: "E-Commerce Website for Masala Products",
            description: "Full-stack e-commerce platform for traditional spices. Features user authentication, product catalog, secure payments (Razorpay/Stripe), and an admin dashboard.",
            techStack: ["React", "Node.js", "MongoDB", "Express.js", "Razorpay"],
            link: "https://github.com/ry538663/Masala.git",
            image: "/images/projects/masala-ecommerce.png"
        }
    ],
    skills: {
        categories: [
            {
                name: "Coding Languages",
                skills: ["Python", "Java", "JavaScript", "SQL", "C", "C++"]
            },
            {
                name: "Web Development",
                skills: ["React.js", "Next.js", "Node.js", "Express.js", "AngularJS", "MongoDB"]
            },
            {
                name: "Developer Tools",
                skills: ["VS Code", "Git", "GitHub", "Postman", "AWS", "GCP", "Firebase"]
            }
        ],
        proficiency: [
            { name: "JavaScript", level: 90 },
            { name: "React.js", level: 90 },
            { name: "Python", level: 80 },
            { name: "Java", level: 75 },
            { name: "Node.js", level: 75 },
            { name: "SQL/MongoDB", level: 80 }
        ]
    },
    achievements: [

        {
            title: "Published Research Paper",
            description: "IEEE iConSCEPT 2025: 'A Real-Time Web Application for Autonomous Accident Detection'.",
            certificate: "/Research paper certificate.pdf"
        },
        {
            title: "TCS CodeVita Session 12",
            description: "Achieved an all-time Global rank of 2481 out of 537,000+ Users.",
            certificate: "/TCS CodeVita Season 12 Certificate - ry538663.pdf"
        },
        {
            title: "300+ DSA Questions Solved",
            description: "Completed challenges on platforms like LeetCode and Hackerrank.",
            certificate: ""
        },

        {
            title: "Soft Skill Training",
            description: "Successfully completed training by Learnovate Enterprises (Nov 2024 - Mar 2025).",
            certificate: ""
        }
    ],
    events: [
        {
            title: "Team Leader (President)",
            date: "Spring 2024 - Present",
            description: "BBD University. Leading team activities and initiatives."
        },
        {
            title: "1st Rank in Technical Event",
            date: "Feb 2025",
            description: "Secured 1st Rank in Future Tech event at Utkarsh'25, BBD University Annual Fest."
        },
        {
            title: "Hackathon 2025",
            date: "Jan - Feb 2025",
            description: "Actively participated at Dr. RMLIMS, Lucknow.",
            certificate: "/images/certificates/hackathon-2025.jpg"
        },
        {
            title: "Lawn Tennis Participant",
            date: "March 2024",
            description: "Participated in SANGRAM'24, organized by IIT Roorkee."
        }
    ]
};
