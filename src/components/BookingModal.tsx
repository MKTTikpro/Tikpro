import { useState } from 'react';
import { X, Copy, Check, Zap, Lock, Clock, MessageSquare, Flame } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export default function BookingModal({ isOpen, onClose, selectedPlan = 'free-demo' }: BookingModalProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  // Human friendly label mapping based on selected plan
  const getPlanLabel = () => {
    switch (selectedPlan) {
      case '1-year':
        return 'GÓI 1 NĂM';
      case '5-year':
        return 'GÓI 5 NĂM';
      case '10-year':
        return 'GÓI 10 NĂM';
      default:
        return 'KÍCH HOẠT DEMO';
    }
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Dark premium overlay backdrop */}
      <div 
        className="fixed inset-0 bg-[#09090b]/80 backdrop-blur-xl cursor-pointer transition-opacity" 
        onClick={onClose}
      />

      {/* Main High-End Dark Box */}
      <div className="relative w-full max-w-4xl bg-[#0F0F11]/95 border border-slate-800/80 rounded-3xl p-5 sm:p-8 lg:p-10 text-left shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] z-10 overflow-hidden select-text animate-fade-in text-white grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Subtle Ambient Cosmic Glows */}
        <div className="absolute -top-24 -left-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/50 text-slate-400 hover:text-white transition-all cursor-pointer z-30"
          aria-label="Đóng"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LEFT COLUMN - Brand & Hook (6 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8 pr-0 lg:pr-4">
          
          <div className="space-y-4sm:space-y-5">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-pink to-rose-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-brand-pink/20">
                K
              </div>
              <div>
                <div className="text-base font-extrabold tracking-wider leading-none text-white">KEN MARKETING</div>
                <div className="text-[9px] font-bold tracking-widest text-brand-pink uppercase mt-0.5">TIKPRO AGENCY</div>
              </div>
            </div>

            {/* Title / Hero Pitch */}
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                🔥 Đang chọn: {getPlanLabel()}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.12]">
                Let's Grow Your <br className="hidden sm:inline" />
                <span className="gradient-text-pink-cyan font-bold">Livestream Sales</span> Together
              </h3>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed max-w-md">
                Nhắn tin trực tiếp cho tôi trên Telegram hoặc Zalo để nhận tư vấn <span className="text-brand-pink font-bold uppercase">MIỄN PHÍ</span> và được kích hoạt, setup phần mềm ngay lập tức!
              </p>
            </div>

            {/* Core assurances checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 text-brand-pink" />
                </div>
                <span className="text-xs sm:text-sm font-semibold">Phản hồi siêu tốc chỉ trong 5 phút</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm font-semibold">Bảo mật thông tin hệ thống an toàn tuyệt đối</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-xs sm:text-sm font-semibold">Hỗ trợ kỹ thuật 1-kèm-1 trong quá trình sử dụng</span>
              </div>
            </div>
          </div>

          {/* Social Proof Badge */}
          <div className="pt-4 border-t border-slate-900 flex items-center gap-3.5">
            <div className="flex -space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-cover bg-center border-2 border-[#0F0F11]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')` }} />
              <div className="w-8 h-8 rounded-full bg-cover bg-center border-2 border-[#0F0F11]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80')` }} />
              <div className="w-8 h-8 rounded-full bg-cover bg-center border-2 border-[#0F0F11]" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80')` }} />
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-tight">Hơn 5.000+ Nhà Bán Hàng</div>
              <div className="text-[10px] text-slate-400 font-semibold leading-none mt-0.5">Đã tin dùng dịch vụ Ken Marketing</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN - Connect Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div className="text-center pb-2 border-b border-slate-900/85">
            <h4 className="text-sm font-black text-slate-200 uppercase tracking-widest font-mono">Contact Me</h4>
            <p className="text-[11px] text-slate-500 font-medium">Bấm chọn kênh thuận tiện nhất để kết nối</p>
          </div>

          {/* Telegram Premium Box */}
          <div className="bg-[#131B2B]/70 border border-blue-500/20 rounded-2xl p-4.5 space-y-3.5 relative hover:border-blue-500/35 transition-all">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white shrink-0">
                <svg className="w-5.5 h-5.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.41 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.01-.74 3.96-1.72 6.61-2.85 7.94-3.4 3.77-1.56 4.56-1.83 5.07-1.84.11 0 .36.03.52.16.14.11.18.27.2.4l-.01.37z"/>
                </svg>
              </div>
              <div>
                <a 
                  href="https://t.me/vumtienmkt" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-base font-extrabold text-blue-400 hover:underline flex items-center gap-1"
                >
                  Telegram
                </a>
                <p className="text-[11px] text-slate-400 font-medium">Fastest way to reach me</p>
              </div>
            </div>

            {/* Copy Field bar */}
            <div className="flex items-center bg-[#0C0F16] border border-blue-550/10 rounded-xl p-2.5 justify-between">
              <span className="text-[11px] font-mono text-slate-300 font-semibold select-all pr-2 truncate">
                t.me/vumtienmkt
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy('t.me/vumtienmkt', 'telegram')}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer border border-slate-800/80"
                  title="Sao chép liên kết"
                >
                  {copiedText === 'telegram' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <a 
                  href="https://t.me/vumtienmkt"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1.5 rounded-lg transition-all"
                >
                  Mở
                </a>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              ONLINE NOW
            </div>
          </div>

          {/* Zalo / Phone Chat Premium Box */}
          <div className="bg-[#10221B]/70 border border-emerald-500/20 rounded-2xl p-4.5 space-y-3.5 relative hover:border-emerald-500/35 transition-all">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20 text-white shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <a 
                  href="https://zalo.me/0962323429" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-base font-extrabold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Zalo Chat
                </a>
                <p className="text-[11px] text-slate-400 font-medium">Hỗ trợ trực tiếp Việt Nam</p>
              </div>
            </div>

            {/* Copy Field bar */}
            <div className="flex items-center bg-[#07130E] border border-emerald-550/10 rounded-xl p-2.5 justify-between">
              <span className="text-[11px] font-mono text-slate-300 font-semibold select-all pr-2 truncate">
                zalo.me/0962323429
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy('https://zalo.me/0962323429', 'zalo')}
                  className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer border border-slate-800/80"
                  title="Sao chép liên kết"
                >
                  {copiedText === 'zalo' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <a 
                  href="https://zalo.me/0962323429"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1.5 rounded-lg transition-all"
                >
                  Mở
                </a>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              ONLINE NOW
            </div>
          </div>

          {/* Secure footnote */}
          <div className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-slate-950/40 border border-slate-900 mx-auto text-[10px] text-slate-400 font-medium">
            <Lock className="w-3 h-3 text-brand-pink" />
            <span>Chính sách bảo mật dữ liệu tuyệt đối thông tin.</span>
          </div>

        </div>

      </div>
    </div>
  );
}
