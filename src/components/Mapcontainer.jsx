import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 31.2623883, lng: 75.7035970 },
      zoom: 20
    });
    
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '300px' }}

      
    />
    
  );
};

export default GoogleMap;