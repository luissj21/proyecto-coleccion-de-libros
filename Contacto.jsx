import { useState, useEffect } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  IonContent, IonItem, IonLabel, IonInput, IonButton, IonList
} from '@ionic/react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [guardado, setGuardado] = useState(null);

  useEffect(() => {
    const datos = localStorage.getItem('contacto');
    if (datos) setGuardado(JSON.parse(datos));
  }, []);

  const handleSubmit = () => {
    const data = { nombre, mensaje };
    localStorage.setItem('contacto', JSON.stringify(data));
    setGuardado(data);
    setNombre('');
    setMensaje('');
    alert("Mensaje guardado ✅");
  };

  const inputTextStyle = {
    color: '#333333', 
    fontFamily: "'Merriweather', serif",
  };

  const placeholderStyle = { color: '#555555' }; 

  return (
    <IonPage style={{ backgroundColor: '#f9f9f9' }}>
      <IonHeader>
        <IonToolbar style={{ backgroundColor: '#dfe6e9' }}>
          <IonButtons slot="start"><IonMenuButton /></IonButtons>
          <IonTitle style={{ color: '#2d3436', fontWeight: 'bold', fontFamily: "'Merriweather', serif" }}>
            Contacto
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonItem style={{ backgroundColor: '#ffffff', marginBottom: '12px', borderRadius: '6px', borderLeft: '4px solid #6c5ce7' }}>
            <IonLabel position="stacked" style={{ color: '#2d3436', fontWeight: 'bold' }}>Nombre</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={(e) => setNombre(e.detail.value)}
              style={inputTextStyle}
              placeholder="Escribe tu nombre"
              placeholder-style={placeholderStyle}
            />
          </IonItem>

          <IonItem style={{ backgroundColor: '#ffffff', marginBottom: '12px', borderRadius: '6px', borderLeft: '4px solid #00b894' }}>
            <IonLabel position="stacked" style={{ color: '#2d3436', fontWeight: 'bold' }}>Mensaje</IonLabel>
            <IonInput
              value={mensaje}
              onIonChange={(e) => setMensaje(e.detail.value)}
              style={inputTextStyle}
              placeholder="Escribe tu mensaje"
              placeholder-style={placeholderStyle}
            />
          </IonItem>
        </IonList>

        <IonButton
          expand="block"
          onClick={handleSubmit}
          style={{ marginTop: '10px', backgroundColor: '#74b9ff', color: '#ffffff', fontWeight: 'bold', borderRadius: '6px' }}
        >
          Enviar
        </IonButton>

        {guardado && (
          <div style={{ padding: '1rem', marginTop: '20px', backgroundColor: '#ffffff', borderRadius: '6px', color: '#2d3436', fontFamily: "'Merriweather', serif", boxShadow: '0 1px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '5px', color: '#0984e3' }}>Último mensaje:</h3>
            <p><b>{guardado.nombre}</b>: {guardado.mensaje}</p>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
}
