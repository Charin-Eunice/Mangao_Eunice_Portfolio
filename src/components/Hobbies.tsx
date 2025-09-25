import React from 'react';
import './Hobbies.css'; 

const hobbiesData = [
  {
    icon: 'fas fa-camera',
    title: 'Photography',
    description: 'Capturing moments and exploring different perspectives through a lens.',
  },
  {
    icon: 'fas fa-palette',
    title: 'Digital Art',
    description: 'Creating illustrations and designs using digital tools and software.',
  },
  {
    icon: 'fas fa-dumbbell',
    title: 'Swimming',
    description: 'Staying active and healthy through swimming and various sports.',
  },
  {
    icon: 'fas fa-headphones',
    title: 'Cleaning',
    description: 'I like having a clean environment and I enjoy it.',
  },
  {
    icon: 'fas fa-headphones',
    title: 'Reading',
    description: 'Various novels and stories in apps such as Wattpad.',
  },
  {
    icon: 'fas fa-headphones',
    title: 'Music',
    description: 'Playing guitar, listening to new genres, and discovering artists.',
  },
];

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="skills">
      <h2>My <span className="highlight">Hobbies</span></h2>
      <div className="skills-grid">
        {hobbiesData.map((hobby, index) => (
          <div key={index} className="skill-card">
            <i className={hobby.icon}></i>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;