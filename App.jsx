import React, { useEffect, useState } from 'react';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  setupIonicReact,
} from '@ionic/react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* Páginas */
import Bienvenida from './pages/Bienvenida';
import AgregarLibro from './pages/AgregarLibro';
import ListaLibros from './pages/ListaLibros';
import Contacto from './pages/Contacto';
import Categorias from './pages/Categorias';
import Favoritos from './pages/Favoritos';
import Tabs from './pages/Tabs';

/* Ionic CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

export default function App() {
  const [libros, setLibros] = useState([]);

  // Cargar libros de localStorage
  useEffect(() => {
    const guardados = localStorage.getItem('libros');
    if (guardados) setLibros(JSON.parse(guardados));
  }, []);

  // Guardar libros en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('libros', JSON.stringify(libros));
  }, [libros]);

  // Agregar un libro
  const agregarLibro = (nuevo) => {
    setLibros([...libros, nuevo]);
    alert('Libro agregado con éxito 📚');
  };

  // Eliminar libro
  const eliminarLibro = (index) => {
    const nuevos = libros.filter((_, i) => i !== index);
    setLibros(nuevos);
  };

  // Marcar o desmarcar favorito
  const toggleFavorito = (index) => {
    const nuevos = libros.map((libro, i) =>
      i === index ? { ...libro, favorito: !libro.favorito } : libro
    );
    setLibros(nuevos);
  };

  return (
    <IonApp>
      <IonSplitPane contentId="main-content">
        {/* Menú lateral */}
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Mundo de Libros</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/tabs/bienvenida" routerDirection="none">
                Inicio
              </IonItem>
              <IonItem routerLink="/agregar" routerDirection="none">
                Agregar Libro
              </IonItem>
              <IonItem routerLink="/lista" routerDirection="none">
                Lista de Libros
              </IonItem>
              <IonItem routerLink="/categorias" routerDirection="none">
                Categorías
              </IonItem>
              <IonItem routerLink="/favoritos" routerDirection="none">
                Favoritos
              </IonItem>
              <IonItem routerLink="/contacto" routerDirection="none">
                Contacto
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        {/* Contenido principal */}
        <IonRouterOutlet id="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/tabs/bienvenida" />} />
            <Route path="/tabs/*" element={<Tabs />} />
            <Route path="/agregar" element={<AgregarLibro onAgregar={agregarLibro} />} />
            <Route
              path="/lista"
              element={
                <ListaLibros
                  libros={libros}
                  onToggleFavorito={toggleFavorito}
                  onEliminarLibro={eliminarLibro} 
                />
              }
            />
            <Route path="/categorias" element={<Categorias libros={libros} />} />
            <Route path="/favoritos" element={<Favoritos libros={libros} onToggleFavorito={toggleFavorito} />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/tabs/bienvenida" />} />
          </Routes>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  );
}
