// 2. create your own resume data in JSON format

const resumeData = {
  name: "SATHISHWARAN R",
  title: "Full Stack Developer",
  contact: {
    email: "johndoe@example.com",
    phone: "123-456-7890",
    website: "www.johndoe.dev",
    location: "New York, USA",
  },
  summary:
    "Passionate and skilled Full Stack Developer with experience in building web applications using modern technologies.",
  experience: [
    {
      position: "Senior Developer",
      company: "TechCo Solutions",
      startDate: "2020-01-01",
      endDate: "2022-03-15",
      description:
        "Led a team of developers in creating and maintaining web applications. Implemented new features and optimized performance.",
    },
    {
      position: "Frontend Developer",
      company: "WebTech Innovations",
      startDate: "2018-05-01",
      endDate: "2019-12-31",
      description:
        "Developed responsive and user-friendly interfaces for web applications. Collaborated with backend teams to integrate frontend with server-side logic.",
    },
  ],
  education: [
    {
      degree: "Bachelor OF Mathematics",
      school: "University of Madras",
      graduationYear: "2021",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "RESTful APIs",
    "Git",
    "Agile Development",
  ],
};

console.log(JSON.stringify(resumeData, null, 2));
