import React, { useState, useEffect, CSSProperties } from 'react';
import {
  Eye,
  MessageSquare,
  Heart,
  Users,
  Clock,
  ShieldCheck,
  TrendingUp,
  Hourglass,
  BrainCircuit,
  Zap,
  Flame,
  Sparkles,
  Layers,
  BarChart3,
  Cpu,
  Touchpad,
  CheckCircle2,
  Star,
  Play,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Award,
  ShieldAlert,
  HelpCircle,
  Video
} from 'lucide-react';

import {
  HERO_FEATURES,
  GENERAL_STATS,
  HIGHLIGHTS,
  GRID_FEATURES,
  FEEDBACKS,
  PRICING_PLANS,
  FAQS
} from './data';

import Simulator from './components/Simulator';
import InteractiveMindmap from './components/InteractiveMindmap';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeBookingPlan, setActiveBookingPlan] = useState('free-demo');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Real-time animation variables for hero stats
  const [heroViews, setHeroViews] = useState(12245);
  const [commentsCount, setCommentsCount] = useState(8720);
  const [ordersCount, setOrdersCount] = useState(418);
  const [heartsArray, setHeartsArray] = useState<{ id: number; style: CSSProperties }[]>([]);

  // Hero ticker simulation
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // Hero stats growth simulation
    const statsTimer = setInterval(() => {
      setHeroViews((prev) => prev + Math.floor(Math.random() * 19) - 7);
      setCommentsCount((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
      setOrdersCount((prev) => prev + (Math.random() > 0.95 ? 1 : 0));
    }, 1500);

    // Floating heart triggers for Hero UI dashboard mockup
    const heartTimer = setInterval(() => {
      const id = Date.now();
      const style: CSSProperties = {
        left: `${Math.floor(Math.random() * 60) + 20}%`,
        bottom: '40px',
        animation: 'floatAlong 3s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      };
      setHeartsArray((prev) => [...prev.slice(-10), { id, style }]);
    }, 1200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(statsTimer);
      clearInterval(heartTimer);
    };
  }, []);

  const triggerBooking = (planId: string) => {
    setActiveBookingPlan(planId);
    setIsBookingOpen(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Helper to map icons dynamically from strings
  const renderHeroIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye': return <Eye className="w-4 h-4 text-cyan-500" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-brand-pink" />;
      case 'Heart': return <Heart className="w-4 h-4 text-rose-500 animate-pulse" />;
      case 'Users': return <Users className="w-4 h-4 text-emerald-500" />;
      case 'Clock': return <Clock className="w-4 h-4 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-indigo-505" />;
      default: return <Sparkles className="w-4 h-4 text-slate-500" />;
    }
  };

  const getHeroCardStyle = (id: string) => {
    switch (id) {
      case 'mat-xem':
        return {
          bg: 'hover:to-cyan-500/10 from-white to-cyan-50/20',
          borderB: 'border-b-cyan-500 hover:border-b-cyan-600',
          shadow: 'shadow-[0_8px_20px_rgba(6,182,212,0.08)] hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)]',
          iconBg: 'bg-cyan-50 border-cyan-100',
          text: 'text-cyan-950 group-hover:text-cyan-700'
        };
      case 'comment-auto':
        return {
          bg: 'hover:to-pink-500/10 from-white to-rose-50/20',
          borderB: 'border-b-brand-pink hover:border-b-rose-600',
          shadow: 'shadow-[0_8px_20px_rgba(254,44,85,0.08)] hover:shadow-[0_15px_30px_rgba(254,44,85,0.15)]',
          iconBg: 'bg-rose-50 border-rose-100',
          text: 'text-rose-950 group-hover:text-brand-pink'
        };
      case 'tim':
        return {
          bg: 'hover:to-rose-500/10 from-white to-red-50/20',
          borderB: 'border-b-red-500 hover:border-b-red-600',
          shadow: 'shadow-[0_8px_20px_rgba(239,68,68,0.08)] hover:shadow-[0_15px_30px_rgba(239,68,68,0.15)]',
          iconBg: 'bg-red-50 border-red-100',
          text: 'text-red-950 group-hover:text-red-600'
        };
      case 'dong-nguoi':
        return {
          bg: 'hover:to-emerald-500/10 from-white to-emerald-50/20',
          borderB: 'border-b-emerald-500 hover:border-b-emerald-600',
          shadow: 'shadow-[0_8px_20px_rgba(16,185,129,0.08)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)]',
          iconBg: 'bg-emerald-50 border-emerald-100',
          text: 'text-emerald-950 group-hover:text-emerald-700'
        };
      case 'tiet-kiem':
        return {
          bg: 'hover:to-amber-500/10 from-white to-amber-50/20',
          borderB: 'border-b-amber-500 hover:border-b-amber-600',
          shadow: 'shadow-[0_8px_20px_rgba(245,158,11,0.08)] hover:shadow-[0_15px_30px_rgba(245,158,11,0.15)]',
          iconBg: 'bg-amber-50 border-amber-100',
          text: 'text-amber-950 group-hover:text-amber-700'
        };
      case 'nhieu-acc':
        return {
          bg: 'hover:to-indigo-500/10 from-white to-indigo-50/20',
          borderB: 'border-b-indigo-550 hover:border-b-indigo-600',
          shadow: 'shadow-[0_8px_20px_rgba(99,102,241,0.08)] hover:shadow-[0_15px_30px_rgba(99,102,241,0.15)]',
          iconBg: 'bg-indigo-50 border-indigo-100',
          text: 'text-indigo-950 group-hover:text-indigo-700'
        };
      default:
        return {
          bg: 'hover:to-slate-500/10 from-white to-slate-50/20',
          borderB: 'border-b-slate-400 hover:border-b-slate-500',
          shadow: 'shadow-[0_8px_20px_rgba(148,163,184,0.08)] hover:shadow-[0_15px_30px_rgba(148,163,184,0.15)]',
          iconBg: 'bg-slate-50 border-slate-200',
          text: 'text-slate-800 group-hover:text-slate-950'
        };
    }
  };

  // Helper to map highlight icons
  const renderHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-brand-pink" />;
      case 'Hourglass': return <Hourglass className="w-6 h-6 text-cyan-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      default: return <Sparkles className="w-6 h-6 text-slate-700" />;
    }
  };

  // Helper to map feature grid icons
  const renderGridIcon = (iconName: string) => {
    const defaultClass = "w-5 h-5 text-slate-700 group-hover:scale-110 duration-200 transition-all";
    switch (iconName) {
      case 'Flame': return <Flame className={`${defaultClass} text-orange-500`} />;
      case 'MessageCircleDot': return <MessageSquare className={`${defaultClass} text-cyan-600`} />;
      case 'Sparkles': return <Sparkles className={`${defaultClass} text-brand-pink`} />;
      case 'Zap': return <Zap className={`${defaultClass} text-amber-500`} />;
      case 'Layers': return <Layers className={`${defaultClass} text-purple-600`} />;
      case 'BarChart3': return <BarChart3 className={`${defaultClass} text-emerald-650`} />;
      case 'Cpu': return <Cpu className={`${defaultClass} text-blue-600`} />;
      case 'Touchpad': return <Touchpad className={`${defaultClass} text-rose-500`} />;
      default: return <Sparkles className={defaultClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brand-pink selection:text-white relative overflow-hidden">
      
      {/* Background radial spotlights tailored for pristine, highly vibrant theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,_rgba(254,44,85,0.08)_0%,_transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-[300px] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(6,182,212,0.07)_0%,_transparent_70%)] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.06)_0%,_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[200px] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(168,85,247,0.06)_0%,_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[800px] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(16,185,129,0.05)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 select-none transition-all duration-300 shadow-sm shadow-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-pink to-brand-cyan flex items-center justify-center p-[2px] shadow-lg shadow-brand-pink-glow">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tighter">MKT</span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-slate-900 font-extrabold tracking-tight text-base font-display flex items-center gap-1">
                TikPro <span className="text-[9px] px-1 bg-brand-pink/10 text-brand-pink rounded border border-brand-pink/20 uppercase font-mono tracking-widest font-bold">PRO v2</span>
              </span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider -mt-0.5">Automated Livestream Solution</span>
            </div>
          </div>

          {/* Nav link items */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#about" className="text-slate-650 hover:text-slate-905 transition-colors duration-200">Giới thiệu</a>
            <a href="#mindmap-section" className="text-slate-650 hover:text-slate-905 transition-colors duration-200">Tính năng</a>
            <a href="#live-simulator" className="text-slate-650 hover:text-brand-cyan transition-colors duration-200 flex items-center gap-1 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan inline-block animate-ping"></span>
              Trình Mô Phỏng
            </a>
            <a href="#highlights" className="text-slate-650 hover:text-slate-905 transition-colors duration-200">Lợi ích</a>
            <a href="#feedbacks-section" className="text-slate-650 hover:text-slate-905 transition-colors duration-200">Khách hàng</a>
            <a href="#pricing-section" className="text-slate-650 hover:text-slate-905 transition-colors duration-200">Bảng giá</a>
            <a href="#faq" className="text-slate-650 hover:text-slate-905 transition-colors duration-200">FAQ</a>
          </nav>

          {/* Header CTA Button */}
          <button
            onClick={() => triggerBooking('free-demo')}
            className="py-2.5 px-5 bg-gradient-to-r from-brand-pink to-rose-600 hover:brightness-110 active:scale-95 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md shadow-brand-pink-glow cursor-pointer"
          >
            Đăng ký Demo
          </button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 select-none">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
              <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest font-mono">Bứt Phá TikTok Live 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.1] font-display">
              Tăng View TikTok Live <br />
              <span className="gradient-text-pink-cyan">Chỉ Sau Vài Phút</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-lg">
              Giúp phiên livestream của bạn trở nên đông người, ngập tràn bình luận hỏi mua hàng, tạo hiệu ứng bão đơn cực nhanh và gia tăng uy tín chốt đơn lập tức.
            </p>
          </div>

          {/* 6 Grid features block from the screenshot with colorful 3D depth and custom styles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            {HERO_FEATURES.map((feat) => {
              const cardStyle = getHeroCardStyle(feat.id);
              return (
                <div
                  key={feat.id}
                  className={`group flex items-center gap-3.5 p-3.5 bg-gradient-to-tr ${cardStyle.bg} border border-slate-200/80 border-b-[4px] ${cardStyle.borderB} rounded-xl transition-all duration-150 select-none ${cardStyle.shadow} hover:-translate-y-1 hover:border-b-[5px] active:translate-y-[2px] active:border-b-[1px]`}
                >
                  <div className={`w-9 h-9 rounded-lg ${cardStyle.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-110 duration-200 transition-all`}>
                    {renderHeroIcon(feat.icon)}
                  </div>
                  <span className={`text-xs font-bold tracking-tight font-sans transition-colors duration-150 ${cardStyle.text}`}>
                    {feat.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Call to action buttons - balanced, matching heights, same line heights, symmetric styles & icons */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
            <button
              onClick={() => triggerBooking('free-demo')}
              className="flex-1 h-12 rounded-xl bg-gradient-to-r from-brand-pink to-rose-600 border border-transparent border-b-[4px] border-b-rose-800 text-white font-bold text-xs tracking-widest uppercase transition-all duration-150 flex items-center justify-center gap-2.5 shadow-[0_6px_15px_rgba(254,44,85,0.22)] hover:brightness-110 hover:translate-y-[1px] hover:border-b-[3px] active:translate-y-[3px] active:border-b-[1px] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white animate-pulse shrink-0" />
              <span>Đăng Ký Bản Demo</span>
            </button>
            <a
              href="#live-simulator"
              className="flex-1 h-12 rounded-xl bg-white border border-slate-200 border-b-[4px] border-b-slate-350 text-slate-700 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all duration-150 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:bg-slate-50 hover:translate-y-[1px] hover:border-b-[3px] active:translate-y-[3px] active:border-b-[1px] cursor-pointer"
            >
              <Video className="w-4 h-4 text-brand-pink shrink-0" />
              <span>Xem Demo trực tiếp</span>
            </a>
          </div>
        </div>

        {/* Right Side Visual Mockup representing real-time TikTok live panel */}
        <div className="lg:col-span-6 relative flex justify-center z-10 selection:bg-transparent">
          
          {/* Inline floating hearts styling simulator for Hero dashboard mockup */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes floatAlong {
              0% { transform: translateY(0) scale(0.6); opacity: 0; }
              10% { opacity: 0.9; }
              100% { transform: translateY(-160px) scale(1.1); opacity: 0; }
            }
          `}} />

          {/* Floating live floating hearts inside the hero widget wrapper */}
          <div className="absolute right-12 bottom-24 pointer-events-none z-30 select-none">
            {heartsArray.map((heart) => (
              <span
                key={heart.id}
                className="absolute text-xl pointer-events-none drop-shadow"
                style={heart.style}
              >
                {['❤️', '💖', '🔥', '✨'][Math.floor(Math.random() * 4)]}
              </span>
            ))}
          </div>

          {/* Glass dashboard mockup box mimicking the exact image style, adjusted for modern light-mode */}
          <div className="w-full max-w-[380px] rounded-2xl border border-slate-200/85 bg-white backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden select-none">
            
            {/* Live Indicator sticker */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-[11px] font-mono tracking-wider font-bold text-slate-500">STREAM MOCK STATE</span>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 text-red-600 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span>{heroViews.toLocaleString()} VIEWERS</span>
              </div>
            </div>

            {/* Live Viewer Trend card inside, mimicking exactly in light mode */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 mt-4 text-left shadow-sm">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Live Viewer Trend</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-black font-display text-slate-900">{heroViews.toLocaleString()}</span>
                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 font-mono">
                  <span>↑ 45%</span>
                </span>
              </div>

              {/* Real SVG mini sparkline in pink and green theme */}
              <div className="h-20 mt-3 pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="5" x2="100" y2="5" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
                  <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(0,0,0,0.02)" strokeWidth="0.5" />

                  {/* Red/Pink gradient background under graph */}
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FE2C55" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Graph polygon area fill */}
                  <path
                    d="M 0,30 L 0,25 Q 15,20 25,23 Q 40,28 50,15 T 75,5 T 100,2 L 100,30 Z"
                    fill="url(#chartGlow)"
                  />
                  
                  {/* High fidelity graph stroke */}
                  <path
                    d="M 0,25 Q 15,20 25,23 Q 40,28 50,15 T 75,5 T 100,2"
                    fill="transparent"
                    stroke="url(#heroGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FE2C55" />
                      <stop offset="50%" stopColor="#E11D48" />
                      <stop offset="100%" stopColor="#0284C7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Row of 2 metrics blocks inside */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-3 text-left shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-650" />
                </div>
                <div className="text-base font-extrabold text-slate-900 font-mono">{commentsCount.toLocaleString()}</div>
                <span className="text-[9px] text-slate-500 uppercase font-mono mt-0.5 block">Auto Comments</span>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-3 text-left shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
                  <Flame className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-base font-extrabold text-emerald-650 font-mono">+{ordersCount.toLocaleString()}</div>
                <span className="text-[9px] text-slate-500 uppercase font-mono mt-0.5 block">Orders Generated</span>
              </div>
            </div>

            {/* Quick automation visualizer widget simulating nick interactions */}
            <div className="mt-4 p-2.5 rounded-xl bg-slate-100 border border-slate-200/60 text-left flex items-center justify-between shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[10px] text-slate-600 font-mono">Channel Connection: node_2485</span>
              </div>
              <span className="text-[9px] text-emerald-700 font-bold font-mono uppercase bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-200">Active</span>
            </div>

          </div>
        </div>

      </section>

      {/* 3. Stat counters Section Row - tailored for light theme */}
      <section className="bg-white border-y border-slate-200 py-10 relative z-10 select-none shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {GENERAL_STATS.map((item, idx) => (
            <div
              key={idx}
              className={`space-y-1.5 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 ${
                idx === 2 ? 'col-span-2 lg:col-span-1 border border-slate-200 bg-slate-50/70 shadow-sm' : ''
              }`}
            >
              <div className="text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 flex items-center justify-center gap-1">
                {idx === 0 ? <Star className="w-5 h-5 text-amber-500 fill-amber-500" /> : null}
                <span className={idx === 1 || idx === 2 ? 'text-brand-pink' : idx === 3 ? 'text-brand-cyan' : 'text-slate-800'}>
                  {item.value}
                </span>
              </div>
              <div className="text-[11px] font-bold tracking-wider text-slate-500 font-mono uppercase">
                {item.label}
              </div>
              <div className="text-[10px] text-slate-400">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Realtime Custom Live Boost Simulator Panel with CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center" id="demo">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono tracking-widest text-[#06B6D4] px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 font-bold uppercase">
            Hệ thống thời gian thực
          </span>
          <h2 className="text-3xl font-extrabold font-display text-slate-900 mt-4">
            Xem MKT TikPro Hoạt Động Thực Tế
          </h2>
          <p className="text-sm text-slate-600 mt-2.5 max-w-xl mx-auto">
            Khám phá cách MKT TikPro tăng mắt xem, bình luận và tương tác livestream TikTok tự động.
          </p>
        </div>

        {/* Embedded Simulator component */}
        <Simulator />
      </section>

      {/* 5. Highlight Cards (Lợi ích và Giá trị gia tăng) */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-slate-100/0 via-slate-100/40 to-slate-100/0" id="highlights">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {HIGHLIGHTS.map((hl, idx) => (
            <div
              key={idx}
              className="glass-card hover:glass-card-active rounded-2xl p-6 border border-slate-200/80 hover:border-brand-pink/35 transition-all duration-300 select-none group flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center group-hover:scale-110 duration-300 transition-all shrink-0">
                  {renderHighlightIcon(hl.icon)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-slate-950">
                    {hl.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {hl.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Core Module</span>
                <span className="text-brand-cyan group-hover:underline">Active standard →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. "Tính năng đột phá" Section Node mindmap selector */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <InteractiveMindmap />
      </section>

      {/* 7. Detailed Features Grid of 8 Small Cards */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16" id="features">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-mono tracking-widest text-brand-pink uppercase font-bold px-2.5 py-1 rounded bg-brand-pink/10 border border-brand-pink/20">
            Hộp công cụ toàn diện
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 mt-4">
            Đầy Đủ Tính Năng Phát Triển Luồng Lai
          </h2>
          <p className="text-sm text-slate-600 mt-2.5">
            MKT TikPro tích hợp tất cả công cụ chuyên sâu bạn cần để kiểm soát tỷ lệ tương tác của hàng ngàn tài khoản.
          </p>
        </div>

        {/* 8 cards grid representing the list on the image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left selection:bg-transparent">
          {GRID_FEATURES.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/80 hover:border-brand-pink/30 p-5 rounded-xl hover:bg-slate-50/70 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-205/60 flex items-center justify-center shrink-0">
                  {renderGridIcon(item.icon)}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-pink duration-200 transition-colors font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-650 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              <span className="text-[9px] font-mono text-slate-400 tracking-wider block pt-4 mt-4 border-t border-slate-100 font-bold">
                MKT_TIK_NODE_{item.id.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Customers Testimonials Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center" id="feedbacks-section">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-mono tracking-widest text-[#06B6D4] px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 font-bold uppercase">
            Khách hàng phản hồi
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 mt-4">
            Hơn 5.000+ Nhà Bán Hàng Tin Dùng
          </h2>
          <p className="text-xs text-slate-650 mt-2">
            Xem kết quả bứt phá doanh số thực tế từ những shop quần áo, thực phẩm chức năng và gia dụng hàng đầu.
          </p>
        </div>

        {/* Vietnam list cards columns row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {FEEDBACKS.map((fb) => (
            <div
              key={fb.id}
              className="glass-card rounded-2xl p-5 border border-slate-200 hover:border-[#06B6D4]/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group select-none min-h-[300px] shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Simulated video review frame container */}
                <div className="relative aspect-video rounded-xl bg-slate-950 border border-slate-200/50 overflow-hidden group-hover:border-slate-300 transition-all flex items-center justify-center text-zinc-650">
                  {fb.youtubeUrl ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={fb.youtubeUrl}
                      title={`Feedback - ${fb.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-[2px]" style={{ backgroundImage: `url(${fb.avatar})` }} />
                      
                      {/* Floating badge stats */}
                      <span className="absolute top-2 left-2 bg-emerald-500 text-black font-extrabold font-mono text-[9px] px-1.5 py-0.5 rounded shadow">
                        {fb.viewsGained}
                      </span>

                      {/* Play icon mimicking video preview */}
                      <div className="w-10 h-10 rounded-full bg-black/65 border border-white/15 flex items-center justify-center text-white cursor-pointer hover:bg-brand-pink duration-200 z-10 shadow-lg shrink-0">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-500 text-xs">
                    {[...Array(fb.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs italic text-slate-700 leading-relaxed font-sans line-clamp-4 hover:line-clamp-none duration-300 transition-all">
                    "{fb.content}"
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-150 mt-4">
                <img
                  src={fb.avatar}
                  alt={fb.name}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{fb.name}</h4>
                  <span className="text-[9px] text-slate-500 font-mono block truncate mt-0.5">{fb.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Bảng Giá MKT TikPro Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center" id="pricing-section">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-[#06B6D4] px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 font-bold uppercase">
            Bảng giá tốt nhất
          </span>
          <h2 className="text-3xl font-black font-display text-slate-900 mt-4">
            Lựa Chọn Gói Phù Hợp Cho Doanh Nghiệp Của Bạn
          </h2>
          <p className="text-sm text-slate-600 mt-2.5">
            Sở hữu giải pháp an toàn cao cấp giúp bứt phá tương tác TikTok Shop chuyên nghiệp với chi phí cực rẻ.
          </p>
        </div>

        {/* 3 Pricing cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isRecommended = plan.id === '5-year';
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  isRecommended
                    ? 'bg-white border-2 border-brand-pink shadow-xl shadow-brand-pink-glow scale-[1.01]'
                    : 'bg-white border border-slate-200/80 shadow-md shadow-slate-100'
                }`}
              >
                {/* Background flow light for popular plan */}
                {isRecommended && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/10 rounded-full blur-xl pointer-events-none" />
                )}

                {/* Popular badges label */}
                {plan.badge && (
                  <div className="absolute top-4 right-4 animate-pulse">
                    <span
                      className={`text-[9px] font-extrabold font-mono tracking-wider px-2 py-1 rounded-full border ${
                        plan.badge.type === 'pink'
                          ? 'bg-brand-pink/10 text-brand-pink border-brand-pink/30'
                          : 'bg-cyan-500/10 text-cyan-705 border-cyan-500/30'
                      }`}
                    >
                      ★ {plan.badge.text}
                    </span>
                  </div>
                )}

                <div>
                   <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 font-display uppercase tracking-tight">{plan.name}</h3>
                    <p className="text-[11px] text-slate-500 font-semibold">{plan.monthlyRef}</p>
                  </div>

                  {/* Plan cost */}
                  <div className="py-6 border-b border-slate-100 my-4">
                    <div className="flex items-baseline text-slate-900">
                      <span className="text-2xl md:text-3.5xl font-black font-display text-brand-pink">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-mono ml-1 font-semibold">
                        {plan.period}
                      </span>
                    </div>
                    {plan.savings && (
                      <span className="inline-block mt-2 text-[10px] font-bold text-emerald-700 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded">
                        {plan.savings}
                      </span>
                    )}
                  </div>

                  {/* Plan Features lists */}
                  <ul className="space-y-3.5 text-xs text-slate-650">
                    {plan.features.map((feat, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit button Triggering checkout registry modal */}
                <button
                  onClick={() => triggerBooking(plan.id)}
                  className={`w-full py-3.5 px-6 rounded-xl mt-8 font-extrabold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer text-center ${
                    isRecommended
                      ? 'bg-gradient-to-r from-brand-pink to-rose-600 text-white shadow-lg shadow-brand-pink-glow hover:brightness-110 active:scale-[0.99]'
                      : 'bg-slate-100 border border-slate-200/65 hover:bg-slate-205 text-slate-700 hover:text-slate-900 active:scale-[0.99]'
                  }`}
                >
                  Đăng Ký Ngay
                </button>
              </div>
            );
          })}
        </div>

        {/* Note indicating feature equality */}
        <div className="mt-8 flex justify-center">
          <p className="text-xs sm:text-sm font-medium text-slate-700 bg-slate-50/80 border border-slate-200/50 px-6 py-3 rounded-2xl shadow-sm text-center max-w-xl">
            💡 <strong className="font-bold text-slate-800">Lưu ý:</strong> Cả 3 gói đều có đầy đủ tính năng. Khác nhau duy nhất ở thời hạn sử dụng và mức giá tiết kiệm.
          </p>
        </div>

        {/* Value seals row */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-slate-500 mt-14 border-t border-slate-200 pt-10">
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-600 text-base font-bold">✓</span>
            <span>Hỗ trợ cài đặt từ xa Ultraview trong 5 phút</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-600 text-base font-bold">✓</span>
            <span>Hướng dẫn sử dụng cầm tay chỉ việc 1-1</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-600 text-base font-bold">✓</span>
            <span>Bảo hành cập nhật công nghệ tự động trọn gói</span>
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-left" id="faq">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-mono tracking-widest text-[#06B6D4] font-bold uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Giải đáp thắc mắc
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 mt-4">
            Khách hàng thường băn khoăn gì?
          </h2>
          <p className="text-xs text-slate-650 mt-2">
            Dưới đây là một số thông tin chi tiết giải quyết mọi nỗi lo lắng về thuật toán TikTok và bảo mật tài khoản.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-800 hover:bg-slate-50/50 transition-all cursor-pointer select-none"
                >
                  <span className="text-xs sm:text-sm font-bold font-display text-slate-800 pr-4 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-pink shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {/* Collapsible details content */}
                <div
                  className={`px-5 pb-5 text-xs text-slate-600 leading-relaxed transition-all duration-300 ${
                    isOpen ? 'block opacity-100 border-t border-slate-100 pt-4' : 'hidden opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Immersive Action Footer */}
      <footer className="relative z-10 mt-auto bg-slate-100 border-t border-slate-205 pt-16 pb-12 select-none" id="booking-cta border-none">
        
        {/* Contact Hotline & Zalo Callout card from screenshot */}
        <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
          <div className="glass-card rounded-2xl p-6 lg:p-8 border border-slate-200 bg-white shadow-md flex flex-col items-center justify-center space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase">TIKPRO HOTLINE HỖ TRỢ TRỰC TIẾP</span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-600 animate-pulse">
                <PhoneCall className="w-5 h-5" />
              </div>
              <a href="tel:0962323429" className="text-2xl md:text-3xl font-black font-mono text-slate-900 tracking-widest hover:text-cyan-600 transition-colors">
                096 232 3429
              </a>
            </div>
            <h4 className="text-sm font-bold text-brand-pink font-display">Nhận Demo Miễn Phí Ngay Hôm Thử</h4>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <button
                onClick={() => triggerBooking('free-demo')}
                className="flex-1 py-3 px-5 bg-gradient-to-r from-brand-pink to-rose-600 rounded-xl text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:brightness-110 active:scale-95 cursor-pointer shadow-brand-pink-glow"
              >
                Nhận hướng dẫn cài đặt qua Zalo
              </button>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom copyright */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-200/80 pt-8 text-xs text-slate-500 text-center">
          
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xs font-display">MKT</span>
            </div>
            <div className="flex flex-col min-w-0 pr-2">
              <span className="text-slate-700 font-bold">© {new Date().getFullYear()} MKT TikPro Solutions.</span>
              <span className="text-[10px] text-slate-450 mt-0.5">Phần mềm tăng mắt xem livestream thông minh số 1 Việt Nam.</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="hover:text-slate-800 transition-colors">Điều khoản dịch vụ</a>
            <a href="#about" className="hover:text-slate-800 transition-colors">Chính sách bảo mật</a>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Hệ thống lõi bảo mật cấp cao
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-45 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-705 flex items-center justify-center cursor-pointer shadow-xl hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
        >
          ▲
        </button>
      )}

      {/* Interactive Booking Popup modal container */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPlan={activeBookingPlan}
      />

    </div>
  );
}
