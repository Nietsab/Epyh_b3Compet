<template>
  <div class="header">
    <img src="../assets/d.png" class="logo image">
    <div class="head">
      <span class="date">2021</span>
      <span class="hypePower">Hype Power</span>
    </div>
    <span class="hypebeast">HypeBeast</span>
    <br>
    <button class="btn"><!-- Découvrir notre site  --></button> 
  </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style >
    .header{
        background-image: url('../assets/Bg.png');
        width: 100%;
        height: 100vh;
        background-color: #0A141C;
    }
  
    .header .logo{
      top: 3%;
      margin-left: 3%;
    }

    .header .head {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 16%;
      margin-left: 20%;
    }
    .header .date{
      font-family: Kanit;
      font-style: normal;
      font-weight: bold;
      font-size: 3vh;
      line-height: 23px;
      color: #F00015;
    }

    .header .hypePower {
      color: #ffffff;
      font-family: Kanit;
      font-style: normal;
      font-weight: bold;
      font-size: 4vh;
      line-height: 25px;
    }

    .header .hypebeast{
      font-size: 16vw;
      font-family: Kanit;
      font-style: normal;
      font-weight: bold;

      text-transform: uppercase;
      -webkit-text-stroke-color: #E0E4E9;
      -webkit-text-fill-color: #0000;
      -webkit-text-stroke-width: 1px;
    }

    .header .btn {
      width: 25%;
      height: 100px;
      clip-path: polygon(9% 0, 100% 0%, 100% 99%, 0% 100%);
      border: #F00015;
      background-color: #F00015;

      color: #ffffff;
      font-family: Kanit;
      text-align: center;
      font-weight: bold;
      line-height: 21px;
      font-size: 20px;
    }
</style>