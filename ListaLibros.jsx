import React from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonImg, IonButton, IonIcon
} from '@ionic/react';
import { star, starOutline, trash } from 'ionicons/icons';

export default function ListaLibros({ libros, onToggleFavorito, onEliminarLibro }) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Libros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {libros.length === 0 && <p>No hay libros agregados 📚</p>}
        <IonList>
          {libros.map((libro, index) => (
            <IonItem key={index}>
              {libro.foto && <IonImg src={libro.foto} style={{ width: '80px', height: '80px', marginRight: '10px' }} />}
              <IonLabel>
                <h2>{libro.titulo}</h2>
                <p>{libro.autor} - {libro.categoria}</p>
              </IonLabel>

              {/* Botón Favorito */}
              <IonButton fill="clear" onClick={() => onToggleFavorito(index)}>
                <IonIcon icon={libro.favorito ? star : starOutline} color={libro.favorito ? 'warning' : 'medium'} />
              </IonButton>

              {/* Botón Eliminar */}
              <IonButton fill="clear" onClick={() => onEliminarLibro(index)}>
                <IonIcon icon={trash} color="danger" />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
