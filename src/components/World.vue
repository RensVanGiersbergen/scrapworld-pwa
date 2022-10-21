<template>
  <div>
    <img
      class="floppa"
      id="floppa"
      draggable="false"
      src="https://c.tenor.com/lBoeGrikScQAAAAi/obama-obamium.gif"
    />
    <div id="map"></div>
    <div class="selectorContainer">
      <h2><font-awesome-icon icon="fa-solid fa-earth-europe" /> {{ scrapbooks[counter].title }}</h2>
      <h4><font-awesome-icon icon="fa-solid fa-calendar-days" /> {{ scrapbooks[counter].date }}</h4>
      <img :src="scrapbooks[counter].img" />
      <button class="sliderbtn1" id="prevButton" @click="decrementCounter">&#x23F4;</button>
      <button class="sliderbtn2" id="nextButton" @click="incrementCounter">&#x23F5;</button>
    </div>
  </div>
</template>

<script>
var dragValue;
var easterEggCount = 0;
import leaflet from "leaflet";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
          people: ["Michelle Obama", "Obama"],
        },
      ],
      map: null,
      counter: 0,
    };
  },
  methods: {
    //Update map to users location (if location is enabled)
    updateMap() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.map.setView(
              [position.coords.latitude, position.coords.longitude],
              4
            );
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Your browser doesn't support the geolocation API");
      }
    },
    //Function to move gif
    easterEgg() {
      document.body.addEventListener("click", function () {
        if (easterEggCount > 68) {
          document.getElementById("floppa").style.visibility = "visible";
        } else {
          easterEggCount = easterEggCount + 1;
        }
        console.log("clicked screen");
      });
    },
    moveFlopper() {
      var element = document.getElementById("floppa");
      element.style.position = "absolute";
      element.onmousedown = function () {
        dragValue = element;
      };
      document.onmouseup = function () {
        dragValue = null;
      };
      document.onmousemove = function (e) {
        if (dragValue != null) {
          var x = e.pageX;
          var y = e.pageY;

          dragValue.style.left = x - 50 + "px";
          dragValue.style.top = y - 50 + "px";
        }
      };
    },

    incrementCounter() {
      if (this.counter < [this.scrapbooks.length - 1]) {
        this.counter++;
      } else {
        this.counter = 0;
      }
      this.updateMarkerZoom();
    },
    decrementCounter() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.counter = [this.scrapbooks.length - 1];
      }
      this.updateMarkerZoom();
    },
    updateMarkerZoom(){
      this.map.setView([this.scrapbooks[this.counter].latitude, this.scrapbooks[this.counter].longitude], 5, {
        animate: true,
        duration: 1,
        easeLinearity: 0.5,
      })
    },
  },
  
  //Initialize leaflet map and pins
  mounted() {
    var that = this;
    this.map = leaflet
      .map("map", {
        zoomControl: true,
        zoom: 1,
        zoomAnimation: true,
        fadeAnimation: true,
        markerZoomAnimation: true,
      })
      .setView([20, 0], 3);

    leaflet
      .tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          noWrap: true,
          bounds: [
            [-90, -180],
            [90, 180],
          ],
          maxZoom: 13,
          minZoom: 2,
          id: "nitrocat22/cl8489bcw00ja14mprjuvc9pm",
          TileSize: 512,
          accessToken: process.env.VUE_APP_MAPBOX_APIKEY,
        }
      )
      .addTo(this.map);

    this.updateMap();

    //Set all scrapbook markers on map
    this.scrapbooks.forEach((scrapbook) => {
      //Create default icon
      var defaultIcon = leaflet.icon({
        iconUrl: scrapbook.img,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
      });

      //Create big icon
      var bigIcon = leaflet.icon({
        iconUrl: scrapbook.img,
        iconSize: [200, 200],
        iconAnchor: [100, 100],
      });

      //Create marker
      let marker = leaflet
        .marker([scrapbook.latitude, scrapbook.longitude], {
          icon: defaultIcon,
        })
        .addTo(this.map);

      //Increase icon size on hover of marker and update counter
      marker.on("mouseover", function () {
        marker.setIcon(bigIcon);
        marker.setZIndexOffset(200);
        that.counter = scrapbook.id;
      });

      //Decrease icon size and close popup if open when not hovering
      marker.on("mouseout", function () {
        marker.setIcon(defaultIcon);
        marker.setZIndexOffset(50);
      });
    });

    //Set border around marker icon
    const elements = Array.from(
      document.getElementsByClassName("leaflet-marker-icon")
    );
    elements.forEach((element) => {
      element.style.border = "5px solid #422680";
    });

    //Init drag & drop easter egg
    this.moveFlopper();
    this.easterEgg();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#floppa {
  z-index: 20;
  height: 100px;
  width: 100px;
  visibility: hidden;
}
#map {
  height: 89vh;
  z-index: 10;
}
.selectorContainer {
  position: absolute;
  text-align: left;
  left: 30%;
  bottom: 5%;
  width: 200px;
  z-index: 50;
  background-color: #422680;
  border: 10px solid #422680;
  border-radius: 10px;
  height: 120px;
}
.selectorContainer h2 {
  color: #fff;
}
.selectorContainer h4 {
  color: #fff;
}
.selectorContainer img {
  float: right;
  width: 100px;
  height: 100px;
  margin-top: -100px;
  margin-right: 10px;
}

@media screen and (max-width: 800px) {
  .selectorContainer {
    text-align: center;
    width: 250px;
    z-index: 50;
    background-color: #422680;
    border-radius: 10px;
    left: 80px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .selectorContainer img {
    position: relative;
    float: none;
    bottom: 10px;
    width: 100px;
    height: 100px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.leaflet-container {
  background: #280659;
}

.sliderbtn1{
  margin-left: -175px;
  margin-top: 75px;
  position: absolute;
  color: #0dcaf0;
  background: none;
  border: none;
}

.sliderbtn2{
  margin-right: -175px;
  margin-top: 75px;
  position: absolute;
  color: #0dcaf0;
  background: none;
  border: none;
}
</style>
