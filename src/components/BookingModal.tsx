import { useState, FormEvent } from 'react';
import { X, Calendar, ClipboardCheck, MessageCircle, Phone, ArrowRight, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export default function BookingModal({ isOpen, onClose, selectedPlan = 'free-demo' }: BookingModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [plan, setPlan] = useState(selectedPlan);
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    // Persist to localStorage for full fidelity customer history
    const bookings = JSON.parse(localStorage.getItem('mkt_bookings') || '[]');
    const newBooking = {
      id: Date.now(),
      name,
      contact,
      plan,
      notes,
      time: new Date().toLocaleString(),
      status: 'Đang xử lý'
    };
    localStorage.setItem('mkt_bookings', JSON.stringify([newBooking, ...bookings]));

    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md cursor-pointer" 
        onClick={onClose}
      />

      {/* Booking Form Card */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 text-left shadow-2xl z-10 overflow-hidden select-text animate-fade-in">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#06B6D4] font-bold uppercase">
                🎯 Nhận tư vấn 1-1 miễn phí
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">Đăng Ký MKT TikPro Demo</h3>
              <p className="text-xs text-slate-500">Để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ hướng dẫn cài đặt trực tiếp qua Zalo/SĐT trong 5 phút.</p>
            </div>

            {/* In-form checklist */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Tặng 1 buổi live demo trực tiếp cùng chuyên viên</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Hỗ trợ cài đặt Ultraviewer/Teamviewer miễn phí</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Full name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 font-sans">
                  <User className="w-3.5 h-3.5 text-brand-pink" />
                  Họ và tên của bạn
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn A"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-pink"
                />
              </div>

              {/* Phone / Zalo */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 font-sans">
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  Số Điện Thoại / Zalo
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Nhập SĐT để kích hoạt bản dùng thử..."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-pink"
                />
              </div>

              {/* Plan Choice dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 font-sans">
                  <ClipboardCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Lựa chọn gói dịch vụ của bạn
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 focus:outline-none focus:border-brand-pink"
                >
                  <option value="free-demo">🎁 Bản dùng thử Demo Miễn Phí</option>
                  <option value="1-year">Gói 1 Năm - 3.000.000 VNĐ</option>
                  <option value="5-year">Gói 5 Năm (Ưu đãi) - 7.000.000 VNĐ</option>
                  <option value="10-year">Gói 10 Năm (Doanh Nghiệp) - 12.000.000 VNĐ</option>
                </select>
              </div>

              {/* Custom message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 font-sans">
                  <MessageCircle className="w-3.5 h-3.5 text-slate-500" />
                  Ghi chú hoặc ngành hàng của bạn (Tùy chọn)
                </label>
                <textarea
                  placeholder="Ví dụ: Shop quần áo nữ, muốn tăng mắt xem để chốt đơn..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-pink resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-brand-pink to-pink-650 hover:brightness-110 font-bold text-xs tracking-wider uppercase text-white transition-all shadow-lg shadow-brand-pink-glow flex items-center justify-center gap-2 cursor-pointer"
            >
              Gửi thông tin đăng ký
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </form>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl animate-bounce">
              ✓
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 font-display">Đăng Ký Thành Công!</h3>
              <p className="text-xs text-slate-650 px-4">
                Đội ngũ của chúng tôi đã nhận được thông tin đăng ký gói <span className="text-cyan-600 font-bold font-mono">{plan.toUpperCase()}</span> từ khách hàng <span className="text-brand-pink font-bold">{name}</span>.
              </p>
              <p className="text-xs text-slate-500 px-6 mt-1">
                Chuyên viên TikPro sẽ nhắn tin tư vấn trực tiếp vào số zalo <span className="text-slate-800 hover:underline">{contact}</span> trong khoảng 5-10 phút tới. Xin cảm ơn quý khách!
              </p>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-6 py-2 px-6 rounded-lg bg-slate-100 border border-slate-250 text-xs text-slate-700 hover:bg-slate-200 transition-all cursor-pointer font-bold font-sans"
            >
              Đóng cửa sổ
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
