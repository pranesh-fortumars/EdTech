import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mic, 
  Bot, 
  User, 
  Sparkles, 
  X, 
  Maximize2, 
  Minimize2,
  Volume2,
  BrainCircuit
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

const AITutor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Nexus AI, your personal learning companion. How can I help you master your subjects today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: `That's a great question about "${input}". Based on your current learning path in Neural Networks, I recommend focusing on backpropagation. Would you like me to explain it using a visual analogy?`,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            padding: 0, 
            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)',
            animation: 'pulse 2s infinite'
          }}
        >
          <BrainCircuit size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="glass-panel" style={{ 
          width: '400px', 
          height: '600px', 
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          border: '1px solid var(--glass-border)'
        }}>
          {/* Header */}
          <div style={{ 
            padding: '1.25rem', 
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '10px' }}>
                <Bot size={20} color="white" />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1rem', color: 'white' }}>Nexus AI Tutor</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>Always active</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ 
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}>
                <div style={{ 
                  padding: '0.75rem 1rem', 
                  borderRadius: msg.sender === 'user' ? '18px 18px 0 18px' : '18px 18px 18px 0',
                  background: msg.sender === 'user' ? 'var(--primary)' : 'var(--surface-light)',
                  color: 'white',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {msg.text}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'var(--surface-light)', padding: '0.75rem 1rem', borderRadius: '18px 18px 18px 0', display: 'flex', gap: '4px' }}>
                <div className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
                <div className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
                <div className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ padding: '1.25rem', borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="glass-panel" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              padding: '0.5rem 0.5rem 0.5rem 1rem',
              background: 'var(--surface)'
            }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Nexus anything..." 
                style={{ background: 'none', border: 'none', color: 'white', flex: 1, outline: 'none', fontSize: '0.9rem' }} 
              />
              <button 
                onClick={handleSend}
                style={{ 
                  background: 'var(--primary)', 
                  border: 'none', 
                  borderRadius: '10px', 
                  width: '36px', 
                  height: '36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                <Send size={18} />
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.75rem' }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                <Mic size={14} /> Voice
              </button>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                <Sparkles size={14} /> Explain
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
          100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }
        .typing-dot {
          animation: typing 1s infinite ease-in-out;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default AITutor;
