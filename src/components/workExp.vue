<template>
  <div>
    <h5 class="secondory-color">Work Experience</h5>
    <template v-for="(item, index) in work" :key="index">
      <div class="card my-2">
        <div class="card-body">
          <p>{{ item.company }}</p>
          <p>
            {{ item.position }} <span class="secondory-color">|</span>
            {{ item.year }}
          </p>
          <ul class="mt-2" v-for="(list, index) in item.jd" :key="index">
            <li>{{ list }}</li>
          </ul>
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
      work: [
        {
          company: "MYCES MANUFACTURING SDN BHD",
          position: "Full Stack Developer",
          year: "September 2022 - Present",
          jd: [
            "Assist in developed, tested and maintained web application",
            "Integrating backend and frontend system using REST API",
          ],
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
          company: "EVO TRACKER SDN BHD",
          position: "Internship",
          year: "March 2022 - August 2022",
          jd: [
            "Writing a User Manual and Guidance Report for system and application.",
            "Assist in developed, tested and maintained website and applications.",
          ],
          tech: ["Vue JS", "HTML/CSS", "Javascript", "MS OFFICE"],
        },
        {
          company: "PEJABAT DAERAH SABAK BERNAM",
          position: "Internship",
          year: "2017—2018",
          jd: [
            "Maintained computer hardware and software in the company.",
            "Design and create a multimedia content for the company.",
            "Assist in developed, tested and maintained system for the company.",
          ],
          tech: ["HTML/CSS", "Javascript", "PHP", "MS OFFICE"],
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
</style>
