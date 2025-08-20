import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, 
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent 
} from '@ionic/react';

export default function Acerca() {
  return (
    <IonPage style={{ background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
      <IonHeader>
        <IonToolbar
          style={{
            background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}
        >
          <IonButtons slot="start">
            <IonMenuButton style={{ color: '#fff' }} />
          </IonButtons>
          <IonTitle
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1.8rem',
              fontWeight: '800',
              color: '#fff',
              textAlign: 'center',
              WebkitTextStroke: '1px #000'
            }}
          >
            📚 El Mundo de Libros
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Card Historia */}
        <IonCard
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            marginBottom: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          <IonCardHeader>
            <IonCardTitle
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: '8px',
                color: '#1e3c72'
              }}
            >
              Nuestra Historia
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent
            style={{
              lineHeight: '1.8',
              fontSize: '1.05rem',
              textAlign: 'justify',
              color: '#2c2c2c'
            }}
          >
            El Mundo de Libros nació con el objetivo de acercar la lectura a todas las personas. 
            Buscamos que cada lector pueda encontrar en la app un espacio para descubrir nuevas historias, 
            autores interesantes y géneros que despierten su curiosidad.
          </IonCardContent>
        </IonCard>

        {/* Card Misión y Visión */}
        <IonCard
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            marginBottom: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          <IonCardHeader>
            <IonCardTitle
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: '8px',
                color: '#1e3c72'
              }}
            >
              Misión y Visión
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent
            style={{
              lineHeight: '1.8',
              fontSize: '1.05rem',
              textAlign: 'justify',
              color: '#2c2c2c'
            }}
          >
            Nuestra misión es fomentar el hábito de la lectura de manera interactiva, accesible y divertida.  
            Queremos que cada persona encuentre en la app una ventana a mundos literarios nuevos.  
            Nuestra visión es construir una comunidad global de lectores que compartan sus pasiones y 
            descubran juntos el poder transformador de los libros.
          </IonCardContent>
        </IonCard>

        {/* Card Comunidad */}
        <IonCard
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            marginBottom: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          <IonCardHeader>
            <IonCardTitle
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: '1.5rem',
                marginBottom: '8px',
                color: '#1e3c72'
              }}
            >
              Comunidad de Lectores
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: '#2c2c2c'
            }}
          >
            Más que una aplicación, <em>El Mundo de Libros</em> es un punto de encuentro.  
            Aquí los lectores pueden inspirarse, compartir recomendaciones y vivir la experiencia de leer acompañados.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
