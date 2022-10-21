<template>
  <div class="scrapbookOverview">
    <div
      class="scrapbookContainer"
      v-for="scrapbook in scrapbooks"
      v-bind:key="scrapbook.id"
    >
      <h4>
        <font-awesome-icon icon="fa-solid fa-earth-europe" />
        {{ scrapbook.title }}
      </h4>
      <img :src="scrapbook.img" />
      <h5>
        <font-awesome-icon icon="fa-solid fa-calendar-days" />
        {{ scrapbook.date }}
      </h5>
      <h5>
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        {{ scrapbook.location.countryName }}, {{ scrapbook.location.state }},
        {{ scrapbook.location.city }}
      </h5>
      <h5>
        <font-awesome-icon icon="fa-solid fa-users" />
        {{ arrayToString(scrapbook.people) }}
      </h5>
    </div>
    <div class="text-center py-5 mt-5">
      <link to="/" />
      <button class="btn-uitloggen">
        <font-awesome-icon icon="fa-solid fa-file-import" /> Import scrapbook
      </button>
      <link />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //some sample scrapbook objects
      scrapbooks: [
        {
          id: 0,
          title: "Trip to Rotterdam",
          date: "20-10-2022",
          owner: "Rens van Giersbergen",
          img: "https://i.imgur.com/V0bppH9.png",
          latitude: 51.9244,
          longitude: 4.4777,
          location: "",
          people: ["Frank", "Rens", "Sander"],
        },
        {
          id: 1,
          title: "Family week",
          date: "6-09-2019",
          owner: "Rens van Giersbergen",
          img: "https://i.imgur.com/cDc4yDh.png",
          latitude: 51.478157,
          longitude: 5.4535975,
          location: "",
          people: ["Frans", "Maayke", "Kim", "Jorg"],
        },
        {
          id: 2,
          title: "Vacation to Egypt",
          date: "3-06-2017",
          owner: "Rens van Giersbergen",
          img: "https://i.imgur.com/HlchFte.png",
          latitude: 27.1004708,
          longitude: 33.8286508,
          location: "",
          people: ["Harmen", "Lisette", "Jan", "Mies"],
        },
        {
          id: 3,
          title: "Visit grandparents",
          date: "1-10-2015",
          owner: "Rens van Giersbergen",
          img: "https://i.ibb.co/rbRszMQ/4-K-mountain-icon-modified.png",
          latitude: 66.936226,
          longitude: -53.663442,
          location: "",
          people: ["Father", "Mother"],
        },
        {
          id: 4,
          title: "City trip New York",
          date: "1-09-2021",
          owner: "Rens van Giersbergen",
          img: "https://i.ibb.co/12Lv88g/new-york-2-modified.png",
          latitude: 40.7002162,
          longitude: -74.0143093,
          location: "",
          people: ["Frank", "Frank's Girlfriend"],
        },
        {
          id: 5,
          title: "Meeting with Obama",
          date: "10-05-2017",
          owner: "Rens van Giersbergen",
          img: "https://i.ibb.co/56PtPcK/Obama-2-modified.png",
          latitude: 42.2514066,
          longitude: -71.5508806,
          location: "",
          people: ["Michelle Obama", "Obama"],
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
    //Get address by latitude and longitude location
    this.scrapbooks.forEach((scrapbook) => {
      fetch(
        `https://api.myptv.com/geocoding/v1/locations/by-position/${scrapbook.latitude}/${scrapbook.longitude}?language=nl`,
        {
          method: "GET",
          headers: {
            apiKey: process.env.VUE_APP_PTV_APIKEY,
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
    height: 200px;
    width: 75vw;
    background-color: #660f56;
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
