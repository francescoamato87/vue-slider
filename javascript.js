// VUE-SLIDE

// console.log('slider Vue');

const app = new Vue ({
  el: '#app',
  data:{
    indexPhoto: 0,  // <--// la prima foto
    photos: [
      './img/1.jpg',
      './img/2.jpg',
      './img/3.jpg',
      './img/4.jpg',
      './img/5.jpg',
      './img/6.jpg',
      './img/7.jpg',
      './img/8.jpg'
    ],

intervalId : 0

  },
// AUTOLOOP
created(){
  console.log('created!');

  this.startLoop();
},

methods: {
    nextPhoto() {
      this.indexPhoto += 1;

      if(this.indexPhoto > (this.photos.length - 1 ) ) {
        this.indexPhoto = 0;
      }
    },
    prevPhoto() {
      this.indexPhoto -= 1;

      if(this.indexPhoto < 0) {
        this.indexPhoto = this.photos.length - 1;
      }
    },
    setPhoto(index) {
      console.log(index);

      this.indexPhoto = index;
    },

    startLoop(){
      this.intervalId = setInterval(() => {
        this.nextPhoto();
      }, 3000);
    },
    stopLoop(){
      clearInterval(this.intervalId);
    }
  }

});
