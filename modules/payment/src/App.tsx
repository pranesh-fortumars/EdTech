import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  PieChart,
  Download,
  ExternalLink
} from 'lucide-react';

const PaymentApp = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activePlan, setActivePlan] = useState('Starter');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "0" : "0",
      desc: "Perfect for exploring the platform",
      features: ["Access to free courses", "Community forums", "Mobile app access", "AI Tutor (Limited)"],
      button: activePlan === "Starter" ? "Current Plan" : "Downgrade",
      current: activePlan === "Starter"
    },
    {
      name: "Pro Learner",
      price: billingCycle === 'monthly' ? "29" : "290",
      desc: "For serious students and career switchers",
      features: ["All free features", "Unlimited AI Tutoring", "Certificates of completion", "Live class recordings", "Career roadmap AI"],
      button: activePlan === "Pro Learner" ? "Current Plan" : "Upgrade to Pro",
      popular: true,
      current: activePlan === "Pro Learner"
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For institutions and large teams",
      features: ["Everything in Pro", "Multi-user management", "Advanced analytics", "LMS Integration", "Dedicated support"],
      button: activePlan === "Enterprise" ? "Current Plan" : "Contact Sales",
      current: activePlan === "Enterprise"
    }
  ];

  const handleUpgrade = (planName: string) => {
    if (planName === activePlan || planName === 'Enterprise') return;
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setActivePlan(planName);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const transactions = [
    { id: "#INV-8842", date: "Apr 20, 2026", amount: "$29.00", status: "Successful" },
    { id: "#INV-7731", date: "Mar 20, 2026", amount: "$29.00", status: "Successful" },
    { id: "#INV-6620", date: "Feb 20, 2026", amount: "$29.00", status: "Successful" },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Plans & <span className="gradient-text">Billing</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your subscription and view your transaction history</p>
        </div>
        <div style={{ display: 'flex', background: 'var(--surface-light)', padding: '0.4rem', borderRadius: '12px' }}>
          <button 
            onClick={() => setBillingCycle('monthly')}
            className={`btn ${billingCycle === 'monthly' ? 'btn-primary' : ''}`}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', background: billingCycle === 'monthly' ? 'var(--primary)' : 'transparent', color: 'white', border: 'none' }}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBillingCycle('yearly')}
            className={`btn ${billingCycle === 'yearly' ? 'btn-primary' : ''}`}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', background: billingCycle === 'yearly' ? 'var(--primary)' : 'transparent', color: 'white', border: 'none' }}
          >
            Yearly (Save 20%)
          </button>
        </div>
      </header>

      {/* Plans Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {plans.map((plan, index) => (
          <div key={index} className="glass-panel" style={{ 
            padding: '2.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            position: 'relative',
            border: plan.popular ? '2px solid var(--primary)' : '1px solid var(--border)',
            background: plan.popular ? 'rgba(99, 102, 241, 0.05)' : 'var(--surface)'
          }}>
            {plan.popular && (
              <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>MOST POPULAR</div>
            )}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{plan.desc}</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '700' }}>{plan.price !== 'Custom' ? '$' : ''}{plan.price}</span>
              {plan.price !== 'Custom' && <span style={{ color: 'var(--text-muted)' }}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>}
            </div>

            <button 
              onClick={() => handleUpgrade(plan.name)}
              disabled={isProcessing || plan.current}
              className={`btn ${plan.current ? '' : 'btn-primary'}`} 
              style={{ 
                width: '100%', 
                padding: '0.875rem', 
                background: plan.current ? 'var(--surface-light)' : 'var(--primary)',
                color: 'white',
                opacity: (isProcessing && !plan.current) ? 0.7 : 1,
                cursor: (isProcessing || plan.current) ? 'not-allowed' : 'pointer'
              }}
            >
              {isProcessing && !plan.current ? 'Processing...' : plan.button}
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {plan.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
        {/* Transaction History */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
             <h3 style={{ fontSize: '1.25rem' }}>Recent Transactions</h3>
             <button className="btn" style={{ padding: '0.5rem', background: 'var(--surface-light)', color: 'white' }}>
               <Download size={18} /> Export PDF
             </button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <th style={{ padding: '1rem' }}>Invoice ID</th>
                <th style={{ padding: '1rem' }}>Date</th>
                <th style={{ padding: '1rem' }}>Amount</th>
                <th style={{ padding: '1rem' }}>Status</th>
                <th style={{ padding: '1rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: '0.9rem' }}>
                  <td style={{ padding: '1.25rem' }}>{tx.id}</td>
                  <td style={{ padding: '1.25rem' }}>{tx.date}</td>
                  <td style={{ padding: '1.25rem', fontWeight: '600' }}>{tx.amount}</td>
                  <td style={{ padding: '1.25rem' }}>
                    <span style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>{tx.status}</span>
                  </td>
                  <td style={{ padding: '1.25rem' }}>
                    <ExternalLink size={16} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Method */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           <h3 style={{ fontSize: '1.25rem' }}>Payment Method</h3>
           <div className="glass-panel" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #1e1b4b, #312e81)', border: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
                <div style={{ width: '40px', height: '28px', background: '#fbbf24', borderRadius: '4px' }}></div>
                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Credit Card</div>
              </div>
              <div style={{ fontSize: '1.25rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>**** **** **** 8842</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                <div>ALEX RIVERA</div>
                <div>12/28</div>
              </div>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <button className="btn" style={{ width: '100%', background: 'var(--surface-light)', color: 'white' }}>
                Change Payment Method
             </button>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.75rem', justifyContent: 'center' }}>
                <ShieldCheck size={14} /> Secured by Stripe Neural Connect
             </div>
           </div>
        </div>
      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          background: 'var(--primary)', 
          color: 'white', 
          padding: '1rem 2rem', 
          borderRadius: '12px', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          animation: 'slideIn 0.3s ease-out',
          zIndex: 1000
        }}>
          <CheckCircle2 size={24} />
          <div>
            <div style={{ fontWeight: '700' }}>Subscription Updated!</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Welcome to the {activePlan} plan.</div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PaymentApp;
