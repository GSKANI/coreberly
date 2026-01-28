import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const team = [
    {
      id: 1,
      name: 'Charann K S',
      title: 'Founder & CEO',
      bio: 'Visionary leader driving the core engine of innovation and strategy at Coreberly.',
      initials: 'CK',
      expertise: ['Leadership', 'Software Architecture', 'Strategic Growth'],
      experience: '4+ Years',
      color: 'neon-red'
    },
    {
      id: 2,
      name: 'Kani.G.S',
      title: 'Co-Founder & CTO',
      bio: 'Pioneer in IoT and Full-stack systems, architecting high-performance tech stacks.',
      initials: 'SK',
      expertise: ['IoT Systems', 'Full-stack Dev', 'Tech Strategy'],
      experience: '3+ Years',
      color: 'neon-orange'
    },
    {
      id: 3,
      name: 'Kishore Kumar',
      title: 'Lead Frontend Engineer',
      bio: 'Expert in crafting pixel-perfect, high-performance user interfaces with modern React.',
      initials: 'KK',
      expertise: ['React.js', 'Animation', 'UI Performance'],
      experience: '3+ Years',
      color: 'neon-blue'
    },
    {
      id: 4,
      name: 'Reshma Shanmugam',
      title: 'Frontend Engineer',
      bio: 'Bridging design and code with elegant, responsive, and user-centric web applications.',
      initials: 'RS',
      expertise: ['Modern UI/UX', 'CSS Architecture', 'Frontend Logic'],
      experience: '2+ Years',
      color: 'neon-purple'
    },
    {
      id: 5,
      name: 'Pavithra',
      title: 'Backend Engineer',
      bio: 'Architecting robust, secure, and scalable server-side systems and databases.',
      initials: 'P',
      expertise: ['Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
      experience: '2+ Years',
      color: 'neon-cyan'
    },
    {
      id: 6,
      name: 'Vignesh',
      title: 'AI Prompt Engineer',
      bio: 'Specializing in LLM optimization and engineering precise AI-driven workflows.',
      initials: 'V',
      expertise: ['LLM Training', 'AI Automation', 'NLP Logic'],
      experience: '2+ Years',
      color: 'neon-green'
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="section-blob"></div>
      <div className="team-container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="tech-title">The Inner <span>Core</span></h2>
          <p className="tech-subtitle">Our elite engineering unit dedicated to building the future.</p>
        </motion.div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className={`team-card-v2 ${member.color}`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="card-scanner-line"></div>

              <div className="member-avatar-wrapper">
                <div className="avatar-ring"></div>
                <div className="member-avatar">{member.initials}</div>
              </div>

              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <span className="member-role">{member.title}</span>
                <p className="member-bio">{member.bio}</p>
              </div>

              <div className="member-expertise-list">
                {member.expertise.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>

              <div className="card-footer">
                <span className="exp-badge">EXP: {member.experience}</span>
                <div className={`status-dot ${hoveredMember === member.id ? 'active' : ''}`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
