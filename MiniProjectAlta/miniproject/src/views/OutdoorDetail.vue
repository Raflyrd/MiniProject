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

<div class="row mt-4">
  <div class="col-md-6">
   <img :src=" '../assets/images/' + product.gambar " class="img-fluid" />
  </div>
  <div class="col-md-6">
    <h2><strong>{{ product.nama }}</strong></h2>
    <hr>
    <h4>Harga : <strong>Rp. {{ product.harga }}</strong></h4>
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="jumlah_barang">Jumlah Barang</label>
        <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
      </div>
      <div class="form-group">
        <label for="keterangan">Keterangan</label>
        <textarea v-model="pesan.keterangan" 
        class="form-control" placeholder="Misalnya 2 hari, 3 hari , 1 minggu .. "></textarea>
      </div>
      <hr>

      <button type="submit" class="btn btn-success" @click="pemesanan">
        <b-icon-cart></b-icon-cart>Sewa Sekarang</button>
    </form>
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
      product:{},
      pesan:{}
    }
  },
  methods: {
    setProduct(data){
    this.product = data
    },
    pemesanan(){
      this.pesan.product = this.product;
      axios
      .post("http://localhost:3010/keranjangs", this.pesan)
      .then(() =>{
        this.$router.push({path: "/keranjang"})
      console.log("Berhasil");
      })
      .catch((err) => console.log(err))
    }
  },

  mounted(){
    axios
      .get("http://localhost:3010/products/"+this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  }
};
</script>

<style>
</style>