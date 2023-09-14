<template>
  <div>
    <h5 class="secondory-color">Projects List</h5>
    <template v-for="(item, index) in project" :key="index">
      <div class="card my-2">
        <div class="card-body">
          <p>
            <a :href="item.link" target="_blank"
              >{{ item.title }}
              <i class="fa fa-share-square-o" aria-hidden="true"></i
            ></a>
          </p>
          <p>{{ item.description }}</p>
          <template v-for="(tech, index) in item.tech" :key="index">
            <button type="button" class="btn btn-custom m-2">
              {{ tech }}
            </button></template
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: [
        {
          title: "Facility Management System",
          description:
            "Software solution designed to help organizations efficiently manage and optimize their physical assets and facilities. This includes buildings, equipment, resources, and other assets critical to the organization's operations.",
          link: "http://myces-fms.com/#/Home",
          tech: [
            "Vue JS",
            "Nest JS",
            "HTML/CSS",
            "Javascript",
            "Typescript",
            "Quasar",
          ],
        },
        {
          title: "NeedForTrees",
          description:
            "Built using Vue.js, this responsive website introduces NeedForTrees, a project aimed at raising awareness about deforestation and showcasing cutting-edge NFT technology.",
          link: "http://needfortrees.io/",

          tech: ["Vue JS", "HTML/CSS", "Javascript", "Bootstrap"],
        },
        {
          title: "Wise Premium",
          description:
            "Designed using Vue.js and featuring multilingual support in Mandarin and English, this responsive website serves as the gateway to an exclusive club experience. Explore a world of luxury living, concierge services, lucrative affiliate programs, and more.",
          link: "http://178.128.49.253/",

          tech: ["Vue JS", "HTML/CSS", "Javascript", "Bootstrap"],
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  text-align: left;
}

.btn-custom {
  border-color: #635985;
  color: white;
}

.btn-custom:hover {
  border-color: white;
  color: #bdafee;
}

a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: #bdafee;
}
</style>
