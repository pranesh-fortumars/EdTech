import React, { useState } from 'react';
import { 
  Video, 
  Mic, 
  Monitor, 
  MessageCircle, 
  Hand, 
  Settings, 
  LogOut,
  Users,
  Layout,
  Pencil,
  Eraser,
  Square,
  Circle,
  Type,
  Share2
} from 'lucide-react';

const LiveClassApp = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'whiteboard'>('video');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%', animation: 'pulse-red 2s infinite' }}></span>
            Live Class: <span className="gradient-text">Advanced Neural Architectures</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Instructor: Dr. Sarah Chen • 42 Participants</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn" style={{ background: 'var(--surface-light)', color: 'white' }}>
            <Share2 size={18} /> Share Invite
          </button>
          <button className="btn" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}>
            <LogOut size={18} /> Leave
          </button>
        </div>
      </header>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 350px', gap: '1.5rem', minHeight: '0' }}>
        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '0' }}>
          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--surface-light)', padding: '0.4rem', borderRadius: '12px', alignSelf: 'flex-start' }}>
            <button 
              onClick={() => setActiveTab('video')}
              style={{ 
                padding: '0.5rem 1.25rem', 
                borderRadius: '8px', 
                border: 'none', 
                background: activeTab === 'video' ? 'var(--primary)' : 'transparent',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Video size={16} /> Video Feed
            </button>
            <button 
              onClick={() => setActiveTab('whiteboard')}
              style={{ 
                padding: '0.5rem 1.25rem', 
                borderRadius: '8px', 
                border: 'none', 
                background: activeTab === 'whiteboard' ? 'var(--primary)' : 'transparent',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Layout size={16} /> Interactive Whiteboard
            </button>
          </div>

          <div className="glass-panel" style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {activeTab === 'video' ? (
              <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', padding: '1rem' }}>
                <div style={{ background: 'var(--surface-light)', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>Dr. Sarah Chen (Instructor)</div>
                   <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Users size={48} color="rgba(255,255,255,0.1)" />
                   </div>
                </div>
                <div style={{ background: 'var(--surface-light)', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>Alex Rivera (You)</div>
                   <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Users size={48} color="rgba(255,255,255,0.1)" />
                   </div>
                </div>
              </div>
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '0.75rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                  <Pencil size={20} color="var(--primary)" style={{ cursor: 'pointer' }} />
                  <Eraser size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                  <Square size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                  <Circle size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                  <Type size={20} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                  <div style={{ width: '1px', background: 'var(--border)', margin: '0 0.5rem' }}></div>
                  <div style={{ width: '20px', height: '200x', background: 'var(--primary)', borderRadius: '50%', cursor: 'pointer' }}></div>
                </div>
                <div style={{ flex: 1, cursor: 'crosshair', background: 'white', opacity: 0.05 }}></div>
              </div>
            )}

            {/* Controls Overlay */}
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', background: 'rgba(0,0,0,0.6)', padding: '0.75rem 1.5rem', borderRadius: '20px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button style={{ background: 'var(--surface-light)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}><Mic size={20} /></button>
              <button style={{ background: 'var(--primary)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}><Video size={20} /></button>
              <button style={{ background: 'var(--surface-light)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}><Monitor size={20} /></button>
              <button style={{ background: 'var(--surface-light)', border: 'none', color: 'white', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}><Hand size={20} /></button>
            </div>
          </div>
        </div>

        {/* Sidebar Panel */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem' }}>
             <button style={{ flex: 1, padding: '0.5rem', background: 'transparent', border: 'none', color: 'white', borderBottom: '2px solid var(--primary)', cursor: 'pointer' }}>Chat</button>
             <button style={{ flex: 1, padding: '0.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Participants</button>
          </div>
          <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>Welcome to the class!</div>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface-light)' }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>Student {i}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Could you explain the cost function again?</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '1rem', borderTop: '1px solid var(--border)' }}>
             <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: 'var(--surface)' }}>
               <input type="text" placeholder="Type a message..." style={{ background: 'none', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '0.85rem' }} />
               <MessageCircle size={18} color="var(--primary)" />
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-red {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
      `}</style>
    </div>
  );
};

export default LiveClassApp;
