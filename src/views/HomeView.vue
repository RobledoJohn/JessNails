<script setup>
</script>

<template>
  <div class="home-container">
    <img class="home-banner" alt="home-img">
    <p class="tittle">¡Bienvenida!</p>
    <p class="home-txt">Aquí, tu cuidado personal se convierte en una experiencia única y sofisticada. Estoy lista para ofrecerte servicios de manicure de alta calidad, diseñados para resaltar tu belleza y estilo. Utilizamos productos premium y las técnicas más innovadoras para garantizar que tus manos y uñas luzcan impecables. Relájate en nuestro ambiente acogedor y déjate consentir. Ven y descubre cómo transformar tus manos en verdaderas obras de arte.</p>
    <p class="subtittle">¡Tu satisfacción es nuestra prioridad!</p>
  </div>
</template>

<style scoped>
/*pc*/
@media screen and ( min-width: 1024px){
  .home-container {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }

  .home-banner{
    width: 100%;
    height: 250px;
    object-position: center;
    content: url(../assets/img/banner.jpg);
  }

  .home-txt{
    font-size: 20px;
    text-align: center;
    margin: 0 10px;
    width: 60%;
  }
  
}
/*tablet*/
@media screen and ( min-width: 768px) and (max-width: 1023px) {
  .home-container {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }

  .home-banner{
    width: 100%;
    height: 250px;
    object-position: center;
    content: url(../assets/img/banner.jpg);
  }

  .home-txt{
    font-size: 20px;
    text-align: center;
    margin: 0 10px;
    width: 60%;
  }
  
}
/*celular*/
@media screen and (min-width: 300px) and (max-width: 767px) { 
  .home-container {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }

  .home-banner{
    width: 100%;
    height: 250px;
    object-position: center;
    content: url(../assets/img/banner-celu.jpg);
  }

  .home-txt{
    font-size: 20px;
    text-align: center;
    margin: 0 10px;
    width: 60%;
  }
  
}
</style>