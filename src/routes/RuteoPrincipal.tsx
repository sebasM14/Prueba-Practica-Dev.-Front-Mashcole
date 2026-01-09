import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Importa los componentes que SÍ tienes
import Header from '../app/private/Components/Header';
import Footer from '../app/private/Components/Footer';

export const RuteoPrincipal = () => {
  return (
    <Routes>
      {/* Ruta principal - muestra Header + Contenido + Footer */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      
      {/* Página Home */}
      <Route 
        path="/dash" 
        element={
          <>
            <Header />
            <div style={{ padding: '2rem', minHeight: '70vh' }}>
              <h1>Página Principal</h1>
              <p>Contenido de tu sitio web aquí...</p>
            </div>
            <Footer />
          </>
        } 
      />
      
      {/* Para ver solo el Header */}
      <Route path="/header" element={<Header />} />
      
      {/* Para ver solo el Footer */}
      <Route path="/footer" element={<Footer />} />
      
      {/* Ruta 404 */}
      <Route path="*" element={<div>Página no encontrada - 404</div>} />
    </Routes>
  );
};