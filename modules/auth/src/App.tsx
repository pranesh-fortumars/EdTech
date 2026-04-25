import React from 'react';
import { 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  Github, 
  Chrome,
  ArrowRight
} from 'lucide-react';

const AuthApp = () => {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '450px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Secure <span className="gradient-text">Access</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Enter the next dimension of learning</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)' }}>
            <Mail size={18} color="var(--text-muted)" />
            <input type="email" placeholder="Email Address" style={{ background: 'none', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
          </div>

          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)' }}>
            <Lock size={18} color="var(--text-muted)" />
            <input type="password" placeholder="Password" style={{ background: 'none', border: 'none', color: 'white', width: '100%', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text-secondary)' }}>
              <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
              Remember me
            </label>
            <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Forgot password?</a>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            <LogIn size={20} />
            Sign In to Nexus
          </button>
        </div>

        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'var(--border)', zIndex: '0' }}></div>
          <span style={{ position: 'relative', background: 'var(--surface)', padding: '0 1rem', color: 'var(--text-muted)', fontSize: '0.875rem', zIndex: '1' }}>OR CONTINUE WITH</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <button className="btn" style={{ background: 'var(--surface-light)', color: 'white', border: '1px solid var(--border)' }}>
            <Chrome size={20} />
            Google
          </button>
          <button className="btn" style={{ background: 'var(--surface-light)', color: 'white', border: '1px solid var(--border)' }}>
            <Github size={20} />
            GitHub
          </button>
        </div>

        <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Don't have an account? <a href="#" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Join the Nexus</a>
        </div>
      </div>
    </div>
  );
};

export default AuthApp;
