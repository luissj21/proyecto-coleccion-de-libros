import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonImg
} from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export default function AgregarLibro({ onAgregar }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [foto, setFoto] = useState(null);

  const tomarFoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      setFoto(image.dataUrl);
    } catch (error) {
      console.log('Error tomando foto', error);
    }
  };

  const agregar = () => {
    if (!titulo || !autor || !categoria || !foto) {
      alert('Completa todos los campos 📌');
      return;
    }

    const nuevoLibro = { titulo, autor, categoria, foto, favorito: false };

    onAgregar(nuevoLibro);

    setTitulo('');
    setAutor('');
    setCategoria('');
    setFoto(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Libro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Título</IonLabel>
          <IonInput value={titulo} onIonChange={e => setTitulo(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Autor</IonLabel>
          <IonInput value={autor} onIonChange={e => setAutor(e.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Categoría</IonLabel>
          <IonSelect value={categoria} placeholder="Selecciona categoría" onIonChange={e => setCategoria(e.detail.value)}>
            <IonSelectOption value="Ficción">Ficción</IonSelectOption>
            <IonSelectOption value="No Ficción">No Ficción</IonSelectOption>
            <IonSelectOption value="Educativo">Educativo</IonSelectOption>
            <IonSelectOption value="Otros">Otros</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonButton expand="block" onClick={tomarFoto}>Tomar Foto 📸</IonButton>
        </IonItem>

        {foto && <IonImg src={foto} style={{ margin: '10px 0' }} />}

        <IonButton expand="block" color="primary" onClick={agregar}>Agregar Libro ✅</IonButton>
      </IonContent>
    </IonPage>
  );
}
