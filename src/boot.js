/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    // Con setPath podemos establecer el prefijo que se añadirá a todos los load que aparecen a continuación
    
    this.load.setPath('assets/sprites/');
    this.load.image('flower', 'flower64x64.png'); 

    this.load.spritesheet('bee', 'bee.png',
    { frameWidth: 100, frameHeight: 55 });
    
    //Cargamos los fondos
    this.load.image('sky', 'sky-clouds.jpg');
    this.load.image('green', 'green_1000.png');
    this.load.image('skyline', 'skyline_1000.png');
    
    
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('scrollscene');
  }
}