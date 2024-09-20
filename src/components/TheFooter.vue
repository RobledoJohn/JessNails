<template>
  <div class="footer-container">
    <Router-link to="/subir" class="btn">
      <li>Subir Fotos</li>
    </Router-link>
    <div class="foot-one">
      <p class="sub-tittle">Siguenos en:</p>
      <div class="icons-foot">
        <a href="https://www.tiktok.com/@jessikarobledo0" target="_blank"><i class="bi bi-tiktok icono-footer"></i></a>
        <a href="https://www.instagram.com/jessy_spa_service/" target="_blank"><i class="bi bi-instagram icono-footer"></i></a>
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
  margin: 5px;
  color: #52021a;
}

.foot-one {
  background-color: #DD5981;
  color: #52021a ;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icons-foot{
  display: flex;
  justify-content: center;
}

.icono-footer{
  font-size: 30px;
  margin: 10px;
  color: white;
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