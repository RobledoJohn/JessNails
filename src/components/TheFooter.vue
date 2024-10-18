<template>
  <div class="footer-container">
    <div class="foot-one">
      <p class="sub-tittle">Buscanos en:</p>
      <div class="icons-foot">
        <a href="https://maps.app.goo.gl/Bhpf6rQin4pZD1w98" target="_blank" class="icono-footer"><i class="bi bi-geo-alt-fill"></i></a>
        <a href="https://www.tiktok.com/@jessy.spa.service" target="_blank" class="icono-footer"><i class="bi bi-tiktok"></i></a>
        <a href="https://www.instagram.com/jessy_spa_service/" target="_blank" class="icono-footer"><i class="bi bi-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61566540766185&notif_id=1728569424397665&notif_t=follow_profile&ref=notif" target="_blank" class="icono-footer"><i class="bi bi-facebook"></i></a>
        <a href="https://api.whatsapp.com/send?phone=573125977481" target="_blank" class="icono-footer"><i class="bi bi-whatsapp"></i></a>
      </div>
    </div>
    <dic class="foot-two">
      <p>Desarrollado por &copy;SoycoDev</p>
    </dic>
  </div>
</template>

<style>

.sub-tittle {
  font-size: 20px;
  margin: 15px 0 0 0;
  color: #52021a;
}

.foot-one {
  background-color: #DD5981;
  color: #52021a ;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icons-foot{
  display: flex;
  justify-content: center;
  cursor: pointer;
  gap: 10px;
}

.icono-footer{
  font-size: 30px;
  margin: 10px;
  color: white;
  text-decoration: none;
}
.icono-footer:hover{
  transform: scale(1.2);
  transition: 0.5s;
  color: #52021a;
}

.foot-two{
  p{
    background-color: black;
    color: white;
    font-size: 15px;
    margin: 0;
    text-align: center;
  }
}

</style>