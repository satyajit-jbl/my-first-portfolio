import p1_1 from "../../assets/project-1.png";
import p1_2 from "../../assets/project-1-2.png";
import p1_3 from "../../assets/project-1-3.png";

import p2_1 from "../../assets/project-2.png";
import p2_2 from "../../assets/project-2-2.png";
import p2_3 from "../../assets/project-2-3.png";

import p3_1 from "../../assets/project-3.png";
import p3_2 from "../../assets/project-3-2.png";
import p3_3 from "../../assets/project-3-3.png";

export const projectsData = [
  {
    image: p1_1,
    projectsName: "TailTales",
    Description: "TailTales is your go-to place for finding loving homes for furry friends in need...",
    longDescription: "TailTales is a platform that connects adoptable pets with potential owners. Users can browse pets by type, read their stories, and submit adoption forms. The admin panel manages adoption requests and verifies users.",
    Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    challenges: "Ensuring real-time updates for available pets and maintaining data integrity during adoption.",
    users: "Pet lovers, animal shelters, and volunteers.",
    images: [p1_1, p1_2, p1_3],
    futurePlan: "Add payment integration for donations and implement a recommendation system for pets.",
    liveLink: "https://tailtales-b9d67.web.app/",
    githubClient: "https://github.com/satyajit-jbl/tailtales-client",
    githubServer: "https://github.com/satyajit-jbl/tailtales-server"
  },
  {
    image: p2_1,
    projectsName: "BistroBoss",
    Description: "BistroBoss is a restaurant management system...",
    longDescription: "BistroBoss helps restaurants manage orders, menu items, and customer reservations efficiently. It features a dashboard for staff and a simple interface for customers to place orders online.",
    Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    challenges: "Maintaining synchronized order states between multiple devices and staff members.",
    users: "Restaurant owners, staff, and customers.",
    images: [p2_1, p2_2, p2_3],
    futurePlan: "Add analytics dashboard and mobile app support.",
    liveLink: "https://bistro-boss-d70c3.web.app/",
    githubClient: "https://github.com/satyajit-jbl/bistro-client",
    githubServer: "https://github.com/satyajit-jbl/bistro-server"
  },
  {
    image: p3_1,
    projectsName: "CritiqueMaster",
    Description: "A platform for movie reviews...",
    longDescription: "CritiqueMaster is a web platform where users can submit and read movie reviews. Features include user authentication, rating system, and a recommendation engine.",
    Technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    challenges: "Handling authentication securely and implementing efficient search and recommendation.",
    users: "Movie enthusiasts and bloggers.",
    images: [p3_1, p3_2, p3_3],
    futurePlan: "Add social login and advanced recommendation engine.",
    liveLink: "https://email-password-auth-696c1.firebaseapp.com/",
    githubClient: "https://github.com/satyajit-jbl/critique-client",
    githubServer: "https://github.com/satyajit-jbl/critique-server"
  }
];
