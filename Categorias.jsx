import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';

export default function Categorias({ libros }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const filtrados = categoriaSeleccionada
    ? libros.filter(libro => libro.categoria === categoriaSeleccionada)
    : libros;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categorías</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSelect value={categoriaSeleccionada} placeholder="Selecciona categoría" onIonChange={e => setCategoriaSeleccionada(e.detail.value)}>
          <IonSelectOption value="Ficción">Ficción</IonSelectOption>
          <IonSelectOption value="No Ficción">No Ficción</IonSelectOption>
          <IonSelectOption value="Educativo">Educativo</IonSelectOption>
          <IonSelectOption value="Otros">Otros</IonSelectOption>
        </IonSelect>

        {filtrados.length === 0 && <p>No hay libros en esta categoría 📖</p>}

        {filtrados.map((libro, index) => (
          <IonCard key={index}>
            <IonCardHeader>
              <IonCardTitle>{libro.titulo}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p><strong>Autor:</strong> {libro.autor}</p>
              <p><strong>Categoría:</strong> {libro.categoria}</p>
              {libro.foto && <IonImg src={libro.foto} style={{ width: '100%', marginTop: '10px' }} />}
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
}
