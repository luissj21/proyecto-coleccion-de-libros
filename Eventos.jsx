import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonBadge
} from '@ionic/react';

export default function Eventos() {
  const eventos = [
    { id: 1, titulo: "Feria Internacional del Libro", fecha: "12 - 18 Septiembre", lugar: "Guadalajara, México" },
    { id: 2, titulo: "Presentación de 'El Reino de las Sombras'", fecha: "25 Septiembre", lugar: "Ciudad de México" },
    { id: 3, titulo: "Club de Lectura: Ciencia Ficción", fecha: "3 Octubre", lugar: "Online - Zoom" }
  ];

  return (
    <IonPage style={{ background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
   
      <IonHeader>
        <IonToolbar
          style={{
            background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px"
          }}
        >
          <IonTitle
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '2rem',
              fontWeight: '900',
              textAlign: 'center',
              background: "linear-gradient(90deg, #ffcc70, #ff8177, #cf556c, #6a11cb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 3px 10px rgba(0,0,0,0.5)",
              letterSpacing: "1px"
            }}
          >
            📚 Eventos Literarios
          </IonTitle>
        </IonToolbar>

     
        <div style={{
          textAlign: "center",
          background: "linear-gradient(90deg, #2575fc, #6a11cb)",
          padding: "8px 16px",
          color: "#f1f1f1",
          fontSize: "1rem",
          fontStyle: "italic",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
        }}>
          No te pierdas las próximas actividades del mundo de los libros ✨
        </div>
      </IonHeader>

      
      <IonContent className="ion-padding">
        {eventos.map(evento => (
          <IonCard
            key={evento.id}
            style={{
              background: "linear-gradient(135deg, #ffffff, #f1f1f1)",
              borderRadius: '20px',
              marginBottom: '20px',
              boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
              border: "1px solid #e0e0e0",
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.25)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.15)';
            }}
          >
            <IonCardHeader>
              <IonCardTitle
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontSize: '1.4rem',
                  fontWeight: "600",
                  color: '#212121',
                  marginBottom: "8px"
                }}
              >
                {evento.titulo}
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ color: '#444', fontSize: "1rem" }}>
              <p style={{ marginBottom: "6px" }}>📍 <strong>{evento.lugar}</strong></p>
              <IonBadge
                color="primary"
                style={{
                  padding: "6px 12px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  marginTop: "8px"
                }}
              >
                {evento.fecha}
              </IonBadge>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
}
