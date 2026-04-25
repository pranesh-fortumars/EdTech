import React from 'react';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Star, 
  Download, 
  MessageCircle,
  BrainCircuit,
  Zap,
  ChevronRight
} from 'lucide-react';

const LearningApp = () => {
  const courses = [
    { title: "Advanced Machine Learning", instructor: "Dr. Sarah Chen", progress: 65, duration: "12h 30m", rating: 4.9 },
    { title: "Quantum Computing Basics", instructor: "Prof. James Wilson", progress: 30, duration: "8h 45m", rating: 4.7 },
    { title: "Neuroscience in Education", instructor: "Elena Rodriguez", progress: 90, duration: "15h 20m", rating: 5.0 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <header>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My <span className="gradient-text">Learning Journey</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Track your progress and continue where you left off</p>
      </header>

      {/* AI Recommendation Banner */}
      <div className="glass-panel" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ background: 'var(--primary)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}>
          <Zap size={32} color="white" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '0.25rem' }}>AI Learning Path: "The Architect"</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Nexus AI has generated a custom revision plan based on your recent assessment performance. Focus on Neural Architectures today.</p>
        </div>
        <button className="btn btn-primary">Start Revision</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {courses.map((course, index) => (
          <div key={index} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s' }}>
            <div style={{ height: '180px', background: `linear-gradient(135deg, var(--surface-light), var(--surface))`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <BrainCircuit size={48} color="rgba(255,255,255,0.1)" />
               <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
                 {course.duration}
               </div>
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase' }}>Intermediate</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
                    <Star size={14} fill="var(--secondary)" color="var(--secondary)" />
                    {course.rating}
                  </div>
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{course.title}</h4>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{course.instructor}</div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Progress</span>
                  <span style={{ fontWeight: '600' }}>{course.progress}%</span>
                </div>
                <div style={{ height: '6px', background: 'var(--surface-light)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}></div>
                </div>
              </div>

              <button className="btn" style={{ background: 'var(--surface-light)', color: 'white', width: '100%' }}>
                <Play size={18} fill="white" />
                Continue Lecture
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningApp;
