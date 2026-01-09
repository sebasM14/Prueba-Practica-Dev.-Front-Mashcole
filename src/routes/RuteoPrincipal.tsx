import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy loading 
const LazyHeader = lazy(() => import('../app/private/Components/Header'));

// Componente de carga
const Loading = () => (
  <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
    <div className='text-center'>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <br/>
      <span className='fst-italic fs-5 text-primary mt-2'>Cargando módulo...</span>
    </div>
  </div>
);

export const RuteoPrincipal = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Navigate to="/dash" replace />} />
      
      {/* Ruta del dashboard con Header */}
      <Route 
        path="/dash/*" 
        element={
          <Suspense fallback={<Loading />}>
            <LazyHeader />
          </Suspense>
        } 
      />
      
      {/* Ruta específica para Header */}
      <Route 
        path="/header" 
        element={
          <Suspense fallback={<Loading />}>
            <LazyHeader />
          </Suspense>
        } 
      />
      
      {/* Otras rutas */}
      <Route 
        path="/home" 
        element={
          <Suspense fallback={<Loading />}>
            <LazyHeader />
          </Suspense>
        } 
      />
      
      {/* Ruta 404 */}
      <Route path="*" element={<div>Página no encontrada - 404</div>} />
    </Routes>
  );
};