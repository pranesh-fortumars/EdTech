import React from 'react';
import { 
  Plus, 
  BarChart, 
  FileText, 
  Users, 
  Settings,
  Brain,
  Video,
  Layout,
  UploadCloud,
  ChevronRight
} from 'lucide-react';

const InstructorApp = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Instructor <span className="gradient-text">Dashboard</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your courses and analyze student performance</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Create New Course
        </button>
      </header>

      {/* AI Course Generator Tool */}
      <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(99, 102, 241, 0.05)', border: '1px dashed var(--primary)' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--surface-light)', p: '1rem', borderRadius: '12px', padding: '1rem' }}>
            <Brain size={32} className="gradient-text" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: '0.5rem' }}>AI Course Architect</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '600px' }}>
              Upload your syllabus or PDFs, and our AI will automatically generate a course structure, lecture notes, and quizzes for you.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn" style={{ background: 'var(--primary)', color: 'white' }}>
                <UploadCloud size={18} />
                Upload Documents
              </button>
              <button className="btn" style={{ background: 'var(--surface-light)', color: 'white' }}>Try Prompting</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <Users size={20} color="var(--primary)" />
            <span style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>+12%</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>1,284</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Active Students</div>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <BarChart size={20} color="var(--secondary)" />
            <span style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>+5%</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>$12,450</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Total Revenue</div>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <Star size={20} color="var(--accent)" />
            <span style={{ color: '#10b981', fontSize: '0.875rem', fontWeight: '600' }}>4.9/5.0</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>245</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Student Reviews</div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '1.5rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Recent Courses</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1, 2].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', gap: '1.5rem' }}>
              <div style={{ width: '80px', height: '60px', borderRadius: '8px', background: 'var(--surface-light)' }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600' }}>Mastering Neural Networks V{i}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Published 12 days ago • 452 students</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn" style={{ padding: '0.5rem 1rem', background: 'var(--surface-light)', color: 'white' }}>Edit</button>
                <button className="btn" style={{ padding: '0.5rem 1rem', background: 'var(--surface-light)', color: 'white' }}>Analytics</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorApp;
