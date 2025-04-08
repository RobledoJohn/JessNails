<template>
  <div class="header-container">
    <div class="first-container">
      <p class="txt-basico">Reserva tu cita</p>
      <a class="btn-small" href="https://wa.link/idt77c" target="_blank">Aquí!</a>
    </div>
    <nav class="second-container">
      <ul class="navbar-header">
        <Router-link to="/" class="navbar-item">
          <li>Inicio</li>
        </Router-link>
        <Router-link to="/servicios" class="navbar-item">
          <li>Servicios</li>
        </Router-link>
        <Router-link to="/productos" class="navbar-item">
          <li>Productos</li>
        </Router-link>
        <Router-link to="/galeria" class="navbar-item">
          <li>Galeria</li>
        </Router-link>
        <!---
        <Router-link to="/subir" class="navbar-item ">
          <li>Subir</li>
        </Router-link>-->
      </ul>
    </nav>
  </div>
</template>

<style>

.header-container {
  height: 100%;
}

.first-container {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #f4d4d4;
}

.txt-basico {
  font-size: 20px;
}

.btn-small{
  height: 25px;
  width: 55px;
  background-color: #DD5981;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
.btn-small:hover{
  background-color: #AC093A;
}

.second-container{
  background-color: #DD5981;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.navbar-header {
  display: flex;
  gap: 15px;
  margin-bottom: 0;
  padding: 0;
}

.navbar-item {
  list-style: none;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
.navbar-item:hover {
  color: #AC093A;
}

</style>