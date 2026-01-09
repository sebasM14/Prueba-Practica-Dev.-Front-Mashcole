import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Importa los componentes que SÍ tienes
import Header from '../app/private/Components/Header';
import Body from '../app/private/Components/Body';
import Footer from '../app/private/Components/Footer';

export const RuteoPrincipal = () => {
  return (
    <Routes>
      {/* Ruta principal - muestra Header + Contenido + Footer */}
      <Route path="/" element={<Navigate to="/dash" replace />} />
      
      {/* Página completa con Header + Body + Footer */}
      <Route 
        path="/dash" 
        element={
          <>
            <Header />
            <Body />
            <Footer />
          </>
        } 
      />
      
      {/* Para ver solo el Header */}
      <Route path="/header" element={<Header />} />

      {/* Para ver solo el Body */}
      <Route path="/body" element={<Body />} />
      
      {/* Para ver solo el Footer */}
      <Route path="/footer" element={<Footer />} />
      
      {/* Ruta 404 */}
      <Route path="*" element={<div>Página no encontrada - 404</div>} />
    </Routes>
  );
};