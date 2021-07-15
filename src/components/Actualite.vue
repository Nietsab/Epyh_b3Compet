<template>
  <div class="actus">
    <div class="search">
      <div class="search-text-actus">
        <div class="vertical-line"></div>Rechercher <br>
      </div>
      <div class="search_input"><br>
        <div class="input-radio">
          <input v-model="searchString" class="search-bar" type="text" placeholder="   Mots clés, Marques..."/><br>
          <input type="radio" class="radio-cat" v-model="selectedCategory" value="All"><label class="radio-cat-search">All</label><br>
          <input type="radio" class="radio-cat" v-model="selectedCategory" value="StreetWear"><label class="radio-cat-search">Streetwear
        </label><br>
          <input type="radio" class="radio-cat" v-model="selectedCategory" value="Sneakers"><label class="radio-cat-search">Sneakers</label><br>
          <input type="radio" class="radio-cat" v-model="selectedCategory" value="Lifestyle"><label class="radio-cat-search">Lifestyle</label><br>
        </div>
      </div>
    </div>


    <!--      <span class="title-actus">Les Actus</span>-->
    <div class="card-actu">

      <div class="card-actus" v-for="(Actu, i) in filteredCat" :key="i">
        <!-- <div class="title" v-if="Actus.Categorie=='StreetWear'"><div class="vertical-line"></div>Streetwear</div>-->
        <div class="img-list">
          <article class="article-width"  :key="index">
            <img class="img-list" :src="Actu.img" alt="">
            <div class="list-text">
              <span>{{ Actu.title }}</span><br><br>
              <span style="display: flex">{{ Actu.Date }}</span>
            </div>
          </article>
        </div>
        <router-link class="btn-actu" to='/404'>Voir plus</router-link>
      </div>
      <br>
    </div>
  </div>
</template>

<script>


export default {
  name: "Actus",
  data: function () {
    return {
      searchString: '',
      Actus: [
        {
          title: 'Cannes 2021 : le look streetwear de Spike Lee déchaîne la toile',
          img: 'https://i.ibb.co/K6MfWTL/Rectangle-32.png',
          Date: '7 Juillet 2021',
          Categorie: 'StreetWear',
        },
        {
          title: 'Le streetwear futur héro de l\'environnement ?',
          img: 'https://i.ibb.co/V2cVy3g/Rectangle-32.png',
          Date: '5 Juillet 2021',
          Categorie: 'StreetWear'
        }, {
          title: 'Kanye West au défilé haute-couture de Balenciaga ?',
          img: 'https://i.ibb.co/zHFFxg0/Rectangle-32-1.png',
          Date: '7 Juillet 2021',
          Categorie: 'StreetWear'

        },
        {
          title: 'Bape déclare sa nouvelle collection sta summer 2021',
          img: 'https://i.ibb.co/RT39NsV/Rectangle-32-2.png',
          Date: '8 Juillet 2021',
          Categorie: 'Sneakers'
        }, {
          title: 'New Balance repense sa 2002R dans la protection pack',
          img: 'https://i.ibb.co/qLGNt8t/Rectangle-32-3.png',
          Date: '1 Juin 2021',
          Categorie: 'Sneakers'

        }, {
          title: 'Ces air jordan 1 sont entièrement made in France',
          img: 'https://i.ibb.co/NrLJFp2/Rectangle-32-3.png',
          Date: '7 Juin 2021',
          Categorie: 'Sneakers'

        },
        {
          title: 'Nintendo présente sa nouvelle switch OLED',
          img: 'https://i.ibb.co/wLjJTkf/Rectangle-32-4.png',
          Date: '6 Juin 2021',
          Categorie: 'Lifestyle'
        }, {
          title: 'BMW présente son scooter électrique au design futuriste',
          img: 'https://i.ibb.co/HB1hBpn/Rectangle-32-5.png',
          Date: '8 Juin 2021',
          Categorie: 'Lifestyle'
        }, {
          title: 'Rawemotions sort 3 nouveaux lucky cat rug',
          img: 'https://i.ibb.co/sgN9Hct/Rectangle-32-6.png',
          Date: 'Il y a 1 semaine',
          Categorie: 'Lifestyle'
        }
      ],
      options: [
        {text: "StreetWear", value: "StreetWear"},
        {text: "Sneakers", value: "Sneakers"},
        {text: "Lifestyle", value: "Lifestyle"},
      ],
      selectedCategory: "All"
    };
  },
  computed: {
    // filteredActus: function () {
    //   var actus_array = this.Actus,
    //       searchString = this.searchString;
    //
    //   if (!searchString) {
    //     return actus_array;
    //   }
    //
    //   searchString = searchString.trim().toLowerCase();
    //
    //   actus_array = actus_array.filter(function (item) {
    //     if (item.title.toLowerCase().indexOf(searchString) !== -1) {
    //       return item;
    //     }
    //   });
    //   return actus_array;
    // },

    filteredCat: function () {
      var vm = this;
      var category = vm.selectedCategory;

      if (category === "All") {
        return vm.Actus;
      } else {
        return vm.Actus.filter(function (Actu) {
          return Actu.Categorie === category
        });
      }
    }
  }
}
</script>

<style lang="scss">

@media (max-width: 1399px) {
  .vertical-line {
    display: none !important;
  }
}

.actus {

  .vertical-line {
    border-left: 6px solid #CC1237;
    display: inline-block;
    height: 23px;
    margin: 0 20px;
  }

  padding-top: 15%;
  display: flex;
  justify-content: space-around;


  .search {
    background: linear-gradient(0deg, rgba(244, 239, 233, 0.2), rgba(244, 239, 233, 0.2)), rgba(241, 241, 241, 0.1);
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0px 0.5px 2px rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(3px);
    border-radius: 30px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    text-transform: uppercase;

    height: 0;

    .search-text-actus {
      color: #CC1237;
    }

    .search_input {
      position: relative;

      .input-radio {
        color: #CC1237;
        text-align: left;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 36px;

        .radio-cat-search {
          padding-left: 3%;
        }
      }


      .search_result {
        position: absolute;
        top: 100% ;
        width: 100%;
        height: 100%;
        background-color: #FFFFFF;

        .container-search-actus{
          display: flex;
          align-items: center;
        }

      }
    }

    .search-bar {
      padding: 2% 7%;
      border-radius: 25px;
      background-color: #ffffff;
      background-image: url("../assets/img/search.png");
      background-repeat: no-repeat;
      background-position: 3%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
  }
  .card-actu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);


    .title-actus {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
    }
    .title {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 38px;
      text-transform: uppercase;

      color: #CC1237;
    }

    .card-actus {
      padding-top: 15%;
      width: 100%;
      height: 50%;
    }

    .img-list {
      display: flex;
      justify-content: center;

      .article-width {
        max-width: 71%;
        padding: 1% 1%;
      }
      .list-text {
        background-color: #ffffff;
        padding: 4%;
        text-align: left;
      }
    }

    .btn-actu {
      color: #ffffff;
      max-width: 15%;
      padding: 1% 4%;
      background: #000000;
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.11);
      border-radius: 30px;
    }
  }
}
</style>