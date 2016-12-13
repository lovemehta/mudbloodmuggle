
StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);
    
    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);
    
    // Start the animation
    this.start = this.el.find('.start');
    
    // The animation wrapper
    this.animation = this.el.find('.animation');
    
    // Remove animation and shows the start screen
    this.end();
      
    // Start the animation on click
    this.start.bind('click', $.proxy(function() {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    // Reset the animation and shows the start screen
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
        this.animation.hide();
    this.animation.remove();
    
    this.document.getElementById("homeDiv").className="visibleHome";
        this.end();
    }, this));
  }
  
  /*
   * Resets the animation and shows the start screen.
   */
  StarWars.prototype.end = function() {
    this.animation.hide();
    this.animation.remove();
     this.document.getElementById("homeDiv").className="visibleHome";
    
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});


