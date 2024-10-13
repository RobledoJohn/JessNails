<script setup>
</script>

<template>
  <div class="services-container">
    <p class="tittle">Servicios</p>
    <div class="section-services">
      <div class="section-service">
        <div class="section-txt-service">
          <p class="subtittle subtittle-service">Manicure</p>
          <p class="txt-service">Realza la belleza de tus manos con nuestro servicio de manicure profesional. Utilizamos productos de alta calidad para garantizar uñas perfectas, duraderas y un acabado impecable. ¡Dale a tus manos el cuidado que merecen!</p>
        </div>
        <img src="../assets/img/servicios/manicure.png" alt="img servicio">
      </div>
      <div class="section-service">
        <div class="section-txt-service">
          <p class="subtittle subtittle-service">Depilación</p>
          <p class="txt-service">Ofrecemos un servicio profesional de depilación, garantizando una piel suave y libre de vello con técnicas seguras y productos de alta calidad. ¡Disfruta de una experiencia cómoda y resultados duraderos!</p>
        </div>
        <img src="../assets/img/servicios/depilacion.png" alt="img servicio">
      </div>
      <div class="section-service">
        <div class="section-txt-service">
          <p class="subtittle subtittle-service">Pestañas Pelo a pelo</p>
          <p class="txt-service">Transforma tu mirada con nuestro servicio de pestañas pelo a pelo. Cada pestaña se aplica cuidadosamente para lograr un efecto natural y voluminoso, realzando tu belleza sin esfuerzo. ¡Despierta con unas pestañas deslumbrantes cada día!"</p>
        </div>
        <img src="../assets/img/servicios/pestañas.png" alt="img servicio">
      </div>
    </div>
    <div class="section-services">
      <div class="section-service">
        <div class="section-txt-service">
          <p class="subtittle subtittle-service">Cepillados</p>
          <p class="txt-service">Revitaliza tu cabello con nuestro servicio de cepillado profesional. Disfruta de un peinado elegante y duradero que resalta tu estilo, mientras utilizamos productos de alta calidad para un acabado suave y brillante. ¡Luce radiante en cualquier ocasión!</p>
        </div>
        <img src="../assets/img/servicios/cepillado.png" alt="img servicio">
      </div>
      <div class="section-service">
        <div class="section-txt-service">
          <p class="subtittle subtittle-service">Aplicación de tintes</p>
          <p class="txt-service">Renueva tu look con nuestro servicio de tintura para cabello. Utilizamos productos de alta calidad que cuidan tu cabello mientras logras el color que siempre has deseado. ¡Transforma tu estilo y resalta tu personalidad con un acabado vibrante y duradero!</p>
        </div>
        <img src="../assets/img/servicios/tintes.png" alt="img servicio">
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (min-width: 1024px){
  .services-container {
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-services {
    display:flex;
    flex-direction: row;
    gap: 20px;
  }

  .section-service {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fcfcfc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .section-txt-service{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .subtittle-service{
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    margin: 5px;
  }

  .txt-service {
    font-size: 1rem;
    text-align: center;
  }

  .section-service img {
    border-radius: 10px;
    width: 200px;
    height: 200px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px){
  .services-container {
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-services {
    display:flex;
    flex-direction: row;
    gap: 20px;
  }

  .section-service {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fcfcfc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .section-txt-service{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .subtittle-service{
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    margin: 5px;
  }

  .txt-service {
    font-size: 1rem;
    text-align: center;
  }

  .section-service img {
    border-radius: 10px;
    width: 200px;
    height: 200px;
  }
}
@media screen and (min-width: 300px) and (max-width: 767px){
  .services-container {
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-services {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .section-service {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fcfcfc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .section-txt-service{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .subtittle-service{
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    margin: 5px;
  }

  .txt-service {
    font-size: 1rem;
    text-align: center;
  }

  .section-service img {
    border-radius: 10px;
    width: 200px;
    height: 200px;
  }
}
</style>
