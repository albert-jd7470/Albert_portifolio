import './AppStores.css';

export default function AppStores() {
  return (
    <section className="app-stores-section">
      <div className="section-container">
        <div className="stores-grid">
          
          <a href="https://play.google.com/store/apps/details?id=com.company.sumat&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="store-card glass interactive">
            <div className="store-icon">
              {/* Google Play icon SVG approximation */}
              <svg viewBox="0 0 24 24" fill="currentColor" height="48" width="48">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M14.41,11.28L21.3,7.31C21.78,7.04 22.09,6.54 22.1,6.03V5.97C22.09,5.46 21.78,4.96 21.3,4.69L4.6,3.06L14.41,11.28M14.41,12.72L4.6,20.94L21.3,19.31C21.78,19.04 22.09,18.54 22.1,18.03V17.97C22.09,17.46 21.78,16.96 21.3,16.69L14.41,12.72M15.11,12L19.78,15.93L20.44,15.54L15.11,12Z" />
              </svg>
            </div>
            <div className="store-info" style={{ color: 'inherit' }}>
              <h3>Google Play</h3>
              <p>Android Apps</p>
              <div className="store-meta">
                <span>Android 6.0+</span>
                <span className="dot">•</span>
                <span>★ 4.8 Rating</span>
              </div>
            </div>
          </a>

          <a href="https://apps.apple.com/in/app/5sumat%D8%AE%D8%B5%D9%88%D9%85%D8%A7%D8%AA/id6771353582" target="_blank" rel="noopener noreferrer" className="store-card glass interactive">
            <div className="store-icon">
              {/* App Store icon SVG approximation */}
              <svg viewBox="0 0 24 24" fill="currentColor" height="48" width="48">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09,22C7.78,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C12.55,4.72 11.62,5.77 10.42,6.1C10.08,4.92 10.97,3.67 12.19,3.13C12.44,3 12.72,3.04 13,3.5Z" />
              </svg>
            </div>
            <div className="store-info" style={{ color: 'inherit' }}>
              <h3>App Store</h3>
              <p>iOS Apps</p>
              <div className="store-meta">
                <span>iOS 14.0+</span>
                <span className="dot">•</span>
                <span>★ 4.9 Rating</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
