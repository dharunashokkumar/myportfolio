import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

const experiences = {
  places: [
    { id: 'p1', title: 'Watch the Northern Lights', subtitle: 'Arctic Circle', cost: 3, duration: 'Sep — Mar', difficulty: 2, leadTime: '3-6 months ahead', bestFor: 'Solo or partner', accent: '#72b89f' },
    { id: 'p2', title: 'Walk the Camino de Santiago', subtitle: 'Spain', cost: 2, duration: '35 days', difficulty: 4, leadTime: '6-12 months ahead', bestFor: 'Solo travelers', accent: '#cca870' },
    { id: 'p3', title: 'Witness Cherry Blossoms in Kyoto', subtitle: 'Japan', cost: 3, duration: '5-7 days', difficulty: 1, leadTime: '4-6 months ahead', bestFor: 'Any group size', accent: '#d89898' },
    { id: 'p4', title: 'Stand at the Edge of Petra', subtitle: 'Jordan', cost: 2, duration: '2-3 days', difficulty: 2, leadTime: '2-3 months ahead', bestFor: 'Partner or small group', accent: '#d49068' },
    { id: 'p5', title: 'Sail the Greek Islands', subtitle: 'Cyclades', cost: 3, duration: '7-10 days', difficulty: 2, leadTime: '3-6 months ahead', bestFor: 'Partner or friends', accent: '#70a8bd' },
  ],
  achievements: [
    { id: 'a1', title: 'Complete a Marathon', subtitle: '26.2 miles', cost: 1, duration: 'One day (6-12mo prep)', difficulty: 4, leadTime: '6-12 months training', bestFor: 'Solo commitment', accent: '#d49068' },
    { id: 'a2', title: 'Write and Finish a Novel', subtitle: '50,000+ words', cost: 0, duration: '1-3 years', difficulty: 5, leadTime: 'Start anytime', bestFor: 'Solo project', accent: '#9488c4' },
    { id: 'a3', title: 'Learn to Play Piano', subtitle: 'Intermediate level', cost: 2, duration: '2-3 years', difficulty: 3, leadTime: 'Start anytime', bestFor: 'Solo practice', accent: '#a490c4' },
    { id: 'a4', title: 'Become Conversational in a New Language', subtitle: 'B2 proficiency', cost: 1, duration: '1-2 years', difficulty: 4, leadTime: 'Start anytime', bestFor: 'Solo study', accent: '#b8a0cc' },
    { id: 'a5', title: 'Give a Public Speech', subtitle: '100+ audience', cost: 0, duration: '30-60 minutes', difficulty: 3, leadTime: '1-3 months prep', bestFor: 'Solo performance', accent: '#d0c080' },
  ],
  tastes: [
    { id: 't1', title: 'Dine at a Three Michelin Star', subtitle: 'World cuisine', cost: 4, duration: 'One evening', difficulty: 1, leadTime: '2-6 months reservation', bestFor: 'Partner or small group', accent: '#c87070' },
    { id: 't2', title: 'Harvest Grapes in a Vineyard', subtitle: 'Wine country', cost: 2, duration: '1-2 days', difficulty: 2, leadTime: '3-6 months ahead', bestFor: 'Partner or friends', accent: '#9878c0' },
    { id: 't3', title: 'Take a Cooking Class in Italy', subtitle: 'Authentic pasta', cost: 2, duration: 'Half day', difficulty: 1, leadTime: '1-2 months ahead', bestFor: 'Any group size', accent: '#d49068' },
    { id: 't4', title: 'Experience Omakase in Tokyo', subtitle: 'Chef\'s selection', cost: 4, duration: '2-3 hours', difficulty: 1, leadTime: '1-3 months reservation', bestFor: 'Solo or partner', accent: '#68b0c0' },
  ],
  culture: [
    { id: 'c1', title: 'Attend the Vienna Opera Ball', subtitle: 'Austria', cost: 4, duration: 'One evening', difficulty: 2, leadTime: '6-12 months ahead', bestFor: 'Partner', accent: '#cca870' },
    { id: 'c2', title: 'See a Play on the West End', subtitle: 'London', cost: 2, duration: 'One evening', difficulty: 1, leadTime: '1-2 months ahead', bestFor: 'Any group size', accent: '#c87070' },
    { id: 'c3', title: 'Experience Burning Man', subtitle: 'Nevada desert', cost: 3, duration: '7-9 days', difficulty: 4, leadTime: '6-12 months ahead', bestFor: 'Friends or solo', accent: '#d49068' },
    { id: 'c4', title: 'Visit Every Louvre Wing', subtitle: 'Paris', cost: 2, duration: '2-3 full days', difficulty: 2, leadTime: '1-2 months ahead', bestFor: 'Solo or partner', accent: '#8090a8' },
  ],
  connections: [
    { id: 'n1', title: 'Reconnect with an Old Friend', subtitle: 'Meaningful reunion', cost: 0, duration: 'A few hours', difficulty: 2, leadTime: 'When courage strikes', bestFor: 'One-on-one', accent: '#70a8bd' },
    { id: 'n2', title: 'Host a Dinner for Ten', subtitle: 'Your table, your people', cost: 1, duration: 'One evening', difficulty: 2, leadTime: '2-4 weeks ahead', bestFor: 'Your closest circle', accent: '#d0c080' },
    { id: 'n3', title: 'Write a Letter to Your Future Self', subtitle: '10 years from now', cost: 0, duration: '1 hour', difficulty: 1, leadTime: 'Today', bestFor: 'Solo reflection', accent: '#9488c4' },
    { id: 'n4', title: 'Make a Friend in a Foreign Country', subtitle: 'Lasting connection', cost: 0, duration: 'Serendipity', difficulty: 3, leadTime: 'During travel', bestFor: 'Solo travelers', accent: '#72b89f' },
  ],
  inner: [
    { id: 'i1', title: 'Complete a Silent Retreat', subtitle: '7+ days', cost: 2, duration: '7-10 days', difficulty: 4, leadTime: '2-4 months ahead', bestFor: 'Solo journey', accent: '#8090a8' },
    { id: 'i2', title: 'Forgive Someone Fully', subtitle: 'Release the weight', cost: 0, duration: 'Lifetime work', difficulty: 5, leadTime: 'When ready', bestFor: 'Internal work', accent: '#70a8bd' },
    { id: 'i3', title: 'Meditate for 30 Consecutive Days', subtitle: 'Build the practice', cost: 0, duration: '30 days', difficulty: 3, leadTime: 'Start tomorrow', bestFor: 'Solo practice', accent: '#72b89f' },
    { id: 'i4', title: 'Work with a Therapist', subtitle: 'Understand yourself', cost: 2, duration: 'Ongoing', difficulty: 3, leadTime: '1-4 weeks to start', bestFor: 'Solo growth', accent: '#a490c4' },
  ],
  thrills: [
    { id: 'h1', title: 'Skydive from 15,000 Feet', subtitle: 'Terminal velocity', cost: 2, duration: 'Half day', difficulty: 3, leadTime: '1-2 weeks ahead', bestFor: 'Solo or friends', accent: '#70a8bd' },
    { id: 'h2', title: 'Dive the Great Barrier Reef', subtitle: 'Australia', cost: 3, duration: 'Full day', difficulty: 2, leadTime: '2-3 months ahead', bestFor: 'Partner or friends', accent: '#68b0c0' },
    { id: 'h3', title: 'Drive the Pacific Coast Highway', subtitle: 'California', cost: 2, duration: '3-5 days', difficulty: 1, leadTime: '1-2 months ahead', bestFor: 'Partner or solo', accent: '#d49068' },
    { id: 'h4', title: 'Climb a Via Ferrata', subtitle: 'Dolomites', cost: 2, duration: 'Full day', difficulty: 3, leadTime: '1-2 months ahead', bestFor: 'Partner or small group', accent: '#a89880' },
  ],
  markers: [
    { id: 'm1', title: 'Own a Place to Call Home', subtitle: 'Your foundation', cost: 4, duration: 'Years of work', difficulty: 4, leadTime: 'Years of saving', bestFor: 'Solo or family', accent: '#cca870' },
    { id: 'm2', title: 'Retire on Your Terms', subtitle: 'Financial freedom', cost: 4, duration: 'Lifetime', difficulty: 5, leadTime: 'Decades of planning', bestFor: 'You decide', accent: '#72b89f' },
    { id: 'm3', title: 'Start a Family', subtitle: 'If it calls to you', cost: 3, duration: 'Life chapter', difficulty: 4, leadTime: 'When life aligns', bestFor: 'Partner', accent: '#d89898' },
    { id: 'm4', title: 'Launch Something of Your Own', subtitle: 'Business or project', cost: 2, duration: '1-5 years', difficulty: 4, leadTime: '3-12 months prep', bestFor: 'Solo or co-founders', accent: '#a490c4' },
  ],
};

const categoryMeta = {
  places: { name: 'Places', description: 'Destinations that will reshape your perspective', color: '#10b981' },
  achievements: { name: 'Achievements', description: 'Milestones that prove what you\'re capable of', color: '#f97316' },
  tastes: { name: 'Tastes', description: 'Culinary experiences that linger in memory', color: '#dc2626' },
  culture: { name: 'Culture', description: 'Art, music, and gatherings that move the soul', color: '#eab308' },
  connections: { name: 'Connections', description: 'Relationships that define a life well-lived', color: '#0ea5e9' },
  inner: { name: 'Inner Work', description: 'The invisible labor that changes everything', color: '#8b5cf6' },
  thrills: { name: 'Thrills', description: 'Moments that make your heart race', color: '#06b6d4' },
  markers: { name: 'Life Markers', description: 'The chapters that structure a lifetime', color: '#ec4899' },
};

// Sound generation
const useSound = () => {
  const audioContextRef = useRef(null);

  const getContext = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContextRef.current;
  };

  const playTone = useCallback((frequency, duration = 0.1, type = 'sine', volume = 0.1) => {
    try {
      const ctx = getContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = type;
      
      gainNode.gain.setValueAtTime(volume, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
      // Silently fail if audio not available
    }
  }, []);

  const playClick = useCallback(() => playTone(800, 0.05, 'sine', 0.08), [playTone]);
  const playAdd = useCallback(() => {
    playTone(523.25, 0.1, 'sine', 0.1);
    setTimeout(() => playTone(659.25, 0.1, 'sine', 0.1), 50);
  }, [playTone]);
  const playRemove = useCallback(() => playTone(392, 0.15, 'sine', 0.08), [playTone]);
  const playCeremony = useCallback(() => {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.4, 'sine', 0.06), i * 200);
    });
  }, [playTone]);
  const playComplete = useCallback(() => {
    [783.99, 987.77, 1174.66, 1567.98].forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.6, 'triangle', 0.05), i * 150);
    });
  }, [playTone]);

  return { playClick, playAdd, playRemove, playCeremony, playComplete };
};

// Perlin noise for particle flow
const createNoise = () => {
  const p = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  const perm = [...p, ...p];
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + t * (b - a);
  const grad = (hash, x, y, z) => {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };
  return (x, y, z) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
    x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
    const u = fade(x), v = fade(y), w = fade(z);
    const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
    const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
    return lerp(lerp(lerp(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
      lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u), v),
      lerp(lerp(grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1), u),
      lerp(grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1), u), v), w);
  };
};

// Intro particles
const IntroParticles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const frameRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    const particleCount = 90;
    const particles = [];
    
    const colors = [
      { r: 140, g: 175, b: 160 },
      { r: 175, g: 160, b: 140 },
      { r: 160, g: 150, b: 175 },
      { r: 130, g: 168, b: 180 },
      { r: 180, g: 160, b: 160 },
    ];
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const exclusionWidth = 400;
    const exclusionHeight = 350;
    
    for (let i = 0; i < particleCount; i++) {
      let x, y;
      let attempts = 0;
      
      do {
        const edge = Math.random();
        if (edge < 0.25) {
          x = Math.random() * (centerX - exclusionWidth / 2 - 50);
          y = Math.random() * canvas.height;
        } else if (edge < 0.5) {
          x = centerX + exclusionWidth / 2 + 50 + Math.random() * (canvas.width - centerX - exclusionWidth / 2 - 50);
          y = Math.random() * canvas.height;
        } else if (edge < 0.75) {
          x = Math.random() * canvas.width;
          y = Math.random() * (centerY - exclusionHeight / 2 - 30);
        } else {
          x = Math.random() * canvas.width;
          y = centerY + exclusionHeight / 2 + 30 + Math.random() * (canvas.height - centerY - exclusionHeight / 2 - 30);
        }
        attempts++;
      } while (
        Math.abs(x - centerX) < exclusionWidth / 2 &&
        Math.abs(y - centerY) < exclusionHeight / 2 &&
        attempts < 20
      );
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: 1 + Math.random() * 2.5,
        color,
        alpha: 0.12 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.35,
        range: 40 + Math.random() * 70,
      });
    }
    particlesRef.current = particles;
    
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() / 1000;
      
      particles.forEach(p => {
        p.x = p.baseX + Math.sin(time * p.speed + p.phase) * p.range;
        p.y = p.baseY + Math.cos(time * p.speed * 0.7 + p.phase) * (p.range * 0.6);
        
        const pulseAlpha = p.alpha * (0.6 + Math.sin(time * 1.2 + p.phase) * 0.4);
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${pulseAlpha})`);
        gradient.addColorStop(0.4, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${pulseAlpha * 0.4})`);
        gradient.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

// Intro Experience
const IntroExperience = ({ onComplete, seekingWord, setSeekingWord, setUserName, setUserBirthday }) => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const [phase, setPhase] = useState('name'); // name, birthday, forming
  const [nameValue, setNameValue] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [showBirthdayInput, setShowBirthdayInput] = useState(false);
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);
  const targetPointsRef = useRef([]);
  const animationStartRef = useRef(null);

  // Perlin noise for organic flow
  const createNoise = () => {
    const p = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
    const perm = [...p, ...p];
    
    const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t) => a + t * (b - a);
    const grad = (hash, x, y, z) => {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };
    
    return (x, y, z) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);
      const u = fade(x), v = fade(y), w = fade(z);
      const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
      const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
      return lerp(
        lerp(lerp(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
             lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u), v),
        lerp(lerp(grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1), u),
             lerp(grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1), u), v), w);
    };
  };
  
  const noiseRef = useRef(createNoise());

  // Sample text to get target points
  const getTextPoints = useCallback((text) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = Math.min(1200, text.length * 140);
    canvas.width = width;
    canvas.height = 300;
    
    ctx.fillStyle = 'white';
    const fontSize = Math.min(180, width / text.length * 1.4);
    ctx.font = `300 ${fontSize}px Georgia, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, 150);
    
    const imageData = ctx.getImageData(0, 0, width, 300);
    const points = [];
    const step = 3;
    
    for (let y = 0; y < 300; y += step) {
      for (let x = 0; x < width; x += step) {
        const i = (y * width + x) * 4;
        if (imageData.data[i + 3] > 128) {
          points.push({
            x: (x - width / 2) * 0.04,
            y: (150 - y) * 0.04,
            z: (Math.random() - 0.5) * 1.5
          });
        }
      }
    }
    return points;
  }, []);

  useEffect(() => {
    if (!containerRef.current || phase !== 'forming') return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0a, 1);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 35;

    // Get target points for the name
    const displayName = nameValue.trim() || 'You';
    const textPoints = getTextPoints(displayName);
    targetPointsRef.current = textPoints;

    // Particle setup
    const particleCount = 7000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = [];
    const particleData = [];

    // Sophisticated muted palette
    const palette = [
      [0.55, 0.69, 0.63], // sage
      [0.52, 0.56, 0.54], // gray-sage
      [0.60, 0.58, 0.56], // warm gray
      [0.54, 0.56, 0.58], // cool gray
      [0.58, 0.64, 0.61], // silver sage
    ];

    for (let i = 0; i < particleCount; i++) {
      // Start scattered in a sphere around center
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 35 + Math.random() * 25;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      // Assign target point
      const targetIdx = i % targetPointsRef.current.length;
      const target = targetPointsRef.current[targetIdx] || { x: 0, y: 0, z: 0 };
      
      velocities.push({ x: 0, y: 0, z: 0 });
      particleData.push({
        target,
        originalTarget: { ...target },
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.2,
        noiseOffset: { x: Math.random() * 100, y: Math.random() * 100, z: Math.random() * 100 },
        disperseAngle: Math.random() * Math.PI * 2,
        disperseSpeed: 1 + Math.random() * 3
      });
      
      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col[0];
      colors[i * 3 + 1] = col[1];
      colors[i * 3 + 2] = col[2];
      
      sizes[i] = 1.2 + Math.random() * 2.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uOpacity: { value: 0 },
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vDist;
        uniform float uPixelRatio;
        uniform float uTime;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvPosition.z;
          
          float pulse = 1.0 + sin(uTime * 2.5 + position.x * 0.3 + position.y * 0.3) * 0.15;
          gl_PointSize = size * pulse * uPixelRatio * (28.0 / vDist);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        uniform float uTime;
        varying vec3 vColor;
        varying float vDist;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float d = length(center);
          if (d > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.0, d);
          float glow = exp(-d * 3.5) * 0.6;
          alpha = alpha + glow;
          
          float depthFade = clamp(1.0 - vDist / 55.0, 0.35, 1.0);
          vec3 finalColor = vColor + 0.08;
          
          gl_FragColor = vec4(finalColor, alpha * uOpacity * depthFade);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    particlesRef.current = { geometry, material, velocities, particleData };
    scene.add(points);

    animationStartRef.current = Date.now();
    
    // Timeline: 
    // 0-1.2s: particles swirl with high energy
    // 1.2-2s: rapid formation into name
    // 2-5.5s: hold name with gentle swimming (3.5 seconds)
    // 5.5-8s: disperse outward
    // 8-8.5s: fade out completely
    const totalDuration = 8.5;
    const formStart = 1.5;
    const holdEnd = 5.5;
    const disperseStart = 5.5;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = (Date.now() - animationStartRef.current) / 1000;
      
      material.uniforms.uTime.value = elapsed;
      
      const pos = geometry.attributes.position.array;
      const noise = noiseRef.current;
      
      // Opacity envelope
      let opacity;
      if (elapsed < 1) {
        opacity = elapsed; // Fade in
      } else if (elapsed > totalDuration - 1) {
        opacity = Math.max(0, (totalDuration - elapsed)); // Fade out
      } else {
        opacity = 1;
      }
      material.uniforms.uOpacity.value = opacity * 0.9;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const data = particleData[i];
        const vel = velocities[i];
        
        let x = pos[i3];
        let y = pos[i3 + 1];
        let z = pos[i3 + 2];
        
        // Multi-octave flow field for richer patterns
        const scale1 = 0.015;
        const scale2 = 0.04;
        const t = elapsed * 0.35;
        const nx = noise(x * scale1 + data.noiseOffset.x, y * scale1, t) + 
                   noise(x * scale2, y * scale2 + data.noiseOffset.y, t * 1.5) * 0.5;
        const ny = noise(y * scale1 + data.noiseOffset.y, z * scale1, t) +
                   noise(y * scale2, z * scale2 + data.noiseOffset.z, t * 1.5) * 0.5;
        const nz = noise(z * scale1 + data.noiseOffset.z, x * scale1, t) * 0.6;
        
        // Phase: Formation (0 to holdEnd)
        if (elapsed < holdEnd) {
          // Early phase (0-1.2s): high energy swirling and intermixing
          if (elapsed < 1.2) {
            const swirlPhase = elapsed / 1.2;
            // Smooth ease-out for swirl decay
            const swirlStrength = Math.pow(1 - swirlPhase, 1.5) * 2.0;
            
            // High-velocity turbulent flow
            vel.x += nx * 0.3 * swirlStrength * data.speed;
            vel.y += ny * 0.3 * swirlStrength * data.speed;
            vel.z += nz * 0.15 * swirlStrength * data.speed;
            
            // Dual vortex - creates figure-8 / infinity patterns
            const distFromCenter = Math.sqrt(x * x + y * y);
            const angle = Math.atan2(y, x);
            if (distFromCenter > 0.3) {
              const vortexStrength = swirlStrength * 0.12 * Math.min(1, 10 / distFromCenter);
              // Primary rotation
              vel.x += -y * vortexStrength;
              vel.y += x * vortexStrength;
              // Secondary wave pattern
              vel.x += Math.sin(angle * 2 + elapsed * 4) * vortexStrength * 0.3;
              vel.y += Math.cos(angle * 2 + elapsed * 4) * vortexStrength * 0.3;
            }
            
            // Gradual pull toward target
            if (elapsed > 0.3) {
              const pullProgress = (elapsed - 0.3) / 0.9;
              const pullStrength = pullProgress * pullProgress * 0.05;
              vel.x += (data.target.x - x) * pullStrength;
              vel.y += (data.target.y - y) * pullStrength;
            }
          }
          // Transition phase (1.2-2s): flowing into formation
          else if (elapsed < 2.0) {
            const transitionProgress = (elapsed - 1.2) / 0.8;
            // Smooth S-curve easing
            const eased = transitionProgress < 0.5 
              ? 2 * transitionProgress * transitionProgress 
              : 1 - Math.pow(-2 * transitionProgress + 2, 2) / 2;
            
            // Decreasing but still present turbulence
            const turbulence = (1 - eased) * 0.5;
            vel.x += nx * 0.12 * turbulence * data.speed;
            vel.y += ny * 0.12 * turbulence * data.speed;
            vel.z += nz * 0.06 * turbulence * data.speed;
            
            // Smooth attraction curve
            const attractStrength = 0.06 + eased * 0.12;
            vel.x += (data.target.x - x) * attractStrength;
            vel.y += (data.target.y - y) * attractStrength;
            vel.z += (data.target.z - z) * attractStrength * 0.5;
          }
          // Hold phase (2s-4.5s): stable name with living motion
          else {
            // Strong attraction to hold position
            const attractStrength = 0.14;
            vel.x += (data.target.x - x) * attractStrength;
            vel.y += (data.target.y - y) * attractStrength;
            vel.z += (data.target.z - z) * attractStrength * 0.5;
            
            // Breathing/swimming motion - particles stay alive
            const dist = Math.sqrt(
              Math.pow(data.target.x - x, 2) + 
              Math.pow(data.target.y - y, 2) + 
              Math.pow(data.target.z - z, 2)
            );
            
            if (dist < 2.0) {
              // Layered oscillation for organic feel
              vel.x += Math.sin(elapsed * 4 + data.phase) * 0.015;
              vel.x += Math.sin(elapsed * 1.5 + data.phase * 0.5) * 0.008;
              vel.y += Math.cos(elapsed * 3.5 + data.phase) * 0.015;
              vel.y += Math.cos(elapsed * 1.2 + data.phase * 0.7) * 0.008;
              vel.z += Math.sin(elapsed * 2.5 + data.phase * 2) * 0.01;
            }
          }
        }
        // Phase: Dispersal - graceful outward flow
        else {
          const disperseProgress = (elapsed - disperseStart) / (totalDuration - disperseStart);
          // Smooth ease-in-out for natural acceleration
          const easedDisperse = disperseProgress < 0.5
            ? 2 * disperseProgress * disperseProgress
            : 1 - Math.pow(-2 * disperseProgress + 2, 2) / 2;
          
          const disperseForce = easedDisperse * 0.4 * data.disperseSpeed;
          vel.x += Math.cos(data.disperseAngle) * disperseForce;
          vel.y += Math.sin(data.disperseAngle) * disperseForce;
          vel.z += Math.sin(data.disperseAngle * 2 + elapsed) * disperseForce * 0.2;
          
          // Continued flow field influence
          vel.x += nx * 0.04;
          vel.y += ny * 0.04;
        }
        
        // Damping varies by phase - higher values = more fluid motion
        let damping;
        if (elapsed < 1.2) {
          damping = 0.96; // Preserve momentum during swirl
        } else if (elapsed < 2.0) {
          damping = 0.9; // Settling but still fluid
        } else if (elapsed < holdEnd) {
          damping = 0.88; // Stable hold with responsiveness
        } else {
          damping = 0.97; // Smooth dispersal
        }
        vel.x *= damping;
        vel.y *= damping;
        vel.z *= damping;
        
        // Update position
        pos[i3] += vel.x;
        pos[i3 + 1] += vel.y;
        pos[i3 + 2] += vel.z;
      }
      
      geometry.attributes.position.needsUpdate = true;
      
      // Camera: gentle drift, then subtle pull back during disperse
      const camZ = elapsed < holdEnd 
        ? 35 + Math.sin(elapsed * 0.4) * 3
        : 35 + (elapsed - holdEnd) * 4;
      camera.position.x = Math.sin(elapsed * 0.25) * 4;
      camera.position.y = Math.cos(elapsed * 0.2) * 2;
      camera.position.z = camZ;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
      
      if (elapsed >= totalDuration) {
        cancelAnimationFrame(frameRef.current);
        setSeekingWord(nameValue.trim());
        setUserName(nameValue.trim());
        if (birthMonth && birthDay && birthYear) {
          setUserBirthday({
            month: parseInt(birthMonth),
            day: parseInt(birthDay),
            year: parseInt(birthYear)
          });
        }
        onComplete();
      }
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [phase, nameValue, onComplete, setSeekingWord, getTextPoints]);

  // Animation timings
  useEffect(() => {
    if (phase === 'name') {
      const timer = setTimeout(() => setShowNameInput(true), 600);
      return () => clearTimeout(timer);
    }
    if (phase === 'birthday') {
      setShowBirthdayInput(false);
      const timer = setTimeout(() => setShowBirthdayInput(true), 300);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleNameContinue = () => {
    if (nameValue.trim()) {
      setPhase('birthday');
    }
  };

  const handleBirthdayContinue = () => {
    setPhase('forming');
  };

  const handleNameKeyDown = (e) => {
    if (e.key === 'Enter' && nameValue.trim()) {
      handleNameContinue();
    }
  };

  const handleBirthdayKeyDown = (e) => {
    if (e.key === 'Enter' && birthMonth && birthDay && birthYear) {
      handleBirthdayContinue();
    }
  };

  // Calculate age for display
  const getAge = () => {
    if (!birthYear || !birthMonth || !birthDay) return null;
    const today = new Date();
    const birth = new Date(parseInt(birthYear), parseInt(birthMonth) - 1, parseInt(birthDay));
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  // Name input phase
  if (phase === 'name') {
    return (
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Ambient particles - canvas based */}
        <IntroParticles />
        
        <div className="relative z-10 text-center px-6 max-w-md">
          <p 
            className="text-sm uppercase tracking-[0.3em] text-white/30 mb-6"
            style={{
              opacity: showNameInput ? 1 : 0,
              transform: showNameInput ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            The Life Store
          </p>
          
          <h1 
            className="text-2xl md:text-3xl font-light text-white/90 mb-2"
            style={{
              opacity: showNameInput ? 1 : 0,
              transform: showNameInput ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 0.2s'
            }}
          >
            What's your name?
          </h1>
          
          <p 
            className="text-white/40 mb-10 font-light"
            style={{
              opacity: showNameInput ? 1 : 0,
              transform: showNameInput ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 0.4s'
            }}
          >
            This experience is for you.
          </p>
          
          <div
            style={{
              opacity: showNameInput ? 1 : 0,
              transform: showNameInput ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 0.6s'
            }}
          >
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value.slice(0, 15))}
              onKeyDown={handleNameKeyDown}
              placeholder="First name"
              maxLength={15}
              className="w-full bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-2xl text-white/90 placeholder-white/20 py-3 outline-none transition-colors duration-500 font-light"
              autoFocus
              autoComplete="off"
            />
          </div>
          
          <button
            onClick={handleNameContinue}
            disabled={!nameValue.trim()}
            className="group relative mt-10 px-10 py-3.5 rounded-full bg-transparent text-white/50 hover:text-white/90 transition-all duration-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none overflow-hidden"
            style={{
              opacity: showNameInput ? 1 : 0,
              transition: 'opacity 1s ease-out 0.8s, color 0.3s, transform 0.3s',
              border: '1px solid rgba(140,175,160,0.2)',
            }}
          >
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-disabled:opacity-0" style={{ boxShadow: '0 0 35px rgba(140,175,160,0.2), inset 0 0 20px rgba(140,175,160,0.05)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full group-disabled:translate-x-[-100%] transition-transform duration-700 ease-in-out" />
            <span className="relative">Continue</span>
          </button>
        </div>
      </div>
    );
  }

  // Birthday input phase
  if (phase === 'birthday') {
    const age = getAge();
    const isValidDate = birthMonth && birthDay && birthYear && birthYear.length === 4;
    
    return (
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Ambient particles - canvas based */}
        <IntroParticles />
        
        <div className="relative z-10 text-center px-6 max-w-md">
          <p 
            className="text-sm uppercase tracking-[0.3em] text-[rgb(140,175,160)]/50 mb-6"
            style={{
              opacity: showBirthdayInput ? 1 : 0,
              transform: showBirthdayInput ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Hello, {nameValue}
          </p>
          
          <h1 
            className="text-2xl md:text-3xl font-light text-white/90 mb-2"
            style={{
              opacity: showBirthdayInput ? 1 : 0,
              transform: showBirthdayInput ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 0.2s'
            }}
          >
            When were you born?
          </h1>
          
          <p 
            className="text-white/40 mb-10 font-light"
            style={{
              opacity: showBirthdayInput ? 1 : 0,
              transform: showBirthdayInput ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 0.4s'
            }}
          >
            Time gives meaning to dreams.
          </p>
          
          <div
            className="flex items-center justify-center gap-3"
            style={{
              opacity: showBirthdayInput ? 1 : 0,
              transform: showBirthdayInput ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 0.6s'
            }}
          >
            <input
              type="text"
              value={birthMonth}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '').slice(0, 2);
                setBirthMonth(v);
                if (v.length === 2) document.getElementById('birth-day')?.focus();
              }}
              onKeyDown={handleBirthdayKeyDown}
              placeholder="MM"
              className="w-16 bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-xl text-white/90 placeholder-white/20 py-2 outline-none transition-colors duration-500 font-light"
              autoFocus
            />
            <span className="text-white/20 text-xl">/</span>
            <input
              id="birth-day"
              type="text"
              value={birthDay}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '').slice(0, 2);
                setBirthDay(v);
                if (v.length === 2) document.getElementById('birth-year')?.focus();
              }}
              onKeyDown={handleBirthdayKeyDown}
              placeholder="DD"
              className="w-16 bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-xl text-white/90 placeholder-white/20 py-2 outline-none transition-colors duration-500 font-light"
            />
            <span className="text-white/20 text-xl">/</span>
            <input
              id="birth-year"
              type="text"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
              onKeyDown={handleBirthdayKeyDown}
              placeholder="YYYY"
              className="w-20 bg-transparent border-b-2 border-white/15 focus:border-[rgb(140,175,160)]/60 text-center text-xl text-white/90 placeholder-white/20 py-2 outline-none transition-colors duration-500 font-light"
            />
          </div>
          
          {/* Age indicator */}
          {age !== null && age > 0 && age < 120 && (
            <p 
              className="mt-6 text-white/30 text-sm font-light"
              style={{
                animation: 'fadeInIntro 0.5s ease-out'
              }}
            >
              Chapter {age}
            </p>
          )}
          
          <button
            onClick={handleBirthdayContinue}
            disabled={!isValidDate}
            className="group relative mt-10 px-10 py-3.5 rounded-full bg-transparent text-white/50 hover:text-white/90 transition-all duration-500 hover:-translate-y-0.5 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none overflow-hidden"
            style={{
              opacity: showBirthdayInput ? 1 : 0,
              transition: 'opacity 1s ease-out 0.8s, color 0.3s, transform 0.3s',
              border: '1px solid rgba(140,175,160,0.2)',
            }}
          >
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-disabled:opacity-0" style={{ boxShadow: '0 0 35px rgba(140,175,160,0.2), inset 0 0 20px rgba(140,175,160,0.05)' }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full group-disabled:translate-x-[-100%] transition-transform duration-700 ease-in-out" />
            <span className="relative">Begin</span>
          </button>
          
          <button
            onClick={() => setPhase('forming')}
            className="mt-4 block mx-auto text-xs text-white/20 hover:text-white/40 transition-colors"
            style={{
              opacity: showBirthdayInput ? 1 : 0,
              transition: 'opacity 1s ease-out 1s'
            }}
          >
            Skip this step
          </button>
        </div>
        
        <style>{`
          @keyframes fadeInIntro {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // Forming phase - Three.js animation
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50"
      style={{ 
        touchAction: 'none',
        backgroundColor: '#0a0a0a'
      }}
    />
  );
};

// Custom Order Modal
// Saved Lists Modal - continuation marker for next component
const SavedListsModal = ({ show, onClose, savedLists, onLoadList, onDeleteList, userName, playClick, playRemove }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-white/10">
        <div className="sticky top-0 bg-neutral-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Saved Lists</h3>
            <p className="text-sm text-white/50 mt-1">{savedLists.length} {savedLists.length === 1 ? 'list' : 'lists'} saved</p>
          </div>
          <button
            onClick={() => { playClick(); onClose(); }}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
          {savedLists.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-white/50">No saved lists yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {savedLists.map((list, index) => (
                <div
                  key={list.id}
                  className="group bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-4 transition-all duration-150"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium truncate">
                          {userName ? `${userName}'s List` : 'Bucket List'}
                        </h4>
                        <span className="text-xs text-white/40">
                          {list.totalCount} {list.totalCount === 1 ? 'item' : 'items'}
                        </span>
                      </div>
                      <p className="text-xs text-white/50">
                        Saved {list.date} at {list.time}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-white/40">
                        <span>{list.items.thisYear.length} this year</span>
                        <span>{list.items.nextFew.length} next few</span>
                        <span>{list.items.someday.length} someday</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onLoadList(list)}
                        className="px-4 py-2 rounded-full bg-[rgb(140,175,160)]/20 hover:bg-[rgb(140,175,160)]/30 text-[rgb(140,175,160)] text-sm font-medium transition-all duration-150 active:scale-95 border border-[rgb(140,175,160)]/20"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => onDeleteList(list.id)}
                        className="p-2 rounded-full hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-all duration-150 active:scale-95"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CustomOrderModal = ({ customTitle, setCustomTitle, customMeaning, setCustomMeaning, onCancel, onAdd }) => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div 
        className="w-full max-w-md bg-neutral-800 rounded-3xl p-8 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Special Order</h2>
            <p className="text-xs text-white/40">Create your own catalog item</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">What do you want to do?</label>
            <input
              ref={titleRef}
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="Hike to... / Meet... / Finally..."
              autoComplete="off"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Why does this matter?</label>
            <textarea
              value={customMeaning}
              onChange={(e) => setCustomMeaning(e.target.value)}
              placeholder="Why this matters to you..."
              rows={3}
              autoComplete="off"
              className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/15 transition-all duration-200 resize-none"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button 
            onClick={onCancel}
            className="flex-1 px-4 py-3.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-150 active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={onAdd}
            disabled={!customTitle.trim()}
            className="flex-1 px-4 py-3.5 rounded-xl bg-white/15 hover:bg-white/20 text-white font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150 active:scale-95 border border-white/20"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Ceremony View
const CeremonyView = ({ cartItems, ceremonyStep, startTransition }) => {
  const allItems = [...cartItems.thisYear, ...cartItems.nextFew, ...cartItems.someday];
  
  const itemColors = [
    'rgb(114, 184, 159)', // sage
    'rgb(204, 168, 112)', // warm sand
    'rgb(216, 152, 152)', // dusty rose
    'rgb(148, 136, 196)', // soft lavender
    'rgb(112, 168, 189)', // muted teal
  ];

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="w-full max-w-2xl text-center">
        {ceremonyStep >= 1 && (
          <div className="animate-[fadeIn_1.5s_ease-out]">
            <p className="text-sm uppercase tracking-[0.3em] mb-10 text-white/40">These are the experiences</p>
            <p className="text-xl font-light mb-12 text-white/60">you're calling into your life</p>
          </div>
        )}

        {ceremonyStep >= 2 && (
          <div className="space-y-4 mb-12 animate-[fadeIn_0.8s_ease-out]">
            {allItems.map((item, i) => (
              <div 
                key={item.id} 
                className="py-1.5 animate-[pulse_4s_ease-in-out_infinite]" 
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <p className="text-2xl font-light" style={{ color: itemColors[i % itemColors.length] }}>{item.title}</p>
              </div>
            ))}
          </div>
        )}

        {ceremonyStep >= 2 && (
          <button 
            onClick={startTransition} 
            className="group relative px-12 py-4 rounded-full font-medium animate-[fadeIn_0.8s_ease-out] transition-all duration-300 active:scale-[0.97] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(140,175,160,0.1) 0%, rgba(175,160,140,0.1) 50%, rgba(160,150,175,0.1) 100%)',
              border: '1px solid rgba(140,175,160,0.25)',
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 40px rgba(140,175,160,0.25), inset 0 0 25px rgba(140,175,160,0.08)' }} />
            <span className="relative text-white/60 group-hover:text-white transition-colors duration-300">I'm ready</span>
          </button>
        )}
      </div>
    </div>
  );
};

// Generative Three.js Transition
const GenerativeTransition = ({ onComplete, itemCount, playSound }) => {
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0a, 1);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 35;

    const noise = createNoise();
    const palette = [
      [0.55, 0.69, 0.63],
      [0.52, 0.56, 0.54],
      [0.54, 0.52, 0.50],
      [0.53, 0.55, 0.54],
    ];

    const particleCount = 7000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = [];
    const particleData = [];
    
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 25 + Math.random() * 20;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      velocities.push({ x: 0, y: 0, z: 0 });
      particleData.push({
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.2,
        noiseOffset: { x: Math.random() * 100, y: Math.random() * 100, z: Math.random() * 100 }
      });
      
      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col[0];
      colors[i * 3 + 1] = col[1];
      colors[i * 3 + 2] = col[2];
      
      sizes[i] = 1.5 + Math.random() * 2.5;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uOpacity: { value: 0 },
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vDist;
        uniform float uPixelRatio;
        uniform float uTime;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvPosition.z;
          float pulse = 1.0 + sin(uTime * 2.5 + position.x * 0.3) * 0.12;
          gl_PointSize = size * pulse * uPixelRatio * (28.0 / vDist);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vDist;
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float d = length(center);
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, d);
          float glow = exp(-d * 3.5) * 0.5;
          alpha = alpha + glow;
          float depthFade = clamp(1.0 - vDist / 50.0, 0.35, 1.0);
          gl_FragColor = vec4(vColor + 0.08, alpha * uOpacity * depthFade);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let startTime = Date.now();
    const totalDuration = 3.2;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = elapsed / totalDuration;
      
      material.uniforms.uTime.value = elapsed;
      
      let opacity;
      if (elapsed < 0.8) {
        opacity = elapsed / 0.8;
      } else if (elapsed > totalDuration - 0.8) {
        opacity = Math.max(0, (totalDuration - elapsed) / 0.8);
      } else {
        opacity = 1;
      }
      material.uniforms.uOpacity.value = opacity * 0.85;
      
      const pos = geometry.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const data = particleData[i];
        const vel = velocities[i];
        
        let x = pos[i3];
        let y = pos[i3 + 1];
        let z = pos[i3 + 2];
        
        const scale = 0.025;
        const t = elapsed * 0.3;
        const nx = noise(x * scale + data.noiseOffset.x, y * scale, t);
        const ny = noise(y * scale + data.noiseOffset.y, z * scale, t);
        const nz = noise(z * scale + data.noiseOffset.z, x * scale, t);
        
        vel.x += nx * 0.12 * data.speed;
        vel.y += ny * 0.12 * data.speed;
        vel.z += nz * 0.06 * data.speed;
        
        const dist = Math.sqrt(x * x + y * y + z * z);
        const centerPull = progress < 0.5 
          ? 0.015 + progress * 0.03
          : 0.03 - (progress - 0.5) * 0.06;
        
        if (dist > 0.5) {
          vel.x -= (x / dist) * centerPull;
          vel.y -= (y / dist) * centerPull;
          vel.z -= (z / dist) * centerPull * 0.5;
        }
        
        const swirl = 0.015 + Math.sin(elapsed * 2 + data.phase) * 0.008;
        vel.x += -y * swirl;
        vel.y += x * swirl;
        
        vel.x += Math.sin(elapsed * 4 + data.phase) * 0.015;
        vel.y += Math.cos(elapsed * 3 + data.phase) * 0.015;
        
        vel.x *= 0.94;
        vel.y *= 0.94;
        vel.z *= 0.94;
        
        pos[i3] += vel.x;
        pos[i3 + 1] += vel.y;
        pos[i3 + 2] += vel.z;
      }
      
      geometry.attributes.position.needsUpdate = true;
      
      camera.position.x = Math.sin(elapsed * 0.4) * 6;
      camera.position.y = Math.cos(elapsed * 0.25) * 3;
      camera.position.z = 35 + Math.sin(elapsed * 0.5) * 4;
      camera.lookAt(0, 0, 0);

      if (elapsed >= totalDuration) {
        cancelAnimationFrame(frameRef.current);
        if (playSound) playSound();
        onComplete();
        return;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onComplete, itemCount, playSound]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50"
      style={{ 
        touchAction: 'none',
        backgroundColor: 'rgb(10, 10, 10)'
      }}
    />
  );
};

export default function BucketListBuilder() {
  const [view, setView] = useState('intro');
  const [seekingWord, setSeekingWord] = useState('');
  const [userName, setUserName] = useState('');
  const [userBirthday, setUserBirthday] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('places');
  const [expandedCard, setExpandedCard] = useState(null);
  const [cartItems, setCartItems] = useState({ thisYear: [], nextFew: [], someday: [] });
  const [notification, setNotification] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);
  const [cartBounce, setCartBounce] = useState(false);
  const [ceremonyStep, setCeremonyStep] = useState(0);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customMeaning, setCustomMeaning] = useState('');
  const [savedLists, setSavedLists] = useState([]);
  const [showSavedLists, setShowSavedLists] = useState(false);
  const [showCopyPreview, setShowCopyPreview] = useState(false);
  const [copyText, setCopyText] = useState('');
  const [buttonStates, setButtonStates] = useState({ save: 'idle', copy: 'idle', download: 'idle' });
  const [showTransition, setShowTransition] = useState(false);

  const { playClick, playAdd, playRemove, playCeremony, playComplete } = useSound();

  const getUserAge = useCallback(() => {
    if (!userBirthday) return null;
    const today = new Date();
    const birth = new Date(userBirthday.year, userBirthday.month - 1, userBirthday.day);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }, [userBirthday]);

  const addToCart = (item) => {
    if (!cart.find(i => i.id === item.id)) {
      playAdd();
      setCart(prev => [...prev, item]);
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 400);
      setNotification({ message: 'Added to cart', id: item.id });
      setTimeout(() => setNotification(null), 2000);
      setExpandedCard(null);
    }
  };

  const removeFromCart = (itemId) => {
    playRemove();
    setCart(cart.filter(i => i.id !== itemId));
    setCartItems({
      thisYear: cartItems.thisYear.filter(i => i.id !== itemId),
      nextFew: cartItems.nextFew.filter(i => i.id !== itemId),
      someday: cartItems.someday.filter(i => i.id !== itemId),
    });
  };

  const moveToZone = (item, zone) => {
    playClick();
    const newCartItems = {
      thisYear: cartItems.thisYear.filter(i => i.id !== item.id),
      nextFew: cartItems.nextFew.filter(i => i.id !== item.id),
      someday: cartItems.someday.filter(i => i.id !== item.id),
    };
    newCartItems[zone] = [...newCartItems[zone], item];
    setCartItems(newCartItems);
  };

  const addCustomItem = () => {
    if (customTitle.trim()) {
      playAdd();
      const newItem = {
        id: `custom-${Date.now()}`,
        title: customTitle,
        subtitle: 'Personal dream',
        meaning: customMeaning,
        cost: 0,
        duration: 'Your timeline',
        difficulty: 0,
        leadTime: 'You decide',
        bestFor: 'You',
        accent: '#a89abc',
        isCustom: true,
      };
      setCart([...cart, newItem]);
      setCartBounce(true);
      setTimeout(() => setCartBounce(false), 400);
      setCustomTitle('');
      setCustomMeaning('');
      setShowCustomModal(false);
      setNotification({ message: 'Added to cart', id: newItem.id });
      setTimeout(() => setNotification(null), 2000);
    }
  };

  const startCeremony = () => {
    playClick();
    setView('ceremony');
    setCeremonyStep(0);
    setTimeout(() => {
      setCeremonyStep(1);
      playCeremony();
    }, 400);
    setTimeout(() => {
      setCeremonyStep(2);
      playComplete();
    }, 1400);
  };

  const startTransition = () => {
    playClick();
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    setView('export');
  };

  // Generate Claude prompt for bucket list planning
  const generateCopyText = () => {
    const age = getUserAge();
    let prompt = `I've created a bucket list and I'd like your help planning and researching these goals. `;
    
    if (userName) {
      prompt += `My name is ${userName}`;
      if (age) {
        prompt += ` and I'm ${age} years old`;
      }
      prompt += `. `;
    }
    
    prompt += `Here are my bucket list items organized by when I'd like to achieve them:\n\n`;
    
    if (cartItems.thisYear.length > 0) {
      prompt += `**THIS YEAR:**\n`;
      cartItems.thisYear.forEach((item, i) => {
        prompt += `${i + 1}. ${item.title}\n`;
      });
      prompt += `\n`;
    }
    
    if (cartItems.nextFew.length > 0) {
      prompt += `**NEXT FEW YEARS:**\n`;
      cartItems.nextFew.forEach((item, i) => {
        prompt += `${i + 1}. ${item.title}\n`;
      });
      prompt += `\n`;
    }
    
    if (cartItems.someday.length > 0) {
      prompt += `**SOMEDAY:**\n`;
      cartItems.someday.forEach((item, i) => {
        prompt += `${i + 1}. ${item.title}\n`;
      });
      prompt += `\n`;
    }
    
    prompt += `---\n\n`;
    prompt += `Please help me by:\n`;
    prompt += `1. **Research** each item - what does it actually involve, what should I know?\n`;
    prompt += `2. **Practical steps** - break down the "This Year" items into actionable first steps I can take this week\n`;
    prompt += `3. **Estimated costs & time** - rough budget and time commitment for each\n`;
    prompt += `4. **Tips & recommendations** - insider advice, best seasons to do things, things to avoid\n`;
    prompt += `5. **Connections** - are any of these items related? Could I combine trips or experiences?\n\n`;
    prompt += `Start with my "This Year" priorities since those are most urgent, then cover the rest.`;
    
    return prompt;
  };

  const showCopyModal = () => {
    const text = generateCopyText();
    setCopyText(text);
    setShowCopyPreview(true);
  };

  const confirmCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      setShowCopyPreview(false);
      setNotification({ message: 'Copied!' });
      setTimeout(() => setNotification(null), 1500);
    });
  };

  const saveCurrentList = () => {
    const allItems = [...cartItems.thisYear, ...cartItems.nextFew, ...cartItems.someday];
    if (allItems.length === 0) return;
    
    setButtonStates(prev => ({ ...prev, save: 'loading' }));
    
    setTimeout(() => {
      const newSavedList = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        items: JSON.parse(JSON.stringify(cartItems)),
        totalCount: allItems.length
      };
      
      setSavedLists(prev => [newSavedList, ...prev]);
      setButtonStates(prev => ({ ...prev, save: 'success' }));
      setNotification({ message: 'List saved to your collection!' });
      setTimeout(() => setNotification(null), 2000);
      setTimeout(() => setButtonStates(prev => ({ ...prev, save: 'idle' })), 2000);
    }, 400);
  };

  const loadSavedList = (savedList) => {
    setCartItems(savedList.items);
    setCart([...savedList.items.thisYear, ...savedList.items.nextFew, ...savedList.items.someday]);
    setShowSavedLists(false);
    setView('export');
    playClick();
  };

  const deleteSavedList = (id) => {
    setSavedLists(prev => prev.filter(l => l.id !== id));
    playRemove();
  };

  const downloadAsHtml = () => {
    const allItems = [...cartItems.thisYear, ...cartItems.nextFew, ...cartItems.someday];
    const age = getUserAge();
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Bucket List - ${new Date().getFullYear()}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #1a1a1a; 
      color: white; 
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
    }
    .card {
      background: #141414;
      border-radius: 24px;
      padding: 64px;
      max-width: 800px;
      width: 100%;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    .header { margin-bottom: 48px; }
    .divider {
      width: 80px;
      height: 2px;
      background: linear-gradient(90deg, rgb(140, 175, 160), rgb(175, 160, 140), rgb(160, 150, 175));
      margin-bottom: 32px;
    }
    h1 { 
      font-size: 48px; 
      font-weight: 200; 
      line-height: 1.1;
      color: rgba(255,255,255,0.9);
      margin-bottom: 16px;
    }
    .year { 
      font-size: 14px; 
      color: rgba(255,255,255,0.5);
      font-weight: 500;
    }
    .columns { 
      display: grid; 
      grid-template-columns: repeat(3, 1fr); 
      gap: 40px;
      margin-bottom: 48px;
    }
    .column-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;
    }
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .column-title {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 500;
    }
    .items { display: flex; flex-direction: column; gap: 16px; }
    .item { display: flex; align-items: baseline; gap: 12px; }
    .number { 
      font-size: 11px; 
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
    .title { font-size: 14px; line-height: 1.5; }
    .empty { font-size: 14px; font-style: italic; color: rgba(255,255,255,0.2); }
    .footer {
      padding-top: 32px;
      border-top: 1px solid rgba(255,255,255,0.1);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .count { 
      font-size: 11px; 
      text-transform: uppercase; 
      letter-spacing: 0.2em;
      font-weight: 500;
      color: rgba(255,255,255,0.4);
    }
    .brand { font-size: 11px; color: rgba(255,255,255,0.3); }
    @media (max-width: 600px) {
      .columns { grid-template-columns: 1fr; gap: 32px; }
      .card { padding: 32px; }
      h1 { font-size: 32px; }
    }
    @media print {
      body { 
        background: white; 
        padding: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .card { 
        box-shadow: none; 
        background: #141414 !important;
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="divider"></div>
      <h1>${userName ? `${userName}'s<br>Dreams` : 'A Life<br>Worth Living'}</h1>
      <p class="year">${age ? `Chapter ${age} · ` : ''}${new Date().getFullYear()} and beyond</p>
    </div>
    
    <div class="columns">
      <div>
        <div class="column-header">
          <span class="dot" style="background: rgb(140, 175, 160);"></span>
          <span class="column-title" style="color: rgb(140, 175, 160);">This Year</span>
        </div>
        <div class="items">
          ${cartItems.thisYear.length > 0 
            ? cartItems.thisYear.map((item, i) => `
              <div class="item">
                <span class="number" style="color: rgba(140, 175, 160, 0.5);">${String(i + 1).padStart(2, '0')}</span>
                <span class="title" style="color: rgba(255,255,255,0.9);">${item.title}</span>
              </div>
            `).join('')
            : '<p class="empty">Empty</p>'
          }
        </div>
      </div>
      
      <div>
        <div class="column-header">
          <span class="dot" style="background: rgb(175, 160, 140);"></span>
          <span class="column-title" style="color: rgb(175, 160, 140);">Next Few Years</span>
        </div>
        <div class="items">
          ${cartItems.nextFew.length > 0 
            ? cartItems.nextFew.map((item, i) => `
              <div class="item">
                <span class="number" style="color: rgba(175, 160, 140, 0.5);">${String(i + 1).padStart(2, '0')}</span>
                <span class="title" style="color: rgba(255,255,255,0.75);">${item.title}</span>
              </div>
            `).join('')
            : '<p class="empty">Empty</p>'
          }
        </div>
      </div>
      
      <div>
        <div class="column-header">
          <span class="dot" style="background: rgb(160, 150, 175);"></span>
          <span class="column-title" style="color: rgb(160, 150, 175);">Someday</span>
        </div>
        <div class="items">
          ${cartItems.someday.length > 0 
            ? cartItems.someday.map((item, i) => `
              <div class="item">
                <span class="number" style="color: rgba(160, 150, 175, 0.5);">${String(i + 1).padStart(2, '0')}</span>
                <span class="title" style="color: rgba(255,255,255,0.6);">${item.title}</span>
              </div>
            `).join('')
            : '<p class="empty">Empty</p>'
          }
        </div>
      </div>
    </div>
    
    <div class="footer">
      <span class="count">${allItems.length} Dreams</span>
      <span class="brand">The Life Store</span>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bucket-list-${new Date().getFullYear()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setButtonStates(prev => ({ ...prev, download: 'success' }));
    setNotification({ message: 'Card downloaded!' });
    setTimeout(() => setNotification(null), 2000);
    setTimeout(() => setButtonStates(prev => ({ ...prev, download: 'idle' })), 2000);
  };

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, zone) => {
    e.preventDefault();
    if (draggedItem) {
      moveToZone(draggedItem, zone);
      setDraggedItem(null);
    }
  };

  const CostIndicator = ({ level, accent }) => (
    <div className="flex gap-0.5 items-center">
      {[1, 2, 3, 4].map(i => (
        <div 
          key={i} 
          className="w-1.5 h-3.5 rounded-sm transition-all duration-300"
          style={{ backgroundColor: i <= level ? accent : 'rgba(255,255,255,0.2)', opacity: i <= level ? 0.8 : 1 }}
        />
      ))}
    </div>
  );

  const DifficultyIndicator = ({ level, accent }) => (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4, 5].map(i => (
        <div 
          key={i} 
          className="w-1.5 h-1.5 rounded-full transition-all duration-300"
          style={{ backgroundColor: i <= level ? accent : 'rgba(255,255,255,0.2)', opacity: i <= level ? 0.8 : 1 }}
        />
      ))}
    </div>
  );

  if (view === 'intro') {
    return <IntroExperience onComplete={() => setView('store')} seekingWord={seekingWord} setSeekingWord={setSeekingWord} setUserName={setUserName} setUserBirthday={setUserBirthday} />;
  }

  if (showTransition) {
    return <GenerativeTransition onComplete={handleTransitionComplete} itemCount={cart.length} playSound={playComplete} />;
  }

  if (view === 'ceremony') {
    return <CeremonyView cartItems={cartItems} ceremonyStep={ceremonyStep} startTransition={startTransition} />;
  }

  if (view === 'cart') {
    const uncategorized = cart.filter(
      item => ![...cartItems.thisYear, ...cartItems.nextFew, ...cartItems.someday].find(i => i.id === item.id)
    );

    const ZoneCard = ({ item, zone }) => {
      const zoneColors = {
        thisYear: 'rgba(140,175,160,0.15)',
        nextFew: 'rgba(175,160,140,0.15)',
        someday: 'rgba(160,150,175,0.15)'
      };
      const zoneBorders = {
        thisYear: 'rgba(140,175,160,0.25)',
        nextFew: 'rgba(175,160,140,0.25)',
        someday: 'rgba(160,150,175,0.25)'
      };
      return (
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          className="group relative p-4 rounded-xl cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all duration-150 hover:brightness-110"
          style={{
            background: zoneColors[zone],
            border: `1px solid ${zoneBorders[zone]}`
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-sm font-medium">{item.title}</h4>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="opacity-0 group-hover:opacity-100 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-150 hover:bg-white/20 active:scale-90"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      );
    };

    return (
      <div className="min-h-screen bg-neutral-900 text-white">
        <header className="sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button onClick={() => { playClick(); setView('store'); }} className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-150 active:scale-95">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Continue Shopping</span>
            </button>
            <div className="text-center">
              <h1 className="text-lg font-semibold tracking-tight">Your Cart</h1>
              <p className="text-xs text-white/50 mt-0.5">{cart.length} experiences selected</p>
            </div>
            <div className="w-32" />
          </div>
        </header>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-white/50 text-sm text-center max-w-sm">Return to The Life Store and add experiences that call to you.</p>
            <button onClick={() => { playClick(); setView('store'); }} className="mt-6 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-150 border border-white/20 active:scale-95">
              Browse Departments
            </button>
          </div>
        ) : (
          <main className="max-w-7xl mx-auto px-6 py-8">
            {uncategorized.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-sm text-white/50 uppercase tracking-wider font-medium">Drag to schedule</h2>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {uncategorized.map(item => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                      className="group relative p-4 rounded-xl cursor-grab active:cursor-grabbing active:scale-[0.98] transition-all duration-150 hover:brightness-110"
                      style={{
                        background: item.accent ? `${item.accent}15` : 'rgba(255,255,255,0.1)',
                        border: `1px solid ${item.accent ? `${item.accent}25` : 'rgba(255,255,255,0.1)'}`
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{item.title}</h4>
                          <p className="text-xs text-white/50 mt-1">{item.subtitle}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="opacity-0 group-hover:opacity-100 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-150 hover:bg-white/20 active:scale-90">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div 
                onDragOver={handleDragOver} 
                onDrop={(e) => handleDrop(e, 'thisYear')} 
                className="rounded-2xl border-2 border-dashed p-6 min-h-[300px] transition-all duration-200"
                style={{
                  borderColor: draggedItem ? 'rgba(140,175,160,0.4)' : 'rgba(140,175,160,0.2)',
                  background: draggedItem ? 'rgba(140,175,160,0.08)' : 'rgba(140,175,160,0.03)'
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(140,175,160)', boxShadow: '0 0 8px rgba(140,175,160,0.5)' }} />
                  <h3 className="text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(140,175,160,0.8)' }}>This Year</h3>
                </div>
                {cartItems.thisYear.length > 0 ? (
                  <div className="space-y-3">{cartItems.thisYear.map(item => <ZoneCard key={item.id} item={item} zone="thisYear" />)}</div>
                ) : (
                  <p className="text-white/30 text-sm text-center py-8">Drop experiences here</p>
                )}
              </div>

              <div 
                onDragOver={handleDragOver} 
                onDrop={(e) => handleDrop(e, 'nextFew')} 
                className="rounded-2xl border-2 border-dashed p-6 min-h-[300px] transition-all duration-200"
                style={{
                  borderColor: draggedItem ? 'rgba(175,160,140,0.4)' : 'rgba(175,160,140,0.2)',
                  background: draggedItem ? 'rgba(175,160,140,0.08)' : 'rgba(175,160,140,0.03)'
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(175,160,140)', boxShadow: '0 0 8px rgba(175,160,140,0.5)' }} />
                  <h3 className="text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(175,160,140,0.8)' }}>Next Few Years</h3>
                </div>
                {cartItems.nextFew.length > 0 ? (
                  <div className="space-y-3">{cartItems.nextFew.map(item => <ZoneCard key={item.id} item={item} zone="nextFew" />)}</div>
                ) : (
                  <p className="text-white/30 text-sm text-center py-8">Drop experiences here</p>
                )}
              </div>

              <div 
                onDragOver={handleDragOver} 
                onDrop={(e) => handleDrop(e, 'someday')} 
                className="rounded-2xl border-2 border-dashed p-6 min-h-[300px] transition-all duration-200"
                style={{
                  borderColor: draggedItem ? 'rgba(160,150,175,0.4)' : 'rgba(160,150,175,0.2)',
                  background: draggedItem ? 'rgba(160,150,175,0.08)' : 'rgba(160,150,175,0.03)'
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(160,150,175)', boxShadow: '0 0 8px rgba(160,150,175,0.5)' }} />
                  <h3 className="text-sm font-medium uppercase tracking-wider" style={{ color: 'rgba(160,150,175,0.8)' }}>Someday</h3>
                </div>
                {cartItems.someday.length > 0 ? (
                  <div className="space-y-3">{cartItems.someday.map(item => <ZoneCard key={item.id} item={item} zone="someday" />)}</div>
                ) : (
                  <p className="text-white/30 text-sm text-center py-8">Drop experiences here</p>
                )}
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <p className="text-xs text-white/25 mb-4 tracking-wide">
                {uncategorized.length > 0 ? 'Organize your timeline, then' : 'When you\'re ready'}
              </p>
              
              <button
                onClick={startCeremony}
                disabled={[...cartItems.thisYear, ...cartItems.nextFew, ...cartItems.someday].length === 0}
                className="group relative px-14 py-4 rounded-2xl font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.97] overflow-hidden hover:scale-[1.02] hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(140,175,160,0.15) 0%, rgba(175,160,140,0.15) 50%, rgba(160,150,175,0.15) 100%)',
                  border: '1px solid rgba(140,175,160,0.3)',
                  boxShadow: '0 4px 30px rgba(140,175,160,0.1)'
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 40px rgba(140,175,160,0.25), inset 0 0 30px rgba(140,175,160,0.08)' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center gap-3 text-white/80 group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5 text-[rgb(140,175,160)]/70 group-hover:text-[rgb(140,175,160)] transition-all duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base">Complete my list</span>
                  <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </main>
        )}
      </div>
    );
  }

  // Store View - adding custom order button
  const StoreView = () => (
    <div className="min-h-screen bg-neutral-900 text-white relative">
      <header className="sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L12 6M12 18L12 22M2 12L6 12M18 12L22 12" stroke="rgb(140,175,160)" strokeWidth="1.5" strokeLinecap="round" className="opacity-70" />
                <circle cx="12" cy="12" r="2" fill="rgb(140,175,160)" className="opacity-50" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">The Life Store</h1>
              <p className="text-xs text-white/40 mt-0.5">Build your bucket list</p>
            </div>
            {userName && (
              <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
                <span className="text-sm text-white/50">{userName}</span>
                {getUserAge() && (
                  <span className="text-xs text-[rgb(140,175,160)]/60">
                    Chapter {getUserAge()}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            {savedLists.length > 0 && (
              <button
                onClick={() => { playClick(); setShowSavedLists(true); }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white/70 text-sm transition-all duration-150 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>{savedLists.length}</span>
              </button>
            )}
            <button
              onClick={() => { playClick(); setView('cart'); }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-150 active:scale-95"
            >
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="text-sm font-medium">Cart</span>
              {cart.length > 0 && (
                <span className={`flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-white/20 text-white text-xs font-medium transition-transform duration-300 ${cartBounce ? 'scale-125' : 'scale-100'}`}>
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <nav className="sticky top-[73px] z-30 bg-neutral-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 py-3 overflow-x-auto scrollbar-hide">
            {Object.keys(categoryMeta).map((key) => (
              <button
                key={key}
                onClick={() => { playClick(); setSelectedCategory(key); }}
                className={`px-4 py-2.5 rounded-lg text-sm whitespace-nowrap transition-all duration-150 active:scale-95 ${
                  selectedCategory === key
                    ? 'bg-white/15 text-white font-medium'
                    : 'text-white/50 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                {categoryMeta[key].name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 pb-6 border-b border-white/10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-2 text-white/40">Department</p>
              <h2 className="text-3xl font-light tracking-tight">{categoryMeta[selectedCategory].name}</h2>
              <div className="h-px mt-3 mb-2" style={{ background: 'linear-gradient(90deg, rgba(140,175,160,0.5), rgba(175,160,140,0.3), transparent)' }} />
              <p className="text-white/50 text-sm">{categoryMeta[selectedCategory].description}</p>
            </div>
            <p className="text-white/30 text-sm">{experiences[selectedCategory].length} experiences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences[selectedCategory].map((item) => {
            const isInCart = cart.find(i => i.id === item.id);
            const isExpanded = expandedCard === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => { playClick(); setExpandedCard(isExpanded ? null : item.id); }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out ${
                  isExpanded 
                    ? 'scale-[1.03] shadow-2xl shadow-black/50 z-20' 
                    : 'hover:scale-[1.02] hover:shadow-xl z-10'
                }`}
                style={isExpanded ? { boxShadow: `0 25px 50px -12px ${item.accent}30` } : {}}
              >
                <div className="absolute inset-0 bg-neutral-800/60" />
                <div 
                  className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: `linear-gradient(135deg, ${item.accent}40, transparent)` }}
                />
                
                <div className={`relative p-6 flex flex-col transition-all duration-300 ease-out ${isExpanded ? 'min-h-[380px]' : 'min-h-[220px]'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium leading-tight mb-1.5 pr-8">{item.title}</h3>
                      <p className="text-white/50 text-sm">{item.subtitle}</p>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isInCart) {
                          removeFromCart(item.id);
                        } else {
                          addToCart(item);
                        }
                      }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 shadow-lg active:scale-90 ${
                        isInCart
                          ? 'text-white'
                          : 'bg-white/20 hover:bg-white/30 text-white border border-white/20'
                      }`}
                      style={isInCart ? { backgroundColor: item.accent } : {}}
                    >
                      {isInCart ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ease-out ${isExpanded ? 'max-h-[300px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}`}>
                    <div className="space-y-2 text-sm pb-4 border-b border-white/10">
                      <div className="flex justify-between py-1">
                        <span className="text-white/40">Plan ahead</span>
                        <span className="text-white/80 font-medium">{item.leadTime}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-white/40">Best for</span>
                        <span className="text-white/80 font-medium">{item.bestFor}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-white/40">Duration</span>
                        <span className="text-white/80 font-medium">{item.duration}</span>
                      </div>
                    </div>
                    
                    {!isInCart && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item);
                        }}
                        className="group w-full mt-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
                        style={{ 
                          backgroundColor: item.accent,
                          color: '#0a0a0a',
                          boxShadow: `0 4px 20px ${item.accent}40`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                        <svg className="w-5 h-5 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="relative font-semibold">Add to my life</span>
                      </button>
                    )}
                    
                    {isInCart && (
                      <div className="pt-4">
                        <div 
                          className="py-3 px-4 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
                          style={{ backgroundColor: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}30` }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          Added to your life
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`flex items-end justify-between pt-4 border-t border-white/10 mt-auto transition-all duration-300 ${isExpanded ? 'opacity-70' : 'opacity-100'}`}>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3">
                        <CostIndicator level={item.cost} accent={item.accent} />
                        <span className="text-white/40 text-xs font-medium">Investment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <DifficultyIndicator level={item.difficulty} accent={item.accent} />
                        <span className="text-white/40 text-xs font-medium">Effort</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-xs font-medium transition-all duration-300 ${isExpanded ? 'text-white/40' : 'text-white/70'}`}>{item.leadTime}</p>
                      <p className="text-white/40 text-xs mt-1">{item.bestFor}</p>
                    </div>
                  </div>

                  <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/30 uppercase tracking-wider transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {isExpanded ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => { playClick(); setShowCustomModal(true); }}
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl border border-dashed border-white/20 hover:border-white/30 hover:bg-white/5 transition-all duration-150 active:scale-[0.98]"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-white/15 flex items-center justify-center transition-all duration-150">
              <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Special Order</p>
              <p className="text-xs text-white/40 mt-0.5">Add something not in our catalog</p>
            </div>
          </button>
        </div>
      </main>

      {showCustomModal && (
        <CustomOrderModal
          customTitle={customTitle}
          setCustomTitle={setCustomTitle}
          customMeaning={customMeaning}
          setCustomMeaning={setCustomMeaning}
          onCancel={() => { playClick(); setShowCustomModal(false); setCustomTitle(''); setCustomMeaning(''); }}
          onAdd={addCustomItem}
        />
      )}

      {notification && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div 
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl backdrop-blur-xl text-white text-sm font-medium shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(140,175,160,0.25) 0%, rgba(160,150,175,0.25) 100%)',
              border: '1px solid rgba(140,175,160,0.3)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 30px rgba(140,175,160,0.15)',
              animation: 'notificationPop 0.4s cubic-bezier(0.34,1.56,0.64,1)'
            }}
          >
            <div className="w-6 h-6 rounded-full bg-[rgb(140,175,160)] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white/90">{notification.message}</span>
          </div>
        </div>
      )}
    </div>
  );

  if (view === 'export') {
    const allItems = [...cartItems.thisYear, ...cartItems.nextFew, ...cartItems.someday];
    const age = getUserAge();
    const colors = {
      sage: 'rgb(114, 184, 159)',
      sand: 'rgb(204, 168, 112)',
      lilac: 'rgb(164, 144, 196)',
    };

    return (
      <div className="min-h-screen text-white" style={{ backgroundColor: '#0a0a0a' }}>
        <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10" style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)' }}>
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <button onClick={() => { playClick(); setView('cart'); }} className="flex items-center gap-2 text-white/50 hover:text-white transition-all duration-150 active:scale-95">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Edit list</span>
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="p-12 md:p-16 aspect-[3/4] flex flex-col">
              <div className="mb-12 md:mb-16">
                <div className="w-20 h-0.5 mb-8" style={{ background: `linear-gradient(90deg, ${colors.sage}, ${colors.sand}, ${colors.lilac})` }} />
                {userName ? (
                  <>
                    <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-3 text-white/90">{userName}'s<br />Dreams</h1>
                    <p className="text-sm font-medium text-white/40">
                      {age ? `Chapter ${age} · ` : ''}{new Date().getFullYear()} and beyond
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white/90">A Life<br />Worth Living</h1>
                    <p className="text-sm font-medium text-white/40">{new Date().getFullYear()} and beyond</p>
                  </>
                )}
              </div>

              <div className="flex-1 grid grid-cols-3 gap-6 md:gap-10">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] mb-6 font-medium flex items-center gap-2" style={{ color: colors.sage }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.sage }}></span>
                    This Year
                  </h2>
                  <div className="space-y-4">
                    {cartItems.thisYear.map((item, i) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <span className="text-xs tabular-nums font-medium mt-0.5" style={{ color: `rgba(140, 175, 160, 0.5)` }}>{String(i + 1).padStart(2, '0')}</span>
                        <p className={`text-sm leading-relaxed text-white/90 ${item.isCustom ? 'italic' : ''}`}>{item.title}</p>
                      </div>
                    ))}
                    {cartItems.thisYear.length === 0 && <p className="text-white/20 text-sm italic">Empty</p>}
                  </div>
                </div>

                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] mb-6 font-medium flex items-center gap-2" style={{ color: colors.sand }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.sand }}></span>
                    Next Few Years
                  </h2>
                  <div className="space-y-4">
                    {cartItems.nextFew.map((item, i) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <span className="text-xs tabular-nums font-medium mt-0.5" style={{ color: `rgba(175, 160, 140, 0.5)` }}>{String(i + 1).padStart(2, '0')}</span>
                        <p className={`text-sm leading-relaxed text-white/75 ${item.isCustom ? 'italic' : ''}`}>{item.title}</p>
                      </div>
                    ))}
                    {cartItems.nextFew.length === 0 && <p className="text-white/20 text-sm italic">Empty</p>}
                  </div>
                </div>

                <div>
                  <h2 className="text-xs uppercase tracking-[0.2em] mb-6 font-medium flex items-center gap-2" style={{ color: colors.lilac }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.lilac }}></span>
                    Someday
                  </h2>
                  <div className="space-y-4">
                    {cartItems.someday.map((item, i) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <span className="text-xs tabular-nums font-medium mt-0.5" style={{ color: `rgba(160, 150, 175, 0.5)` }}>{String(i + 1).padStart(2, '0')}</span>
                        <p className={`text-sm leading-relaxed text-white/60 ${item.isCustom ? 'italic' : ''}`}>{item.title}</p>
                      </div>
                    ))}
                    {cartItems.someday.length === 0 && <p className="text-white/20 text-sm italic">Empty</p>}
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex justify-between items-end">
                <p className="text-xs uppercase tracking-widest font-medium text-white/35">{allItems.length} Dreams</p>
                <p className="text-xs text-white/25">The Life Store</p>
              </div>
            </div>
          </div>
          
          {/* Export Options - Below the card */}
          <div className="mt-8 animate-[fadeIn_0.5s_ease-out_0.2s_both]">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <button 
                onClick={saveCurrentList}
                disabled={buttonStates.save !== 'idle'}
                className={`group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.95] overflow-hidden ${
                  buttonStates.save === 'success' 
                    ? 'bg-[rgba(140,175,160,0.15)] border-[rgba(140,175,160,0.4)]' 
                    : 'bg-transparent hover:bg-white/[0.04] border-[rgba(160,150,175,0.15)] hover:border-[rgba(160,150,175,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(160,150,175,0.15)]'
                } border`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(160,150,175,0.05)] via-transparent to-[rgba(140,175,160,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                {buttonStates.save === 'loading' ? (
                  <svg className="w-4 h-4 text-[rgb(160,150,175)] animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : buttonStates.save === 'success' ? (
                  <svg className="w-4 h-4 text-[rgb(140,175,160)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[rgb(160,150,175)]/50 group-hover:text-[rgb(160,150,175)] transition-all duration-300 group-hover:scale-125 group-active:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                )}
                <span className={`text-sm transition-all duration-300 ${buttonStates.save === 'success' ? 'text-[rgb(140,175,160)]' : 'text-white/50 group-hover:text-white/90'}`}>
                  {buttonStates.save === 'success' ? 'Saved!' : buttonStates.save === 'loading' ? 'Saving...' : 'Save to my lists'}
                </span>
              </button>
              
              <button 
                onClick={showCopyModal}
                className="group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.04] border border-[rgba(140,175,160,0.15)] hover:border-[rgba(140,175,160,0.4)] transition-all duration-300 active:scale-[0.95] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(140,175,160,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(140,175,160,0.05)] via-transparent to-[rgba(175,160,140,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <svg className="w-4 h-4 text-[rgb(140,175,160)]/50 group-hover:text-[rgb(140,175,160)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
                <span className="text-sm text-white/50 group-hover:text-white/90 transition-all duration-300">Plan with Claude</span>
              </button>
              
              <button 
                onClick={downloadAsHtml}
                disabled={buttonStates.download === 'success'}
                className={`group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.95] overflow-hidden ${
                  buttonStates.download === 'success'
                    ? 'bg-[rgba(175,160,140,0.15)] border-[rgba(175,160,140,0.4)]'
                    : 'bg-transparent hover:bg-white/[0.04] border-[rgba(175,160,140,0.15)] hover:border-[rgba(175,160,140,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(175,160,140,0.15)]'
                } border`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(175,160,140,0.05)] via-transparent to-[rgba(160,150,175,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                {buttonStates.download === 'success' ? (
                  <svg className="w-4 h-4 text-[rgb(175,160,140)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[rgb(175,160,140)]/50 group-hover:text-[rgb(175,160,140)] transition-all duration-300 group-hover:translate-y-1 group-active:translate-y-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                )}
                <span className={`text-sm transition-all duration-300 ${buttonStates.download === 'success' ? 'text-[rgb(175,160,140)]' : 'text-white/50 group-hover:text-white/90'}`}>
                  {buttonStates.download === 'success' ? 'Downloaded!' : 'Download card'}
                </span>
              </button>
            </div>
            
            <p className="text-center text-xs text-white/20 mt-4">
              Saved lists persist for this session • Downloaded cards can be opened in any browser
            </p>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/20 text-xs italic max-w-sm mx-auto">
              "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience."
            </p>
            <p className="text-white/15 text-[10px] mt-2 tracking-wide">— Eleanor Roosevelt</p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                playClick();
                setUserName('');
                setUserBirthday(null);
                setCart([]);
                setCartItems({ thisYear: [], nextFew: [], someday: [] });
                setView('intro');
              }}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">Create a new list</span>
            </button>
            
            <button
              onClick={() => {
                playClick();
                setView('store');
              }}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
              <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">Back to the store</span>
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Main store view  
  return (
    <>
      <SavedListsModal
        show={showSavedLists}
        onClose={() => setShowSavedLists(false)}
        savedLists={savedLists}
        onLoadList={loadSavedList}
        onDeleteList={deleteSavedList}
        userName={userName}
        playClick={playClick}
        playRemove={playRemove}
      />
      
      {/* Copy Preview Modal */}
      {showCopyPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="w-full max-w-lg bg-neutral-900 rounded-2xl border border-white/10 shadow-2xl animate-[scaleIn_0.2s_ease-out]">
            <div className="p-5 border-b border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-medium text-white/90">Plan with Claude</h2>
                <button 
                  onClick={() => setShowCopyPreview(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-white/50">This prompt will ask Claude to research your bucket list items and help you plan how to achieve them.</p>
            </div>
            
            <div className="p-4">
              <div className="bg-black/30 rounded-xl p-4 max-h-48 overflow-y-auto font-mono text-xs text-white/60 whitespace-pre-wrap border border-white/5">
                {copyText}
              </div>
            </div>
            
            <div className="p-4 pt-0 space-y-3">
              <button 
                onClick={confirmCopy}
                className="w-full py-3.5 rounded-xl bg-[rgba(140,175,160,0.15)] hover:bg-[rgba(140,175,160,0.25)] border border-[rgba(140,175,160,0.3)] text-sm font-medium text-white/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                Copy prompt
              </button>
              
              <a 
                href="https://claude.ai/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/60 hover:text-white/80 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Open Claude.ai
              </a>
              
              <p className="text-xs text-white/30 text-center pt-1">
                Copy the prompt, then paste it into a new Claude conversation
              </p>
            </div>
          </div>
        </div>
      )}
      
      <StoreView />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes notificationPop {
          0% { opacity: 0; transform: translate(-50%, 30px) scale(0.8); }
          60% { opacity: 1; transform: translate(-50%, -5px) scale(1.02); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}