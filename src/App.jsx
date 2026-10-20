import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsroomPage from './pages/NewsroomPage';
import ContactPage from './pages/ContactPage';
import ItemDetailModal from './components/ItemDetailModal';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

export default function App() {
  // Simple robust state-based client router with browser history synchronization
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname;
    if (path === '/newsroom') return '/newsroom';
    if (path === '/contact') return '/contact';
    return '/';
  });

  const [modalItem, setModalItem] = useState(null);
  const [modalParent, setModalParent] = useState(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/newsroom' || path === '/contact') {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenItemModal = (item, parent) => {
    setModalItem(item);
    setModalParent(parent);
  };

  const handleCloseItemModal = () => {
    setModalItem(null);
    setModalParent(null);
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Corporate Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenItemModal={handleOpenItemModal}
      />

      {/* Main Page View */}
      {currentRoute === '/newsroom' && (
        <NewsroomPage onNavigate={navigateTo} />
      )}

      {currentRoute === '/contact' && (
        <ContactPage />
      )}

      {currentRoute === '/' && (
        <HomePage
          onNavigate={navigateTo}
          onOpenItemModal={handleOpenItemModal}
        />
      )}

      {/* Global Interactive Submenu / Showcase Modal */}
      {modalItem && (
        <ItemDetailModal
          item={modalItem}
          parent={modalParent}
          onClose={handleCloseItemModal}
          onNavigate={navigateTo}
        />
      )}

      {/* Global Corporate Directory Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenItemModal={handleOpenItemModal}
      />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
