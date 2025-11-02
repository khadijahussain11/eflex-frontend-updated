import FlipCard from "./FlipCard";
import "./FlipCard.css";
// import "./TeamPage.css"

export default function TeamPage() {
  const teamMembers = [
    {
      image: "https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000",
      name: "Muhammad Wahaj",
      role: "CEO / Founder",
      tagline:
        "A visionary leader passionate about driving innovation. Skilled at building strong teams, delivering impactful solutions, and inspiring growth across every project.",
      bio: "Wahaj, the CEO / Founder of our company, is an exemplary leader known for his expertise in pixel-perfect work and effective team management. His visionary approach to projects not only ensures high-quality outcomes but also fosters a culture of innovation within our team.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com/wahajsultan" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "http://www.linkedin.com/in/wahaj-sultan-b9855b256" },
      ],
    },
    {
      image: "https://tse2.mm.bing.net/th/id/OIP.j4orePCXFMcYtlnNxt730AHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3",
      name: "Asfiya Hussain",
      role: "Full Stack Developer",
      tagline:
        "Focused on building seamless user experiences and strong backends. Passionate about turning ideas into scalable applications.",
      bio: "Develops and maintains both frontend and backend features, ensuring responsive UI and seamless integration with server-side logic.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com/asfiyahussain00" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://www.linkedin.com/in/asfiya-hussain-4842a7268/" },
      ],
    },
    {
      image: "https://thvnext.bing.com/th/id/OIP.B-UbRL9YxUDcsyUrF0P5wQHaHa?w=208&h=208&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
      name: "Khadija Hussain",
      role: "Full Stack Developer",
      tagline:
        "Bringing designs to life with clean code and robust systems. Experienced in frontend, backend, databases, and creating reliable end-to-end solutions.",
      bio: "Designs scalable backend systems and dynamic frontend components while managing databases, APIs, and deployment workflows.",
      socials: [
        { name: "GitHub", icon: "/icons/github.png", link: "https://github.com/khadijahussain11" },
        { name: "LinkedIn", icon: "/icons/linkedin.png", link: "https://www.linkedin.com/in/khadija-hussain-213768366" },
      ],
    },
  ];

  return (
    <section className="team-page">
      <h2>Meet Our Team</h2>
      <p>Passionate innovators building the future together.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <FlipCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
