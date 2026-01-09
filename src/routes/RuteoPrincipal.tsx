import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import Header from '../app/private/Components/Header';
import Body from '../app/private/Components/Body';
import Footer from '../app/private/Components/Footer';

export const RuteoPrincipal = () => {
  return (
    <Routes>
      {/*  Header + Contenido + Footer */}
      <Route path="/" element={<Navigate to="/dash" replace />} />
      
      {/*   Header + Body + Footer */}
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
      
      {/* Header */}
      <Route path="/header" element={<Header />} />

      {/*  Body */}
      <Route path="/body" element={<Body />} />
      
      {/* Footer */}
      <Route path="/footer" element={<Footer />} />
      
      {/* Ruta 404 */}
      <Route path="*" element={<div>Página no encontrada - 404</div>} />
    </Routes>
  );
};