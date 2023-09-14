<template>
  <div>
    <!-- Navigation menu -->
    <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading1">First</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#scrollspyHeading2">Second</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Dropdown</a
          >
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#scrollspyHeading3">Third</a>
            </li>
            <li>
              <a class="dropdown-item" href="#scrollspyHeading4">Fourth</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#scrollspyHeading5">Fifth</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Your page content goes here -->
    <div>
      <!-- Section 1 -->
      <section id="scrollspyHeading1">
        <!-- Content for Section 1 -->
      </section>

      <!-- Section 2 -->
      <section id="scrollspyHeading2">
        <!-- Content for Section 2 -->
      </section>

      <!-- Section 3 -->
      <section id="scrollspyHeading3">
        <!-- Content for Section 3 -->
      </section>

      <!-- Section 4 -->
      <section id="scrollspyHeading4">
        <!-- Content for Section 4 -->
      </section>

      <!-- Section 5 -->
      <section id="scrollspyHeading5">
        <!-- Content for Section 5 -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "scrollsView",
  mounted() {
    // Initialize Scrollspy when the component is mounted
    this.$nextTick(() => {
      this.initScrollspy();
    });
  },
  methods: {
    initScrollspy() {
      // Initialize Scrollspy as you normally would
      // Make sure to target the correct element and sections

      // For example, you can initialize Scrollspy like this:
      "#navbar-example2".scrollspy({
        target: "#navbar-example2", // The element containing your navigation menu
        offset: 70, // Adjust this value based on your design
      });
    },
    updateScrollspy() {
      // Call this method whenever the route changes
      // Update Scrollspy here to reflect the new active section

      // You might need to refresh Scrollspy when the route changes:
      "#navbar-example2".scrollspy("refresh");
    },
  },
  watch: {
    // Watch for route changes and update Scrollspy
    $route: "updateScrollspy",
  },
};
</script>
