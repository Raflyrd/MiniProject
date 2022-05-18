<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar Peralatan<strong> Lengkap</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
         
            <input
            v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Alat Yang Anda Butuhkan"
              aria-label="Cari"
              aria-describedby="basic-addon1"
              @keyup="searchOutdoor"
            />

             <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
            </span>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Outdoor",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: '',
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchOutdoor() {
        axios
      .get("http://localhost:3008/products?q="+this.search)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Gagal : ", error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3008/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
</style>