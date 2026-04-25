import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Video, 
  ClipboardCheck, 
  BarChart3, 
  Trophy, 
  MessageSquare, 
  Database, 
  CreditCard, 
  ShieldCheck, 
  Settings,
  BrainCircuit,
  Search,
  Bell,
  User
} from 'lucide-react';

// Fallback component for remotes
const RemoteFallback = ({ name }: { name: string }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <div className="glass-panel" style={{ padding: '4rem' }}>
      <BrainCircuit size={48} className="gradient-text" style={{ marginBottom: '1rem', animation: 'pulse 2s infinite' }} />
      <h3>Loading {name} Module...</h3>
      <p style={{ color: 'var(--text-secondary)' }}>Synchronizing with AI Neural Network</p>
    </div>
  </div>
);

// Remote Components using Module Federation
const AuthModule = React.lazy(() => import("auth/AuthApp"));
const LearningModule = React.lazy(() => import("learning/LearningApp"));
const InstructorModule = React.lazy(() => import("instructor/InstructorApp"));
const AITutor = React.lazy(() => import("ai_service/AITutor"));
const LiveClassModule = React.lazy(() => import("live_class/LiveClassApp"));
const AssessmentModule = React.lazy(() => import("assessment/AssessmentApp"));
const PaymentModule = React.lazy(() => import("payment/PaymentApp"));
const GamificationModule = React.lazy(() => import("gamification/GamificationApp"));

const SidebarLink = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => (
  <Link to={to} className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px' }}>
    <Icon size={20} />
    <span>{label}</span>
  </Link>
);

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        {/* Sidebar */}
        <aside className="glass-panel" style={{ width: '280px', height: '100%', borderRadius: '0', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 0.5rem' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BrainCircuit size={20} color="white" />
            </div>
            <h2 style={{ fontSize: '1.5rem', letterSpacing: '-0.025em' }}>EdTech <span className="gradient-text">Nexus</span></h2>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, overflowY: 'auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '1rem 0 0.5rem 1rem' }}>Learning</div>
            <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" />
            <SidebarLink to="/learning" icon={BookOpen} label="My Courses" />
            <SidebarLink to="/live" icon={Video} label="Live Classes" />
            
            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '1rem 0 0.5rem 1rem' }}>Academic</div>
            <SidebarLink to="/assessments" icon={ClipboardCheck} label="Assessments" />
            <SidebarLink to="/instructor" icon={Users} label="Instructor Hub" />
            <SidebarLink to="/analytics" icon={BarChart3} label="Insights" />
            
            <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '1rem 0 0.5rem 1rem' }}>Social & Tools</div>
            <SidebarLink to="/community" icon={MessageSquare} label="Community" />
            <SidebarLink to="/gamification" icon={Trophy} label="Achievements" />
            <SidebarLink to="/content" icon={Database} label="Library" />
            <SidebarLink to="/billing" icon={CreditCard} label="Billing & Plans" />
          </nav>

          <div className="glass-panel" style={{ padding: '1rem', marginTop: 'auto', background: 'rgba(255,255,255,0.03)' }}>
            <SidebarLink to="/settings" icon={Settings} label="Settings" />
            <SidebarLink to="/admin" icon={ShieldCheck} label="Admin Console" />
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.05), transparent 40%), radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.05), transparent 40%)' }}>
          {/* Header */}
          <header style={{ height: '70px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
            <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', width: '400px' }}>
              <Search size={18} color="var(--text-muted)" />
              <input type="text" placeholder="Search courses, mentors, AI help..." style={{ background: 'none', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '0.9rem' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <Bell size={20} color="var(--text-secondary)" />
                <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--secondary)', borderRadius: '50%', border: '2px solid var(--background)' }}></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>Alex Rivera</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pro Learner</div>
                </div>
                <div className="glass-panel" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'var(--surface-light)' }}>
                  <User size={24} color="var(--text-secondary)" />
                </div>
              </div>
            </div>
          </header>

          {/* Viewport */}
          <section style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
            <Suspense fallback={<RemoteFallback name="Module" />}>
              <Routes>
                <Route path="/" element={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome back, <span className="gradient-text">Alex</span></h1>
                        <p style={{ color: 'var(--text-secondary)' }}>You've completed 85% of your AI Ethics course. Keep it up!</p>
                      </div>
                      <button className="btn btn-primary">
                        <Video size={18} />
                        Join Live Class
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                      <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Current Streak</div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                          <span style={{ fontSize: '2rem', fontWeight: '700' }}>12</span>
                          <span style={{ color: 'var(--text-muted)' }}>Days</span>
                        </div>
                      </div>
                      <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Skills Mastered</div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                          <span style={{ fontSize: '2rem', fontWeight: '700' }}>42</span>
                          <span style={{ color: 'var(--text-muted)' }}>Tokens</span>
                        </div>
                      </div>
                      <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Learning Hours</div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                          <span style={{ fontSize: '2rem', fontWeight: '700' }}>128</span>
                          <span style={{ color: 'var(--text-muted)' }}>Hrs</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                      <div className="glass-panel" style={{ padding: '2rem', minHeight: '300px' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Your Learning Path</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {[1, 2, 3].map(i => (
                            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                              <div style={{ width: '60px', height: '60px', borderRadius: '8px', background: 'var(--surface-light)' }}></div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '600' }}>Advanced Neural Networks Part {i}</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>32 mins remaining</div>
                              </div>
                              <button className="btn" style={{ padding: '0.5rem 1rem', background: 'var(--surface-light)', color: 'white' }}>Continue</button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>AI Tutor</h3>
                        <div style={{ background: 'var(--surface-light)', borderRadius: '12px', padding: '1rem', height: '200px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                          Chat with Nexus AI...
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Ask a Question</button>
                      </div>
                    </div>
                  </div>
                } />
                <Route path="/auth/*" element={<AuthModule />} />
                <Route path="/learning/*" element={<LearningModule />} />
                <Route path="/instructor/*" element={<InstructorModule />} />
                <Route path="/live" element={<LiveClassModule />} />
                <Route path="/assessments/*" element={<AssessmentModule />} />
                <Route path="/billing/*" element={<PaymentModule />} />
                <Route path="/gamification/*" element={<GamificationModule />} />
              </Routes>
            </Suspense>
          </section>
        </main>
      </div>
      <Suspense fallback={null}>
        <AITutor />
      </Suspense>
    </Router>
  );
};

export default App;
