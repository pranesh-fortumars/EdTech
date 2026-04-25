import React, { useState } from 'react';
import { 
  ClipboardList, 
  Brain, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Zap,
  ArrowRight,
  RefreshCw,
  Trophy
} from 'lucide-react';

const AssessmentApp = () => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'results'>('intro');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const quizData = {
    title: "Adaptive Quiz: Neural Network Optimization",
    description: "This AI-generated quiz adapts its difficulty based on your previous responses.",
    questionsCount: 15,
    estimatedTime: "20 mins",
    currentQuestion: {
      text: "Which optimization algorithm uses the concept of 'momentum' to accelerate convergence in deep learning?",
      options: [
        "Stochastic Gradient Descent (Vanilla)",
        "Adam Optimizer",
        "RMSProp",
        "Adagrad"
      ]
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <header>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>AI <span className="gradient-text">Assessments</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Validate your skills with adaptive, AI-proctored exams</p>
      </header>

      {step === 'intro' && (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--surface-light)', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
            <Brain size={40} className="gradient-text" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{quizData.title}</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>{quizData.description}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Questions</div>
              <div style={{ fontWeight: '700' }}>{quizData.questionsCount}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Duration</div>
              <div style={{ fontWeight: '700' }}>{quizData.estimatedTime}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Type</div>
              <div style={{ fontWeight: '700' }}>Adaptive</div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', background: 'rgba(99, 102, 241, 0.05)', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <Zap size={20} color="var(--primary)" />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'left' }}>
              Nexus AI has adjusted this test to focus on your weak areas in <strong>Stochastic Calculus</strong> detected during yesterday's lecture.
            </p>
          </div>

          <button onClick={() => setStep('quiz')} className="btn btn-primary" style={{ width: 'fit-content', margin: '0 auto', padding: '1rem 3rem' }}>
            Start Assessment
          </button>
        </div>
      )}

      {step === 'quiz' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>Question 4 <span style={{ color: 'var(--text-muted)', fontWeight: '400', fontSize: '1rem' }}>/ 15</span></div>
               <div className="glass-panel" style={{ padding: '0.25rem 0.75rem', background: 'rgba(236, 72, 153, 0.1)', color: 'var(--secondary)', fontSize: '0.75rem', fontWeight: '700' }}>HARD</div>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
               <Clock size={18} />
               <span style={{ fontWeight: '600', fontFamily: 'monospace' }}>18:42</span>
             </div>
          </div>

          <div style={{ height: '4px', background: 'var(--surface-light)', borderRadius: '2px' }}>
            <div style={{ width: '25%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '2px' }}></div>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h4 style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              {quizData.currentQuestion.text}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {quizData.currentQuestion.options.map((option, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedAnswer(index)}
                  style={{ 
                    textAlign: 'left',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: selectedAnswer === index ? 'var(--primary)' : 'var(--border)',
                    background: selectedAnswer === index ? 'rgba(99, 102, 241, 0.1)' : 'var(--surface)',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      border: '2px solid',
                      borderColor: selectedAnswer === index ? 'var(--primary)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    {option}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn" style={{ background: 'var(--surface-light)', color: 'white' }}>Skip for now</button>
            <button onClick={() => setStep('results')} className="btn btn-primary" style={{ padding: '0.75rem 2.5rem' }}>
              Next Question
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {step === 'results' && (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
           <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
             <Trophy size={40} color="#10b981" />
           </div>
           <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Assessment Completed!</h3>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>You've demonstrated exceptional understanding of gradient-based optimization.</p>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Score</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#10b981' }}>92%</div>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Percentile</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>Top 5%</div>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Skill Gain</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>+450 XP</div>
              </div>
           </div>

           <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>AI Performance Insights</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  Strong command over Second-order methods.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <AlertCircle size={16} color="var(--secondary)" />
                  Slight hesitation detected during Adagrad calculations.
                </div>
              </div>
           </div>

           <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={() => setStep('intro')} className="btn" style={{ background: 'var(--surface-light)', color: 'white' }}>
                <RefreshCw size={18} /> Retake
              </button>
              <button className="btn btn-primary">Review Answers</button>
           </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentApp;
