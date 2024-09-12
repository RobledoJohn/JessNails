<template>
  <div class="footer-container">
    <div class="foot-one">
      <p class="">Informacion Footer</p>
      <Router-link to="/subir" class="btn">
        <li>Subir Fotos</li>
      </Router-link>
    </div>
    <dic class="foot-two">
      <p>Desarrollado por &copy;SoycoDev</p>
    </dic>
  </div>
</template>

<style>

.footer-container {
  width: 100%;
}

.foot-one {
  background-color: #DD5981;
  color: #52021a ;
  height: 150px;
  display: flex;
  justify-content: center;
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