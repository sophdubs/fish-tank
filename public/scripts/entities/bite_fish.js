class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
  }

  onClick(event) {
    let sound = new Audio('chomp.mp3');
    sound.loop = false;
    sound.play();
  }
}
