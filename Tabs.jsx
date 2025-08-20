import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet
} from '@ionic/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Bienvenida from './Bienvenida';
import Explora from './Explora';
import Acerca from './Acerca';
import Comentarios from './Comentarios';
import Eventos from './Eventos'; 


import { 
  book, 
  search, 
  informationCircleOutline, 
  calendarOutline 
} from 'ionicons/icons';

export default function Tabs() {
  const tabBarStyle = {
    '--background': '#222831',
    '--color': '#cddc39',
    '--color-selected': '#ffca28',
    '--border': 'none',
    borderRadius: '15px 15px 0 0',
    boxShadow: '0 -3px 8px rgba(0,0,0,0.3)',
    margin: '0 6px 6px 6px',
    paddingBottom: '4px',
  };

  const tabButtonStyle = {
    '--color': '#b0bec5',
    '--color-selected': '#ffca28',
    transition: 'transform 0.2s ease-in-out',
  };

  const tabIconStyle = {
    fontSize: '24px',
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Routes>
          <Route path="bienvenida" element={<Bienvenida />} />
          <Route path="explora" element={<Explora />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="comentarios" element={<Comentarios />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="*" element={<Navigate to="bienvenida" />} />
        </Routes>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" style={tabBarStyle}>
        <IonTabButton tab="bienvenida" href="/tabs/bienvenida" style={tabButtonStyle}>
          <IonIcon icon={book} style={tabIconStyle} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="explora" href="/tabs/explora" style={tabButtonStyle}>
          <IonIcon icon={search} style={tabIconStyle} />
          <IonLabel>Explora</IonLabel>
        </IonTabButton>

        <IonTabButton tab="eventos" href="/tabs/eventos" style={tabButtonStyle}>
          <IonIcon icon={calendarOutline} style={tabIconStyle} />
          <IonLabel>Eventos</IonLabel>
        </IonTabButton>

        <IonTabButton tab="acerca" href="/tabs/acerca" style={tabButtonStyle}>
          <IonIcon icon={informationCircleOutline} style={tabIconStyle} />
          <IonLabel>Acerca</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
