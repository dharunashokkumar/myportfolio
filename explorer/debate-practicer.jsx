import React, { useState, useEffect, useRef } from 'react';

export default function DebatePracticeSimulator() {
  const [phase, setPhase] = useState('setup');
  const [topic, setTopic] = useState('');
  const [position, setPosition] = useState('');
  const [round, setRound] = useState(1);
  const [userResponse, setUserResponse] = useState('');
  const [history, setHistory] = useState([]);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [currentChallenge, setCurrentChallenge] = useState('');
  const [evaluation, setEvaluation] = useState(null);
  const [performance, setPerformance] = useState({ strong: 0, weak: 0, dodges: 0 });
  const [isThinking, setIsThinking] = useState(false);
  const [researchBrief, setResearchBrief] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [particles, setParticles] = useState([]);
  const [showInsights, setShowInsights] = useState(false);
  const textareaRef = useRef(null);
  const canvasRef = useRef(null);

  // Sophisticated earthy palette - like museum ceramics
  const colors = {
    // Primary neutrals - warm and inviting
    porcelain: '#faf8f3',
    linen: '#f2ede4',
    sand: '#e8dfd0',
    clay: '#d4c4b0',
    
    // Deep earths - sophisticated and grounded
    umber: '#3d3529',
    espresso: '#2a2118',
    tobacco: '#4a3f32',
    
    // Elegant accents - restrained and refined
    terracotta: '#c47b5c',
    rust: '#a85e42',
    sage: '#7d8c7a',
    olive: '#5a6b54',
    slate: '#556270',
    teal: '#4a6866',
  };

  // Particle system for loading
  useEffect(() => {
    if (phase === 'loading' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Create particles that will form the round number
      const particleCount = 180;
      const newParticles = Array.from({ length: particleCount }, (_, i) => {
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        return {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          targetX: centerX,
          targetY: centerY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 2.5 + 1,
          color: [colors.terracotta, colors.rust, colors.sage, colors.olive, colors.teal][Math.floor(Math.random() * 5)],
          alpha: Math.random() * 0.6 + 0.4,
          phase: Math.random() * Math.PI * 2,
          orbitSpeed: 0.02 + Math.random() * 0.03
        };
      });

      setParticles(newParticles);

      let frame = 0;
      const animate = () => {
        if (phase !== 'loading') return;
        
        ctx.clearRect(0, 0, rect.width, rect.height);
        
        newParticles.forEach((p, i) => {
          // Swirling motion toward center, then orbit
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist > 50) {
            // Swirl inward
            p.vx += (dx / dist) * 0.3;
            p.vy += (dy / dist) * 0.3;
            
            // Add orbital velocity
            const perpX = -dy / dist;
            const perpY = dx / dist;
            p.vx += perpX * 2;
            p.vy += perpY * 2;
          } else {
            // Orbit around center
            p.phase += p.orbitSpeed;
            const orbitRadius = 45 + Math.sin(frame * 0.01 + i * 0.1) * 10;
            p.targetX = centerX + Math.cos(p.phase) * orbitRadius;
            p.targetY = centerY + Math.sin(p.phase) * orbitRadius;
            
            p.vx += (p.targetX - p.x) * 0.1;
            p.vy += (p.targetY - p.y) * 0.1;
          }
          
          // Apply velocity with damping
          p.vx *= 0.92;
          p.vy *= 0.92;
          p.x += p.vx;
          p.y += p.vy;
          
          // Draw particle
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha * (0.7 + Math.sin(frame * 0.05 + i * 0.2) * 0.3);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw connection lines to nearby particles
          newParticles.slice(i + 1, i + 3).forEach(other => {
            const d = Math.sqrt((p.x - other.x) ** 2 + (p.y - other.y) ** 2);
            if (d < 60) {
              ctx.strokeStyle = p.color;
              ctx.globalAlpha = (1 - d / 60) * 0.15;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          });
        });
        
        frame++;
        requestAnimationFrame(animate);
      };
      
      animate();
    }
  }, [phase]);

  useEffect(() => {
    if (isThinking) {
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + Math.random() * 2.5;
        });
      }, 150);
      return () => clearInterval(interval);
    } else {
      setLoadingProgress(100);
    }
  }, [isThinking]);

  // Generate insights after several rounds
  const generateInsights = () => {
    const total = performance.strong + performance.weak + performance.dodges || 1;
    const strongRate = (performance.strong / total * 100).toFixed(0);
    const dodgeRate = (performance.dodges / total * 100).toFixed(0);
    
    const insights = [];
    const techniquesLearned = history.filter(h => h.tip).map(h => h.tip);
    
    // Performance-based insights
    if (performance.strong >= 3) {
      insights.push("You're consistently building evidence-based arguments. Strong debaters cite specific examples, studies, or data points — and you're doing that naturally now.");
    }
    if (performance.dodges >= 2) {
      insights.push("You've dodged a few challenges by pivoting to adjacent points. Real debates require addressing the core question head-on, even when it's uncomfortable. That's where growth happens.");
    }
    if (performance.weak >= 2) {
      insights.push("Several responses relied on general claims without specific backing. The difference between 'most experts agree' and 'a 2023 Stanford study of 10,000 participants found' is massive in real debates.");
    }
    if (history.length >= 5) {
      insights.push(`You've sustained ${history.length} rounds of intellectual pressure. That kind of endurance — staying sharp while being challenged repeatedly — is what separates good debaters from great ones.`);
    }
    
    // Add insight about techniques learned
    if (techniquesLearned.length >= 2) {
      insights.push(`You've practiced ${techniquesLearned.length} different debate techniques this session. Review those coaching tips — each one is a tool you can deploy in real conversations.`);
    }
    
    return { strongRate, dodgeRate, insights, totalRounds: history.length, techniquesLearned };
  };

  // === CLAUDE API INTEGRATION ===
  
  const callClaude = async (messages) => {
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          messages: messages
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.content[0].text;
    } catch (error) {
      console.error("Error calling Claude:", error);
      return null;
    }
  };

  const startPractice = async () => {
    if (!topic || !position) return;
    
    setIsThinking(true);
    setPhase('loading');

    const researchPrompt = `You are helping someone prepare for a debate. They are arguing: "${position}" on the topic: "${topic}".

Your task: Research and explain the STRONGEST intellectual opposition to their position. Find the most sophisticated counterarguments - the kind made by experts, academics, and skilled debaters who genuinely believe the opposing view.

Provide:
1. The 3 strongest opposing arguments with evidence
2. The intellectual foundation of the opposition (what principles/values drive their view)
3. Where the opposition has legitimate points that deserve serious consideration

Be rigorous and fair. This is about understanding the opposition deeply, not strawmanning them.

Format as a brief, focused summary (300 words max).`;

    const researchResponse = await callClaude([
      { role: "user", content: researchPrompt }
    ]);

    if (!researchResponse) {
      setIsThinking(false);
      setPhase('setup');
      alert('Failed to generate research. Please try again.');
      return;
    }

    setResearchBrief(researchResponse);

    const opponentSystemMessage = `You are a world-class debate coach who genuinely believes the position opposing: "${position}" on the topic: "${topic}".

Research context about the strongest opposition:
${researchResponse}

Your role as coach:
- Present strong counterarguments (you still believe the opposing view)
- When evaluating responses, be specific about what worked and what didn't
- Point out exact techniques: "You used evidence here" or "This assertion needs data"
- Be encouraging but rigorous - like teaching a friend to get better
- Suggest specific improvements: "Try citing X" or "Acknowledge their point first, then..."
- Celebrate good moves while showing what could be stronger

You're not just grading - you're teaching debate technique.`;

    const initialHistory = [
      { role: "user", content: `${opponentSystemMessage}\n\nPresent your first challenge to their position. Make it specific, evidence-based, and challenging. This is a teaching moment - help them understand what strong opposition looks like.` }
    ];

    const firstChallenge = await callClaude(initialHistory);
    
    if (!firstChallenge) {
      setIsThinking(false);
      setPhase('setup');
      alert('Failed to generate challenge. Please try again.');
      return;
    }

    setCurrentChallenge(firstChallenge);
    setConversationHistory([
      { role: "user", content: `${opponentSystemMessage}\n\nPresent your first challenge.` },
      { role: "assistant", content: firstChallenge }
    ]);
    
    setIsThinking(false);
    setPhase('practice');
  };

  const submitResponse = async () => {
    if (!userResponse.trim()) return;
    
    setIsThinking(true);

    const updatedHistory = [
      ...conversationHistory,
      { role: "user", content: `My response: "${userResponse}"

Now evaluate as a debate coach:

1. EVALUATION: [Strong/Weak/Dodge]

2. SPECIFIC FEEDBACK (3-4 sentences explaining):
   - What exactly worked or didn't work in their response
   - Which debate techniques they used well or missed
   - Specific evidence/reasoning gaps
   - Be encouraging but precise about what needs improvement

3. COACHING TIP: One specific technique they should try next (e.g., "Try the 'Yes, and...' technique" or "Lead with their strongest point first")

4. COUNTER: Your response to what they said (2-3 sentences)

Format:
EVALUATION: [Strong/Weak/Dodge]
FEEDBACK: [detailed, specific coaching feedback]
TIP: [one actionable technique to try]
COUNTER: [your counter-response]` }
    ];

    const opponentResponse = await callClaude(updatedHistory);
    
    if (!opponentResponse) {
      setIsThinking(false);
      alert('Failed to get response. Please try again.');
      return;
    }

    const evalMatch = opponentResponse.match(/EVALUATION:\s*(Strong|Weak|Dodge)/i);
    const feedbackMatch = opponentResponse.match(/FEEDBACK:\s*(.+?)(?=\nTIP:|$)/s);
    const tipMatch = opponentResponse.match(/TIP:\s*(.+?)(?=\nCOUNTER:|$)/s);
    const counterMatch = opponentResponse.match(/COUNTER:\s*(.+)/s);

    const evaluationType = evalMatch ? evalMatch[1].toLowerCase() : 'weak';
    const feedback = feedbackMatch ? feedbackMatch[1].trim() : 'No feedback provided.';
    const tip = tipMatch ? tipMatch[1].trim() : '';
    const counter = counterMatch ? counterMatch[1].trim() : opponentResponse;

    const newHistory = {
      round,
      challenge: currentChallenge,
      response: userResponse,
      evaluation: evaluationType,
      feedback,
      tip,
      counter
    };

    setHistory([...history, newHistory]);
    setPerformance(prev => ({
      ...prev,
      [evaluationType === 'strong' ? 'strong' : evaluationType === 'dodge' ? 'dodges' : 'weak']: prev[evaluationType === 'strong' ? 'strong' : evaluationType === 'dodge' ? 'dodges' : 'weak'] + 1
    }));

    setEvaluation({ type: evaluationType, feedback, tip });
    setCurrentChallenge(counter);
    
    setConversationHistory([
      ...updatedHistory,
      { role: "assistant", content: opponentResponse }
    ]);

    setRound(round + 1);
    setUserResponse('');
    setIsThinking(false);

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const reset = () => {
    setPhase('setup');
    setTopic('');
    setPosition('');
    setRound(1);
    setUserResponse('');
    setHistory([]);
    setConversationHistory([]);
    setCurrentChallenge('');
    setEvaluation(null);
    setPerformance({ strong: 0, weak: 0, dodges: 0 });
    setResearchBrief('');
    setShowInsights(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: colors.porcelain,
      position: 'relative',
      fontFamily: 'Crimson Pro, Georgia, serif'
    }}>
      {/* Textured paper background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8
      }} />

      {/* Layered atmospheric color fields */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse 1000px 800px at 20% 10%, ${colors.terracotta}04 0%, transparent 50%),
            radial-gradient(ellipse 900px 900px at 80% 70%, ${colors.sage}05 0%, transparent 55%),
            radial-gradient(ellipse 700px 1000px at 50% 90%, ${colors.teal}03 0%, transparent 50%)
          `,
          opacity: 0.6,
          mixBlendMode: 'multiply'
        }} />
      </div>

      {/* Subtle vignette */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(45, 37, 41, 0.03) 100%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '8rem 3.5rem 7rem',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Masterful header */}
        <header style={{
          marginBottom: '7rem',
          position: 'relative'
        }}>
          <div style={{
            fontSize: '0.5rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: colors.tobacco,
            marginBottom: '3.5rem',
            position: 'relative',
            display: 'inline-block'
          }}>
            Intellectual Practice
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              width: '100%',
              height: '1px',
              background: `linear-gradient(90deg, ${colors.terracotta}, ${colors.sage}, transparent)`
            }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(4rem, 11vw, 8rem)',
            fontWeight: 300,
            lineHeight: 0.85,
            color: colors.umber,
            marginBottom: '2rem',
            letterSpacing: '-0.05em',
            fontFamily: 'Playfair Display, Georgia, serif',
            position: 'relative'
          }}>
            Debate
            <br/>
            <span style={{
              fontStyle: 'italic',
              fontWeight: 200,
              fontSize: '0.85em',
              color: colors.tobacco
            }}>
              Preparation
            </span>
          </h1>

          <p style={{
            fontSize: '1.1875rem',
            lineHeight: 2,
            color: colors.tobacco,
            fontWeight: 300,
            maxWidth: '520px',
            position: 'relative'
          }}>
            Learn from a world-class debate coach who shows you<br/>
            exactly what makes arguments strong and where<br/>
            reasoning needs evidence
          </p>
        </header>

        {/* Setup Phase */}
        {phase === 'setup' && (
          <div style={{ animation: 'fadeIn 1.2s ease-out' }}>
            <div style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255,255,255,0.95) 0%, 
                  ${colors.linen}dd 100%
                )
              `,
              backdropFilter: 'blur(40px)',
              border: `1px solid ${colors.sand}`,
              borderRadius: '12px',
              padding: '4.5rem 4rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: `
                0 0 0 1px ${colors.clay}20 inset,
                0 20px 60px rgba(61, 53, 41, 0.08),
                0 4px 12px rgba(61, 53, 41, 0.04)
              `
            }}>
              {/* Paper texture overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.03'/%3E%3C/svg%3E")`,
                pointerEvents: 'none',
                opacity: 0.5
              }} />

              {/* Gradient color washes */}
              <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '40%',
                height: '50%',
                background: `radial-gradient(circle, ${colors.terracotta}06 0%, transparent 70%)`,
                pointerEvents: 'none',
                filter: 'blur(60px)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '35%',
                height: '45%',
                background: `radial-gradient(circle, ${colors.sage}05 0%, transparent 70%)`,
                pointerEvents: 'none',
                filter: 'blur(70px)'
              }} />

              <div style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: colors.umber,
                  marginBottom: '1.125rem',
                  textTransform: 'uppercase',
                  fontFamily: 'system-ui, sans-serif'
                }}>
                  Debate Topic
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Books vs. movies • Morning routines • Handwritten vs. digital notes"
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.75rem',
                    fontSize: '1.0625rem',
                    background: `
                      linear-gradient(to bottom, 
                        rgba(255,255,255,0.9) 0%, 
                        ${colors.porcelain} 100%
                      )
                    `,
                    border: `1.5px solid ${colors.sand}`,
                    borderRadius: '6px',
                    color: colors.umber,
                    outline: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    fontFamily: 'Crimson Pro, Georgia, serif',
                    boxShadow: `
                      0 0 0 1px ${colors.clay}10 inset,
                      0 2px 4px rgba(61, 53, 41, 0.03)
                    `
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.sage;
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = `
                      0 0 0 3px ${colors.sage}15,
                      0 0 0 1px ${colors.sage}25 inset,
                      0 6px 16px rgba(61, 53, 41, 0.04)
                    `;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.sand;
                    e.target.style.background = `linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, ${colors.porcelain} 100%)`;
                    e.target.style.boxShadow = `0 0 0 1px ${colors.clay}10 inset, 0 2px 4px rgba(61, 53, 41, 0.03)`;
                  }}
                />
              </div>

              <div style={{ marginBottom: '4rem', position: 'relative', zIndex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: colors.umber,
                  marginBottom: '1.125rem',
                  textTransform: 'uppercase',
                  fontFamily: 'system-ui, sans-serif'
                }}>
                  Your Position
                </label>
                <textarea
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="State your position with clarity and conviction..."
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.75rem',
                    fontSize: '1.0625rem',
                    background: `
                      linear-gradient(to bottom, 
                        rgba(255,255,255,0.9) 0%, 
                        ${colors.porcelain} 100%
                      )
                    `,
                    border: `1.5px solid ${colors.sand}`,
                    borderRadius: '6px',
                    color: colors.umber,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'Crimson Pro, Georgia, serif',
                    lineHeight: 1.9,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `
                      0 0 0 1px ${colors.clay}10 inset,
                      0 2px 4px rgba(61, 53, 41, 0.03)
                    `
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.sage;
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = `
                      0 0 0 3px ${colors.sage}15,
                      0 0 0 1px ${colors.sage}25 inset,
                      0 6px 16px rgba(61, 53, 41, 0.04)
                    `;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.sand;
                    e.target.style.background = `linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, ${colors.porcelain} 100%)`;
                    e.target.style.boxShadow = `0 0 0 1px ${colors.clay}10 inset, 0 2px 4px rgba(61, 53, 41, 0.03)`;
                  }}
                />
              </div>

              <button
                onClick={startPractice}
                disabled={!topic || !position}
                style={{
                  width: '100%',
                  padding: '1.75rem 3rem',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: topic && position ? colors.porcelain : colors.tobacco,
                  background: topic && position 
                    ? colors.umber
                    : colors.sand,
                  border: topic && position ? `1px solid ${colors.umber}` : `1px solid ${colors.clay}`,
                  borderRadius: '4px',
                  cursor: topic && position ? 'pointer' : 'not-allowed',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  fontFamily: 'system-ui, sans-serif',
                  boxShadow: topic && position 
                    ? `
                      0 0 0 1px ${colors.umber}40 inset,
                      0 12px 40px rgba(61, 53, 41, 0.15),
                      0 4px 12px rgba(61, 53, 41, 0.08)
                    `
                    : 'none'
                }}
                onMouseEnter={(e) => {
                  if (topic && position) {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.background = colors.espresso;
                    e.target.style.boxShadow = `
                      0 0 0 1px ${colors.umber}60 inset,
                      0 20px 60px rgba(42, 33, 24, 0.2),
                      0 8px 24px rgba(42, 33, 24, 0.12)
                    `;
                  }
                }}
                onMouseLeave={(e) => {
                  if (topic && position) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = colors.umber;
                    e.target.style.boxShadow = `
                      0 0 0 1px ${colors.umber}40 inset,
                      0 12px 40px rgba(61, 53, 41, 0.15),
                      0 4px 12px rgba(61, 53, 41, 0.08)
                    `;
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, transparent 0%, ${colors.terracotta}12 100%)`,
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                />
                <span style={{ position: 'relative', zIndex: 1 }}>Begin Practice Session</span>
              </button>
            </div>
          </div>
        )}

        {/* Loading Phase - High-velocity particle system */}
        {phase === 'loading' && (
          <div style={{
            background: `
              linear-gradient(135deg, 
                rgba(255,255,255,0.98) 0%, 
                ${colors.linen}f5 100%
              )
            `,
            backdropFilter: 'blur(40px)',
            border: `1px solid ${colors.sand}`,
            borderRadius: '12px',
            padding: '6rem 4.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: `
              0 0 0 1px ${colors.clay}15 inset,
              0 24px 80px rgba(61, 53, 41, 0.12),
              0 8px 24px rgba(61, 53, 41, 0.06)
            `,
            animation: 'fadeIn 1.2s ease-out'
          }}>
            {/* Textured overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' /%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23grain)' opacity='0.025'/%3E%3C/svg%3E")`,
              pointerEvents: 'none',
              mixBlendMode: 'multiply'
            }} />

            {/* High-velocity particle canvas */}
            <canvas
              ref={canvasRef}
              style={{
                width: '280px',
                height: '280px',
                margin: '0 auto 3rem',
                display: 'block'
              }}
            />

            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 300,
              color: colors.umber,
              marginBottom: '1rem',
              letterSpacing: '-0.025em',
              fontFamily: 'Playfair Display, Georgia, serif'
            }}>
              Researching Opposition
            </h3>

            <p style={{
              fontSize: '0.9375rem',
              color: colors.tobacco,
              marginBottom: '4rem',
              lineHeight: 1.9,
              fontWeight: 300
            }}>
              Analyzing the strongest counterarguments<br/>
              and intellectual foundations
            </p>

            {/* Elegant progress indicator */}
            <div style={{
              maxWidth: '360px',
              margin: '0 auto',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                color: colors.tobacco,
                fontFamily: 'system-ui, sans-serif'
              }}>
                <span style={{ opacity: 0.6 }}>PROGRESS</span>
                <span>{Math.round(loadingProgress)}%</span>
              </div>
              
              <div style={{
                height: '2px',
                background: `linear-gradient(90deg, ${colors.clay}40 0%, ${colors.sand} 100%)`,
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '1px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: `${loadingProgress}%`,
                  background: `linear-gradient(90deg, ${colors.rust} 0%, ${colors.terracotta} 50%, ${colors.sage} 100%)`,
                  transition: 'width 0.4s ease',
                  boxShadow: `0 0 8px ${colors.terracotta}25`
                }} />
              </div>
            </div>
          </div>
        )}

        {/* Practice Phase */}
        {phase === 'practice' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3.5rem',
            animation: 'fadeIn 1.2s ease-out'
          }}>
            {/* Performance Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { label: 'Strong', value: performance.strong, color: colors.sage, accent: colors.olive },
                { label: 'Weak', value: performance.weak, color: colors.terracotta, accent: colors.rust },
                { label: 'Dodges', value: performance.dodges, color: colors.slate, accent: colors.teal }
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255,255,255,0.95) 0%, 
                        ${colors.linen}dd 100%
                      )
                    `,
                    backdropFilter: 'blur(30px)',
                    border: `1px solid ${colors.sand}`,
                    borderRadius: '8px',
                    padding: '2.5rem 2.25rem',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `
                      0 0 0 1px ${stat.color}08 inset,
                      0 8px 32px rgba(61, 53, 41, 0.06),
                      0 2px 8px rgba(61, 53, 41, 0.03)
                    `
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `
                      0 0 0 1px ${stat.color}15 inset,
                      0 16px 48px ${stat.color}12,
                      0 6px 16px rgba(61, 53, 41, 0.08)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `
                      0 0 0 1px ${stat.color}08 inset,
                      0 8px 32px rgba(61, 53, 41, 0.06),
                      0 2px 8px rgba(61, 53, 41, 0.03)
                    `;
                  }}
                >
                  {/* Layered color accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${stat.accent} 0%, ${stat.color} 100%)`,
                    opacity: 0.4
                  }} />

                  {/* Subtle gradient wash */}
                  <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '60%',
                    height: '60%',
                    background: `radial-gradient(circle, ${stat.color}06 0%, transparent 70%)`,
                    pointerEvents: 'none',
                    filter: 'blur(40px)'
                  }} />

                  {/* Grain texture */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise2)' opacity='0.015'/%3E%3C/svg%3E")`,
                    pointerEvents: 'none',
                    opacity: 0.4
                  }} />

                  <div style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: stat.color,
                    marginBottom: '1.75rem',
                    fontFamily: 'system-ui, sans-serif',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.label}
                  </div>

                  <div style={{
                    fontSize: '5rem',
                    fontWeight: 200,
                    color: colors.umber,
                    lineHeight: 0.85,
                    letterSpacing: '-0.06em',
                    fontFamily: 'Playfair Display, Georgia, serif',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Session Insights Button */}
            {history.length >= 3 && (
              <button
                onClick={() => setShowInsights(!showInsights)}
                style={{
                  padding: '1.125rem 2rem',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: colors.tobacco,
                  background: 'transparent',
                  border: `1.5px solid ${colors.sand}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  fontFamily: 'system-ui, sans-serif',
                  alignSelf: 'flex-start'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = colors.teal;
                  e.target.style.color = colors.teal;
                  e.target.style.background = `${colors.teal}05`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = colors.sand;
                  e.target.style.color = colors.tobacco;
                  e.target.style.background = 'transparent';
                }}
              >
                {showInsights ? '← Back to Practice' : 'Review Your Progress & Learnings'}
              </button>
            )}

            {/* Session Insights Panel */}
            {showInsights && history.length >= 3 && (
              <div style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255,255,255,0.98) 0%, 
                    ${colors.linen}f8 100%
                  )
                `,
                backdropFilter: 'blur(40px)',
                border: `1.5px solid ${colors.teal}30`,
                borderRadius: '12px',
                padding: '4rem 3.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `
                  0 0 0 1px ${colors.teal}10 inset,
                  0 20px 60px ${colors.teal}15,
                  0 8px 24px rgba(74, 104, 102, 0.08)
                `,
                animation: 'fadeIn 0.8s ease-out'
              }}>
                {/* Layered textures */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23texture)' opacity='0.02'/%3E%3C/svg%3E")`,
                  pointerEvents: 'none',
                  opacity: 0.6
                }} />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(ellipse at top left, ${colors.teal}04 0%, transparent 60%),
                    radial-gradient(ellipse at bottom right, ${colors.sage}03 0%, transparent 60%)
                  `,
                  pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 300,
                    color: colors.umber,
                    marginBottom: '3rem',
                    letterSpacing: '-0.03em',
                    fontFamily: 'Playfair Display, Georgia, serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem'
                  }}>
                    What You're Learning
                    <div style={{
                      flex: 1,
                      height: '1px',
                      background: `linear-gradient(90deg, ${colors.teal}40, transparent)`
                    }} />
                  </h3>

                  {(() => {
                    const insights = generateInsights();
                    return (
                      <>
                        {/* Performance visualization */}
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '2rem',
                          marginBottom: '3rem',
                          padding: '2.5rem',
                          background: `${colors.porcelain}80`,
                          borderRadius: '8px',
                          border: `1px solid ${colors.sand}60`
                        }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{
                              fontSize: '0.5625rem',
                              fontWeight: 700,
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: colors.sage,
                              marginBottom: '0.75rem',
                              fontFamily: 'system-ui, sans-serif'
                            }}>
                              Strong Rate
                            </div>
                            <div style={{
                              fontSize: '3rem',
                              fontWeight: 200,
                              color: colors.umber,
                              fontFamily: 'Playfair Display, Georgia, serif',
                              lineHeight: 1
                            }}>
                              {insights.strongRate}%
                            </div>
                          </div>

                          <div style={{ textAlign: 'center' }}>
                            <div style={{
                              fontSize: '0.5625rem',
                              fontWeight: 700,
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: colors.tobacco,
                              marginBottom: '0.75rem',
                              fontFamily: 'system-ui, sans-serif'
                            }}>
                              Total Rounds
                            </div>
                            <div style={{
                              fontSize: '3rem',
                              fontWeight: 200,
                              color: colors.umber,
                              fontFamily: 'Playfair Display, Georgia, serif',
                              lineHeight: 1
                            }}>
                              {insights.totalRounds}
                            </div>
                          </div>

                          <div style={{ textAlign: 'center' }}>
                            <div style={{
                              fontSize: '0.5625rem',
                              fontWeight: 700,
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              color: colors.slate,
                              marginBottom: '0.75rem',
                              fontFamily: 'system-ui, sans-serif'
                            }}>
                              Dodge Rate
                            </div>
                            <div style={{
                              fontSize: '3rem',
                              fontWeight: 200,
                              color: colors.umber,
                              fontFamily: 'Playfair Display, Georgia, serif',
                              lineHeight: 1
                            }}>
                              {insights.dodgeRate}%
                            </div>
                          </div>
                        </div>

                        {/* Key learnings */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2rem'
                        }}>
                          <div style={{
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: colors.tobacco,
                            fontFamily: 'system-ui, sans-serif',
                            marginBottom: '0.5rem'
                          }}>
                            Your Growth Patterns
                          </div>

                          {insights.insights.map((insight, idx) => (
                            <div
                              key={idx}
                              style={{
                                paddingLeft: '2.5rem',
                                position: 'relative',
                                animation: `fadeIn 0.8s ease-out ${idx * 0.15}s both`
                              }}
                            >
                              <div style={{
                                position: 'absolute',
                                left: 0,
                                top: '0.25rem',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: [colors.terracotta, colors.sage, colors.teal, colors.rust][idx % 4],
                                opacity: 0.5
                              }} />
                              <div style={{
                                position: 'absolute',
                                left: '3px',
                                top: '0.75rem',
                                bottom: idx < insights.insights.length - 1 ? '-1.5rem' : 0,
                                width: '1px',
                                background: `linear-gradient(180deg, ${colors.sand}60, transparent)`,
                                opacity: idx < insights.insights.length - 1 ? 1 : 0
                              }} />
                              <p style={{
                                fontSize: '1rem',
                                lineHeight: 1.9,
                                color: colors.umber,
                                fontWeight: 300
                              }}>
                                {insight}
                              </p>
                            </div>
                          ))}

                          {/* Techniques Learned */}
                          {insights.techniquesLearned.length > 0 && (
                            <div style={{
                              marginTop: '3.5rem',
                              paddingTop: '3rem',
                              borderTop: `1px solid ${colors.sand}60`
                            }}>
                              <div style={{
                                fontSize: '0.6875rem',
                                fontWeight: 600,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: colors.tobacco,
                                fontFamily: 'system-ui, sans-serif',
                                marginBottom: '2rem'
                              }}>
                                Techniques You Practiced
                              </div>

                              <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                              }}>
                                {insights.techniquesLearned.map((technique, idx) => (
                                  <div
                                    key={idx}
                                    style={{
                                      padding: '1.5rem 1.75rem',
                                      background: `${[colors.sage, colors.teal, colors.slate, colors.olive][idx % 4]}06`,
                                      borderRadius: '4px',
                                      border: `1px solid ${[colors.sage, colors.teal, colors.slate, colors.olive][idx % 4]}15`,
                                      animation: `fadeIn 0.8s ease-out ${idx * 0.1}s both`
                                    }}
                                  >
                                    <div style={{
                                      fontSize: '0.5625rem',
                                      fontWeight: 700,
                                      letterSpacing: '0.18em',
                                      textTransform: 'uppercase',
                                      color: [colors.sage, colors.teal, colors.slate, colors.olive][idx % 4],
                                      marginBottom: '0.75rem',
                                      fontFamily: 'system-ui, sans-serif',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.5rem'
                                    }}>
                                      <span>Technique {idx + 1}</span>
                                    </div>
                                    <div style={{
                                      fontSize: '0.9375rem',
                                      color: colors.umber,
                                      lineHeight: 1.85,
                                      fontWeight: 400,
                                      fontStyle: 'italic'
                                    }}>
                                      {technique}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}

            {/* Current Challenge */}
            <div style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255,255,255,0.98) 0%, 
                  ${colors.linen}f5 100%
                )
              `,
              backdropFilter: 'blur(40px)',
              border: `1px solid ${colors.sand}`,
              borderRadius: '10px',
              padding: '4rem 3.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: `
                0 0 0 1px ${colors.terracotta}08 inset,
                0 20px 60px rgba(196, 123, 92, 0.08),
                0 6px 20px rgba(61, 53, 41, 0.05)
              `
            }}>
              {/* Multi-layer textures and gradients */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper2)' opacity='0.025'/%3E%3C/svg%3E")`,
                pointerEvents: 'none',
                mixBlendMode: 'multiply',
                opacity: 0.6
              }} />

              <div style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(ellipse at top left, ${colors.terracotta}04 0%, transparent 60%),
                  radial-gradient(ellipse at bottom right, ${colors.rust}03 0%, transparent 60%)
                `,
                pointerEvents: 'none'
              }} />

              {/* Decorative corner element */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2.5rem',
                width: '1px',
                height: '40px',
                background: `linear-gradient(180deg, ${colors.terracotta}40, transparent)`,
                opacity: 0.4
              }} />
              <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2.5rem',
                width: '40px',
                height: '1px',
                background: `linear-gradient(90deg, ${colors.terracotta}40, transparent)`,
                opacity: 0.4
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '2rem',
                marginBottom: '2.75rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: 200,
                  color: colors.terracotta,
                  fontFamily: 'Playfair Display, Georgia, serif',
                  lineHeight: 1,
                  opacity: 0.85,
                  position: 'relative'
                }}>
                  {round}
                  <div style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: `linear-gradient(90deg, ${colors.terracotta}40, transparent)`,
                    opacity: 0.6
                  }} />
                </div>
                <div style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: colors.tobacco,
                  paddingTop: '1.75rem',
                  fontFamily: 'system-ui, sans-serif'
                }}>
                  Opponent's Challenge
                </div>
              </div>

              <p style={{
                fontSize: '1.1875rem',
                lineHeight: 2,
                color: colors.umber,
                fontWeight: 300,
                fontStyle: 'italic',
                position: 'relative',
                paddingLeft: '3rem',
                zIndex: 1
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: '-0.5rem',
                  fontSize: '4rem',
                  color: colors.terracotta,
                  opacity: 0.12,
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1
                }}>
                  "
                </span>
                {currentChallenge}
              </p>
            </div>

            {/* Evaluation Feedback - Coaching style */}
            {evaluation && (
              <div style={{
                background: 'white',
                border: `1.5px solid ${
                  evaluation.type === 'strong' ? colors.sage :
                  evaluation.type === 'weak' ? colors.terracotta :
                  colors.slate
                }35`,
                borderRadius: '8px',
                padding: '3.5rem 3.75rem',
                animation: 'fadeIn 0.9s ease-out',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `
                  0 0 0 1px ${
                    evaluation.type === 'strong' ? colors.sage :
                    evaluation.type === 'weak' ? colors.terracotta :
                    colors.slate
                  }12 inset,
                  0 16px 56px ${
                    evaluation.type === 'strong' ? colors.sage :
                    evaluation.type === 'weak' ? colors.terracotta :
                    colors.slate
                  }10
                `
              }}>
                {/* Layered textures */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.0' numOctaves='2' /%3E%3C/filter%3E%3Crect width='90' height='90' filter='url(%23grain3)' opacity='0.02'/%3E%3C/svg%3E")`,
                  pointerEvents: 'none',
                  opacity: 0.5
                }} />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(ellipse at top, ${
                      evaluation.type === 'strong' ? colors.sage :
                      evaluation.type === 'weak' ? colors.terracotta :
                      colors.slate
                    }05 0%, transparent 65%),
                    radial-gradient(ellipse at bottom, ${
                      evaluation.type === 'strong' ? colors.olive :
                      evaluation.type === 'weak' ? colors.rust :
                      colors.teal
                    }03 0%, transparent 65%)
                  `,
                  pointerEvents: 'none'
                }} />

                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, 
                    ${evaluation.type === 'strong' ? colors.sage :
                      evaluation.type === 'weak' ? colors.terracotta :
                      colors.slate
                    } 0%,
                    ${evaluation.type === 'strong' ? colors.olive :
                      evaluation.type === 'weak' ? colors.rust :
                      colors.teal
                    } 100%
                  )`,
                  opacity: 0.4
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: '0.5625rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: evaluation.type === 'strong' ? colors.sage :
                           evaluation.type === 'weak' ? colors.terracotta :
                           colors.slate,
                    marginBottom: '2rem',
                    fontFamily: 'system-ui, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '28px',
                      height: '1px',
                      background: 'currentColor',
                      opacity: 0.5
                    }} />
                    {evaluation.type} Response
                  </div>

                  {/* Detailed feedback */}
                  <div style={{
                    fontSize: '1.0625rem',
                    color: colors.umber,
                    lineHeight: 2,
                    fontWeight: 300,
                    marginBottom: evaluation.tip ? '2.25rem' : 0,
                    paddingLeft: '1.5rem',
                    borderLeft: `2px solid ${
                      evaluation.type === 'strong' ? colors.sage :
                      evaluation.type === 'weak' ? colors.terracotta :
                      colors.slate
                    }20`
                  }}>
                    {evaluation.feedback}
                  </div>

                  {/* Coaching tip - actionable technique */}
                  {evaluation.tip && (
                    <div style={{
                      padding: '1.75rem 2rem',
                      background: `${
                        evaluation.type === 'strong' ? colors.sage :
                        evaluation.type === 'weak' ? colors.terracotta :
                        colors.slate
                      }06`,
                      borderRadius: '6px',
                      border: `1px solid ${
                        evaluation.type === 'strong' ? colors.sage :
                        evaluation.type === 'weak' ? colors.terracotta :
                        colors.slate
                      }20`,
                      position: 'relative'
                    }}>
                      <div style={{
                        fontSize: '0.5625rem',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: evaluation.type === 'strong' ? colors.olive :
                               evaluation.type === 'weak' ? colors.rust :
                               colors.teal,
                        marginBottom: '0.875rem',
                        fontFamily: 'system-ui, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem'
                      }}>
                        <span style={{ fontSize: '1rem' }}>💡</span>
                        Try This Technique
                      </div>
                      <div style={{
                        fontSize: '0.9375rem',
                        color: colors.umber,
                        lineHeight: 1.85,
                        fontWeight: 400,
                        fontStyle: 'italic'
                      }}>
                        {evaluation.tip}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Response Input */}
            <div style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255,255,255,0.98) 0%, 
                  ${colors.linen}f5 100%
                )
              `,
              backdropFilter: 'blur(40px)',
              border: `1px solid ${colors.sand}`,
              borderRadius: '10px',
              padding: '4rem 3.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: `
                0 0 0 1px ${colors.clay}15 inset,
                0 20px 60px rgba(61, 53, 41, 0.08),
                0 6px 20px rgba(61, 53, 41, 0.04)
              `
            }}>
              {/* Layered textures */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='canvas'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.06' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23canvas)' opacity='0.02'/%3E%3C/svg%3E")`,
                pointerEvents: 'none',
                mixBlendMode: 'multiply',
                opacity: 0.6
              }} />

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: `radial-gradient(ellipse at bottom, ${colors.slate}03 0%, transparent 70%)`,
                pointerEvents: 'none'
              }} />

              <label style={{
                display: 'block',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: colors.umber,
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                position: 'relative',
                zIndex: 1,
                fontFamily: 'system-ui, sans-serif'
              }}>
                Your Response
              </label>

              <textarea
                ref={textareaRef}
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                placeholder="Respond to the challenge. Use evidence, acknowledge their points, then explain why your position still holds..."
                rows={7}
                disabled={isThinking}
                style={{
                  width: '100%',
                  padding: '1.5rem 2rem',
                  fontSize: '1.0625rem',
                  background: `
                    linear-gradient(to bottom, 
                      rgba(255,255,255,0.95) 0%, 
                      ${colors.porcelain} 100%
                    )
                  `,
                  border: `1.5px solid ${colors.sand}`,
                  borderRadius: '6px',
                  color: colors.umber,
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'Crimson Pro, Georgia, serif',
                  lineHeight: 1.95,
                  marginBottom: '2.5rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: `
                    0 0 0 1px ${colors.clay}10 inset,
                    0 3px 8px rgba(61, 53, 41, 0.03)
                  `
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = colors.teal;
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = `
                    0 0 0 3px ${colors.teal}12,
                    0 0 0 1px ${colors.teal}20 inset,
                    0 8px 24px rgba(74, 104, 102, 0.06)
                  `;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = colors.sand;
                  e.target.style.background = `linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, ${colors.porcelain} 100%)`;
                  e.target.style.boxShadow = `0 0 0 1px ${colors.clay}10 inset, 0 3px 8px rgba(61, 53, 41, 0.03)`;
                }}
              />

              <div style={{
                display: 'flex',
                gap: '1.75rem',
                position: 'relative',
                zIndex: 1
              }}>
                <button
                  onClick={submitResponse}
                  disabled={!userResponse.trim() || isThinking}
                  style={{
                    flex: 1,
                    padding: '1.625rem 2.75rem',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: userResponse.trim() && !isThinking ? colors.porcelain : colors.tobacco,
                    background: userResponse.trim() && !isThinking ? colors.umber : colors.sand,
                    border: userResponse.trim() && !isThinking 
                      ? `1px solid ${colors.umber}`
                      : `1px solid ${colors.clay}`,
                    borderRadius: '4px',
                    cursor: userResponse.trim() && !isThinking ? 'pointer' : 'not-allowed',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    fontFamily: 'system-ui, sans-serif',
                    boxShadow: userResponse.trim() && !isThinking
                      ? `
                        0 0 0 1px ${colors.umber}30 inset,
                        0 12px 40px rgba(61, 53, 41, 0.12),
                        0 4px 12px rgba(61, 53, 41, 0.06)
                      `
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (userResponse.trim() && !isThinking) {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.background = colors.espresso;
                      e.target.style.boxShadow = `
                        0 0 0 1px ${colors.espresso}40 inset,
                        0 20px 60px rgba(42, 33, 24, 0.18),
                        0 8px 24px rgba(42, 33, 24, 0.1)
                      `;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (userResponse.trim() && !isThinking) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.background = colors.umber;
                      e.target.style.boxShadow = `
                        0 0 0 1px ${colors.umber}30 inset,
                        0 12px 40px rgba(61, 53, 41, 0.12),
                        0 4px 12px rgba(61, 53, 41, 0.06)
                      `;
                    }
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, transparent 0%, ${colors.terracotta}15 100%)`,
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: 'none'
                  }}
                  className="hover-gradient"
                  />
                  <span style={{ position: 'relative', zIndex: 1 }}>
                    {isThinking ? 'Analyzing' : 'Submit Response'}
                  </span>
                </button>

                <button
                  onClick={reset}
                  style={{
                    padding: '1.625rem 2.75rem',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: colors.tobacco,
                    background: 'transparent',
                    border: `1.5px solid ${colors.sand}`,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = colors.rust;
                    e.target.style.color = colors.rust;
                    e.target.style.background = `${colors.rust}04`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = colors.sand;
                    e.target.style.color = colors.tobacco;
                    e.target.style.background = 'transparent';
                  }}
                >
                  End
                </button>
              </div>
            </div>

            {/* History Timeline */}
            {history.length > 0 && (
              <div style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255,255,255,0.98) 0%, 
                    ${colors.linen}f5 100%
                  )
                `,
                backdropFilter: 'blur(40px)',
                border: `1px solid ${colors.sand}`,
                borderRadius: '10px',
                padding: '4rem 3.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `
                  0 0 0 1px ${colors.clay}15 inset,
                  0 20px 60px rgba(61, 53, 41, 0.08),
                  0 6px 20px rgba(61, 53, 41, 0.04)
                `
              }}>
                {/* Multi-layer textures */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='110' height='110' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='linen'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.07' numOctaves='4' /%3E%3C/filter%3E%3Crect width='110' height='110' filter='url(%23linen)' opacity='0.02'/%3E%3C/svg%3E")`,
                  pointerEvents: 'none',
                  mixBlendMode: 'multiply',
                  opacity: 0.7
                }} />

                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '50%',
                  height: '100%',
                  background: `
                    radial-gradient(ellipse at top right, ${colors.sage}03 0%, transparent 60%),
                    radial-gradient(ellipse at bottom right, ${colors.teal}02 0%, transparent 60%)
                  `,
                  pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 300,
                    color: colors.umber,
                    marginBottom: '3.5rem',
                    letterSpacing: '-0.03em',
                    fontFamily: 'Playfair Display, Georgia, serif'
                  }}>
                    Session History
                  </h3>

                  <div style={{
                    position: 'relative',
                    paddingLeft: '3.5rem'
                  }}>
                    {/* Elegant timeline spine with gradient */}
                    <div style={{
                      position: 'absolute',
                      left: '8px',
                      top: 0,
                      bottom: 0,
                      width: '2px',
                      background: `linear-gradient(180deg, 
                        ${colors.terracotta}30 0%, 
                        ${colors.rust}25 20%,
                        ${colors.sage}25 40%, 
                        ${colors.olive}25 60%,
                        ${colors.teal}30 80%,
                        ${colors.slate}25 100%
                      )`,
                      opacity: 0.5
                    }} />

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3.5rem'
                    }}>
                      {history.map((item, idx) => {
                        const accentColors = [
                          { primary: colors.terracotta, secondary: colors.rust },
                          { primary: colors.sage, secondary: colors.olive },
                          { primary: colors.teal, secondary: colors.slate }
                        ];
                        const palette = accentColors[idx % accentColors.length];

                        return (
                          <div
                            key={idx}
                            style={{
                              position: 'relative',
                              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                              animation: `fadeIn 0.8s ease-out ${idx * 0.1}s both`
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(6px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                          >
                            {/* Timeline marker - sophisticated dot */}
                            <div style={{
                              position: 'absolute',
                              left: '-3.5rem',
                              top: '2px',
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              background: palette.primary,
                              boxShadow: `
                                0 0 0 4px ${colors.porcelain},
                                0 0 0 5px ${palette.primary}20,
                                0 0 16px ${palette.primary}20
                              `,
                              opacity: 0.75,
                              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.opacity = '1';
                              e.target.style.transform = 'scale(1.4)';
                              e.target.style.boxShadow = `
                                0 0 0 4px ${colors.porcelain},
                                0 0 0 6px ${palette.primary}30,
                                0 0 24px ${palette.primary}30
                              `;
                            }}
                            />

                            <div style={{
                              paddingBottom: idx < history.length - 1 ? '3.5rem' : 0,
                              borderBottom: idx < history.length - 1 
                                ? `1px solid ${colors.sand}60` 
                                : 'none'
                            }}>
                              <div style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                justifyContent: 'space-between',
                                marginBottom: '2rem'
                              }}>
                                <div style={{
                                  fontSize: '0.75rem',
                                  fontWeight: 500,
                                  color: colors.tobacco,
                                  letterSpacing: '0.05em',
                                  fontFamily: 'system-ui, sans-serif'
                                }}>
                                  Round {item.round}
                                </div>
                                <div style={{
                                  fontSize: '0.5625rem',
                                  fontWeight: 700,
                                  letterSpacing: '0.2em',
                                  textTransform: 'uppercase',
                                  color: item.evaluation === 'strong' ? colors.sage :
                                         item.evaluation === 'weak' ? colors.terracotta :
                                         colors.slate,
                                  padding: '0.625rem 1.25rem',
                                  background: `${
                                    item.evaluation === 'strong' ? colors.sage :
                                    item.evaluation === 'weak' ? colors.terracotta :
                                    colors.slate
                                  }08`,
                                  borderRadius: '3px',
                                  border: `1px solid ${
                                    item.evaluation === 'strong' ? colors.sage :
                                    item.evaluation === 'weak' ? colors.terracotta :
                                    colors.slate
                                  }25`,
                                  fontFamily: 'system-ui, sans-serif'
                                }}>
                                  {item.evaluation}
                                </div>
                              </div>

                              <div style={{
                                fontSize: '1rem',
                                color: colors.tobacco,
                                marginBottom: '1.75rem',
                                lineHeight: 1.95,
                                fontWeight: 300
                              }}>
                                {item.challenge}
                              </div>

                              <div style={{
                                fontSize: '1rem',
                                color: colors.umber,
                                fontStyle: 'italic',
                                paddingLeft: '2.5rem',
                                borderLeft: `2px solid ${palette.primary}20`,
                                lineHeight: 1.95,
                                fontWeight: 300,
                                position: 'relative',
                                marginBottom: item.tip ? '1.75rem' : 0
                              }}>
                                <div style={{
                                  position: 'absolute',
                                  left: '-5px',
                                  top: '0',
                                  width: '5px',
                                  height: '5px',
                                  borderRadius: '50%',
                                  background: palette.primary,
                                  opacity: 0.4
                                }} />
                                {item.response}
                              </div>

                              {/* Show coaching tip if available */}
                              {item.tip && (
                                <div style={{
                                  padding: '1.5rem 1.75rem',
                                  background: `${palette.primary}05`,
                                  borderRadius: '4px',
                                  border: `1px solid ${palette.primary}15`,
                                  marginLeft: '2.5rem'
                                }}>
                                  <div style={{
                                    fontSize: '0.5625rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: palette.secondary,
                                    marginBottom: '0.625rem',
                                    fontFamily: 'system-ui, sans-serif'
                                  }}>
                                    💡 Coach's Tip
                                  </div>
                                  <div style={{
                                    fontSize: '0.875rem',
                                    color: colors.umber,
                                    lineHeight: 1.8,
                                    fontWeight: 400,
                                    fontStyle: 'italic'
                                  }}>
                                    {item.tip}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Research Brief */}
            {researchBrief && (
              <div style={{
                background: 'white',
                border: `1.5px solid ${colors.sage}30`,
                borderRadius: '10px',
                padding: '4.5rem 4rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `
                  0 0 0 1px ${colors.sage}10 inset,
                  0 24px 80px ${colors.sage}10,
                  0 8px 24px rgba(125, 140, 122, 0.06)
                `
              }}>
                {/* Sophisticated layered textures */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='130' height='130' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fabric'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.08' numOctaves='5' /%3E%3C/filter%3E%3Crect width='130' height='130' filter='url(%23fabric)' opacity='0.02'/%3E%3C/svg%3E")`,
                  pointerEvents: 'none',
                  mixBlendMode: 'multiply',
                  opacity: 0.7
                }} />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    radial-gradient(ellipse at top, ${colors.sage}04 0%, transparent 50%),
                    radial-gradient(ellipse at bottom, ${colors.olive}03 0%, transparent 60%)
                  `,
                  pointerEvents: 'none'
                }} />

                {/* Oversized decorative quotation mark */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  fontSize: '16rem',
                  fontWeight: 100,
                  color: colors.sage,
                  opacity: 0.035,
                  fontFamily: 'Georgia, serif',
                  lineHeight: 0.7,
                  pointerEvents: 'none'
                }}>
                  "
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    marginBottom: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem'
                  }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${colors.sage}12 0%, ${colors.sage}06 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      border: `1px solid ${colors.sage}20`,
                      boxShadow: `0 0 0 4px ${colors.sage}05`
                    }}>
                      📚
                    </div>
                    <h3 style={{
                      fontSize: '1.625rem',
                      fontWeight: 300,
                      color: colors.umber,
                      letterSpacing: '-0.025em',
                      fontFamily: 'Playfair Display, Georgia, serif'
                    }}>
                      Opposition Research
                    </h3>
                  </div>

                  <p style={{
                    fontSize: '1.0625rem',
                    color: colors.umber,
                    lineHeight: 2.05,
                    whiteSpace: 'pre-wrap',
                    fontWeight: 300
                  }}>
                    {researchBrief}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,200;0,300;0,400;1,200;1,300&family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -20px); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.035; }
          50% { opacity: 0.06; }
        }
        
        button:hover .hover-gradient {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}