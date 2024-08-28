<template>
  <div class="header-container">
    <div class="first-container">
      <p class="txt-basico">Reserva tu cita</p>
      <a class="btn-small" href="https://api.whatsapp.com/send?phone=573125977481&text=Hola deseo información" target="_blank">Aquí!</a>
    </div>
    <nav class="second-container">
      <ul class="navbar">
        <Router-link to="/" class="navbar-item">
          <li>Inicio</li>
        </Router-link>
        <Router-link to="/servicios" class="navbar-item">
          <li>Servicios</li>
        </Router-link>
        <Router-link to="/productos" class="navbar-item">
          <li>Productos</li>
        </Router-link>
        <Router-link to="/promociones" class="navbar-item">
          <li>Promociones</li>
        </Router-link>
        <Router-link to="/galeria" class="navbar-item">
          <li>Galeria</li>
        </Router-link>
      </ul>
    </nav>
  </div>
</template>

<style>

.header-container {
  height: 100%;
  background-color: grey;
}

.first-container {
  background-color: #fff;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.txt-basico {
  font-size: 20px;
}

.btn-small{
  height: 25px;
  width: 55px;
  background-color: #FC6A95;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
.btn-small:hover{
  background-color: #df2960;
}

.second-container{
  background-color: #FC6A95;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.navbar {
  display: flex;
  gap: 15px;
}

.navbar-item {
  list-style: none;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
.navbar-item:hover {
  color: #df2960;
}

</style>