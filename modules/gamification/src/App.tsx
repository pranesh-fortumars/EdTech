import React from 'react';
import { 
  Trophy, 
  Medal, 
  Star, 
  Flame, 
  Zap, 
  Target, 
  Users, 
  ChevronRight,
  Award
} from 'lucide-react';

const GamificationApp = () => {
  const leaderboard = [
    { rank: 1, name: "Sarah Chen", points: 12500, avatar: "SC", color: "#facc15" },
    { rank: 2, name: "Alex Rivera", points: 11200, avatar: "AR", color: "#94a3b8" },
    { rank: 3, name: "James Wilson", points: 10800, avatar: "JW", color: "#92400e" },
    { rank: 4, name: "Elena Rodriguez", points: 9500, avatar: "ER", color: "var(--primary)" },
    { rank: 5, name: "David Kim", points: 8900, avatar: "DK", color: "var(--primary)" },
  ];

  const badges = [
    { name: "Fast Learner", icon: Zap, color: "#6366f1", desc: "Completed 5 lessons in one day" },
    { name: "Quiz Master", icon: Trophy, color: "#facc15", desc: "Perfect score on 10 quizzes" },
    { name: "Team Player", icon: Users, color: "#ec4899", desc: "Helped 20 peers in community" },
    { name: "Early Bird", icon: Star, color: "#8b5cf6", desc: "Studied before 7 AM for a week" },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <header>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Achievements & <span className="gradient-text">Rewards</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Level up your skills and climb the global leaderboard</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* User Status Card */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '3rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid var(--primary)' }}>
                <span style={{ fontSize: '2rem', fontWeight: '700' }}>AR</span>
              </div>
              <div style={{ position: 'absolute', bottom: '-5px', right: '-5px', background: 'var(--secondary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '700' }}>LVL 14</div>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Alex Rivera</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Flame size={16} color="#ef4444" /> 12 Day Streak</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Award size={16} color="var(--primary)" /> Pro Scholar</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>11,200 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>XP</span></div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Next rank in 800 XP</div>
                </div>
              </div>
              
              <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}></div>
              </div>
            </div>
          </div>

          {/* Badges Grid */}
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Unlocked Badges</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {badges.map((badge, index) => (
                <div key={index} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <badge.icon size={28} color={badge.color} />
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{badge.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{badge.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard Panel */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Global Ranking</h3>
            <button className="btn" style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', background: 'var(--surface-light)', color: 'white' }}>View All</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {leaderboard.map((user) => (
              <div key={user.rank} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', borderRadius: '12px', background: user.rank === 2 ? 'rgba(99, 102, 241, 0.1)' : 'transparent', border: user.rank === 2 ? '1px solid var(--primary)' : '1px solid transparent' }}>
                <div style={{ width: '24px', fontWeight: '700', color: user.rank <= 3 ? user.color : 'var(--text-muted)' }}>#{user.rank}</div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '600' }}>
                  {user.avatar}
                </div>
                <div style={{ flex: 1, fontWeight: '500', fontSize: '0.9rem' }}>{user.name}</div>
                <div style={{ fontWeight: '700', color: user.rank === 2 ? 'white' : 'var(--text-secondary)', fontSize: '0.9rem' }}>{user.points.toLocaleString()}</div>
              </div>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', marginTop: 'auto', background: 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
             <Target size={24} color="var(--secondary)" style={{ marginBottom: '0.75rem' }} />
             <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.25rem' }}>Weekly Challenge</div>
             <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Solve 5 advanced math problems</div>
             <div style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: '700' }}>2/5 COMPLETED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationApp;
