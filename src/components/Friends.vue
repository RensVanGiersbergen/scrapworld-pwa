<template>
    <div class="Friends">
      <div
      class="scrapbookContainer"
      v-for="scrapbook in scrapbooks"
      v-bind:key="scrapbook.id"
    >
      <h4><font-awesome-icon icon="fa-solid fa-user" /> {{ scrapbook.name }}</h4>
      <h4><font-awesome-icon icon="fa-solid fa-earth-europe" /> {{ scrapbook.title }}</h4>
      <a href="./#/" class="mapbtn">View map</a>
    </div>
    <div class="text-center py-5">
      <link to="/" />
      <button class="btn-uitloggen">
        <font-awesome-icon icon="fa-solid fa-user-plus" /> Add friend
      </button>
      <link />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      //some sample scrapbook objects
      scrapbooks: [
        {
          id: 1,
          name: "Rens van Giersbergen",
          title: "14 scrapbooks",
        },
        {
          id: 2,
          name: "Frank van Hassel",
          title: "9 scrapbooks",
        },
        {
          id: 3,
          name: "Sander van Deurzen",
          title: "16 scrapbooks",
        },
      ],
    };
  },
  methods: {
    arrayToString(list) {
      var text = "";
      Object.values(list).forEach((person) => (text = text + person + ", "));
      return text;
    },
  },
  mounted() {
    this.scrapbooks.forEach((scrapbook) => {
      fetch(
        `https://api.myptv.com/geocoding/v1/locations/by-position/${scrapbook.latitude}/${scrapbook.longitude}?language=nl`,
        {
          method: "GET",
          headers: {
            apiKey:
              process.env.VUE_APP_PTV_APIKEY,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          scrapbook.location = result.locations[0].address;
        });
    });
  },
};
</script>

<style scoped>

.mapbtn {
  background-color: #26C63A;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 5px 25px 5px 25px;
}
  
.scrapbookContainer {
  padding-left: 20px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 75vw;
  height: 120px;
  background-color: #341671;
  text-align: left;
}
.scrapbookContainer h5 {
  color: #fff;
  font-size: 16px;
  margin-top: 10px;
}
.scrapbookContainer h4 {
  color: #fff;
  margin-bottom: 10px;
}
.scrapbookContainer img {
  float: right;
  width: 100px;
  height: 100px;
  margin: -25px 10px 10px 0px;
}

@media screen and (max-width: 800px) {
  .scrapbookContainer {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    height: 150px;
    width: 75vw;
    background-color: #660F56;
    border: 5px solid #422860;
    border-radius: 10px;
  }
  .scrapbookContainer img {
    float: right;
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px 0px;
  }

  .btn-uitloggen {
    background-color: #26c63a;
    color: #fff;
    border: none;
    border-radius: 10px;
    -webkit-box-shadow: 0px 3px 6px #00000029;
    box-shadow: 0px 3px 6px #00000029;
    width: 50%;
    padding-top: 1em;
    padding-bottom: 1em;
  }
}
</style>
