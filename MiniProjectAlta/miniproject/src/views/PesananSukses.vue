<template>
  <div class="pesanan-sukses">
      <Navbar />
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col text-center">
            <img src="../assets/image/sukses.png" width="300" />
            <h2><strong>Sewa Berhasil</strong></h2>
            <h4>Sewa Anda Segera Diproses<br>Silahkan Tunggu</h4>
            <br>
            <br>
            <h5>Silahkan Hubungi 08123456789 <br>Jika dalam 30 menit belum ada respon</h5>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
 name: "PesananSukses",
  components: {
    Navbar,
  },
}
</script>

<style>

</style>