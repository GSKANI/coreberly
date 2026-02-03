import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Team.css';

const team = [
  {
    id: 1,
    name: 'Charann K S',
    title: 'Founder & CEO',
    bio: 'Visionary leader driving the core engine of innovation and strategy at Coreberly.',
    initials: 'CK',
    image: '/images/charannks.jpg',
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
    image: '/images/kanigs.jpg',
    expertise: ['IoT Systems', 'Full-stack Dev', 'Tech Strategy'],
    experience: '3+ Years',
    color: 'neon-orange'
  },
  {
    id: 7,
    name: 'Anish Viswanathan VR',
    title: 'COO & Data Engineer',
    bio: 'Driving operational excellence and data-driven strategies to scale Coreberly’s infrastructure.',
    initials: 'AV',
    expertise: ['Data Engineering', 'Operations', 'Strategy'],
    experience: '3+ Years',
    color: 'neon-yellow'
  },
  {
    id: 3,
    name: 'Kishore Kumar',
    title: 'Lead Frontend Engineer',
    bio: 'Expert in crafting pixel-perfect, high-performance user interfaces with modern React.',
    initials: 'KK',
    image: '/images/kishore.jpg',
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
    image: '/images/pavithra.jpg',
    expertise: ['Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
    experience: '2+ Years',
    color: 'neon-cyan'
  },
  {
    id: 8,
    name: 'Arthiya AP',
    title: 'Cybersecurity & Digital Forensic',
    bio: 'Safeguarding digital frontiers with advanced threat detection and forensic analysis.',
    initials: 'AA',
    expertise: ['Cybersecurity', 'Digital Forensics', 'Ethical Hacking'],
    experience: '2+ Years',
    color: 'neon-pink'
  },
  {
    id: 6,
    name: 'Vignesh',
    title: 'AI Prompt Engineer',
    bio: 'Specializing in LLM optimization and engineering precise AI-driven workflows.',
    initials: 'V',
    image: '/images/vignesh_new.jpg',
    expertise: ['LLM Training', 'AI Automation', 'NLP Logic'],
    experience: '2+ Years',
    color: 'neon-green',
    imgFit: 'contain'
  }
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

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
          {team.map((member) => (
            <motion.div
              key={member.id}
              className={`team-card-v2 ${member.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              { }

              <div className="member-avatar-wrapper">
                <div className="avatar-ring"></div>
                <div className="member-avatar">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-img-real"
                      style={member.imgFit ? { objectFit: member.imgFit } : {}}
                    />
                  ) : (
                    member.initials
                  )}
                </div>
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
