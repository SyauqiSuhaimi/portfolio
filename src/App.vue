<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div class="home row mx-0 d-flex align-items-center" style="height: 100vh">
    <div class="col-6 p-4">
      <h2>MUHAMMAD SYAUQI BIN SUHAIMI</h2>
      <h5 class="secondory-color">FULL STACK DEVELOPER</h5>
      <div class="my-2 row d-flex justify-content-end">
        <template v-for="(nav, index) in pages" :key="index">
          <router-link :to="nav.link" class="navBar mx-1 col-auto">{{
            nav.name
          }}</router-link>
        </template>
      </div>
      <div class="footer row d-flex justify-content-end my-3">
        <template v-for="(item, index) in footer" :key="index">
          <a
            :href="item.link"
            class="col-auto p-0 mx-2 navigation"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :data-bs-title="item.tooltip"
          >
            <i :class="`fa fa-2x ${item.icon}`" aria-hidden="true"></i
          ></a>
        </template>
      </div>
    </div>
    <div class="col-6 p-4">
      <router-view v-slot="{ Component }" style="max-width: 600px">
        <Transition name="route" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",

  data() {
    return {
      pages: [
        {
          name: "About Me",
          link: "/",
        },
        {
          name: "Education",
          link: "/education",
        },
        {
          name: "Work Experience",
          link: "/work",
        },
        {
          name: "Projects",
          link: "/projects",
        },
      ],
      footer: [
        {
          icon: "fa-file-text",
          link: "https://drive.google.com/file/d/1U7iPTvZxcgbfaeqW8UL_Lt7QiXu17JiZ/view?usp=sharing",
          tooltip: "Download Resume",
        },
        {
          icon: "fa-github",
          link: "https://github.com/SyauqiSuhaimi",
        },
        {
          icon: "fa-linkedin-square",
          link: "https://www.linkedin.com/in/muhammad-syauqi-64b52118b/",
        },
        {
          icon: "fa-envelope-o",
          link: "mailto:muhammadsyauqi122@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #eeeeee;
  background-color: #18122b;
  overflow: hidden;
}
.navigation {
  text-decoration: none;
  color: inherit;
}

.navigation:hover {
  border-color: white;
  color: #bdafee;
}
a.navBar {
  padding: 5px 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: #635985;
  text-decoration: none;
  color: inherit;
}

a.navBar:hover {
  border-color: white;
  color: #bdafee;
}

a.router-link-active {
  border-color: white;
  color: #bdafee;
}
.secondory-color {
  color: #bdafee;
}
.card {
  background: rgba(0, 0, 0, 0) !important;
  border-color: #635985 !important;
}
.card:hover {
  border-color: rgb(228, 228, 228) !important;
  cursor: pointer;
}
p {
  margin: 0px;
  color: white;
}
ul {
  color: white;
}

/* route transition */
.route-enter-from {
  opacity: 0;
  transform: translate(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transition: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
