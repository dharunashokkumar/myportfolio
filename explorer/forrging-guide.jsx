import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import * as d3 from 'd3';

// ============== ICON COMPONENTS ==============
const Icons = {
  check: ({ size = 12, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  leaf: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  alertTriangle: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" />
    </svg>
  ),
  arrowLeft: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  ),
  arrowRight: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 5 7 7-7 7" /><path d="M5 12h14" />
    </svg>
  ),
  x: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  ),
  chevronDown: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  mapPin: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  trees: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" /><path d="M7 16v6" />
    </svg>
  ),
  waves: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  ),
  scissors: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><circle cx="6" cy="18" r="3" />
    </svg>
  ),
  basket: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9h20" /><path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
    </svg>
  ),
  droplets: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    </svg>
  ),
  sun: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" />
    </svg>
  ),
  sunrise: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="m19.07 10.93-1.41 1.41" /><path d="M22 22H2" /><path d="m8 6 4-4 4 4" /><path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  ),
  snowflake: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" x2="22" y1="12" y2="12" /><line x1="12" x2="12" y1="2" y2="22" /><path d="m20 16-4-4 4-4" /><path d="m4 8 4 4-4 4" />
    </svg>
  ),
  download: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  flame: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
  mountain: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  ),
  wheat: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22 16 8" /><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    </svg>
  ),
  home: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  knife: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v6c0 1.1.9 2 2 2h4" /><path d="m3 2 18 18" />
    </svg>
  ),
  gloves: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" /><path d="M11 7V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3" />
    </svg>
  ),
  book: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  shovel: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22v-5l5-5 5 5-5 5z" /><path d="M9.5 14.5 16 8" />
    </svg>
  ),
  fileText: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" />
    </svg>
  )
};

// Forest Scene Illustration
const ForestIllustration = ({ style }) => (
  <svg viewBox="0 0 200 60" style={{ width: 200, height: 50, overflow: 'visible', ...style }}>
    <defs>
      <linearGradient id="mushroom-cap" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a08672" />
        <stop offset="100%" stopColor="#7a6454" />
      </linearGradient>
    </defs>
    
    {/* Mushroom */}
    <g style={{ animation: 'gentleSway 6s ease-in-out infinite', transformOrigin: '30px 52px' }}>
      <ellipse cx="30" cy="52" rx="6" ry="2" fill="#9a8a7a" opacity="0.12"/>
      <rect x="28" y="42" width="4" height="10" fill="#f0ebe4" rx="1.5"/>
      <ellipse cx="30" cy="40" rx="9" ry="6" fill="url(#mushroom-cap)" />
      <circle cx="26" cy="38" r="1.5" fill="#f0ebe4" opacity="0.35"/>
    </g>
    
    {/* Fern */}
    <g style={{ animation: 'gentleSway 7s ease-in-out infinite', animationDelay: '1s', transformOrigin: '70px 52px' }}>
      <path d="M 70 52 Q 69 42 71 32" stroke="#5d6b58" strokeWidth="1.5" fill="none"/>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <path d={`M ${70-i*0.3} ${50-i*4.5} Q ${64-i} ${48-i*4.5} ${62-i} ${46-i*4.5}`} stroke="#5d6b58" strokeWidth="1" fill="none" opacity={0.85-i*0.12}/>
          <path d={`M ${70+i*0.3} ${50-i*4.5} Q ${76+i} ${48-i*4.5} ${78+i} ${46-i*4.5}`} stroke="#5d6b58" strokeWidth="1" fill="none" opacity={0.85-i*0.12}/>
        </g>
      ))}
    </g>
    
    {/* Berry Bush */}
    <g style={{ animation: 'gentleSway 5.5s ease-in-out infinite', animationDelay: '0.5s', transformOrigin: '120px 52px' }}>
      <ellipse cx="120" cy="52" rx="8" ry="3" fill="#9a8a7a" opacity="0.12"/>
      <path d="M 116 52 Q 114 42 112 32 Q 120 28 128 32 Q 126 42 124 52 Z" fill="#b89e7e"/>
      <circle cx="118" cy="38" r="2" fill="#8a4a5a"/>
      <circle cx="122" cy="36" r="2" fill="#8a4a5a"/>
      <circle cx="120" cy="42" r="2" fill="#8a4a5a"/>
    </g>
    
    {/* Flowers */}
    <g style={{ animation: 'gentleSway 6.5s ease-in-out infinite', animationDelay: '1.5s', transformOrigin: '160px 50px' }}>
      <path d="M 160 52 Q 159 44 161 36" stroke="#4a4540" strokeWidth="1" fill="none"/>
      <circle cx="166" cy="37" r="3" fill="#d8c878"/>
      <circle cx="158" cy="40" r="2.5" fill="#c8b868"/>
      <circle cx="165" cy="42" r="2.5" fill="#d8c878"/>
    </g>
  </svg>
);

// ============== AUDIO SYSTEM ==============
const Audio = {
  ctx: null,
  init() { 
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.log('Audio not available');
      }
    }
    return this.ctx;
  },
  
  softClick(vol = 0.06) {
    const ctx = this.init();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const bufferSize = ctx.sampleRate * 0.02;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const env = Math.exp(-i / (bufferSize * 0.1));
        data[i] = (Math.random() * 2 - 1) * env;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2500, now);
      filter.Q.setValueAtTime(1.5, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } catch (e) {}
  },
  
  tick(vol = 0.015) {
    const ctx = this.init();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const bufferSize = ctx.sampleRate * 0.008;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(3000, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(vol, now);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } catch (e) {}
  },
  
  whoosh(duration = 0.3, vol = 0.04) {
    const ctx = this.init();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const env = Math.sin((i / bufferSize) * Math.PI);
        data[i] = (Math.random() * 2 - 1) * env;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.linearRampToValueAtTime(900, now + duration * 0.4);
      filter.frequency.linearRampToValueAtTime(300, now + duration);
      filter.Q.setValueAtTime(0.7, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(vol, now + duration * 0.15);
      gain.gain.linearRampToValueAtTime(vol * 0.6, now + duration * 0.6);
      gain.gain.linearRampToValueAtTime(0, now + duration);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } catch (e) {}
  },
  
  settle(vol = 0.05) {
    const ctx = this.init();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const bufferSize = ctx.sampleRate * 0.08;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const env = Math.exp(-i / (bufferSize * 0.15));
        data[i] = (Math.random() * 2 - 1) * env;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } catch (e) {}
  },
  
  play(type) {
    try {
      switch(type) {
        case 'select': this.softClick(0.14); break;
        case 'hover': this.tick(0.025); break;
        case 'zoom': this.whoosh(0.35, 0.09); setTimeout(() => this.settle(0.08), 300); break;
        case 'add': this.softClick(0.16); break;
        case 'remove': this.softClick(0.08); break;
        case 'navigate': this.softClick(0.1); break;
        case 'click': this.softClick(0.08); break;
        case 'complete': this.whoosh(0.2, 0.06); break;
        default: this.tick(0.016);
      }
    } catch (e) {}
  }
};

// ============== DATA ==============
const STATE_FIPS = {
  '01': 'Alabama', '02': 'Alaska', '04': 'Arizona', '05': 'Arkansas', '06': 'California',
  '08': 'Colorado', '09': 'Connecticut', '10': 'Delaware', '12': 'Florida',
  '13': 'Georgia', '15': 'Hawaii', '16': 'Idaho', '17': 'Illinois', '18': 'Indiana',
  '19': 'Iowa', '20': 'Kansas', '21': 'Kentucky', '22': 'Louisiana', '23': 'Maine',
  '24': 'Maryland', '25': 'Massachusetts', '26': 'Michigan', '27': 'Minnesota', '28': 'Mississippi',
  '29': 'Missouri', '30': 'Montana', '31': 'Nebraska', '32': 'Nevada', '33': 'New Hampshire',
  '34': 'New Jersey', '35': 'New Mexico', '36': 'New York', '37': 'North Carolina', '38': 'North Dakota',
  '39': 'Ohio', '40': 'Oklahoma', '41': 'Oregon', '42': 'Pennsylvania', '44': 'Rhode Island',
  '45': 'South Carolina', '46': 'South Dakota', '47': 'Tennessee', '48': 'Texas', '49': 'Utah',
  '50': 'Vermont', '51': 'Virginia', '53': 'Washington', '54': 'West Virginia', '55': 'Wisconsin', '56': 'Wyoming'
};

const ECOREGIONS = {
  northeast: { name: 'Northeast Woodlands', states: ['09','23','25','33','34','36','42','44','50'], color: '#6b8272', lightColor: '#f0f5f2', darkColor: '#4a5f52' },
  southeast: { name: 'Southeast Coastal', states: ['01','10','12','13','21','24','28','37','45','47','51','54'], color: '#7a9882', lightColor: '#f2f7f4', darkColor: '#5a7562' },
  midwest: { name: 'Great Lakes & Prairie', states: ['17','18','19','20','26','27','29','31','38','39','46','55'], color: '#8a9272', lightColor: '#f5f6f2', darkColor: '#6a7258' },
  southwest: { name: 'Desert & Canyon', states: ['04','35','48','40'], color: '#a08872', lightColor: '#f8f5f2', darkColor: '#7a6855' },
  mountain: { name: 'Rocky Mountain', states: ['08','16','30','49','56'], color: '#728a8a', lightColor: '#f2f6f6', darkColor: '#526868' },
  pacific: { name: 'Pacific Coast', states: ['06','41','53'], color: '#5a7a72', lightColor: '#eef5f4', darkColor: '#3a5a52' },
  alaska: { name: 'Alaska Boreal', states: ['02'], color: '#5a7282', lightColor: '#eef4f6', darkColor: '#3a5262' },
  hawaii: { name: 'Hawaiian Tropical', states: ['15'], color: '#528a6a', lightColor: '#eef6f2', darkColor: '#326a4a' },
  plains: { name: 'Great Plains', states: ['05','22','32'], color: '#8a8a72', lightColor: '#f6f6f2', darkColor: '#6a6a58' }
};

const LOCATION_STATS = {
  northeast: { avgSpecies: '45-60', peakMonth: 'September', terrain: 'rolling hills & coastline', climate: 'temperate humid' },
  southeast: { avgSpecies: '55-75', peakMonth: 'April-May', terrain: 'coastal plains & piedmont', climate: 'subtropical' },
  midwest: { avgSpecies: '40-55', peakMonth: 'May', terrain: 'prairies & river valleys', climate: 'continental' },
  southwest: { avgSpecies: '25-40', peakMonth: 'August', terrain: 'desert basins & canyons', climate: 'arid to semi-arid' },
  mountain: { avgSpecies: '35-50', peakMonth: 'July-August', terrain: 'alpine meadows & forests', climate: 'montane' },
  pacific: { avgSpecies: '60-80', peakMonth: 'October-November', terrain: 'coastal ranges & valleys', climate: 'mediterranean' },
  alaska: { avgSpecies: '30-45', peakMonth: 'July', terrain: 'tundra & boreal forest', climate: 'subarctic' },
  hawaii: { avgSpecies: '40-55', peakMonth: 'year-round', terrain: 'volcanic slopes & valleys', climate: 'tropical' },
  plains: { avgSpecies: '30-45', peakMonth: 'June', terrain: 'grasslands & river breaks', climate: 'semi-arid continental' }
};

const STATE_FACTS = {
  '01': 'Home to prized chanterelles in pine forests',
  '02': 'Wild salmon berries grow nowhere else in the US',
  '04': 'Desert prickly pear fruits ripen in late summer',
  '05': 'Pawpaws thrive in river bottomlands here',
  '06': 'Over 3,000 species of wild mushrooms grow here',
  '08': 'High altitude porcini mushrooms are legendary',
  '09': 'Ramps emerge in early April woodlands',
  '10': 'Beach plums grow wild along the coast',
  '12': 'Sea grapes and coconuts grow wild on beaches',
  '13': 'Mayhaw berries make prized Southern jelly',
  '15': 'Wild guava and mountain apples abound',
  '16': 'Huckleberries draw foragers to mountain slopes',
  '17': 'Morel mushrooms appear after spring rains',
  '18': 'Persimmons sweeten after first frost',
  '19': 'Wild asparagus grows along rural roadsides',
  '20': 'Prairie turnips were a Native American staple',
  '21': 'Ramps festivals celebrate spring foraging',
  '22': 'Crawfish and wild rice in bayou country',
  '23': 'Wild blueberry barrens cover thousands of acres',
  '24': 'Chesapeake Bay provides wild oysters and crabs',
  '25': 'Cranberry bogs are harvested each fall',
  '26': 'Morel capital of the Midwest',
  '27': 'Wild rice lakes support traditional harvests',
  '28': 'Muscadine grapes grow wild in forests',
  '29': 'Persimmon and black walnut country',
  '30': 'Huckleberry picking is a summer tradition',
  '31': 'Wild plums and chokecherries dot the prairies',
  '32': 'Piñon pine nuts have been harvested for centuries',
  '33': 'Fiddlehead ferns emerge each spring',
  '34': 'Pine Barrens host unique cranberry bogs',
  '35': 'Wild piñon and juniper berries in highlands',
  '36': 'Adirondacks full of wild leeks and berries',
  '37': 'Ramps and branch lettuce in mountain coves',
  '38': 'Chokecherries and wild plums on the prairie',
  '39': 'Pawpaw trees grow wild in river valleys',
  '40': 'Wild pecans fall in autumn groves',
  '41': 'Chanterelle and matsutake mushroom paradise',
  '42': 'Black trumpet mushrooms in old-growth forests',
  '44': 'Coastal beach plums and rose hips',
  '45': 'Muscadines and persimmons in the lowcountry',
  '46': 'Chokecherries and wild turnips on the plains',
  '47': 'Ramps and morels in Appalachian forests',
  '48': 'Wild pecans and prickly pear across the state',
  '49': 'Pine nuts and wild onions in mountain country',
  '50': 'Maple syrup and fiddleheads in early spring',
  '51': 'Ramps grow in Blue Ridge mountain hollows',
  '53': 'Pacific Northwest mushroom foraging mecca',
  '54': 'Ramp capital of the world',
  '55': 'Wild rice and morel mushroom territory',
  '56': 'High country huckleberries and wild onions'
};

const PREP_TYPES = {
  'raw-safe': { label: 'Eat Raw', color: '#5a7262', bgColor: '#eef4f0' },
  'must-cook': { label: 'Must Cook', color: '#7a6855', bgColor: '#f4f0ec' },
  'requires-processing': { label: 'Process First', color: '#6a5a72', bgColor: '#f2f0f4' }
};

const HABITAT_ICONS = {
  'forest': { icon: 'trees', label: 'Forest', color: '#5a7262', bgColor: '#eef4f0' },
  'forest-edge': { icon: 'trees', label: 'Forest Edge', color: '#5a7262', bgColor: '#f0f5f2' },
  'meadow': { icon: 'wheat', label: 'Meadow', color: '#6a7255', bgColor: '#f2f4ee' },
  'wetland': { icon: 'waves', label: 'Wetland', color: '#557278', bgColor: '#eef2f4' },
  'stream-bank': { icon: 'waves', label: 'Stream', color: '#557278', bgColor: '#f0f4f6' },
  'roadside': { icon: 'mapPin', label: 'Roadside', color: '#6a6862', bgColor: '#f2f2f0' },
  'disturbed': { icon: 'shovel', label: 'Disturbed', color: '#72685a', bgColor: '#f4f2ee' },
  'garden': { icon: 'home', label: 'Garden', color: '#5a7262', bgColor: '#f0f5f2' },
  'lawn': { icon: 'home', label: 'Lawn', color: '#5a7055', bgColor: '#f0f4ee' },
  'mountain': { icon: 'mountain', label: 'Mountain', color: '#5a6272', bgColor: '#f0f2f6' },
  'heath': { icon: 'leaf', label: 'Heath', color: '#5a6862', bgColor: '#f0f2f0' },
  'burn-site': { icon: 'flame', label: 'Burn Site', color: '#72584a', bgColor: '#f4f0ec' },
  'thicket': { icon: 'trees', label: 'Thicket', color: '#527258', bgColor: '#eef4f0' }
};

const EQUIPMENT = {
  'basket': { icon: 'basket', name: 'Basket' },
  'mesh-bag': { icon: 'basket', name: 'Mesh bag' },
  'knife': { icon: 'knife', name: 'Knife' },
  'scissors': { icon: 'scissors', name: 'Scissors' },
  'pruning-shears': { icon: 'scissors', name: 'Shears' },
  'gloves': { icon: 'gloves', name: 'Gloves' },
  'thick-gloves': { icon: 'gloves', name: 'Thick gloves' },
  'long-sleeves': { icon: 'gloves', name: 'Long sleeves' },
  'brush': { icon: 'leaf', name: 'Brush' },
  'field-guide': { icon: 'book', name: 'Field guide' },
  'bucket': { icon: 'basket', name: 'Bucket' },
  'bag': { icon: 'basket', name: 'Bag' },
  'trowel': { icon: 'shovel', name: 'Trowel' },
  'digging-tool': { icon: 'shovel', name: 'Digger' },
  'nutcracker': { icon: 'knife', name: 'Nutcracker' },
  'berry-rake': { icon: 'shovel', name: 'Berry rake' },
  'berry-rake': { icon: 'shovel', name: 'Berry rake' },
  'old-clothes': { icon: 'gloves', name: 'Old clothes' }
};

const FORAGEABLES = {
  berries: [
    { 
      id: 'blackberry', 
      name: 'Blackberry', 
      latin: 'Rubus fruticosus', 
      seasonStart: 24, 
      seasonEnd: 36, 
      habitat: ['forest-edge', 'meadow', 'roadside'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific'],
      identification: ['Thorny canes that arch and root at tips', 'Compound leaves with 3-5 leaflets', 'Berries ripen from red to glossy black'],
      harvest: 'Berries should be fully black and pull away easily. Best picked in morning when cool.',
      uses: 'Fresh eating, jams, pies, wine. Leaves make medicinal tea for digestive issues.',
      lookalikes: [],
      preparation: 'raw-safe',
      equipment: ['basket', 'long-sleeves', 'gloves'],
      storage: { fresh: '3-5 days refrigerated', preserved: '1 year frozen' },
      processing: ['Rinse gently before use', 'Remove any stems', 'Freeze in single layer first'],
      nutrition: { 'Vitamin C': 85, 'Fiber': 70, 'Antioxidants': 90, 'Manganese': 65 },
      growsNear: ['raspberry', 'elderberry', 'nettle'],
      optimalConditions: { weather: 'dry', time: 'morning' },
      peakQuality: 'Fully black with slight give, detaches easily'
    },
    { 
      id: 'elderberry', 
      name: 'Elderberry', 
      latin: 'Sambucus nigra', 
      seasonStart: 32, 
      seasonEnd: 40, 
      habitat: ['forest-edge', 'wetland'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific'],
      identification: ['Large shrub 5-12 feet tall', 'Opposite compound leaves with 5-7 leaflets', 'Flat-topped cream-colored flower clusters', 'Dark purple-black berry clusters'],
      harvest: 'Cut entire clusters when berries are deep purple-black. Must be cooked before eating.',
      uses: 'Syrups, wine, immune-boosting preparations. Flowers make elderflower cordial.',
      lookalikes: [{ name: 'Water Hemlock', danger: 'DEADLY - Has different umbrella-shaped flower clusters' }],
      preparation: 'must-cook',
      equipment: ['scissors', 'bucket', 'gloves'],
      storage: { fresh: '1-2 days', preserved: '1 year as syrup' },
      processing: ['Remove berries from stems with fork', 'MUST cook thoroughly - raw berries are toxic', 'Strain through cheesecloth for syrup'],
      nutrition: { 'Vitamin C': 95, 'Antioxidants': 90, 'Flavonoids': 85, 'Vitamin A': 60 },
      growsNear: ['blackberry', 'nettle']
    },
    { 
      id: 'blueberry', 
      name: 'Wild Blueberry', 
      latin: 'Vaccinium angustifolium', 
      seasonStart: 26, 
      seasonEnd: 34, 
      habitat: ['forest', 'heath', 'mountain'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'midwest', 'mountain', 'pacific'],
      identification: ['Low shrub 6-24 inches tall', 'Small oval leaves with fine teeth', 'Blue berries with distinctive crown at end'],
      harvest: 'Pick when fully blue with dusty bloom. Roll berries off stems gently.',
      uses: 'Fresh eating, baking, freezing. Wild berries have highest antioxidant content.',
      lookalikes: [],
      preparation: 'raw-safe',
      equipment: ['basket', 'bucket'],
      storage: { fresh: '2 weeks refrigerated', preserved: '1 year frozen' },
      processing: ['Sort out leaves and debris', 'Don\'t wash until ready to use'],
      nutrition: { 'Antioxidants': 100, 'Vitamin K': 75, 'Vitamin C': 60, 'Fiber': 55 },
      growsNear: ['huckleberry', 'chanterelle']
    },
    { 
      id: 'raspberry', 
      name: 'Wild Raspberry', 
      latin: 'Rubus idaeus', 
      seasonStart: 26, 
      seasonEnd: 36, 
      habitat: ['forest-edge', 'meadow'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'midwest', 'mountain', 'pacific'],
      identification: ['Thorny canes, lighter than blackberry', 'Red berries that pull off core easily', 'White underside to leaves'],
      harvest: 'Pick when fully red and soft. Berries are delicate.',
      uses: 'Fresh eating, preserves, baking. Leaves make pregnancy tea.',
      lookalikes: [],
      preparation: 'raw-safe',
      equipment: ['basket', 'gloves'],
      storage: { fresh: '2-3 days refrigerated', preserved: '1 year frozen' },
      nutrition: { 'Vitamin C': 80, 'Fiber': 70, 'Manganese': 65, 'Antioxidants': 75 },
      growsNear: ['blackberry', 'elderberry']
    }
  ],
  mushrooms: [
    { 
      id: 'chanterelle', 
      name: 'Chanterelle', 
      latin: 'Cantharellus cibarius', 
      seasonStart: 26, 
      seasonEnd: 42, 
      habitat: ['forest'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific'],
      identification: ['Golden yellow-orange color throughout', 'Funnel or trumpet-shaped, 1-5 inches', 'False gills - forked ridges running down stem', 'Distinct apricot or fruity aroma'],
      harvest: 'Cut at base leaving mycelium intact. Brush off debris, never wash in field.',
      uses: 'Sautéed with butter, in soups and sauces. Classic pairing with eggs and cream.',
      lookalikes: [{ name: 'Jack-O-Lantern', danger: 'TOXIC - Grows in clusters on wood, has true gills' }, { name: 'False Chanterelle', danger: 'Mildly toxic - Has true gills, more orange' }],
      preparation: 'must-cook',
      sporePrint: 'Pale yellow',
      equipment: ['knife', 'mesh-bag', 'brush'],
      storage: { fresh: '1 week in paper bag', preserved: 'Dry or freeze after cooking' },
      processing: ['Brush clean, never soak', 'Check for insects in gills', 'Dry sauté first to remove moisture'],
      nutrition: { 'Vitamin D': 90, 'Potassium': 70, 'B Vitamins': 75, 'Copper': 65 },
      growsNear: ['blueberry', 'oak'],
      optimalConditions: { weather: 'after-rain', time: 'any' },
      peakQuality: 'Firm texture, strong apricot aroma'
    },
    { 
      id: 'morel', 
      name: 'Morel', 
      latin: 'Morchella esculenta', 
      seasonStart: 12, 
      seasonEnd: 20, 
      habitat: ['forest', 'disturbed', 'burn-site'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific'],
      identification: ['Distinctive honeycomb cap with pits and ridges', 'Completely hollow from cap through stem', 'Cap attached directly to stem at base'],
      harvest: 'Cut at base. Verify hollow interior. Must be cooked thoroughly.',
      uses: 'Sautéed in butter, stuffed, in cream sauces. Prized delicacy.',
      lookalikes: [{ name: 'False Morel', danger: 'TOXIC/DEADLY - Brain-like wrinkled cap, not completely hollow' }],
      preparation: 'must-cook',
      sporePrint: 'Cream',
      equipment: ['mesh-bag', 'knife', 'field-guide'],
      storage: { fresh: '3-5 days', preserved: 'Dry completely' },
      processing: ['Slice lengthwise to verify hollow', 'Soak briefly in salt water for insects', 'Pat completely dry before cooking'],
      nutrition: { 'Vitamin D': 85, 'Iron': 80, 'Copper': 75, 'B Vitamins': 70 },
      growsNear: ['ramps', 'tulip-poplar'],
      optimalConditions: { weather: 'after-rain', time: 'any' },
      peakQuality: 'Firm, completely hollow, no soft spots'
    },
    { 
      id: 'chicken-of-woods', 
      name: 'Chicken of the Woods', 
      latin: 'Laetiporus sulphureus', 
      seasonStart: 22, 
      seasonEnd: 44, 
      habitat: ['forest'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific'],
      identification: ['Bright orange and yellow shelf-like brackets', 'Grows in overlapping clusters on trees', 'Porous underside (no gills)', 'Soft and moist when young'],
      harvest: 'Harvest only young, tender outer edges. Avoid specimens on conifers.',
      uses: 'Excellent meat substitute. Sauté, bread and fry, or use in stir-fries.',
      lookalikes: [],
      preparation: 'must-cook',
      sporePrint: 'White',
      equipment: ['knife', 'basket'],
      storage: { fresh: '1 week refrigerated', preserved: 'Freeze after cooking' },
      processing: ['Take only tender edges', 'Some people have reactions - try small amount first'],
      nutrition: { 'Protein': 75, 'Potassium': 65, 'B Vitamins': 60 },
      growsNear: ['oak', 'beech']
    }
  ],
  greens: [
    { 
      id: 'ramps', 
      name: 'Ramps', 
      latin: 'Allium tricoccum', 
      seasonStart: 12, 
      seasonEnd: 18, 
      habitat: ['forest'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest'],
      identification: ['Broad, smooth, lily-like leaves', 'Distinctive purple-red stems', 'Strong garlic-onion aroma when crushed'],
      harvest: 'Take only one leaf per plant or 10% of patch. Cut leaves, leave bulbs.',
      uses: 'Pesto, sautéed, pickled, grilled. Celebrated spring delicacy.',
      lookalikes: [{ name: 'Lily of the Valley', danger: 'TOXIC - Similar leaves but NO onion/garlic smell' }],
      preparation: 'raw-safe',
      equipment: ['scissors', 'basket'],
      storage: { fresh: '2 weeks wrapped in damp towel', preserved: 'Pickle or make pesto' },
      processing: ['Wash thoroughly', 'Sustainable harvest: take leaves only'],
      nutrition: { 'Vitamin A': 80, 'Vitamin C': 75, 'Allicin': 85, 'Iron': 50 },
      growsNear: ['morel', 'trillium']
    },
    { 
      id: 'nettle', 
      name: 'Stinging Nettle', 
      latin: 'Urtica dioica', 
      seasonStart: 10, 
      seasonEnd: 22, 
      habitat: ['forest-edge', 'wetland', 'disturbed'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific', 'mountain'],
      identification: ['Opposite, coarsely toothed leaves', 'Square stems covered with stinging hairs', 'Stings bare skin on contact'],
      harvest: 'WEAR GLOVES at all times. Harvest top 4-6 leaves before plant flowers.',
      uses: 'Soups, pesto, tea, steamed greens. Highly nutritious.',
      lookalikes: [],
      preparation: 'must-cook',
      equipment: ['gloves', 'scissors', 'basket'],
      storage: { fresh: '3-5 days in bag', preserved: 'Blanch and freeze' },
      processing: ['ALWAYS wear gloves until cooked', 'Blanching for 1-2 minutes neutralizes sting'],
      nutrition: { 'Iron': 95, 'Calcium': 85, 'Protein': 80, 'Vitamin K': 75 },
      growsNear: ['elderberry', 'raspberry']
    },
    { 
      id: 'dandelion', 
      name: 'Dandelion', 
      latin: 'Taraxacum officinale', 
      seasonStart: 8, 
      seasonEnd: 44, 
      habitat: ['lawn', 'meadow', 'roadside'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest', 'mountain', 'pacific'],
      identification: ['Rosette of toothed leaves', 'Yellow composite flowers', 'White milky sap in stems'],
      harvest: 'Young leaves in spring are least bitter. Avoid chemically treated lawns.',
      uses: 'Salads, sautéed greens, wine, tea. Roots make coffee substitute.',
      lookalikes: [],
      preparation: 'raw-safe',
      equipment: ['knife', 'basket'],
      storage: { fresh: '1 week refrigerated', preserved: 'Blanch and freeze' },
      nutrition: { 'Vitamin K': 95, 'Vitamin A': 90, 'Calcium': 70, 'Iron': 65 }
    },
    { 
      id: 'chickweed', 
      name: 'Chickweed', 
      latin: 'Stellaria media', 
      seasonStart: 8, 
      seasonEnd: 44, 
      habitat: ['garden', 'lawn', 'disturbed'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific', 'mountain'],
      identification: ['Delicate trailing plant with small leaves', 'Single line of hairs on stem', 'Tiny white star-shaped flowers', 'Mild, fresh flavor when tasted'],
      harvest: 'Snip top 2-3 inches of stems. Grows year-round in mild climates.',
      uses: 'Fresh in salads, pesto, smoothies. Mild cucumber-like flavor. Medicinal for skin issues.',
      lookalikes: [],
      preparation: 'raw-safe',
      optimalConditions: { weather: 'any', time: 'any' },
      equipment: ['scissors', 'basket'],
      storage: { fresh: '3-5 days in bag', preserved: 'Best used fresh' },
      processing: ['Rinse well', 'Remove any yellowed parts', 'Use tender tops only'],
      nutrition: { 'Vitamin C': 75, 'Vitamin A': 65, 'Iron': 60, 'Calcium': 55 },
      peakQuality: 'Young tender growth, bright green',
      growsNear: ['dandelion', 'plantain']
    },
    { 
      id: 'purslane', 
      name: 'Purslane', 
      latin: 'Portulaca oleracea', 
      seasonStart: 24, 
      seasonEnd: 40, 
      habitat: ['garden', 'disturbed', 'roadside'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest', 'southwest', 'pacific'],
      identification: ['Succulent stems and leaves', 'Red-tinged stems', 'Paddle-shaped leaves', 'Grows flat along ground'],
      harvest: 'Pinch off tender stem tips. Regrows quickly after harvest.',
      uses: 'Salads, stir-fries, pickled. Lemony flavor. One of highest plant sources of omega-3.',
      lookalikes: [{ name: 'Spurge', danger: 'Avoid - Has milky sap, purslane has clear sap' }],
      preparation: 'raw-safe',
      optimalConditions: { weather: 'dry', time: 'any' },
      equipment: ['scissors', 'basket'],
      storage: { fresh: '1 week refrigerated', preserved: 'Pickle or freeze' },
      processing: ['Rinse well to remove dirt', 'Use stems and leaves', 'Slightly mucilaginous when cooked'],
      nutrition: { 'Omega-3': 90, 'Vitamin A': 80, 'Vitamin C': 70, 'Magnesium': 65 },
      peakQuality: 'Tender young growth before flowering',
      growsNear: ['amaranth', 'lamb\'s quarters']
    }
  ],
  nuts: [
    { 
      id: 'black-walnut', 
      name: 'Black Walnut', 
      latin: 'Juglans nigra', 
      seasonStart: 38, 
      seasonEnd: 46, 
      habitat: ['forest', 'forest-edge'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'southeast', 'midwest'],
      identification: ['Large tree with dark, deeply furrowed bark', 'Compound leaves with 15-23 leaflets', 'Round green husks that turn black and soft'],
      harvest: 'Collect fallen nuts. Remove husks outdoors, cure nuts for 2-4 weeks.',
      uses: 'Baking, ice cream, candy. Husks make natural dye.',
      lookalikes: [],
      preparation: 'requires-processing',
      equipment: ['gloves', 'bucket', 'old-clothes'],
      storage: { fresh: '1 year in shell cool and dry', preserved: 'Shell and freeze meat' },
      processing: ['WEAR OLD CLOTHES - husks stain permanently', 'Remove husks outdoors', 'Cure in shells 2-4 weeks'],
      nutrition: { 'Omega-3': 90, 'Protein': 75, 'Manganese': 80, 'Magnesium': 65 },
      growsNear: ['hickory', 'oak']
    },
    { 
      id: 'acorn', 
      name: 'Acorn', 
      latin: 'Quercus species', 
      seasonStart: 36, 
      seasonEnd: 46, 
      habitat: ['forest'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific', 'southwest'],
      identification: ['Distinctive cap on nut', 'Varies by oak species', 'White oak acorns are sweetest'],
      harvest: 'Collect from ground. Avoid nuts with holes (insect damage).',
      uses: 'Flour for baking after leaching tannins. Traditional staple food.',
      lookalikes: [],
      preparation: 'requires-processing',
      equipment: ['bucket', 'basket'],
      storage: { fresh: 'Several months dry', preserved: 'Store as flour after processing' },
      processing: ['Shell and grind', 'Leach tannins by soaking in water changes', 'Dry thoroughly before storing'],
      nutrition: { 'Carbohydrates': 85, 'Fiber': 70, 'Manganese': 75, 'Copper': 60 },
      growsNear: ['chanterelle', 'chicken-of-woods']
    },
    { 
      id: 'hickory', 
      name: 'Hickory Nut', 
      latin: 'Carya species', 
      seasonStart: 38, 
      seasonEnd: 46, 
      habitat: ['forest', 'forest-edge'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'southeast', 'midwest'],
      identification: ['Large tree with shaggy or smooth bark depending on species', 'Compound leaves with 5-9 leaflets', 'Nuts have husks that split into 4 sections'],
      harvest: 'Collect from ground when husks split. Shagbark and shellbark are easiest to crack.',
      uses: 'Eating raw, baking, candy. Richer flavor than pecans.',
      lookalikes: [],
      preparation: 'requires-processing',
      optimalConditions: { weather: 'after-frost', time: 'any' },
      equipment: ['bucket', 'nutcracker', 'gloves'],
      storage: { fresh: '1 year in shell', preserved: 'Freeze meats' },
      processing: ['Remove husks when they split', 'Cure 2-3 weeks in dry place', 'Crack shell to extract meat'],
      nutrition: { 'Protein': 80, 'Healthy Fats': 85, 'Thiamine': 75, 'Manganese': 70 },
      peakQuality: 'Fallen naturally, husks fully split',
      growsNear: ['black-walnut', 'oak']
    },
    { 
      id: 'hazelnut', 
      name: 'Hazelnut', 
      latin: 'Corylus americana', 
      seasonStart: 34, 
      seasonEnd: 42, 
      habitat: ['forest-edge', 'thicket'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'midwest', 'pacific', 'mountain'],
      identification: ['Multi-stemmed shrub 8-15 feet', 'Round-toothed leaves', 'Nuts enclosed in leafy bracts', 'Long catkins in spring'],
      harvest: 'Harvest when bracts begin to brown. Beat wildlife to the harvest!',
      uses: 'Eating raw, roasted, in baking. Makes excellent nut butter.',
      lookalikes: [],
      preparation: 'raw-safe',
      optimalConditions: { weather: 'dry', time: 'any' },
      equipment: ['basket', 'bag'],
      storage: { fresh: '6 months in shell', preserved: '1 year frozen' },
      processing: ['Dry in shells for 1-2 weeks', 'Crack shells', 'Toast lightly to enhance flavor'],
      nutrition: { 'Vitamin E': 90, 'Healthy Fats': 80, 'Folate': 70, 'Manganese': 75 },
      peakQuality: 'Bracts turning brown, nuts firm in shell',
      growsNear: ['oak', 'maple']
    }
  ],
  herbs: [
    { 
      id: 'wild-mint', 
      name: 'Wild Mint', 
      latin: 'Mentha arvensis', 
      seasonStart: 20, 
      seasonEnd: 36, 
      habitat: ['wetland', 'stream-bank', 'meadow'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'midwest', 'pacific', 'mountain'],
      identification: ['Square stems (mint family characteristic)', 'Opposite, toothed leaves', 'Strong mint aroma when crushed'],
      harvest: 'Snip stems just before flowering for best flavor. Dries and freezes well.',
      uses: 'Tea, cooking, garnish, jellies, flavoring for desserts and drinks.',
      lookalikes: [],
      preparation: 'raw-safe',
      equipment: ['scissors', 'basket'],
      storage: { fresh: '2 weeks stems in water', preserved: 'Dry or freeze' },
      processing: ['Rinse lightly if needed', 'Hang to dry in bundles'],
      nutrition: { 'Menthol': 90, 'Vitamin A': 60, 'Antioxidants': 55 },
      growsNear: ['watercress', 'nettle']
    },
    { 
      id: 'wild-garlic', 
      name: 'Wild Garlic', 
      latin: 'Allium vineale', 
      seasonStart: 10, 
      seasonEnd: 24, 
      habitat: ['meadow', 'forest-edge'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest'],
      identification: ['Thin, grass-like leaves', 'Hollow stems', 'Strong garlic smell when crushed'],
      harvest: 'Cut leaves and stems. Small bulbs can be used like garlic cloves.',
      uses: 'Seasoning, pesto, compound butter, salads.',
      lookalikes: [{ name: 'Star of Bethlehem', danger: 'TOXIC - Similar appearance but NO garlic smell' }],
      preparation: 'raw-safe',
      equipment: ['scissors', 'basket'],
      storage: { fresh: '1 week refrigerated', preserved: 'Freeze in oil' },
      nutrition: { 'Allicin': 90, 'Vitamin C': 70, 'Manganese': 55 },
      growsNear: ['ramps', 'dandelion']
    },
    { 
      id: 'wood-sorrel', 
      name: 'Wood Sorrel', 
      latin: 'Oxalis species', 
      seasonStart: 12, 
      seasonEnd: 40, 
      habitat: ['forest', 'garden', 'lawn'], 
      difficulty: 'beginner', 
      regions: ['northeast', 'southeast', 'midwest', 'pacific', 'mountain'],
      identification: ['Clover-like leaves with 3 heart-shaped leaflets', 'Leaves fold at night', 'Small yellow or white flowers', 'Lemony taste when chewed'],
      harvest: 'Pick leaves and flowers. Use sparingly due to oxalic acid content.',
      uses: 'Fresh garnish, salads, tea. Tart lemon flavor. Small quantities only.',
      lookalikes: [{ name: 'Clover', danger: 'Not dangerous, but clover has oval leaflets, sorrel has heart-shaped' }],
      preparation: 'raw-safe',
      optimalConditions: { weather: 'any', time: 'any' },
      equipment: ['scissors', 'basket'],
      storage: { fresh: '2-3 days refrigerated', preserved: 'Best used fresh' },
      processing: ['Rinse gently', 'Use in moderation', 'Avoid if prone to kidney stones'],
      nutrition: { 'Vitamin C': 85, 'Oxalic Acid': 70 },
      peakQuality: 'Young tender leaves before flowering',
      growsNear: ['violet', 'chickweed']
    },
    { 
      id: 'yarrow', 
      name: 'Yarrow', 
      latin: 'Achillea millefolium', 
      seasonStart: 24, 
      seasonEnd: 40, 
      habitat: ['meadow', 'roadside', 'disturbed'], 
      difficulty: 'intermediate', 
      regions: ['northeast', 'midwest', 'mountain', 'pacific', 'alaska'],
      identification: ['Feathery fern-like leaves', 'Flat-topped white or pink flower clusters', 'Strong aromatic scent', 'Stems slightly hairy'],
      harvest: 'Cut flowering tops and leaves. Traditionally medicinal, modern use cautious.',
      uses: 'Medicinal tea for colds and fevers. External use for wounds. Culinary use limited.',
      lookalikes: [{ name: 'Poison Hemlock', danger: 'DEADLY - Has smooth stems with purple blotches, fetid smell' }],
      preparation: 'must-cook',
      optimalConditions: { weather: 'dry', time: 'any' },
      equipment: ['pruning-shears', 'basket'],
      storage: { fresh: '1 week refrigerated', preserved: 'Dry for tea' },
      processing: ['Identify carefully - confusion with hemlock is dangerous', 'Dry in bundles away from light', 'Use only for tea, not eaten'],
      nutrition: { 'Flavonoids': 80, 'Tannins': 70 },
      peakQuality: 'Just as flowers open, strong aroma',
      growsNear: ['wild mint', 'plantain']
    }
  ]

};

function getRegionForState(fips) {
  for (const [id, r] of Object.entries(ECOREGIONS)) {
    if (r.states.includes(fips)) return id;
  }
  return 'midwest';
}

function getForageablesForRegion(regionId) {
  const result = {};
  for (const [cat, items] of Object.entries(FORAGEABLES)) {
    result[cat] = items.filter(i => i.regions.includes(regionId));
  }
  return result;
}

function getRandomCountyFact(regionId, countyId) {
  const countyFacts = {
    northeast: [
      "Rich maple syrup tradition",
      "Abundant wild blueberries in summer",
      "Historic apple orchards",
      "Wild ramps in spring forests",
      "Cranberry bogs and wetlands",
      "Wild elderberry abundance",
      "Native beach plum thickets",
      "Forest mushroom diversity",
      "Wild grape vines on trails",
      "Hickory nut harvest areas",
      "Wild strawberry meadows",
      "Coastal bayberry shrubs",
      "Autumn olive hedgerows",
      "Black cherry woodlands",
      "Hawthorn fruit clusters",
      "Wild blackberry patches",
      "Sumac berry stands",
      "Pawpaw tree groves",
      "Native bee balm fields",
      "Wintergreen groundcover"
    ],
    southeast: [
      "Year-round foraging season",
      "Wild muscadine grapes",
      "Abundant pecans in fall",
      "Native persimmon trees",
      "Mayhaw berry swamps",
      "Southern fox grape vines",
      "Cherokee plum groves",
      "Elderberry river corridors",
      "Wild citrus in coastal areas",
      "Scuppernong grape traditions",
      "Passionflower fruit trails",
      "Native blueberry barrens",
      "Southern crabapple stands",
      "Palmetto berry harvests",
      "Red mulberry abundance",
      "Serviceberry hillsides",
      "Wild azalea nectar",
      "Huckleberry thickets",
      "Live oak acorn crops",
      "Southern dewberry vines"
    ],
    midwest: [
      "Prairie wildflowers and herbs",
      "Wild plum thickets",
      "Morel mushroom hotspot",
      "Black walnut groves",
      "Wild asparagus ditches",
      "Gooseberry hedgerows",
      "Juneberry river bottoms",
      "Elderflower meadows",
      "Wild grape arbors",
      "Hazelnut thickets",
      "Chokecherry windbreaks",
      "Native plum woodlands",
      "Buffalo berry stands",
      "Wild strawberry prairies",
      "Nannyberry shrublands",
      "Ground cherry patches",
      "Wild mint creek sides",
      "Sumac lemonade tradition",
      "Cattail marsh harvests",
      "Native pawpaw pockets"
    ],
    southwest: [
      "Desert prickly pear abundance",
      "Mesquite bean harvests",
      "Cholla buds in spring",
      "Wild chiltepin peppers",
      "Agave heart traditions",
      "Saguaro fruit season",
      "Barrel cactus harvests",
      "Desert chia seed fields",
      "Wolfberry desert trails",
      "Yucca fruit abundance",
      "Palo verde bean pods",
      "Desert lavender honey",
      "Ocotillo blossom nectar",
      "Wild oregano hillsides",
      "Jojoba seed gathering",
      "Pinyon pine nut groves",
      "Desert willow pods",
      "Ephedra (Mormon tea) stands",
      "Prickly pear pad cuisine",
      "Ironwood seed harvests"
    ],
    northwest: [
      "Salmon berry trails",
      "Chanterelle mushroom forests",
      "Wild huckleberry patches",
      "Stinging nettle abundance",
      "Coastal blackberry brambles",
      "Oregon grape traditions",
      "Thimbleberry thickets",
      "Wild crabapple groves",
      "Salal berry understory",
      "Serviceberry mountain slopes",
      "Red huckleberry woods",
      "Salmonberry creek corridors",
      "Wild rose hip harvests",
      "Elderberry river valleys",
      "Sitka mountain ash berries",
      "Pacific crabapple shores",
      "Kinnikinnick groundcover",
      "Wild strawberry clearings",
      "Cascara bark traditions",
      "Devil's club medicinal use"
    ],
    rockies: [
      "Alpine wildflower meadows",
      "Wild serviceberry shrubs",
      "Mountain huckleberries",
      "Chokecherry thickets",
      "Aspen mushroom diversity",
      "Wild raspberry mountain trails",
      "Gooseberry canyon growth",
      "Elderberry creek sides",
      "Wild rose hip abundance",
      "Currant bush hillsides",
      "Pine nut harvests",
      "Mountain ash berry stands",
      "Wild plum ravines",
      "Hawthorn fruit clusters",
      "Buffalo berry riparian zones",
      "Wild strawberry alpine zones",
      "Thimbleberry clearings",
      "Kinnikinnick berry carpets",
      "Juniper berry traditions",
      "Wild onion mountain meadows"
    ]
  };
  
  const facts = countyFacts[regionId] || countyFacts.midwest;
  
  // Use county ID to deterministically select a fact (hash the ID)
  const hash = String(countyId).split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  
  return facts[hash % facts.length];
}

function convertTopoJSON(topology, objectName) {
  const obj = topology.objects[objectName];
  const arcs = topology.arcs;
  const transform = topology.transform;
  
  const transformPoint = (p) => transform ? 
    [p[0] * transform.scale[0] + transform.translate[0], 
     p[1] * transform.scale[1] + transform.translate[1]] : p;
  
  const decodeArc = (idx) => {
    const arc = arcs[idx < 0 ? ~idx : idx];
    const coords = [];
    let x = 0, y = 0;
    for (const pt of arc) {
      x += pt[0];
      y += pt[1];
      coords.push(transformPoint([x, y]));
    }
    if (idx < 0) coords.reverse();
    return coords;
  };
  
  const decodeArcs = (indexes) => {
    const coords = [];
    for (const idx of indexes) {
      const arc = decodeArc(idx);
      if (coords.length) coords.pop();
      coords.push(...arc);
    }
    return coords;
  };
  
  const decodeGeom = (g) => {
    if (g.type === 'Polygon') {
      return { type: 'Polygon', coordinates: g.arcs.map(r => decodeArcs(r)) };
    }
    if (g.type === 'MultiPolygon') {
      return { type: 'MultiPolygon', coordinates: g.arcs.map(p => p.map(r => decodeArcs(r))) };
    }
    return g;
  };
  
  return {
    type: 'FeatureCollection',
    features: obj.geometries.map(g => ({
      type: 'Feature',
      id: g.id,
      properties: g.properties || {},
      geometry: decodeGeom(g)
    }))
  };
}

// ============== MAIN APP ==============
function ForagingGuide() {
  const [view, setView] = useState('map');
  const [mapMode, setMapMode] = useState('country'); // 'country' or 'state'
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selected, setSelected] = useState([]);
  const [tab, setTab] = useState('berries');
  const [query, setQuery] = useState('');
  const [transitioning, setTransitioning] = useState(false);
  const [showExportHint, setShowExportHint] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const region = useMemo(() => 
    selectedState ? getRegionForState(selectedState) : null, 
    [selectedState]
  );
  
  const regionData = useMemo(() => 
    region ? ECOREGIONS[region] : null, 
    [region]
  );
  
  const available = useMemo(() => 
    region ? getForageablesForRegion(region) : {}, 
    [region]
  );
  
  const filtered = useMemo(() => {
    const items = available[tab] || [];
    return query ? items.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.latin.toLowerCase().includes(query.toLowerCase())) : items;
  }, [available, tab, query]);

  const toggle = useCallback((item) => {
    setSelected(prev => {
      const exists = prev.some(p => p.id === item.id);
      Audio.play(exists ? 'remove' : 'add');
      return exists ? prev.filter(p => p.id !== item.id) : [...prev, item];
    });
  }, []);

  const handleStateSelect = useCallback((stateId) => {
    Audio.play('zoom');
    setSelectedState(stateId);
    setSelectedCounty(null);
    setTransitioning(true);
    setTimeout(() => {
      setMapMode('state');
      setTransitioning(false);
    }, 350);
  }, []);

  const handleBackToCountry = useCallback(() => {
    Audio.play('navigate');
    setTransitioning(true);
    setTimeout(() => {
      setMapMode('country');
      setSelectedState(null);
      setSelectedCounty(null);
      setTransitioning(false);
    }, 300);
  }, []);

  const handleGoToPlan = useCallback(() => {
    Audio.play('complete');
    setTransitioning(true);
    setTimeout(() => {
      setView('plan');
      setTransitioning(false);
    }, 350);
  }, []);

  const handleBackToMap = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setView('map');
      setTransitioning(false);
    }, 300);
  }, []);

  const handleShowPreview = useCallback(() => {
    if (selected.length === 0) return;
    Audio.play('click');
    setShowPreview(true);
  }, [selected]);

  const handleExport = useCallback(() => {
    if (selected.length === 0) return;
    const stateName = STATE_FIPS[selectedState];
    const countyName = selectedCounty?.name || '';
    const currentWeek = Math.floor((new Date().getMonth() * 30.5 + new Date().getDate()) / 7);
    const html = generateHTML(selected, stateName, countyName, regionData, currentWeek);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `foraging-guide-${stateName.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    Audio.play('complete');
    setShowPreview(false);
    setShowExportHint(true);
    setTimeout(() => setShowExportHint(false), 6000);
  }, [selected, selectedState, selectedCounty, regionData]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Escape to go back
      if (e.key === 'Escape') {
        if (showPreview) {
          setShowPreview(false);
        } else if (view === 'plan') {
          handleBackToMap();
        } else if (mapMode === 'state') {
          handleBackToCountry();
        }
      }
      // Ctrl/Cmd + K for search focus
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[placeholder="Search species..."]');
        if (searchInput) searchInput.focus();
      }
      // Ctrl/Cmd + Enter to show preview
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && view === 'plan' && selected.length > 0) {
        handleShowPreview();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [view, mapMode, showPreview, selected, handleBackToMap, handleBackToCountry, handleShowPreview]);

  return (
    <div style={{ 
      background: 'linear-gradient(180deg, #faf9f7 0%, #f5f4f2 100%)', 
      minHeight: '100vh', 
      fontFamily: 'Georgia, serif', 
      color: '#2a2825',
      position: 'relative'
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gentleSway { 0%, 100% { transform: rotate(-0.8deg); } 50% { transform: rotate(0.8deg); } }
        @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        @keyframes barGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes borderFlow { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -60; } }
        .county-path { animation: borderFlow 6s linear infinite; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(90, 122, 114, 0.2); }
        .map-state { cursor: pointer; transition: opacity 0.15s ease; }
        .county-path { cursor: pointer; transition: all 0.15s ease; }
        .card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(42,40,37,0.06); }
        .habitat-tag { transition: all 0.15s ease; }
        .expand-section { transition: max-height 0.3s ease, opacity 0.2s ease, padding 0.3s ease; overflow: hidden; }
        .sidebar-item { transition: all 0.15s ease; }
        .continue-btn { transition: all 0.2s ease; }
        .continue-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .view-container { transition: opacity 0.35s ease; }
        .map-container { transition: opacity 0.35s ease, transform 0.35s ease; }
      `}</style>

      {showExportHint && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#2a2826',
          color: '#faf9f7',
          padding: '12px 18px',
          borderRadius: 10,
          fontSize: 12,
          fontFamily: '-apple-system, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          zIndex: 100,
          animation: 'slideUp 0.25s ease',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}>
          <Icons.fileText size={16} color="#9ab" />
          <span>Guide saved! Open in any browser.</span>
          <button 
            onClick={() => setShowExportHint(false)}
            style={{ background: 'none', border: 'none', color: '#777', cursor: 'pointer', padding: 4 }}
          >
            <Icons.x size={12} />
          </button>
        </div>
      )}

      <div className="view-container" style={{ opacity: transitioning ? 0 : 1 }}>
        {view === 'map' && (
          <MapView
            mapMode={mapMode}
            selectedState={selectedState}
            selectedCounty={selectedCounty}
            setSelectedCounty={setSelectedCounty}
            onStateSelect={handleStateSelect}
            onBackToCountry={handleBackToCountry}
            onGoToPlan={handleGoToPlan}
            transitioning={transitioning}
          />
        )}

        {view === 'plan' && selectedState && (
          <PlanView
            selectedState={selectedState}
            selectedCounty={selectedCounty}
            regionData={regionData}
            selected={selected}
            toggle={toggle}
            items={filtered}
            tab={tab}
            setTab={setTab}
            query={query}
            setQuery={setQuery}
            onBack={handleBackToMap}
            onShowPreview={handleShowPreview}
          />
        )}

        {showPreview && (
          <PreviewModal
            selected={selected}
            selectedState={selectedState}
            selectedCounty={selectedCounty}
            regionData={regionData}
            onClose={() => setShowPreview(false)}
            onDownload={handleExport}
          />
        )}
      </div>
    </div>
  );
}

// ============== MAP VIEW ==============
function MapView({ mapMode, selectedState, selectedCounty, setSelectedCounty, onStateSelect, onBackToCountry, onGoToPlan, transitioning }) {
  const svgRef = useRef();
  const containerRef = useRef();
  const countyGroupRef = useRef(null); // Store D3 selection to avoid re-renders
  const [usData, setUsData] = useState(null);
  const [countyData, setCountyData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const width = 620;
  const height = 440;

  const regionData = selectedState ? ECOREGIONS[getRegionForState(selectedState)] : null;

  // Load US data
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
      .then(res => res.json())
      .then(topology => {
        setUsData(convertTopoJSON(topology, 'states'));
        setTimeout(() => setLoaded(true), 100);
      });
  }, []);

  // Load county data when state selected
  useEffect(() => {
    if (!selectedState) {
      setCountyData(null);
      return;
    }
    fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json')
      .then(res => res.json())
      .then(topology => {
        const counties = convertTopoJSON(topology, 'counties');
        setCountyData({ 
          type: 'FeatureCollection', 
          features: counties.features.filter(f => String(f.id).padStart(5, '0').startsWith(selectedState)) 
        });
      });
  }, [selectedState]);

  // Render country map
  useEffect(() => {
    if (!svgRef.current || !usData || mapMode !== 'country') return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    
    const projection = d3.geoAlbersUsa().scale(800).translate([width / 2, height / 2]);
    const path = d3.geoPath().projection(projection);
    
    const g = svg.append('g');

    g.selectAll('.state')
      .data(usData.features)
      .enter()
      .append('path')
      .attr('class', 'map-state')
      .attr('d', path)
      .attr('fill', d => {
        const region = ECOREGIONS[getRegionForState(d.id)];
        return region?.color || '#888';
      })
      .attr('stroke', '#faf9f7')
      .attr('stroke-width', 0.8)
      .attr('opacity', 0)
      .on('mouseenter', function(e, d) {
        d3.select(this).attr('opacity', 1).attr('stroke', '#fff').attr('stroke-width', 1.2);
        Audio.play('hover');
        setHovered({ 
          id: d.id, 
          name: STATE_FIPS[d.id], 
          region: ECOREGIONS[getRegionForState(d.id)],
          fact: STATE_FACTS[d.id],
          type: 'state'
        });
      })
      .on('mouseleave', function(e, d) {
        d3.select(this).attr('opacity', 0.92).attr('stroke', '#faf9f7').attr('stroke-width', 0.8);
        setHovered(null);
      })
      .on('click', function(e, d) {
        onStateSelect(d.id);
      })
      .transition()
      .duration(400)
      .delay((d, i) => i * 8)
      .attr('opacity', 0.92);

  }, [usData, mapMode, onStateSelect]);

  // Render state/county map - only when state or county data changes, NOT on county selection
  useEffect(() => {
    if (!svgRef.current || !countyData || mapMode !== 'state' || !selectedState) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    
    // Calculate bounds for the selected state's counties
    const allCoords = [];
    countyData.features.forEach(f => {
      if (f.geometry.type === 'Polygon') {
        f.geometry.coordinates[0].forEach(c => allCoords.push(c));
      } else if (f.geometry.type === 'MultiPolygon') {
        f.geometry.coordinates.forEach(poly => poly[0].forEach(c => allCoords.push(c)));
      }
    });
    
    const lons = allCoords.map(c => c[0]);
    const lats = allCoords.map(c => c[1]);
    const minLon = Math.min(...lons), maxLon = Math.max(...lons);
    const minLat = Math.min(...lats), maxLat = Math.max(...lats);
    const centerLon = (minLon + maxLon) / 2;
    const centerLat = (minLat + maxLat) / 2;
    
    // Create projection centered on state
    const padding = 40;
    const projection = d3.geoMercator()
      .center([centerLon, centerLat])
      .fitExtent([[padding, padding], [width - padding, height - padding]], countyData);
    const path = d3.geoPath().projection(projection);
    
    const g = svg.append('g');
    countyGroupRef.current = g; // Store reference for selection updates

    // Draw county borders with flowing dash animation
    g.selectAll('.county')
      .data(countyData.features)
      .enter()
      .append('path')
      .attr('class', 'county-path')
      .attr('d', path)
      .attr('fill', 'transparent')
      .attr('fill-opacity', 0)
      .attr('stroke', regionData?.color)
      .attr('stroke-width', 0.6)
      .attr('stroke-opacity', 0)
      .attr('stroke-dasharray', '6 3') // Visible dash pattern
      .style('animation-delay', (d, i) => `${(i % 10) * 0.3}s`) // Staggered start
      .on('mouseenter', function(e, d) {
        const isSelected = d.id === countyGroupRef.current?.selectedId;
        if (!isSelected) {
          d3.select(this)
            .attr('fill', regionData?.color)
            .attr('fill-opacity', 0.12)
            .attr('stroke-opacity', 0.85)
            .attr('stroke-width', 0.8)
            .attr('stroke-dasharray', 'none');
        }
        Audio.play('hover');
        setHovered({
          id: d.id,
          name: d.properties?.name || 'County',
          fact: getRandomCountyFact(getRegionForState(selectedState), d.id),
          type: 'county'
        });
      })
      .on('mouseleave', function(e, d) {
        const isSelected = d.id === countyGroupRef.current?.selectedId;
        if (!isSelected) {
          d3.select(this)
            .attr('fill', 'transparent')
            .attr('fill-opacity', 0)
            .attr('stroke-opacity', 0.5)
            .attr('stroke-width', 0.6)
            .attr('stroke-dasharray', '6 3');
        }
        setHovered(null);
      })
      .on('click', function(e, d) {
        Audio.play('select');
        const newSelected = { id: d.id, name: d.properties?.name || 'County' };
        setSelectedCounty(newSelected);
        countyGroupRef.current.selectedId = d.id; // Track selection without re-render
        
        // Update all counties' appearance directly
        g.selectAll('.county-path')
          .attr('fill', dd => dd.id === d.id ? regionData?.color : 'transparent')
          .attr('fill-opacity', dd => dd.id === d.id ? 0.2 : 0)
          .attr('stroke', dd => dd.id === d.id ? regionData?.darkColor : regionData?.color)
          .attr('stroke-width', dd => dd.id === d.id ? 1.5 : 0.6)
          .attr('stroke-opacity', dd => dd.id === d.id ? 1 : 0.5)
          .attr('stroke-dasharray', dd => dd.id === d.id ? 'none' : '6 3');
      })
      .transition()
      .duration(300)
      .delay((d, i) => i * 5)
      .attr('stroke-opacity', 0.5);
    
    // Draw state outline with flowing dash animation
    const stateOutline = g.append('path')
      .datum(countyData)
      .attr('class', 'state-outline')
      .attr('d', d => {
        // Merge all counties to get state outline
        const merged = countyData.features.reduce((acc, f) => {
          if (!acc) return f;
          return acc;
        }, null);
        return path(merged);
      })
      .attr('fill', 'none')
      .attr('stroke', regionData?.darkColor)
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0)
      .attr('stroke-dasharray', '10 5')
      .style('animation', 'borderFlow 10s linear infinite')
      .attr('pointer-events', 'none');
    
    stateOutline.transition()
      .duration(600)
      .delay(200)
      .attr('stroke-opacity', 0.35);

  }, [countyData, mapMode, selectedState, regionData, setSelectedCounty]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px 24px',
      position: 'relative'
    }}>
      {mapMode === 'state' && (
        <button 
          onClick={onBackToCountry}
          style={{ 
            position: 'absolute', 
            top: 24, 
            left: 24, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 5, 
            fontSize: 12, 
            fontFamily: '-apple-system, sans-serif', 
            color: '#8a8882', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            animation: 'fadeIn 0.3s ease',
            zIndex: 10
          }}
        >
          <Icons.arrowLeft size={13} /> All States
        </button>
      )}

      {mapMode === 'country' && (
        <>
          <div style={{ 
            opacity: loaded ? 0.5 : 0, 
            transition: 'opacity 0.8s ease',
            marginBottom: 16
          }}>
            <ForestIllustration />
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginBottom: 28,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease'
          }}>
            <h1 style={{ fontSize: 34, fontWeight: 300, marginBottom: 6 }}>
              Wild Foraging Guide
            </h1>
            <p style={{ color: '#8a8880', fontSize: 13 }}>
              Discover seasonal edibles in your region
            </p>
          </div>
        </>
      )}

      {mapMode === 'state' && selectedState && (
        <div style={{
          textAlign: 'center',
          marginBottom: 16,
          animation: 'fadeUp 0.35s ease'
        }}>
          <h2 style={{ fontSize: 26, fontWeight: 300, marginBottom: 6, color: '#2a2825', letterSpacing: '-0.01em' }}>
            {STATE_FIPS[selectedState]}
          </h2>
          <span style={{ 
            fontSize: 10, 
            fontFamily: '-apple-system, sans-serif', 
            fontWeight: 500,
            color: regionData?.darkColor,
            padding: '4px 12px',
            background: regionData?.lightColor,
            borderRadius: 12,
            letterSpacing: '0.02em'
          }}>
            {regionData?.name}
          </span>
          <p style={{ fontSize: 11, color: '#a0a098', marginTop: 12, fontFamily: '-apple-system, sans-serif' }}>
            {!countyData ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ 
                  display: 'inline-block', 
                  width: 8, 
                  height: 8, 
                  border: '2px solid ' + regionData?.color, 
                  borderTopColor: 'transparent', 
                  borderRadius: '50%', 
                  animation: 'spin 0.6s linear infinite' 
                }} />
                Loading counties...
              </span>
            ) : 'Select your county'}
          </p>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="map-container"
        style={{ 
          position: 'relative',
          opacity: (loaded && !transitioning) ? 1 : 0,
          transform: transitioning ? 'scale(0.98)' : 'scale(1)',
          transition: 'opacity 0.35s ease, transform 0.35s ease'
        }}
      >
        {mapMode === 'country' && (
          <label style={{ 
            display: 'block', 
            fontSize: 9, 
            fontFamily: '-apple-system, sans-serif', 
            fontWeight: 600, 
            letterSpacing: '0.12em', 
            textTransform: 'uppercase', 
            color: '#b0b0a8', 
            marginBottom: 10, 
            textAlign: 'center' 
          }}>
            Select Your State
          </label>
        )}
        
        <svg 
          ref={svgRef} 
          width={width} 
          height={height} 
          style={{ display: 'block', overflow: 'hidden' }} 
        />
        
        {/* Tooltip */}
        {hovered && (
          <div style={{
            position: 'absolute',
            left: Math.min(mousePos.x + 14, width - 220),
            top: mousePos.y - 8,
            background: 'rgba(42, 40, 37, 0.96)',
            backdropFilter: 'blur(10px)',
            color: '#faf9f7',
            padding: '12px 14px',
            borderRadius: 10,
            fontSize: 11,
            fontFamily: '-apple-system, sans-serif',
            pointerEvents: 'none',
            maxWidth: 220,
            zIndex: 10,
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ fontWeight: 600, marginBottom: hovered.type === 'county' ? 6 : 4, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
              {hovered.type === 'state' && hovered.region && (
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: hovered.region?.color, boxShadow: `0 0 8px ${hovered.region?.color}` }} />
              )}
              {hovered.type === 'county' && regionData && (
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: regionData.color, boxShadow: `0 0 8px ${regionData.color}` }} />
              )}
              {hovered.name}
              {hovered.type === 'county' && <span style={{ fontWeight: 400, opacity: 0.5, fontSize: 9 }}>County</span>}
            </div>
            {hovered.type === 'state' && hovered.region && (
              <div style={{ fontSize: 9, color: hovered.region.lightColor, marginBottom: 6, opacity: 0.9, letterSpacing: '0.02em' }}>
                {hovered.region.name}
              </div>
            )}
            {hovered.type === 'county' && regionData && (
              <div style={{ fontSize: 9, color: regionData.lightColor, marginBottom: 6, opacity: 0.9, letterSpacing: '0.02em' }}>
                {regionData.name} • {STATE_FIPS[selectedState]}
              </div>
            )}
            {hovered.fact && (
              <div style={{ 
                fontSize: 10, 
                opacity: 0.8, 
                lineHeight: 1.5, 
                fontStyle: 'italic',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: 6,
                marginTop: 2
              }}>
                "{hovered.fact}"
              </div>
            )}
          </div>
        )}

        {mapMode === 'country' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 16px', marginTop: 16, maxWidth: 500 }}>
            {Object.entries(ECOREGIONS).slice(0, 6).map(([id, r]) => (
              <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, fontFamily: '-apple-system, sans-serif', color: '#8a8a82' }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: r.color }} />
                {r.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCounty && mapMode === 'state' && (
        <div style={{ marginTop: 22, textAlign: 'center', animation: 'fadeUp 0.25s ease' }}>
          <div style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 15, fontWeight: 400, color: '#2a2825' }}>
              {selectedCounty.name}
            </span>
          </div>
          <button
            className="continue-btn"
            onClick={onGoToPlan}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 26px',
              fontSize: 12,
              fontFamily: '-apple-system, sans-serif',
              fontWeight: 500,
              color: '#fff',
              background: regionData?.color,
              border: 'none',
              borderRadius: 24,
              cursor: 'pointer',
              letterSpacing: '0.01em'
            }}
          >
            Explore Forageables <Icons.arrowRight size={13} color="#fff" />
          </button>
        </div>
      )}

      {mapMode === 'country' && (
        <div style={{ 
          maxWidth: 380, 
          padding: '10px 14px', 
          background: '#f0eeec', 
          borderRadius: 8, 
          marginTop: 26,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease 0.3s'
        }}>
          <p style={{ 
            fontSize: 10, 
            fontFamily: '-apple-system, sans-serif', 
            color: '#6a5848', 
            lineHeight: 1.5, 
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6
          }}>
            <Icons.alertTriangle size={11} color="#7a5840" />
            <span><strong style={{ color: '#5a4838' }}>Safety:</strong> Never consume anything you cannot identify with 100% certainty.</span>
          </p>
        </div>
      )}
    </div>
  );
}

// ============== PLAN VIEW ==============
function PlanView({ selectedState, selectedCounty, regionData, selected, toggle, items, tab, setTab, query, setQuery, onBack, onShowPreview }) {
  const stateName = STATE_FIPS[selectedState];
  const regionId = getRegionForState(selectedState);
  const locationStats = LOCATION_STATS[regionId];
  const currentWeek = Math.floor((new Date().getMonth() * 30.5 + new Date().getDate()) / 7);
  const stateFact = STATE_FACTS[selectedState];

  const filteredItems = useMemo(() => {
    if (!query) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) || 
      item.latin.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ 
        width: 330, 
        background: '#f0efed', 
        display: 'flex', 
        flexDirection: 'column',
        borderRight: '1px solid #e4e2de'
      }}>
        <div style={{ 
          padding: '12px 14px', 
          borderBottom: '1px solid #e4e2de',
          background: regionData.lightColor
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>
              {stateName}
            </div>
            {selected.length > 0 && (
              <div style={{ 
                fontSize: 9, 
                fontWeight: 600, 
                letterSpacing: '0.05em',
                color: regionData.darkColor,
                background: 'rgba(255,255,255,0.5)',
                padding: '3px 8px',
                borderRadius: 10,
                animation: 'pulse 2s ease infinite'
              }}>
                {selected.length} SELECTED
              </div>
            )}
          </div>
          <div style={{ fontSize: 9, color: regionData.darkColor, marginBottom: 8 }}>
            {regionData.name}
          </div>
          {stateFact && (
            <div style={{ 
              fontSize: 9, 
              fontStyle: 'italic', 
              color: '#6a6862', 
              padding: '6px 8px', 
              background: 'rgba(255,255,255,0.5)', 
              borderRadius: 5,
              marginBottom: 8,
              lineHeight: 1.4
            }}>
              "{stateFact}"
            </div>
          )}
          <div style={{ 
            display: 'flex', 
            gap: 12, 
            fontSize: 9, 
            color: '#7a7a72',
            flexWrap: 'wrap'
          }}>
            <span title="Typical species count"><strong style={{ color: '#5a5a52' }}>{locationStats?.avgSpecies}</strong> species</span>
            <span title="Peak foraging season">Peak: <strong style={{ color: '#5a5a52' }}>{locationStats?.peakMonth}</strong></span>
          </div>
        </div>

        <div style={{ padding: '10px 14px' }}>
          <input 
            type="text" 
            placeholder="Search species..." 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            style={{ 
              width: '100%', 
              height: 38, 
              padding: '0 14px', 
              fontSize: 12, 
              background: '#faf9f7', 
              border: '1px solid #e4e2de', 
              borderRadius: 20, 
              outline: 'none', 
              fontFamily: 'inherit'
            }}
          />
          {filteredItems.some(item => currentWeek >= item.seasonStart && currentWeek <= item.seasonEnd) && (
            <button
              onClick={() => {
                filteredItems.forEach(item => {
                  if (currentWeek >= item.seasonStart && currentWeek <= item.seasonEnd && !selected.some(p => p.id === item.id)) {
                    toggle(item);
                  }
                });
                Audio.play('complete');
              }}
              style={{
                width: '100%',
                marginTop: 8,
                padding: '8px 12px',
                fontSize: 10,
                fontWeight: 500,
                color: regionData.darkColor,
                background: 'rgba(255,255,255,0.7)',
                border: `1px solid ${regionData.color}`,
                borderRadius: 6,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                e.target.style.background = regionData.lightColor;
                Audio.play('hover');
              }}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.7)'}
            >
              <Icons.leaf size={11} color={regionData.darkColor} />
              Add All In Season
            </button>
          )}
        </div>

        <div style={{ display: 'flex', borderBottom: '1px solid #e4e2de' }}>
          {['berries', 'mushrooms', 'greens', 'nuts', 'herbs'].map(t => (
            <button 
              key={t} 
              onClick={() => { setTab(t); Audio.play('click'); }}
              style={{
                flex: 1, 
                padding: '9px 4px', 
                fontSize: 9, 
                fontWeight: 600, 
                letterSpacing: '0.04em', 
                textTransform: 'uppercase', 
                background: 'transparent',
                color: tab === t ? regionData.darkColor : '#a0a098', 
                border: 'none',
                borderBottom: tab === t ? `2px solid ${regionData.color}` : '2px solid transparent', 
                cursor: 'pointer'
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 8 }}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: 24, textAlign: 'center', color: '#a0a098', fontSize: 11, fontStyle: 'italic' }}>
              No {tab} match your search
            </div>
          ) : filteredItems.map((item) => {
            const active = selected.some(p => p.id === item.id);
            const inSeason = currentWeek >= item.seasonStart && currentWeek <= item.seasonEnd;
            const prep = PREP_TYPES[item.preparation];
            
            return (
              <div 
                key={item.id} 
                onClick={() => toggle(item)} 
                style={{
                  padding: '11px 12px', 
                  marginBottom: 3, 
                  background: active ? '#faf9f7' : 'transparent',
                  borderRadius: 6, 
                  cursor: 'pointer',
                  border: active ? `1px solid ${regionData.color}20` : '1px solid transparent'
                }}
              >
                <div style={{ display: 'flex', gap: 10 }}>
                  <div style={{
                    width: 18, 
                    height: 18, 
                    borderRadius: 9, 
                    border: active ? 'none' : '1.5px solid #c8c8c0',
                    background: active ? regionData.color : 'transparent',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexShrink: 0, 
                    marginTop: 1
                  }}>
                    {active && <Icons.check size={9} color="#fff" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6 }}>
                      <span style={{ fontSize: 12, fontWeight: 450, color: active ? '#2a2825' : '#4a4a44' }}>
                        {item.name}
                      </span>
                      <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                        {inSeason && (
                          <span style={{ fontSize: 8, fontWeight: 700, color: '#5a7262', background: '#eef4f0', padding: '2px 6px', borderRadius: 8 }}>
                            NOW
                          </span>
                        )}
                        <span style={{ fontSize: 8, fontWeight: 600, color: prep.color, background: prep.bgColor, padding: '2px 6px', borderRadius: 8 }}>
                          {prep.label}
                        </span>
                      </div>
                    </div>
                    <div style={{ fontSize: 10, color: '#a0a098', fontStyle: 'italic', marginTop: 2 }}>
                      {item.latin}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#faf9f7' }}>
        <header style={{ 
          padding: '10px 18px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          borderBottom: '1px solid #eae8e4',
          background: '#fff'
        }}>
          <button 
            onClick={onBack} 
            style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#8a8880', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Icons.arrowLeft size={11} /> Change Location
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {selected.length > 0 && (
              <button
                onClick={() => {
                  // Remove all selected items by toggling each
                  selected.forEach(item => toggle(item));
                  Audio.play('remove');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 12px',
                  fontSize: 10,
                  fontWeight: 500,
                  color: '#a88880',
                  background: 'transparent',
                  border: '1px solid #e4d8d0',
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={e => {
                  e.target.style.background = '#faf5f2';
                  e.target.style.borderColor = '#d0c0b8';
                  Audio.play('hover');
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = '#e4d8d0';
                }}
              >
                <Icons.x size={10} />
                Clear All
              </button>
            )}
            <button
              onClick={onShowPreview}
              disabled={selected.length === 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 12px',
                fontSize: 10,
                fontWeight: 500,
                color: selected.length ? regionData.color : '#b8b8b0',
                background: selected.length ? regionData.lightColor : '#f5f5f2',
                border: 'none',
                borderRadius: 8,
                cursor: selected.length ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease'
              }}
            >
              <Icons.download size={11} /> Export Guide
            </button>
            <div style={{ padding: '6px 12px', fontSize: 10, fontWeight: 600, background: regionData.color, color: '#fff', borderRadius: 12 }}>
              {selected.length} selected
            </div>
          </div>
        </header>

        <div style={{ flex: 1, overflow: 'auto', padding: 18 }}>
          {selected.length === 0 ? (
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: 15, fontStyle: 'italic', color: '#6a6a62', marginBottom: 5 }}>Start building your guide</p>
              <p style={{ fontSize: 11, color: '#a8a8a0' }}>Select items from the sidebar</p>
            </div>
          ) : (
            <div>
              <SeasonTimeline items={selected} currentWeek={currentWeek} regionData={regionData} />
              <div style={{ marginTop: 20 }}>
                <h2 style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a0a098', marginBottom: 12 }}>
                  Field Guide
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))', gap: 14 }}>
                  {selected.map((item, i) => (
                    <ForageableCard 
                      key={item.id} 
                      item={item} 
                      onRemove={() => toggle(item)} 
                      regionData={regionData}
                      currentWeek={currentWeek}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function EmptyState() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <ForestIllustration style={{ opacity: 0.15, marginBottom: 20 }} />
      <p style={{ fontSize: 15, fontStyle: 'italic', color: '#6a6a62', marginBottom: 5 }}>Start building your guide</p>
      <p style={{ fontSize: 11, color: '#a8a8a0' }}>Select items from the sidebar</p>
    </div>
  );
}

// ============== FORAGEABLE CARD ==============
function SeasonTimeline({ items, currentWeek, regionData }) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current || !items.length) return;
    const container = ref.current;
    container.innerHTML = '';
    
    const margin = { top: 54, right: 14, bottom: 18, left: 105 };
    const width = Math.max(container.clientWidth - margin.left - margin.right, 300);
    const rowHeight = 30;
    const height = items.length * rowHeight + margin.top + margin.bottom;

    const svg = d3.select(container).append('svg')
      .attr('width', '100%')
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height}`);
    
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'barGradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '0%').attr('y2', '100%');
    gradient.append('stop').attr('offset', '0%').attr('stop-color', regionData.color).attr('stop-opacity', 0.85);
    gradient.append('stop').attr('offset', '100%').attr('stop-color', regionData.darkColor).attr('stop-opacity', 0.75);
    
    const gradientFaded = defs.append('linearGradient')
      .attr('id', 'barGradientFaded')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '0%').attr('y2', '100%');
    gradientFaded.append('stop').attr('offset', '0%').attr('stop-color', regionData.color).attr('stop-opacity', 0.18);
    gradientFaded.append('stop').attr('offset', '100%').attr('stop-color', regionData.darkColor).attr('stop-opacity', 0.12);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
    const x = d3.scaleLinear().domain([0, 52]).range([0, width]);

    const seasons = [
      { name: 'Winter', start: 0, end: 9, color: '#f0f2f4' },
      { name: 'Spring', start: 9, end: 22, color: '#f2f5f0' },
      { name: 'Summer', start: 22, end: 35, color: '#f6f5f0' },
      { name: 'Fall', start: 35, end: 48, color: '#f5f2f0' },
      { name: 'Winter', start: 48, end: 52, color: '#f0f2f4' }
    ];

    seasons.forEach(s => {
      g.append('rect')
        .attr('x', x(s.start)).attr('y', -26)
        .attr('width', x(s.end) - x(s.start))
        .attr('height', items.length * rowHeight + 26)
        .attr('fill', s.color).attr('opacity', 0.6);
    });

    const seasonLabels = [
      { name: 'Winter', pos: 4.5 },
      { name: 'Spring', pos: 15.5 },
      { name: 'Summer', pos: 28.5 },
      { name: 'Fall', pos: 41.5 }
    ];
    seasonLabels.forEach(s => {
      g.append('text')
        .attr('x', x(s.pos)).attr('y', -36)
        .attr('text-anchor', 'middle')
        .attr('font-size', '8px')
        .attr('font-weight', '600').attr('letter-spacing', '0.05em')
        .attr('fill', '#b0b0a8').text(s.name.toUpperCase());
    });

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    months.forEach((m, i) => {
      const week = i * (52/12);
      g.append('line')
        .attr('x1', x(week)).attr('y1', -26)
        .attr('x2', x(week)).attr('y2', items.length * rowHeight)
        .attr('stroke', '#e4e0dc').attr('stroke-width', i === 0 ? 0 : 0.5).attr('opacity', 0.7);
      g.append('text')
        .attr('x', x(week + 2.2)).attr('y', -15)
        .attr('font-size', '8px')
        .attr('font-weight', '500').attr('fill', '#9a9a92').text(m);
    });

    items.forEach((_, i) => {
      if (i > 0) {
        g.append('line')
          .attr('x1', 0).attr('y1', i * rowHeight)
          .attr('x2', width).attr('y2', i * rowHeight)
          .attr('stroke', '#eae8e4').attr('stroke-width', 0.5).attr('opacity', 0.6);
      }
    });

    g.append('line')
      .attr('x1', x(currentWeek)).attr('y1', -26)
      .attr('x2', x(currentWeek)).attr('y2', items.length * rowHeight)
      .attr('stroke', regionData.darkColor).attr('stroke-width', 1.5).attr('opacity', 0.7);
    
    const nowBadgeWidth = 36;
    g.append('rect')
      .attr('x', x(currentWeek) - nowBadgeWidth/2).attr('y', -26 - 13)
      .attr('width', nowBadgeWidth).attr('height', 14).attr('rx', 7)
      .attr('fill', regionData.darkColor);
    
    g.append('text')
      .attr('x', x(currentWeek)).attr('y', -26 - 3)
      .attr('font-size', '7px')
      .attr('font-weight', '700').attr('fill', '#fff')
      .attr('text-anchor', 'middle').attr('letter-spacing', '0.04em').text('TODAY');

    items.forEach((item, i) => {
      const y = i * rowHeight + rowHeight / 2;
      const inSeason = currentWeek >= item.seasonStart && currentWeek <= item.seasonEnd;
      
      g.append('text')
        .attr('x', -10).attr('y', y + 3).attr('text-anchor', 'end')
        .attr('font-size', '11px')
        .attr('fill', inSeason ? '#2a2825' : '#a0a098')
        .attr('font-weight', inSeason ? '500' : '400').text(item.name);

      if (inSeason) {
        g.append('circle').attr('cx', -5).attr('cy', y).attr('r', 2.5).attr('fill', regionData.color);
      }

      g.append('rect')
        .attr('x', x(item.seasonStart)).attr('y', y - 7)
        .attr('width', Math.max(x(item.seasonEnd) - x(item.seasonStart), 6))
        .attr('height', 14).attr('rx', 7)
        .attr('fill', inSeason ? 'url(#barGradient)' : 'url(#barGradientFaded)');

      if (inSeason) {
        g.append('circle')
          .attr('cx', x(currentWeek)).attr('cy', y).attr('r', 4)
          .attr('fill', '#fff').attr('stroke', regionData.darkColor).attr('stroke-width', 1.5);
      }

      const startMonth = Math.floor(item.seasonStart / (52/12));
      const endMonth = Math.floor(item.seasonEnd / (52/12));
      g.append('text')
        .attr('x', x(item.seasonEnd) + 6).attr('y', y + 3)
        .attr('font-size', '8px')
        .attr('fill', '#b8b8b0')
        .text(`${months[startMonth]}–${months[Math.min(endMonth, 11)]}`);
    });

  }, [items, currentWeek, regionData]);

  return (
    <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #eae8e4', overflow: 'hidden', marginBottom: 20 }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f2f0ec', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a8880', margin: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icons.leaf size={11} color="#a09068" />
          Seasonal Availability
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 8, color: '#a8a8a0' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 18, height: 7, borderRadius: 4, background: `linear-gradient(to bottom, ${regionData.color}, ${regionData.darkColor})`, opacity: 0.8 }} />
            In season
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 18, height: 7, borderRadius: 4, background: `linear-gradient(to bottom, ${regionData.color}, ${regionData.darkColor})`, opacity: 0.18 }} />
            Off season
          </span>
        </div>
      </div>
      <div ref={ref} style={{ padding: '6px 0 12px' }} />
    </div>
  );
}

function ForageableCard({ item, onRemove, regionData, currentWeek }) {
  const [expanded, setExpanded] = useState(null);
  const prep = PREP_TYPES[item.preparation];
  const inSeason = currentWeek >= item.seasonStart && currentWeek <= item.seasonEnd;

  return (
    <div className="card" style={{ 
      background: '#fff', 
      borderRadius: 10, 
      overflow: 'hidden', 
      border: '1px solid #eae8e4'
    }}>
      <div style={{ padding: '12px 14px', borderBottom: '1px solid #f2f0ec' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
              <h3 style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</h3>
              {inSeason && <span style={{ width: 5, height: 5, borderRadius: '50%', background: regionData.color }} />}
            </div>
            <p style={{ fontSize: 10, color: '#a0a098', fontStyle: 'italic' }}>{item.latin}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 8, fontWeight: 600, color: prep.color, background: prep.bgColor, padding: '3px 7px', borderRadius: 6 }}>
              {prep.label}
            </span>
            <button onClick={onRemove} style={{ background: 'none', border: 'none', color: '#c8c8c0', cursor: 'pointer', padding: 2 }}>
              <Icons.x size={13} />
            </button>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: 14, marginTop: 8, fontSize: 9 }}>
          <div>
            <span style={{ color: '#a8a8a0', display: 'block', fontSize: 8, marginBottom: 2 }}>Difficulty</span>
            <span style={{ color: '#5a7262', fontWeight: 500, textTransform: 'capitalize' }}>
              {item.difficulty}
            </span>
          </div>
          {item.sporePrint && (
            <div>
              <span style={{ color: '#a8a8a0', display: 'block', fontSize: 8, marginBottom: 2 }}>Spore Print</span>
              <span style={{ color: '#5a5a54' }}>{item.sporePrint}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: '10px 14px', background: '#fcfbfa', borderBottom: '1px solid #f2f0ec' }}>
        <div style={{ fontSize: 8, fontWeight: 600, textTransform: 'uppercase', color: '#a0a098', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
          <Icons.mapPin size={9} /> Where to Look
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {item.habitat.map(h => {
            const info = HABITAT_ICONS[h] || { icon: 'mapPin', label: h, color: '#6a6a62', bgColor: '#f2f2f0' };
            const Icon = Icons[info.icon];
            return (
              <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', background: info.bgColor, borderRadius: 5 }}>
                {Icon && <Icon size={9} color={info.color} />}
                <span style={{ fontSize: 9, color: info.color, fontWeight: 500 }}>{info.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {item.optimalConditions && (
        <div style={{ padding: '8px 14px', borderBottom: '1px solid #f2f0ec', display: 'flex', gap: 10, fontSize: 9, color: '#6a6a62', flexWrap: 'wrap' }}>
          {item.optimalConditions.weather === 'after-rain' && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icons.droplets size={9} color="#557278" /> After rain
            </span>
          )}
          {item.optimalConditions.weather === 'dry' && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icons.sun size={9} color="#7a6855" /> Dry weather
            </span>
          )}
          {item.optimalConditions.weather === 'after-frost' && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icons.snowflake size={9} color="#557278" /> After frost
            </span>
          )}
          {item.optimalConditions.time === 'morning' && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icons.sunrise size={9} color="#7a6855" /> Morning best
            </span>
          )}
        </div>
      )}

      <ExpandSection 
        title="Identification" 
        icon="leaf" 
        expanded={expanded === 'id'} 
        onToggle={() => setExpanded(expanded === 'id' ? null : 'id')} 
        color={regionData.color}
      >
        <ul style={{ margin: 0, paddingLeft: 14, fontSize: 10, lineHeight: 1.55 }}>
          {item.identification.map((t, i) => <li key={i} style={{ color: '#4a4a44', marginBottom: 3 }}>{t}</li>)}
        </ul>
        {item.peakQuality && (
          <div style={{ marginTop: 8, padding: '6px 8px', background: regionData.lightColor, borderRadius: 5, fontSize: 9, color: regionData.darkColor }}>
            <strong>Peak Quality:</strong> {item.peakQuality}
          </div>
        )}
      </ExpandSection>

      <ExpandSection 
        title="Harvest & Uses" 
        icon="scissors" 
        expanded={expanded === 'harvest'} 
        onToggle={() => setExpanded(expanded === 'harvest' ? null : 'harvest')} 
        color={regionData.color}
      >
        <p style={{ fontSize: 10, color: '#4a4a44', lineHeight: 1.5, marginBottom: 8 }}>{item.harvest}</p>
        {item.processing && (
          <div style={{ marginBottom: 8 }}>
            <strong style={{ fontSize: 10, color: '#5a5a54' }}>Processing:</strong>
            <ol style={{ margin: '4px 0 0', paddingLeft: 15, fontSize: 9, lineHeight: 1.45 }}>
              {item.processing.map((s, i) => (
                <li key={i} style={{ 
                  color: s.includes('MUST') || s.includes('ALWAYS') || s.includes('WEAR') ? '#7a5048' : '#5a5a54',
                  fontWeight: s.includes('MUST') || s.includes('ALWAYS') || s.includes('WEAR') ? '600' : '400',
                  marginBottom: 3 
                }}>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        )}
        <p style={{ fontSize: 10, color: '#4a4a44', lineHeight: 1.5 }}><strong>Uses:</strong> {item.uses}</p>
      </ExpandSection>

      {item.equipment && (
        <div style={{ padding: '10px 14px', borderBottom: '1px solid #f2f0ec' }}>
          <div style={{ fontSize: 8, fontWeight: 600, textTransform: 'uppercase', color: '#a0a098', marginBottom: 6 }}>
            Equipment Needed
          </div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {item.equipment.map(eq => {
              const info = EQUIPMENT[eq] || { icon: 'basket', name: eq };
              const Icon = Icons[info.icon];
              return (
                <span key={eq} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 6px', background: '#f5f4f2', borderRadius: 4, fontSize: 9, color: '#5a5a54' }}>
                  {Icon && <Icon size={9} color="#9a9a92" />} {info.name}
                </span>
              );
            })}
          </div>
          {item.storage && (
            <div style={{ marginTop: 8, fontSize: 9, color: '#6a6a62', lineHeight: 1.4 }}>
              <span style={{ color: '#a0a098' }}>Storage:</span> {item.storage.fresh} fresh · {item.storage.preserved}
            </div>
          )}
        </div>
      )}

      {item.nutrition && (
        <div style={{ padding: '10px 14px', borderBottom: '1px solid #f2f0ec' }}>
          <div style={{ fontSize: 8, fontWeight: 600, textTransform: 'uppercase', color: '#a0a098', marginBottom: 8 }}>
            Nutritional Highlights
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {Object.entries(item.nutrition).slice(0, 4).map(([key, val], i) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 8, color: '#9a9a92', width: 65, flexShrink: 0 }}>{key}</span>
                <div style={{ flex: 1, height: 4, background: '#f2f0ec', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ 
                    width: `${val}%`, 
                    height: '100%', 
                    background: regionData.color, 
                    opacity: 0.65, 
                    borderRadius: 2,
                    animation: 'barGrow 0.4s ease forwards',
                    animationDelay: `${0.15 + i * 0.06}s`,
                    transformOrigin: 'left'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {item.lookalikes?.length > 0 && (
        <div style={{ padding: '10px 14px', background: '#faf8f5', borderTop: '1px solid #efe8e0' }}>
          <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', color: '#8a5850', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
            <Icons.alertTriangle size={9} /> Dangerous Look-alikes
          </div>
          {item.lookalikes.map((la, i) => (
            <div key={i} style={{ marginBottom: i < item.lookalikes.length - 1 ? 6 : 0 }}>
              <strong style={{ color: '#6a4838', fontSize: 10 }}>{la.name}</strong>
              <p style={{ fontSize: 9, color: '#6a5048', margin: '2px 0 0', lineHeight: 1.4 }}>{la.danger}</p>
            </div>
          ))}
        </div>
      )}

      {item.growsNear?.length > 0 && (
        <div style={{ padding: '8px 14px', borderTop: '1px solid #f2f0ec', fontSize: 9, color: '#8a8880' }}>
          <span style={{ color: '#a8a8a0' }}>Often found near:</span> {item.growsNear.join(' · ')}
        </div>
      )}
    </div>
  );
}

function ExpandSection({ title, icon, expanded, onToggle, children, color }) {
  const Icon = Icons[icon];
  return (
    <div style={{ borderBottom: '1px solid #f2f0ec' }}>
      <button onClick={onToggle} style={{ 
        width: '100%', 
        padding: '9px 14px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        background: expanded ? '#fcfbfa' : 'transparent', 
        border: 'none', 
        cursor: 'pointer'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 9, fontWeight: 500, color: expanded ? color : '#5a5a54' }}>
          {Icon && <Icon size={10} color={expanded ? color : '#8a9080'} />} {title}
        </span>
        <span style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
          <Icons.chevronDown size={11} color="#a8a8a0" />
        </span>
      </button>
      <div style={{ 
        maxHeight: expanded ? 320 : 0, 
        opacity: expanded ? 1 : 0, 
        padding: expanded ? '0 14px 12px' : '0 14px',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}>
        {children}
      </div>
    </div>
  );
}

// ============== PREVIEW MODAL ==============
function PreviewModal({ selected, selectedState, selectedCounty, regionData, onClose, onDownload }) {
  const stateName = STATE_FIPS[selectedState];
  const countyName = selectedCounty?.name || '';
  const currentWeek = Math.floor((new Date().getMonth() * 30.5 + new Date().getDate()) / 7);

  const handleDownload = () => {
    const html = generateHTML(selected, stateName, regionData, currentWeek);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `foraging-guide-${stateName.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    Audio.play('click');
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(42, 40, 37, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 20,
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        width: '100%',
        maxWidth: 700,
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid #eae8e4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h2 style={{ fontSize: 14, fontWeight: 500, margin: 0, color: '#2a2825' }}>Export Preview</h2>
            <p style={{ fontSize: 10, color: '#a0a098', margin: '3px 0 0' }}>
              {selected.length} item{selected.length !== 1 ? 's' : ''} · {stateName}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#a0a098' }}
          >
            <Icons.x size={18} />
          </button>
        </div>

        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: 20,
          background: 'linear-gradient(180deg, #faf9f7 0%, #f5f4f2 100%)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid #e4e2de' }}>
            <h1 style={{ fontSize: 22, fontWeight: 300, marginBottom: 6 }}>🌿 Wild Foraging Guide</h1>
            <p style={{ fontSize: 12, color: '#8a8880' }}>{stateName}</p>
            <span style={{
              display: 'inline-block',
              marginTop: 8,
              padding: '4px 10px',
              background: regionData.lightColor,
              color: regionData.color,
              borderRadius: 10,
              fontSize: 10
            }}>
              {regionData.name}
            </span>
          </div>

          {selected.map((item) => {
            const inSeason = currentWeek >= item.seasonStart && currentWeek <= item.seasonEnd;
            const prep = PREP_TYPES[item.preparation];

            return (
              <div key={item.id} style={{
                background: '#fff',
                borderRadius: 8,
                padding: 14,
                marginBottom: 12,
                border: '1px solid #eae8e4'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                  <div>
                    <h3 style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>
                      {item.name}
                      {inSeason && <span style={{ color: '#5a7262', fontSize: 10, marginLeft: 6 }}>● In Season</span>}
                    </h3>
                    <p style={{ fontSize: 10, color: '#a0a098', fontStyle: 'italic', margin: '2px 0 0' }}>{item.latin}</p>
                  </div>
                  <span style={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: prep.color,
                    background: prep.bgColor,
                    padding: '3px 7px',
                    borderRadius: 5
                  }}>
                    {prep.label}
                  </span>
                </div>

                <div style={{ marginBottom: 10 }}>
                  <h4 style={{ fontSize: 10, fontWeight: 600, color: '#5a5a54', marginBottom: 4 }}>📍 Where to Find</h4>
                  <p style={{ fontSize: 11, color: '#4a4a44', margin: 0 }}>
                    {item.habitat.map(h => HABITAT_ICONS[h]?.label || h).join(' · ')}
                  </p>
                </div>

                <div style={{ marginBottom: 10 }}>
                  <h4 style={{ fontSize: 10, fontWeight: 600, color: '#5a5a54', marginBottom: 4 }}>🔍 Identification</h4>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 10, color: '#4a4a44', lineHeight: 1.5 }}>
                    {item.identification.map((id, j) => <li key={j}>{id}</li>)}
                  </ul>
                </div>

                {item.lookalikes?.length > 0 && (
                  <div style={{
                    background: '#faf8f5',
                    padding: 10,
                    borderRadius: 6,
                    border: '1px solid #efe8e0',
                    marginTop: 10
                  }}>
                    <h4 style={{ fontSize: 10, fontWeight: 700, color: '#8a5850', marginBottom: 6 }}>
                      ⚠️ Dangerous Look-alikes
                    </h4>
                    {item.lookalikes.map((la, j) => (
                      <div key={j}>
                        <strong style={{ color: '#6a4838', fontSize: 10 }}>{la.name}</strong>
                        <p style={{ fontSize: 9, color: '#6a5048', margin: '2px 0 0', lineHeight: 1.4 }}>{la.danger}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{
          padding: '14px 18px',
          borderTop: '1px solid #eae8e4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#faf9f7'
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              fontSize: 11,
              color: '#6a6862',
              background: 'transparent',
              border: '1px solid #dad8d4',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleDownload}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 18px',
              fontSize: 11,
              fontWeight: 500,
              color: '#fff',
              background: regionData.color,
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer'
            }}
          >
            <Icons.download size={12} color="#fff" /> Download HTML
          </button>
        </div>
      </div>
    </div>
  );
}

function generateHTML(items, stateName, countyName, regionData, currentWeek) {
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const currentMonth = new Date().getMonth();
  const itemsHTML = items.map(item => {
    const inSeason = currentWeek >= item.seasonStart && currentWeek <= item.seasonEnd;
    const prep = PREP_TYPES[item.preparation];
    
    return `
      <div class="item">
        <h2>${item.name} ${inSeason ? '<span class="in-season">● In Season</span>' : ''}</h2>
        <p class="latin">${item.latin}</p>
        <div class="prep-badge" style="background: ${prep.bgColor}; color: ${prep.color}">${prep.label}</div>
        <h3>📍 Where to Find</h3>
        <p>${item.habitat.map(h => HABITAT_ICONS[h]?.label || h).join(' · ')}</p>
        <h3>🔍 Identification</h3>
        <ul>${item.identification.map(id => `<li>${id}</li>`).join('')}</ul>
        <h3>🌿 Harvest</h3>
        <p>${item.harvest}</p>
        <h3>🍳 Uses</h3>
        <p>${item.uses}</p>
        ${item.lookalikes?.length ? `
          <div class="danger">
            <h3>⚠️ Dangerous Look-alikes</h3>
            ${item.lookalikes.map(la => `<p><strong>${la.name}</strong>: ${la.danger}</p>`).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Foraging Guide – ${stateName}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Georgia, serif; background: #faf9f7; color: #2a2825; line-height: 1.6; padding: 40px 24px; }
    .container { max-width: 780px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 40px; padding-bottom: 30px; border-bottom: 1px solid #e4e2de; }
    h1 { font-size: 28px; font-weight: 300; margin-bottom: 8px; }
    .region { display: inline-block; margin-top: 12px; padding: 5px 12px; background: ${regionData.lightColor}; color: ${regionData.color}; border-radius: 12px; font-size: 11px; }
    .item { background: #fff; border-radius: 10px; padding: 20px; margin-bottom: 20px; border: 1px solid #eae8e4; }
    .item h2 { font-size: 17px; font-weight: 500; margin-bottom: 3px; }
    .latin { font-style: italic; color: #a0a098; font-size: 12px; margin-bottom: 12px; }
    .in-season { color: #5a7262; font-size: 11px; margin-left: 8px; }
    .prep-badge { display: inline-block; padding: 5px 10px; border-radius: 6px; font-size: 10px; font-weight: 600; margin-bottom: 16px; }
    h3 { font-size: 11px; font-weight: 600; color: #5a5a54; margin: 12px 0 8px; }
    ul { padding-left: 20px; font-size: 12px; }
    li { margin-bottom: 4px; }
    .danger { background: #faf8f5; padding: 12px; border-radius: 8px; border: 1px solid #efe8e0; margin-top: 12px; }
    .danger h3 { color: #8a5850; }
    .danger p { font-size: 12px; color: #6a5048; margin-top: 8px; }
    .safety { background: #f2f0ee; padding: 16px; border-radius: 8px; margin-bottom: 30px; text-align: center; font-size: 11px; color: #6a5848; }
    @media print { 
      body { background: #fff; padding: 20px; }
      .item { box-shadow: none; page-break-inside: avoid; break-inside: avoid; }
      header { page-break-after: avoid; }
      .safety { page-break-after: avoid; background: #f9f9f9; border: 1px solid #ddd; }
      h2 { page-break-after: avoid; }
      h3 { page-break-after: avoid; }
      @page { margin: 1.5cm; }
      footer { page-break-before: auto; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>🌿 Wild Foraging Guide</h1>
      <p>${countyName ? `${countyName}, ` : ''}${stateName}</p>
      <span class="region">${regionData.name}</span>
    </header>
    <div class="safety">
      <strong>⚠️ Safety First:</strong> Never consume anything you cannot identify with 100% certainty.
    </div>
    ${itemsHTML}
    <footer style="text-align: center; padding: 30px; font-size: 10px; color: #b8b8b0;">
      <p>Always forage responsibly and sustainably</p>
    </footer>
  </div>
</body>
</html>`;
}

export default ForagingGuide;