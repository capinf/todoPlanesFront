import React from 'react';

const TermsAndConditions = () => {
  const termsContent = `
1.-Aceptación de los términos y condiciones.

Al acceder y utilizar la página web, aceptas cumplir con los siguientes términos y condiciones.
Si no estás de acuerdo con ellos, por favor, no utilices esta plataforma. Esta web es de uso solamente en Argentina.

1.1.- Propiedad de la Web.

La presente web la cual visita, es de la propiedad intelectual del Sr. “Augusto Damian Quintana”.
Documento Nacional de Identidad “46.390.673” 
Domiciliado en “San Lorenzo 1869” de la ciudad de Posadas, Provincia de Misiones, Argentina.

1.2. 
Todo el contenido y material presente en ésta página web, incluyendo texto, gráficos, logotipos, imágenes y software, está protegido por derechos de propiedad intelectual.

1.3. 
No está permitida la reproducción, distribución, modificación o cualquier otro uso no autorizado del contenido sin el consentimiento previo por escrito del Propietario de la Web.

1.4. 
El material gráfico y visual fue de creación propia y o generado a través de IA.

1.5. 
OBJETO *IMPORTANTE*.
La pagina web tiene como objeto solamente el acercamiento, entre la persona que desee vender su plan o su auto, y la otra persona que desea comunicarse con la primera para negociar.-

1.6. 
El precio y datos publicados por los usuarios puede o no corresponder a la realidad y a la inflación, eso dependerá de cada usuario registrado. 
Pero tampoco lo compromete, puesto que la publicación en la web solo sirve para contactar a las partes proporcionando información tales como el teléfono.
Cualquier negociación realizada entre los usuarios, o entre usuarios y visitantes simples (persona que visita sin estar registrada), ES PLENAMENTE RESPONSABILIDAD DE LAS MISMAS.
Por ello el Propietario de la Web no es responsable de las negociaciones entre las personas mencionadas en este punto, ya que las mismas se darán por otros medios (telefónicos, email, y o presencial).
La publicación de la oferta obliga solamente a quien la emite, en este caso al usuario registrado. Siendo únicamente suya la responsabilidad si incurre en una frustración de la oferta, y no responsabilidad del Propietario de la Web.

2.-Registro de usuarios

2.1. 
Para utilizar ciertas funcionalidades de la página web, es necesario que te registres proporcionando información precisa y actualizada.
El propietario de la web no se hará responsable por la información errónea o falsa proporcionada por el usuario que se registra.

2.2.
Eres responsable de mantener la confidencialidad de tus datos de acceso y eres completamente responsable de todas las actividades que ocurran bajo tu cuenta.

2.3.
El usuario que se registra se compromete a brindar dicha información precisa y actualizada, el no hacerlo solo lo compromete al usuario registrante.

3.-Publicación de anuncios.

3.1. 
Al publicar un anuncio en ésta página web, el usuario se compromete a que la información proporcionada es veraz, precisa y completa.
Pero puede no serlo necesariamente, sin incurrir el usuario en responsabilidad alguna, ya que las negociaciones centrales se harán por medios ajenos a esta página, y no en ella.

3.2.
Aceptas que eres el propietario legítimo del automóvil y/o del plan, o estás autorizado para venderlo. 
3.3. 
El Propietario de la Web tiene el derecho de revisar, modificar o eliminar cualquier anuncio que consideremos inapropiado o que viole nuestros términos y condiciones.

4.-Interacciones entre vendedores y compradores

4.1.
La página web solo actúa como una plataforma de conexión entre vendedores y compradores.
El Propietario de la Web no es responsable de ninguna transacción y/o acuerdo realizado entre las partes involucradas en las negociaciones realizadas por otros medios.

4.2.
Recomendamos encarecidamente a los usuarios que realicen las debidas diligencias antes de realizar cualquier transacción.

4.3.
El Propietario de la Web NO asume ninguna responsabilidad por el estado, calidad, garantía o cualquier otro aspecto del automóvil o plan anunciado en ésta plataforma.

5.-Limitación de responsabilidad

5.1. *IMPORTANTE*
No ofrecemos garantías de ningún tipo en relación con ésta página web y su uso.
El Propietario de la Web no se hace responsable de ningún daño directo, indirecto, incidental o consecuente derivado del uso de la plataforma. 

5.2.
El propietario de la Web no se hace responsable de ningún contenido generado por los usuarios ni de ninguna transacción realizada entre los usuarios.

5.3.
El propietario de la Web no asume ninguna responsabilidad por la calidad, veracidad, precisión o legalidad de los anuncios publicados por los usuarios.

5.4. 
El propietario de la Web no es responsable de ningún daño, pérdida o perjuicio resultante de las transacciones o acuerdos realizados entre los usuarios.

6.- Recomendaciones y consejos.

6.1.
El propietario de la Web proporciona información y consejos en su página web con el fin de facilitar el uso y comunicaciones entre los usuarios.
Sin embargo, no garantizamos la precisión, exhaustividad o utilidad de dicha información.

6.2.
Los usuarios son responsables de realizar su propia investigación, evaluación y verificación independiente antes de realizar cualquier transacción.

7.- Comunicaciones y negociaciones.

7.1.
Las comunicaciones y negociaciones entre los usuarios se realizan por otros medios, ya sean telefónicos o email, dicha comunicación es responsabilidad exclusiva de las partes involucradas. 

7.2.
El Propietario de la Web no supervisa ni controla las comunicaciones privadas entre los usuarios y no se hace responsable de ninguna acción, declaración o acuerdo realizado en dichas comunicaciones.

8.- Uso adecuado de la plataforma.

8.1.
Los usuarios deben utilizar la plataforma de manera adecuada y cumplir con todas las leyes y regulaciones aplicables. 

8.2. 
El Propietario de la Web se reserva el derecho de suspender, cancelar o tomar medidas legales contra cualquier usuario que incumpla los términos y condiciones o realice actividades ilegales o fraudulentas en su plataforma.

9.- Patrocinio de Publicaciones.
Los Usuarios registrados podrán comunicarse de manera privada por otros medios externos a la web para pedir el patrocinio de las publicaciones de sus planes.
El tiempo de las publicaciones regulares sin patrocinio es de 7 dias corridos, el de las publicaciones patrocinadas es de 30 dias corridos.
Una vez transcurrido ese tiempo las publicaciones se darán de baja automaticamente.
El precio del patrocinio lo da el propietario de la web en negociacion privada con cada usuario particularmente.
En este sitio web no hay transferencias de dinero de ningun tipo.



  `;

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', color: 'white' }}>
      <h2>Terminos y Condiciones</h2>
      <pre style={{ color: 'white' }}>{termsContent}</pre>
    </div>
  );
};

export default TermsAndConditions;