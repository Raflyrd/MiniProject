<template>
  <div class="outdoor-detail">
    <Navbar />
    <div class="container">

      <!--breacdrumb-->

      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
                </li>
                <li class="breadcrumb-item">
                <router-link to="/outdoor" class="text-dark">Outdoor</router-link>
                </li>
              <li class="breadcrumb-item active" aria-current="page">
                Order Alat
              </li>
            </ol>
          </nav>
        </div>
      </div>

<div class="row">
  <div class="col-md-6">
   <!-- <img :src="'../assets/images" />-->
  </div>
  <div class="col-md-6">
    <h2><strong>{{product.nama}}</strong></h2>
  </div>
</div>

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from 'axios';

export default {
  name: "OutdoorDetail",
  components: {
    Navbar,
  },
  data(){
    return{
      product: {}
    }
  },
  methods: {
    setProduct(data){
    this.product = data
    }
  },

  mounted(){
    axios
      .get("http://localhost:3008/products"+this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("Gagal : ", error));
  }
};
</script>

<style>
</style>