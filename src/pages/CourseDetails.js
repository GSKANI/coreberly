import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CourseDetails.css';

const courseData = {
    'full-stack-development': {
        title: 'Full Stack Development',
        duration: '6 Months',
        description: 'A comprehensive program designed to take you from a beginner to a professional full-stack developer. Master both frontend and backend technologies with real-world projects.',
        curriculum: [
            'Frontend Fundamentals (HTML5, CSS3, Modern JS)',
            'React.js & State Management (Redux/Context API)',
            'Backend Development with Node.js & Express',
            'Database Management (MongoDB, PostgreSQL)',
            'API Design & Integration',
            'Deployment & Cloud Basics (AWS/Heroku)',
            'Capstone Project & Portfolio Building'
        ],
        features: [
            'Live Interactive Sessions',
            '1-on-1 Mentorship',
            'Job Placement Assistance',
            'Industry Recognized Certificate'
        ],
        icon: '💻'
    },
    'ai-machine-learning': {
        title: 'AI & Machine Learning',
        duration: '5 Months',
        description: 'Unlock the power of Artificial Intelligence. Learn to build predictive models, neural networks, and intelligent systems using the latest industry tools.',
        curriculum: [
            'Python for Data Science',
            'Mathematics & Statistics for AI',
            'Supervised & Unsupervised Learning',
            'Deep Learning & Neural Networks',
            'Natural Language Processing (NLP)',
            'Computer Vision',
            'AI Model Deployment'
        ],
        features: [
            'GPU Cloud Labs Access',
            'Research Project Support',
            'Latest AI Frameworks (PyTorch/TensorFlow)',
            'Certification from Coreberly'
        ],
        icon: '🤖'
    },
    'hr-training': {
        title: 'HR Training',
        duration: '3 Months',
        description: 'Master the art of Human Resource Management. This program covers everything from recruitment strategies to labor laws and organizational psychology.',
        curriculum: [
            'Strategic Recruitment & Selection',
            'Payroll & Compensation Management',
            'Performance Management Systems',
            'Employee Relations & Labor Laws',
            'Training & Development',
            'HR Analytics',
            'Organizational Behavior'
        ],
        features: [
            'Case Study Based Learning',
            'Corporate Expert Sessions',
            'Soft Skills Workshops',
            'Internship Opportunities'
        ],
        icon: '👥'
    },
    'networking': {
        title: 'Networking',
        duration: '4 Months',
        description: 'Build and secure the backbone of modern technology. Learn to design, implement, and manage complex network infrastructures.',
        curriculum: [
            'Network Fundamentals & OSI Model',
            'IP Addressing & Subnetting',
            'Routing & Switching (CCNA Level)',
            'Network Security & Firewalls',
            'Wireless Networking',
            'Cloud Networking Basics',
            'Troubleshooting & Maintenance'
        ],
        features: [
            'Virtual Lab Practice',
            'CCNA Exam Preparation',
            'Hardware Interaction',
            'Career Guidance'
        ],
        icon: '🌐'
    },
    'autocad': {
        title: 'AutoCAD',
        duration: '2 Months',
        description: 'Master industry-standard design software. This course teaches you 2D drafting and 3D modeling for architecture, engineering, and construction.',
        curriculum: [
            'AutoCAD Interface & Tools',
            '2D Drafting & Annotation',
            'Layer Management & Blocks',
            '3D Modeling Fundamentals',
            'Rendering & Visualization',
            'Technical Drawing Standards',
            'Industry Specific Projects'
        ],
        features: [
            'Project Based Learning',
            'Expert Design Mentors',
            'Professional Portfolio',
            'Software Mastery'
        ],
        icon: '📐'
    },
    'data-science': {
        title: 'Data Science',
        duration: '5 Months',
        description: 'Turn data into insights. Learn the complete data science lifecycle from data cleaning and visualization to advanced statistical modeling.',
        curriculum: [
            'Data Analysis with Pandas & NumPy',
            'Data Visualization (Matplotlib, Seaborn)',
            'Business Intelligence with Tableau',
            'Statistical Inference & Hypothesis Testing',
            'Big Data Overview',
            'SQL for Data Science',
            'Data Storytelling & Presentation'
        ],
        features: [
            'Real-world Datasets',
            'Industry Case Studies',
            'Interview Preparation',
            'Global Certification'
        ],
        icon: '📊'
    }
};

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = courseData[courseId];

    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Course Not Found</h2>
                <Link to="/#pricing" className="back-btn">View All Courses</Link>
            </div>
        );
    }

    return (
        <div className="course-details">
            <div className="course-hero">
                <motion.div
                    className="course-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="course-icon-large">{course.icon}</span>
                    <h1>{course.title}</h1>
                    <div className="course-duration-tag">
                        <span className="clock-icon">🕒</span> {course.duration}
                    </div>
                    <p className="course-lead">{course.description}</p>
                </motion.div>
            </div>

            <div className="details-container">
                <div className="details-main">
                    <motion.section
                        className="curriculum-section"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Course Curriculum</h2>
                        <div className="curriculum-list">
                            {course.curriculum.map((item, index) => (
                                <div key={index} className="curriculum-item">
                                    <span className="step-num">{index + 1}</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        className="features-section"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Why Choose This Course?</h2>
                        <div className="features-checklist">
                            {course.features.map((feature, index) => (
                                <div key={index} className="check-item">
                                    <span className="check-icon">✓</span>
                                    <p>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                <motion.div
                    className="details-cta"
                    initial={{ opacity: 0, s: 0.9 }}
                    whileInView={{ opacity: 1, s: 1 }}
                    viewport={{ once: true }}
                >
                    <h3>Ready to start your journey?</h3>
                    <p>Enroll now and get access to all course materials and mentorship.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="enroll-btn">Enroll Now</Link>
                        <Link to="/" className="back-link">← Back to Plans</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CourseDetails;
