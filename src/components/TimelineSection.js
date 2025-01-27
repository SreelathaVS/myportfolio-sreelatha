import React from "react";
import { motion } from "framer-motion";

function TimelineSection() {
  const timelineVariants = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.3, type: "spring", stiffness: 50 },
    }),
  };

  const timelineItems = [
    {
      title: "WebOps Member - BRC IITM",
      description: " Added News letters to the news letters page in BRC page.",
    },
    {
      title: "Webops Intern - Inbound Aerospace, Startup by Nirman IITM",
      description:
        "Worked for building website for StartUp. I built Home Page, Navigation bar",
    },
    {
      title: "Webops Intern - TechHighs pvt ltd",
      description:
        "Completed the projects they have given in excellent way, Got Certificate of Excellence.",
    },
    {
      title: "Webops Member - IGEM IITM",
      description:
        "Worked on the accessibility features of the Wiki like Navbar, besides contributing to miscellaneous design portions.",
    },
    {
      title: "Super Coordinator - Saarang'25 Devops Team, IITM",
      description:
        "I worked on Sangam Portal and Main portal of Saarang'25. I built pages for Sangam Clubs in Sangam portal and Faqs, Contactus, Oat rules pages in Main portal. Our Devops team built the best Saarang portals than all previous years. We got so many appreciations.",
    },
  ];

  return (
    <section className="timeline-section">
      <h2>Professional Journey: Two Years of Experiance</h2>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={timelineVariants}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
