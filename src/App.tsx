import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Routes>
          <Footer />
          <BackToTop />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}