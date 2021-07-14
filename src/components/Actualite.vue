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
        <router-link class="btn-actu"
                     :to="{name: 'Actus_content',
                     params: { title: Actu.Categorie, intro: Actu.intro, content1: Actu.content1, content2: Actu.content2,
                     img1: Actu.image1, img2: Actu.image2, img3: Actu.image3, img4: Actu.image4, img5: Actu.image5
                     }}">Voir plus</router-link>
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


          image1: 'https://i.ibb.co/rkrXhmN/Streetwear-Cannes-1.png',
          image2: 'https://i.ibb.co/c1CbC96/Streetwear-Cannes-2.png',
          image3: 'https://i.ibb.co/nMxdmfX/Streetwear-Cannes-3.png',
          image4: 'https://i.ibb.co/k3Fn6X5/Streetwear-Cannes-4.png',
          image5: 'https://i.ibb.co/3TtN1Yq/Streetwear-Cannes-5.png',
          intro :
              'Spike Lee le président du jury du Festival de Cannes a fait sensation sur la Croisette avec ses looks épiques.',
          content1 :
              "Les photos ont fait echo jusqu’au milieu du sport, qui pourtant n’est pas des plus impliqués lorsqu’il s’agit du Festival de Cannes.  C’était le cas jusqu’à ce que Spike Lee débarque sur la Croisette. Généralement les personnalités du cinéma côtoient celles de la mode et de la musique, mais le football ne s’en mêle pas vraiment.C’est en tant que président de cette 74e édition du Festival de Cannes, que le réalisateur new-yorkais va passer les douze prochains jours à découvrir la sélection officielle du festival avec son jury. Il devra récompenser les meilleurs  œuvres présentées.  Cannes est lieu haut en couleur en mode, les robes les plus incroyables défilent sur les marches du Palais des festivals, Spike Lee a tenu à apporter sa touche fashion à la Croisette.",
          content2 : "Spike Lee à débarqué lundi, à l’aéroport de Nice dans une tenue de voyage qui ne nous a pas laissé indifférents. Petit jogging issu de la collection PSG x Jordan. Un pantalon avec les bandes tricolores aux couleurs parisiennes, un gilet blanc et un tee-shirt aux couleurs du club parisien. La preuve de son amour pour le football.  Le président du jury du Festival de Cannes a fait fort devant l’œil des photographes pour la toute première montée des marches, ce mardi 6 juillet.\n" +
              "\n" +
              "Chemise blanche boutonnée jusqu’en haut, le cinéaste américain de 64 ans a, ici opté pour un smoking rose fuchsia. Sur ses yeux: une paire de lunettes de soleil teintées à la monture assortie.\n" +
              "\n" +
              "Contre toute attente, parmi les dizaines de stars qui ont monté les marches de la Croisette ce mardi, Spike Lee est devenu, en vingt-quatre heures, la plus grande sensation mode de ce 74e Festival de Cannes."
        },
        {
          title: 'Le streetwear futur héro de l\'environnement ?',
          img: 'https://i.ibb.co/K6MfWTL/Rectangle-32.png',
          Date: '5 Juillet 2021',
          Categorie: 'StreetWear'
        }, {
          title: 'Le streetwear futur héro de l\'environnement ?',
          img: '',
          Date: '7 Juillet 2021',
          Categorie: 'StreetWear'

        },
        {
          title: 'Bape déclare sa nouvelle collection sta summer 2021',
          img: '',
          Date: '8 Juillet 2021',
          Categorie: 'Sneakers'
        }, {
          title: 'New Balance repense sa 2002R dans la protection pack',
          img: '',
          Date: '1 Juin 2021',
          Categorie: 'Sneakers'

        }, {
          title: 'Ces air jordan 1sont entièrement made in France',
          img: '',
          Date: '7 Juin 2021',
          Categorie: 'Sneakers'

        },
        {
          title: 'Nintendo présente sa nouvelle switch OLED',
          img: '',
          Date: '6 Juin 2021',
          Categorie: 'Lifestyle'
        }, {
          title: 'BMW présente son scooter électrique au design futuriste',
          img: '',
          Date: '8 Juin 2021',
          Categorie: 'Lifestyle'
        }, {
          title: 'Rawemotions sort 3 nouveaux lucky cat rug',
          img: '',
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

.actus {
  .vertical-line {
    border-left: 6px solid #CC1237;
    display: inline-block;
    height: 23px;
    margin: 0 20px;
  }

  padding-top: 8%;
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