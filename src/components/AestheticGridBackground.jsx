import React from 'react';

export const AestheticGridBackground = () => {
  return (
    <div className="aesthetic-bg-grid" aria-hidden="true">
      {/* Dynamic Background Gradient Mesh with Pure GPU Ambient Glow Pools */}
      <div className="dynamic-bg-gradient-mesh">
        <div className="liquid-light-pool liquid-light-pool-1" />
        <div className="liquid-light-pool liquid-light-pool-2" />
        <div className="liquid-light-pool liquid-light-pool-3" />
        <div className="liquid-light-pool liquid-light-pool-4" />
        <div className="liquid-light-pool liquid-light-pool-5" />
      </div>

      {/* 1. Baseline Ambient Layer: Extremely soft, continuous faint grid foundation */}
      <div className="grid-layer grid-layer-base" />

      {/* 2. Top-Left Organic Focal Zone: Highlights academic identity & hero left */}
      <div className="grid-layer grid-layer-focal-top-left" />

      {/* 3. Top-Right Organic Focal Zone: Framing portrait & nav */}
      <div className="grid-layer grid-layer-focal-top-right" />

      {/* 4. Center-Right Organic Focal Zone: Enriches content flow */}
      <div className="grid-layer grid-layer-focal-center-right" />

      {/* 5. Bottom Organic Focal Zone: Complements lower content */}
      <div className="grid-layer grid-layer-focal-bottom" />

      {/* 6. Technical side accents (Editorial Swiss aesthetic) */}
      <div className="grid-technical-stripe-right" />
    </div>
  );
};
