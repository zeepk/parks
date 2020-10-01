<template>
  <div class="hello">
    <h2>National Parks Activities Directory</h2>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText
        class="search"
        type="text"
        v-model="value"
        @keyup="handleSearch"
        placeholder="Search by park name or activity 🌄"
      />
    </span>
    <div v-if="loading"><ProgressSpinner class="loading-spinner" /></div>
    <div v-else>
      <div class="p-grid">
        <div
          v-for="park in parksData"
          :key="park.fullName"
          class="p-col-12 p-md-6 p-lg-3"
        >
          <Card class="park-card">
            <template slot="header">
              <img
                loading="lazy"
                :src="
                  park.images[0]
                    ? park.images[0].url
                    : 'https://www.mountaineers.org/images/placeholder-images/RoutesPlacesDefaultImage.jpg/@@images/d2bde39b-379d-47b1-9398-827f6444b501.jpeg'
                "
                :alt="park.images[0] ? park.images[0].altText : 'park'"
                class="card-image"
                width="600"
                height="400"
              />
            </template>
            <template slot="title"
              ><a :href="park.url">{{ park.fullName }}</a></template
            >
            <template class="card-content" slot="content">
              <p
                class="activity"
                v-for="activity in park.activities"
                :key="activity.id"
              >
                {{ activity.name }}
              </p>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL =
  "https://developer.nps.gov/api/v1/parks?&api_key=NgOe6IPlEIDmc6wU76I70zMHtoTAmef8Syyow1PL&limit=500";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      parksData: [],
      value: "",
      loading: true,
      filters: {},
    };
  },
  created() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        this.apiData = data;
        this.parksData = data.data;
      })
      .catch((err) => console.log(err))
      .finally(() => (this.loading = false));
  },
  methods: {
    handleSearch: function () {
      // filter search results
      console.log(this.value);
      this.parksData = this.apiData.data.filter(
        (park) =>
          park.fullName.toLowerCase().includes(this.value.toLowerCase()) ||
          JSON.stringify(park.activities)
            .toLowerCase()
            .includes(this.value.toLowerCase())
        // park.description.toLowerCase().includes(this.value.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
h2 {
  padding: 2vh 0;
  margin: 0;
}
a {
  color: black;
  text-decoration: none;
}
.loading-spinner {
  width: 200px;
  height: 200px;
  position: absolute;
  left: calc(50vw - 100px);
  top: calc(50vh - 100px);
}
.p-grid {
  margin: 0;
  padding: 5vh 5vw;
}
.search {
  width: 600px;
  max-width: 80vw;
}
.card-image {
  max-height: 200px;
  object-fit: cover;
}
.park-card::-webkit-scrollbar {
  display: none;
}
.park-card {
  width: 100%;
  height: 50vh;
  overflow: auto;
  scrollbar-width: none;
}
.card-content {
  padding: 0 !important;
}
.activity {
  text-align: left;
}
</style>
