

const TrailerModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[60] bg-valley-teal/95 flex items-center justify-center p-4 animate-modal-in backdrop-blur-sm" onClick={onClose}>
    <div className="relative w-full max-w-6xl aspect-video bg-black border border-mist-grey shadow-[0_0_60px_rgba(192,53,43,0.3)]">
      <button onClick={onClose} className="absolute -top-12 right-0 text-mist-grey hover:text-lantern-red transition-colors text-lg tracking-widest font-display">
        [ 關閉 CLOSE ]
      </button>
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/tLonOGPNPFM?si=4KGd23FDp8txxDeR&autoplay=1" 
        title="Tujie Town Trailer" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default TrailerModal;