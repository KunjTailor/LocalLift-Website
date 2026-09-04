import { ImageResponse } from 'next/og';

export const alt =
  'LocalLift Studios — professional websites for local businesses for $500 flat';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#F8FAFC',
          color: '#0F172A',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          overflow: 'hidden',
          padding: '64px 72px',
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#DBEAFE',
            borderRadius: 999,
            display: 'flex',
            height: 420,
            position: 'absolute',
            right: -100,
            top: -190,
            width: 420,
          }}
        />

        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: 28,
            fontWeight: 800,
            gap: 18,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#1D4ED8',
              display: 'flex',
              height: 34,
              justifyContent: 'center',
              transform: 'rotate(45deg)',
              width: 34,
            }}
          >
            <div
              style={{
                background: '#FFFFFF',
                display: 'flex',
                height: 15,
                width: 15,
              }}
            />
          </div>
          <span>LocalLift Studios</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            maxWidth: 950,
          }}
        >
          <div
            style={{
              color: '#1D4ED8',
              display: 'flex',
              fontSize: 25,
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Built for local businesses
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 66,
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 1.05,
            }}
          >
            Professional websites. $500 flat.
          </div>
          <div
            style={{
              color: '#475569',
              display: 'flex',
              fontSize: 28,
              fontWeight: 500,
            }}
          >
            No required monthly LocalLift fees. You own your website.
          </div>
        </div>

        <div
          style={{
            alignItems: 'center',
            borderTop: '2px solid #E2E8F0',
            color: '#475569',
            display: 'flex',
            fontSize: 21,
            justifyContent: 'space-between',
            paddingTop: 24,
          }}
        >
          <span>Downingtown, Pennsylvania</span>
          <span>localliftstudios.com</span>
        </div>
      </div>
    ),
    size,
  );
}
