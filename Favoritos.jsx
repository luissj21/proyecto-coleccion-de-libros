import React from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonImg
} from '@ionic/react';

export default function Favoritos({ libros }) {
  const favoritos = libros.filter(libro => libro.favorito);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Libros Favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {favoritos.length === 0 ? (
          <p>No hay favoritos aún ⭐</p>
        ) : (
          <IonList>
            {favoritos.map((libro, index) => (
              <IonItem key={index}>
                {libro.foto && <IonImg src={libro.foto} style={{ width: '80px', height: '80px', marginRight: '10px' }} />}
                <IonLabel>
                  <h2>{libro.titulo}</h2>
                  <p>{libro.autor} - {libro.categoria}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
}
