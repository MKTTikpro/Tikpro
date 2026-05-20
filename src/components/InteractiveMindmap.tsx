import { useState } from 'react';
import { Settings, UserPlus, FileVideo, MessageSquareCode, ShoppingCart, Share2, Compass, Layers, CheckCircle } from 'lucide-react';

interface MindmapNode {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: 'pink' | 'cyan' | 'green' | 'amber';
  details: string[];
}

export default function InteractiveMindmap() {
  const [activeNodeId, setActiveNodeId] = useState<string>('m1');

  const nodes: MindmapNode[] = [
    {
      id: 'm1',
      title: 'CHỨC NĂNG QUẢN LÝ',
      subtitle: 'Nền tảng kiểm soát tài khoản',
      icon: Settings,
      color: 'pink',
      details: [
        'Quản lý tập trung toàn bộ tài khoản TikTok clone không giới hạn.',
        'Hỗ trợ tích hợp đa dạng các cổng Proxy (Socks5, Tinsoft, TM Proxy) để thay đổi IP linh hoạt, chống checkpoint.',
        'Hệ thống tự động đồng bộ hóa thông tin tài khoản, tự quản lý cookie/token hoạt động trơn tru.',
        'Môi trường lưu trữ độc lập cho từng tài khoản, loại bỏ nguy cơ bị khóa liên đới.'
      ]
    },
    {
      id: 'm2',
      title: 'TĂNG TƯƠNG TÁC TÀI KHOẢN',
      subtitle: 'Build kênh từ số 0',
      icon: UserPlus,
      color: 'cyan',
      details: [
        'Cung cấp lượng lớn tim, follow chéo giữa các tài khoản vệ tinh hoàn toàn tự động.',
        'Tự động xem video theo từ khóa ngành nghề để tạo hành vi người dùng thật (warm up tài khoản).',
        'Seeding tương tác bài viết (Like, Comment, Share) kéo traffic đột biến.',
        'Thuật toán thông minh tránh bộ lọc phát hiện spam của TikTok.'
      ]
    },
    {
      id: 'm3',
      title: 'CHỨC NĂNG THEO DÕI',
      subtitle: 'Thu thập thông tin đối thủ',
      icon: Compass,
      color: 'green',
      details: [
        'Quét và bám sát các luồng livestream cùng ngành để thu thập dữ liệu người mua tiềm năng.',
        'Tự động thu thập ID người dùng vừa bình luận muốn mua hàng trên live đối thủ.',
        'Hỗ trợ kết nối và chăm sóc khách hàng tự động thông qua tiếp cận gián tiếp.'
      ]
    },
    {
      id: 'm4',
      title: 'CHỨC NĂNG ĐĂNG VIDEO',
      subtitle: 'Viral video hàng loạt',
      icon: FileVideo,
      color: 'amber',
      details: [
        'Upload video ngắn theo lịch biểu cài đặt sẵn lên hàng loạt kênh vệ tinh.',
        'Tự động lách bản quyền hình ảnh, âm thanh thông minh (lật hình, điều tốc, đổi nhạc).',
        'Tự động chèn Hashtag thịnh hành đẩy tốc độ lên xu hướng gấp 3 lần.'
      ]
    },
    {
      id: 'm5',
      title: 'CHỨC NĂNG BÌNH LUẬN',
      subtitle: 'Cướp khách & Seeding phủ',
      icon: MessageSquareCode,
      color: 'pink',
      details: [
        'Rải bình luận thông minh có spin tax (tránh trùng lặp từ ngữ) trên diện rộng.',
        'Auto seeding bình luận chốt đơn điều hướng khách hàng về giỏ hàng chính của bạn.',
        'Thiết lập khoảng trễ (delay) linh hoạt giữa các nick, tối ưu tuyệt đối hóa hành tung thực tế.'
      ]
    },
    {
      id: 'm6',
      title: 'SEEDING LIVE TỰ ĐỘNG',
      subtitle: 'Kịch bản bão đơn không lối thoát',
      icon: Share2,
      color: 'cyan',
      details: [
        'Điều hướng hàng ngàn nick nhảy vào xem livestream chỉ với 1 click duy nhất.',
        'Seeding kịch bản chốt đơn tự nhiên: kẻ tung người hứng, giả dạng khách chốt mua gấp gáp.',
        'Tăng lượng mắt liên tục từ thấp đến cao kích thích thuật toán TikTok tự phân phối thêm khách thật vào phòng live.'
      ]
    },
    {
      id: 'm7',
      title: 'CHỨC NĂNG GIỎ HÀNG',
      subtitle: 'Thăng hạng mức độ uy tín shop',
      icon: ShoppingCart,
      color: 'green',
      details: [
        'Giả lập hành vi click khám phá sản phẩm trong giỏ hàng TikTok Shop để tăng lượt nhấp (CTR).',
        'Tự động thêm sản phẩm vào giỏ hàng từ đó kích hoạt thông báo chốt đơn ảo trong phiên live.',
        'Gia tăng điểm chất lượng (Quality Score) giúp sản phẩm của bạn dễ dàng lọt top thịnh hành TikTok.'
      ]
    }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];
  const IconComponent = activeNode.icon;

  const colorStyles = {
    pink: {
      bg: 'bg-brand-pink/10',
      border: 'border-brand-pink/50',
      text: 'text-brand-pink',
      glow: 'shadow-md shadow-brand-pink/5',
      bullet: 'bg-brand-pink'
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/50',
      text: 'text-cyan-700',
      glow: 'shadow-md shadow-cyan-500/5',
      bullet: 'bg-cyan-600'
    },
    green: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/50',
      text: 'text-emerald-700',
      glow: 'shadow-md shadow-emerald-500/5',
      bullet: 'bg-emerald-600'
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/50',
      text: 'text-amber-750',
      glow: 'shadow-md shadow-amber-500/5',
      bullet: 'bg-amber-600'
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-md" id="mindmap-section">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[10px] font-mono tracking-widest text-brand-pink uppercase px-2.5 py-1 rounded bg-brand-pink/10 font-bold border border-brand-pink/20">
          Infographic tương tác
        </span>
        <h3 className="text-2xl font-bold font-display text-slate-900 mt-3">Các Trực Quan Trọng Điểm Doanh Số</h3>
        <p className="text-sm text-slate-500 mt-2">Nhấp vào từng nhóm tính năng để khám phá chi tiết cách MKT TikPro bứt phá mắt xem và đơn hàng livestream của bạn</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Core Node Selector lists (5 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-2.5 justify-center">
          {nodes.map((node) => {
            const isActive = node.id === activeNodeId;
            const nodeStyles = colorStyles[node.color];
            const NodeIcon = node.icon;
            
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`w-full p-4 rounded-xl text-left border transition-all duration-300 flex items-center gap-4 cursor-pointer relative overflow-hidden group ${
                  isActive
                    ? `${nodeStyles.bg} ${nodeStyles.border} ${nodeStyles.glow} scale-[1.02]`
                    : 'bg-slate-50 border-slate-200/80 hover:border-slate-300 hover:bg-slate-100/50 text-slate-600'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all ${
                    isActive 
                      ? `${nodeStyles.bg} ${nodeStyles.border} ${nodeStyles.text}` 
                      : 'bg-white border-slate-200 text-slate-550 group-hover:text-slate-800'
                  }`}
                >
                  <NodeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-xs font-bold font-display tracking-wide ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                    {node.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">{node.subtitle}</p>
                </div>

                {/* Left glowing bar on hover/active */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-r transition-all ${
                    isActive ? nodeStyles.bullet : 'bg-transparent group-hover:bg-slate-300'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Node detail visualization canvas (8 Cols) */}
        <div className="lg:col-span-8 bg-slate-50/50 rounded-xl border border-slate-200/80 p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
          {/* Subtle background glow grid pattern */}
          <div className="absolute inset-0 bg-grid pointer-events-none opacity-5" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6 mb-6">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 ${
                  colorStyles[activeNode.color].bg
                } ${colorStyles[activeNode.color].border} ${colorStyles[activeNode.color].text}`}
              >
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider font-semibold text-slate-400 uppercase">
                  MÔ-ĐUN PHẦN MỀM CHUYÊN NGHIỆP
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 font-display mt-0.5">
                  {activeNode.title}
                </h4>
              </div>
            </div>

            <div className="space-y-4">
              {activeNode.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-slate-150 hover:border-slate-250 transition-all text-left shadow-sm"
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5 ${
                      colorStyles[activeNode.color].bullet
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-705 leading-relaxed flex-1">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-205 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping" />
              <span className="text-[10px] text-slate-500 font-mono">Đã tối ưu hóa thuật toán tương tác mới nhất v2.6.2</span>
            </div>
            <a
              href="#booking-cta"
              className="text-xs font-bold text-brand-pink hover:text-rose-600 flex items-center gap-1 transition-all"
            >
              Yêu cầu tư vấn tính năng này →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
