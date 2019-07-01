<template>  
  <!-- https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0 -->
  <div> 
    <Navbar></Navbar>
    <div class="container-fluid">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <!-- The slideshow -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/happy1.jpg" style="width:100%;height: 450px; background-size: 100%, cover !important" alt="Los Angeles">
            </div>
            <div class="carousel-item">
              <img src="../assets/happy2.jpg" style="width:100%;height: 450px; background-size: 100%, cover !important" alt="Chicago">
            </div>
            <div class="carousel-item">
              <img src="../assets/happy3.jpg" style="width:100%;height: 450px; background-size: 100%, cover !important" alt="New York">
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>  
    </div>
    <br>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4" v-for="gif in gifImages">
            <video :src="gif" class="img-thumbnail" controls style="width: 100%;height: 300px;"></video>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <center><button type="button" class="btn btn-info" @click="fetchMore()">Load More</button></center>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/jquery.min.js';
  import axios from 'axios';
  import Navbar from './Navbar.vue';
  export default{
      components:{
          Navbar
      },
      data(){
        return{
          total:null,
          gifImages:[]
        }
      },
      beforeMount(){

      },
      mounted(){
        this.getAllGifImages();
      },
      methods:{
        getAllGifImages(){
          axios.get('api/v1/')
          .then(response=>{
            for (var i = 0; i < response.data.data.length; i++) {
              this.gifImages.push(response.data.data[i].images.original_mp4.mp4);
            }

            this.total = response.data.pagination.count;
          })
        },
        fetchMore(){
          this.total = this.total + 15;
          var loadMore = this.total;

          axios.get(`api/v1/${loadMore}`)
          .then(response=>{
            this.gifImages = [];
            for (var i = 0; i < response.data.data.length; i++) {
              this.gifImages.push(response.data.data[i].images.original_mp4.mp4);
            }
          });
        }
      }
  }
</script>
<style>
  
</style>