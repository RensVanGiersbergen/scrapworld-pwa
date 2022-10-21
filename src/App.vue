<template>
   <header>
    <nav class="navbar">
      <RouterLink to="/settings" class="navbar"><img src="./assets/Anita.png"/></RouterLink>
      <a class="navbartitle">ScrapWorld</a>
      <ul class="nav-menu" :class="[{ active: isActive }]">
        <li class="nav-item">
          <RouterLink to="/" @click="toggleHamburgerMenu()" class="nav-link"
            >Home</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/scrapbooks"
            @click="toggleHamburgerMenu()"
            class="nav-link"
            >Scrapbook overview</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/friends"
            @click="toggleHamburgerMenu()"
            class="nav-link"
            >Friends</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/settings"
            @click="toggleHamburgerMenu()"
            class="nav-link"
            >Settings</RouterLink
          >
        </li>
      </ul>
      <!-- Hamburger menu -->
      <div
        @click="toggleHamburgerMenu()"
        :class="['hamburger', { active: isActive }]"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
  <router-view/>
  <FilePreview></FilePreview>
</template>


<!-- JavaScript code -->
<script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },
    name: "Header",
    methods: {
      toggleHamburgerMenu() {
        this.isActive = !this.isActive;
      },
    },
  };
  
  </script>

<style>
* {
  margin: 0;
}

body{
  background-color: #280659;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
  background-color: #422680;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>

<!-- CSS styles -->
<style scoped>
  
  body {
     margin: 0;
     padding: 0;
  }
  header {
  background: #422860;
}

li {
  list-style: none;
  color: #fff;
  align-items: center;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
}

.navbar {
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  padding-left: 10px;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}
.nav-branding {
  font-size: 1.5rem;
}

.nav-link {
  transition: 0.7s ease;
}

.nav-link:hover {
  text-decoration: underline;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background: #fff;
  border-radius: 0.3rem;
}

@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
    text-align: center;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    left: -111%;
    top: 79px;
    gap: 0;
    flex-direction: column;
    background: #422680;
    width: 100%;
    text-align: center;
    transition: 0.3s;
  }

  .nav-item {
    margin: 16px 0;
    text-align: center;
    text-align: center;
  }

  .nav-menu.active {
    position: absolute;
    left: 0px;
    z-index: 9999;
    text-align: center;
  }

  .navbartitle{
    padding-right: 25px;
  }
}
  </style>
  
