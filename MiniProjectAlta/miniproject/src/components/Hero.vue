<template>
  <div class="row mt-5">
      <div class="col">
        <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
                <h2><strong> Welcome Alterra Outdoor, </strong><br> Happy Rent</h2>
                <p> Ayo Pilih Barang Barang yang anda butuhkan </p>
                <router-link class="btn btn-lg btn-succes" to="/outdoor">
                    <b-icon-arrow-right></b-icon-arrow-right>Cari
                </router-link>
            </div>
        </div>
        </div>
        <div class="col">
            <img src="../assets/image/hero.png" width="100%"/>
        </div>
  </div>

</template>

<script>
export default {
    name : 'Hero'
}
</script>

<style>

</style>