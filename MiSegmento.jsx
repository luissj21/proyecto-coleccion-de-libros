import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import { useState } from 'react';

export default function MiSegmento() {
  const [valor, setValor] = useState('agregar');

  return (
    <div style={{ padding: '10px', backgroundColor: '#0d0d0d', borderRadius: '12px', boxShadow: '0 0 10px #d4af37aa', margin: '10px' }}>
      <IonSegment 
        value={valor} 
        onIonChange={e => setValor(e.detail.value)}
        style={{ 
          backgroundColor: '#1a1a1a', 
          borderRadius: '10px',
          boxShadow: 'inset 0 0 5px #d4af37aa'
        }}
      >
        <IonSegmentButton value="agregar" style={{ borderRadius: '10px' }}>
          <IonLabel style={{ 
            color: valor === 'agregar' ? '#0d0d0d' : '#f5deb3', 
            fontWeight: 'bold', 
            fontFamily: "'Merriweather', serif", 
            textShadow: valor === 'agregar' ? '0 0 5px #d4af37' : 'none' 
          }}>
            Agregar Libro
          </IonLabel>
        </IonSegmentButton>

        <IonSegmentButton value="lista" style={{ borderRadius: '10px' }}>
          <IonLabel style={{ 
            color: valor === 'lista' ? '#0d0d0d' : '#f5deb3', 
            fontWeight: 'bold', 
            fontFamily: "'Merriweather', serif", 
            textShadow: valor === 'lista' ? '0 0 5px #d4af37' : 'none' 
          }}>
            Lista de Libros
          </IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
}
