import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
import MiSegmento from './MiSegmento';

export default function Bienvenida() {
  return (
    <IonPage style={{ backgroundColor: '#0d0d0d' }}>
      <IonHeader>
        <IonToolbar color="dark" style={{ backgroundColor: '#1a1a1a' }}>
          <IonButtons slot="start">
            <IonMenuButton style={{ color: '#f5deb3' }} />
          </IonButtons>
          <IonTitle
            style={{
              color: '#f5deb3',
              fontWeight: 'bold',
              letterSpacing: '1.2px',
              textShadow: '0 0 6px #d4af37',
            }}
          >
            Biblioteca Digital
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-no-padding" style={{ position: 'relative' }}>
       
        <IonImg
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1050&q=80"
          alt="Biblioteca Digital"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            filter: 'brightness(0.4) contrast(1.2)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />

      
        <div
          style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#f5deb3',
            textAlign: 'center',
            padding: '1rem',
            zIndex: 2,
            fontFamily: "'Merriweather', serif",
            textShadow: '0 0 8px #d4af37, 0 0 15px #8b7500',
          }}
        >
          <h1 style={{ fontSize: '2.4rem', marginBottom: '0.8rem', fontWeight: '900' }}>
            📚 Bienvenido a <br /> Mundo de Libros
          </h1>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', maxWidth: '360px', margin: '0 auto' }}>
            "Donde cada página abre un nuevo universo.  
            Descubre, guarda y comparte tus lecturas favoritas."
          </p>
        </div>

        {/* Botón flotante */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed" style={{ zIndex: 10 }}>
          <IonFabButton
            color="warning"
            onClick={() => alert('¡Explora nuestra colección de libros!')}
            style={{
              backgroundColor: '#f5deb3',
              boxShadow: '0 0 10px #d4af37, 0 0 20px #d4af37',
            }}
          >
            <IonIcon
              icon={bookOutline}
              style={{
                color: '#0d0d0d',
                fontSize: '26px',
              }}
            />
          </IonFabButton>
        </IonFab>

        <div
          style={{
            position: 'relative',
            zIndex: 5,
            marginTop: '65vh',
            padding: '1rem',
          }}
        >
          <MiSegmento />
        </div>
      </IonContent>
    </IonPage>
  );
}
