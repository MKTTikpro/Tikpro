import { FeedBackItem, PricingPlan, FAQItem, MockChatMessage } from './types';

export const HERO_FEATURES = [
  { id: 'mat-xem', text: 'Tăng mắt xem livestream', icon: 'Eye' },
  { id: 'comment-auto', text: 'Tăng comment tự động', icon: 'MessageSquare' },
  { id: 'tim', text: 'Tăng lượt tim', icon: 'Heart' },
  { id: 'dong-nguoi', text: 'Tạo hiệu ứng đông người', icon: 'Users' },
  { id: 'tiet-kiem', text: 'Tiết kiệm thời gian vận hành', icon: 'Clock' },
  { id: 'nhieu-acc', text: 'Hỗ trợ nhiều tài khoản', icon: 'ShieldCheck' }
];

export const GENERAL_STATS = [
  { value: '4.9/5', label: 'ĐÁNH GIÁ KHÁCH HÀNG', sub: '★★★★★ từ hơn 2,500 đánh giá' },
  { value: '5.000+', label: 'KHÁCH HÀNG ĐÃ DÙNG', sub: 'Thương hiệu & Nhà bán lẻ' },
  { value: '50.000+', label: 'LIVESTREAM HỖ TRỢ', sub: 'Chiến dịch bùng nổ doanh số' },
  { value: '10 TRIỆU+', label: 'LƯỢT TƯƠNG TÁC', sub: 'Tim, Comment, Chia sẻ tự động' },
  { value: '98%', label: 'KHÁCH HÀNG HÀI LÒNG', sub: 'Cam kết tăng trưởng doanh số' }
];

export const HIGHLIGHTS = [
  {
    title: 'Tăng tương tác',
    desc: 'Hệ thống auto comment, thả tim tự nhiên, kích thích khách hàng thật đang xem livestream cùng tham gia hỏi mua hàng.',
    icon: 'BrainCircuit'
  },
  {
    title: 'Tăng thời gian xem',
    desc: 'Giữ chân khán giả ở lại livestream lâu hơn nhờ không khí nhộn nhịp, sôi động, tăng tỷ lệ ăn đề xuất từ thuật toán TikTok.',
    icon: 'Hourglass'
  },
  {
    title: 'Tăng tỷ lệ chuyển đổi',
    desc: 'Tạo hiệu ứng đám đông (FOMO), kích thích tâm lý mua sắm gấp gáp, giúp thúc đẩy chuyển đổi đơn hàng cực nhanh.',
    icon: 'TrendingUp'
  }
];

export const GRID_FEATURES = [
  { title: 'Tăng mắt xem', desc: 'Kéo lượng lớn traffic tự nhiên vào luồng live, giúp tăng uy tín nhanh chóng.', id: 'f1', icon: 'Flame' },
  { title: 'Auto Comment', desc: 'Hệ thống tự động seeding kịch bản chốt đơn mượt mà theo kịch bản chuẩn SEO.', id: 'f2', icon: 'MessageCircleDot' },
  { title: 'Auto Thả Tim', desc: 'Tăng chỉ số tim/like liên tục, đưa phòng live bứt phá lên đề xuất thịnh hành.', id: 'f3', icon: 'Sparkles' },
  { title: 'Tương tác thời gian thực', desc: 'Phản hồi bình luận ngay lập tức theo diễn biến livestream của streamer.', id: 'f4', icon: 'Zap' },
  { title: 'Quản lý nhiều tài khoản', desc: 'Vận hành hàng ngàn clone cùng lúc dễ dàng mà không sợ checkpoint hay khóa luồng.', id: 'f5', icon: 'Layers' },
  { title: 'Dashboard báo cáo', desc: 'Theo dõi chi tiết hiệu quả chiến dịch realtime với trực quan số liệu sinh động.', id: 'f6', icon: 'BarChart3' },
  { title: 'Chạy tự động', desc: 'Set up 1 lần, hệ thống tự động vận hành liên tục 24/7 theo lịch của bạn.', id: 'f7', icon: 'Cpu' },
  { title: 'Dễ sử dụng', desc: 'Giao diện thân thiện thuần Việt, chỉ 3 click chuột là kích hoạt chiến dịch thành công.', id: 'f8', icon: 'Touchpad' }
];

export const FEEDBACKS: FeedBackItem[] = [
  {
    id: 'fb1',
    name: 'Chị Giang - Đồ Gia Dụng',
    role: 'Chủ Cửa Hàng Đồ Gia Dụng',
    handle: '@giang_giadung',
    content: 'Tăng mắt xem cực nhanh và mượt mà trên TikTok Live! Lúc trước live bán đồ gia dụng chỉ có lẹt đẹt 5-10 người xem, từ ngày gắn MKT TikPro seeding bình luận chốt đơn tự động, phòng live xôm hẳn lên, khách thật thấy đông cũng tin tưởng chốt hàng rầm rầm!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    viewsGained: '+1.800 Viewers',
    youtubeUrl: 'https://www.youtube.com/embed/pj2x5UE9vSU'
  },
  {
    id: 'fb2',
    name: 'Anh Bùi Trường Thịnh',
    role: 'Xây Kênh Livestream Gốm Sứ',
    handle: '@thinh_ceramic',
    content: 'Phần mềm thực sự mang lại hiệu quả vượt mong đợi cho livestream gốm sứ và đồ trang trí sân vườn của mình. Chức năng auto comment theo kịch bản cực kỳ thông minh, hỏi thăm kích thước, chất lượng men rất đúng ý đồ giúp chốt đơn dễ dàng!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    viewsGained: '+3.500 Viewers',
    youtubeUrl: 'https://www.youtube.com/embed/gxdwgwLf2P0'
  },
  {
    id: 'fb3',
    name: 'Anh Tân - Livestream TikTok',
    role: 'Chủ Shop Thời Trang Điện Tử',
    handle: '@tan_live_tiktok',
    content: 'Hệ thống tương tác thả tim và seeding của MKT TikPro vận hành rất ổn định. Mình được đội ngũ kỹ thuật cài đặt và hướng dẫn tận tình nên tuy không rành công nghệ vẫn vận hành dễ dàng, mắt xem thật tăng rất tự nhiên.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop',
    viewsGained: '+1.200 Viewers',
    youtubeUrl: 'https://www.youtube.com/embed/mReAXqPSvJ8'
  },
  {
    id: 'fb4',
    name: 'Chị Thanh - Mỹ Phẩm Thanh Vy',
    role: 'Chủ Thương Hiệu Mỹ Phẩm Spa',
    handle: '@thanh_cosmetics',
    content: 'Seeding mỹ phẩm quan trọng nhất là tạo lòng tin và kích thích mua bán. MKT TikPro giải quyết quá xuất sắc việc này khi liên tục tự động phân bổ clone vào khen chất kem, hỏi mẫu hàng, giúp các buổi livestream của bên mình luôn ngập tràn tương tác!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    viewsGained: '+2.400 Viewers',
    youtubeUrl: 'https://www.youtube.com/embed/e39HBp5sgNI'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1-year',
    name: 'GÓI 1 NĂM',
    price: '3.000.000 VNĐ',
    period: '/ năm',
    monthlyRef: '~250.000 VNĐ/tháng',
    savings: null,
    badge: null,
    features: [
      'Toàn bộ tính năng MKT TikPro',
      'Tăng mắt xem livestream',
      'Auto comment theo kịch bản',
      'Auto thả tim livestream',
      'Chạy kịch bản tự động',
      'Hỗ trợ nhiều tài khoản',
      'Hỗ trợ cài đặt từ xa',
      'Hướng dẫn sử dụng 1-1',
      'Cập nhật phiên bản mới',
      'Hỗ trợ kỹ thuật trong quá trình sử dụng'
    ]
  },
  {
    id: '5-year',
    name: 'GÓI 5 NĂM',
    price: '7.000.000 VNĐ',
    period: '/ 5 năm',
    monthlyRef: '~116.000 VNĐ/tháng',
    savings: 'Tiết kiệm hơn 53%',
    badge: { text: 'ĐƯỢC CHỌN NHIỀU NHẤT', type: 'pink' },
    features: [
      'Toàn bộ tính năng MKT TikPro',
      'Tăng mắt xem livestream',
      'Auto comment theo kịch bản',
      'Auto thả tim livestream',
      'Chạy kịch bản tự động',
      'Hỗ trợ nhiều tài khoản',
      'Hỗ trợ cài đặt từ xa',
      'Hướng dẫn sử dụng 1-1',
      'Cập nhật phiên bản mới',
      'Hỗ trợ kỹ thuật trong quá trình sử dụng'
    ]
  },
  {
    id: '10-year',
    name: 'GÓI 10 NĂM',
    price: '12.000.000 VNĐ',
    period: '/ 10 năm',
    monthlyRef: '~100.000 VNĐ/tháng',
    savings: 'Tiết kiệm tối đa',
    badge: { text: 'TIẾT KIỆM TỐI ĐA', type: 'cyan' },
    features: [
      'Toàn bộ tính năng MKT TikPro',
      'Tăng mắt xem livestream',
      'Auto comment theo kịch bản',
      'Auto thả tim livestream',
      'Chạy kịch bản tự động',
      'Hỗ trợ nhiều tài khoản',
      'Hỗ trợ cài đặt từ xa',
      'Hướng dẫn sử dụng 1-1',
      'Cập nhật phiên bản mới',
      'Hỗ trợ kỹ thuật trong quá trình sử dụng'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Tăng mắt TikPro có bị khóa tài khoản livestream hay không?',
    answer: 'Hoàn toàn AN TOÀN. MKT TikPro sử dụng công nghệ tăng tương tác tự nhiên (organic interactions) thông qua trình duyệt sạch, không can thiệp vào mã nguồn hay lỗ hổng của TikTok. Nó hoạt động y hệt hành vi người dùng thật, giúp phòng live của bạn an toàn 100%.'
  },
  {
    question: 'Tôi có thể tự soạn kịch bản bình luận của riêng mình không?',
    answer: 'Có, hoàn toàn được! Bạn có thể soạn bao nhiêu dòng tùy ý. Mỗi tài khoản sẽ nhận một bình luận ngẫu nhiên hoặc theo thứ tự bạn thiết lập, với độ trễ (delay) có thể điều chỉnh để tạo cảm giác tự nhiên nhất.'
  },
  {
    question: 'Phần mềm này chạy trên điện thoại hay máy tính?',
    answer: 'Phần mềm MKT TikPro chạy tối ưu nhất trên máy tính (hệ điều hành Windows). Nó cho phép bạn quản lý và điều khiển hàng trăm tài khoản clone ảo chạy đồng thời nhẹ nhàng nhờ tối ưu hóa tài nguyên phần cứng.'
  },
  {
    question: 'Khi mua tôi có được hướng dẫn cài đặt từ xa không?',
    answer: 'Chắc chắn rồi. Đội ngũ kỹ sư hỗ trợ của MKT TikPro sẵn sàng UltraViewer / TeamViewer để cài đặt phần mềm trực tiếp lên máy tính của bạn, hướng dẫn cách liên kết tài khoản và tạo chiến dịch trực quan 1-1 cho đến khi bạn thuần thục.'
  }
];

export const COMMENT_SCRIPTS = {
  fashion: [
    'Cho em xem đầm đỏ mẫu đang mặc với ạ!',
    'Mẫu cao 1m62 nặng 51kg mặc size gì vừa ạ?',
    'Đặt mua 1 cái rồi nhé shop, gửi sớm giùm nha.',
    'Có được kiểm tra hàng trước khi thanh toán không ạ?',
    'Mã giảm giá lấy ở đâu thế shop ơi?',
    'Vải thun hay cải cotton vậy ạ?',
    'Hàng đẹp lắm mọi người ơi, mình mua lần 2 rồi nè',
    'Chất vải sờ sướng tay cực, đáng mua lắm',
    'Giao hàng nhanh thật, hôm qua đặt sáng nay có rồi'
  ],
  cosmetics: [
    'Kem dưỡng ẩm này da nhạy cảm dùng được không shop?',
    'Vừa chốt đơn combo trắng da sịn sò nha shop',
    'Serum xài bao lâu thì thấy hiệu quả vậy ạ?',
    'Mùi thơm dễ chịu lắm, dùng cực thích nha khách ơi',
    'Có phiếu bảo hành chính hãng không ạ?',
    'Uiii rẻ dã man ý, săn sale được giá hời quá',
    'Tư vấn cho em da dầu mụn với ạ',
    'Check hộp thư em gửi nha shop yêu',
    'Mua tặng mẹ xài mẹ khen quá trời'
  ],
  homeware: [
    'Nồi chiên không dầu bảo hành bao lâu thế shop?',
    'Mới đặt cái thứ 2 cho mẹ chồng, hàng chất lượng lắm',
    'Ship về Đà Nẵng mất bao lâu vậy ạ?',
    'Sản phẩm này có dùng pin hay cắm điện trực tiếp?',
    'Mã giảm giá 50k áp kiểu gì vậy mọi người ơi?',
    'Hàng tiện ích thiết kế thông minh quá',
    'Giá hời dã man, bên ngoài bán đắt gấp đôi',
    'Em nhận được rồi nha, đóng gói cực kỳ cẩn thận',
    'Đã chốt, mong shop gửi hàng sớm hộ em'
  ],
  general: [
    'Phòng live đông vui quá shop ơi!',
    'Thả tim mỏi tay luôn nè shop',
    'Shop bán hàng có tâm ghê, tư vấn dễ thương',
    'Chúc shop bão đơn ngày hôm nay nhé!',
    'Hello shop nhé',
    'Streamer dễ thương quá, nói chuyện cuốn ghê',
    'Có quà tặng kèm không ạ?',
    'Uy tín chất lượng 10 điểm',
    'Hàng xịn giá tốt nha mng'
  ]
};

export const FLOWING_REACTIONS = [
  '❤️', '💖', '🔥', '🌟', '🥳', '😍', '👍', '🥰'
];
