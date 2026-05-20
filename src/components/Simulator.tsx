import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function Simulator() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'Ip1CgdltP3A';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="max-w-4xl mx-auto w-full" id="live-simulator">
      {/* Premium glowing video container with full-width & 16:9 aspect ratio */}
      <div className="relative w-full aspect-[16/9] rounded-[24px] bg-white border border-slate-200 p-2 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
        
        {/* Absolute glowing gradients for a gorgeous 3D color pop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-brand-pink/10 to-brand-cyan/10 blur-[60px] pointer-events-none rounded-full" />
        
        {/* TikTok pink & cyan glowing double border overlay */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-pink via-rose-500 to-brand-cyan rounded-[25px] opacity-75 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 pointer-events-none" />
        
        {/* Inner card containing the iframe or high-definition trigger cover with rounded corners */}
        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-950 z-10 shadow-inner">
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?start=26&autoplay=1&rel=0`}
              title="MKT TikPro Video Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 cursor-pointer overflow-hidden group/video"
            >
              <img 
                src={thumbnailUrl} 
                alt="MKT TikPro Demo Thumbnail"
                className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover/video:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-black/35 group-hover/video:bg-black/25 transition-colors duration-300" />
              
              {/* Centered glowing play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/95 text-slate-900 border border-slate-200/50 flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover/video:scale-110 group-hover/video:bg-brand-pink group-hover/video:text-white group-hover/video:border-brand-pink group-hover/video:rotate-12">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              
              {/* Premium label corner */}
              <div className="absolute bottom-4 left-4 bg-slate-900/85 backdrop-blur-md text-white border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider flex items-center gap-2 select-none">
                <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
                <span>BẤM XEM DEMO TRỰC TIẾP</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
