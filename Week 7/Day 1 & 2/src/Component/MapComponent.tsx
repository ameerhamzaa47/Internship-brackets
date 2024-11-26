import React, { useEffect, useRef } from 'react';

interface MapProps {
  apiKey: string;
  lat: number;
  lng: number;
  zoom?: number;
}

const MapComponent: React.FC<MapProps> = ({ apiKey, lat, lng, zoom = 8 }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initMap = () => {
    if (mapRef.current) {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom,
      });

      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Marker',
      });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    (window as any).initMap = initMap;

    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, [apiKey, lat, lng, zoom]);

  return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};

export default MapComponent;