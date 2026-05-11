import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0A0A0F',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 68,
            fontWeight: 700,
            color: '#F5A623',
            letterSpacing: -2,
          }}
        >
          {'</>'}
        </span>
      </div>
    ),
    { ...size },
  );
}
