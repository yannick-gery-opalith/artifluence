const Logo = (props) => {
  return (
    <svg height='1.25em' viewBox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#363075', stopOpacity: 1 }} />
          <stop offset="20%" style={{ stopColor: '#363075', stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: '#7367f0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g id="BACKGROUND">
        <g id="&lt;Group&gt;">
        </g>
      </g>
      <g id="OBJECTS">
        <g id="&lt;Group&gt;">
          <g id="&lt;Group&gt;">
          </g>
        </g>
        <g id="&lt;Group&gt;">
          <path fill='url(#gradient)' id="&lt;Path&gt;"  d="m131.8 124.5c-22.6 0-40.8-18.2-40.8-40.8 0-22.6 18.2-40.8 40.8-40.8 22.6 0 40.8 18.2 40.8 40.8 0 22.6-18.2 40.8-40.8 40.8z"/>
          <path fill='url(#gradient)' id="&lt;Path&gt;"  d="m361.9 500.3c-69.4 0-125.6-56.2-125.6-125.6 0-69.5 56.2-125.6 125.6-125.6 69.4 0 125.6 56.1 125.6 125.6 0 69.4-56.2 125.6-125.6 125.6z"/>
          <g id="&lt;Group&gt;">
            <path fill='url(#gradient)' id="&lt;Path&gt;" d="m246.9 95.9c74.8 0 135.9 59.3 138.8 133.4 36.8 6 68.9 25.5 91.2 53.3 3.2-15.4 4.9-31.4 4.9-47.7 0-129.5-105.4-234.9-234.9-234.9-26.5 0-48 21.5-48 47.9 0 26.5 21.5 48 48 48z"/>
            <path fill='url(#gradient)' id="&lt;Path&gt;"  d="m214.6 374.7c0-1.6 0-3.1 0.1-4.6-61.2-14.6-106.8-69.7-106.8-135.2 0-36.6 14.1-71 39.6-97.2-6 2.4-12.6 3.7-19.5 3.7-29.8 0-53.9-24.1-53.9-53.9 0-4.7 0.6-9.2 1.7-13.5-41.2 43.7-63.8 100.6-63.8 160.9 0 129.5 105.4 234.9 234.9 234.9 0.8 0 1.6-0.1 2.4-0.1-21.6-25.6-34.7-58.8-34.7-95z"/>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;