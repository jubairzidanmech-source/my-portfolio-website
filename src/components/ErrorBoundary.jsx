import React from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
          <div style={{
            background: 'var(--blue-soft)',
            border: '1px solid rgba(183, 189, 225, 0.4)',
            borderRadius: '20px',
            padding: '40px 32px',
            maxWidth: '560px',
            margin: '0 auto',
            boxShadow: '0 8px 30px rgba(51, 46, 80, 0.08)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#FEE2E2',
              color: '#DC2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px'
            }}>
              <AlertCircle size={28} />
            </div>

            <h2 style={{ fontSize: '1.45rem', color: '#1E1B2E', marginBottom: '10px' }}>
              Failed to load this section
            </h2>

            <p style={{ fontSize: '0.9rem', color: '#6A6682', marginBottom: '24px' }}>
              {this.state.error?.message || "A temporary error occurred while rendering this page."}
            </p>

            <button
              onClick={this.handleReload}
              className="btn btn-primary"
              style={{ fontSize: '0.88rem', padding: '10px 22px' }}
            >
              <RefreshCw size={15} />
              <span>Reload Section</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
