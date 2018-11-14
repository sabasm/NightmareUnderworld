function Enemy(link, x, y) {
    this.enemyList=[[common],[uncommon],[pita]]
    this.enemy = new Image()
    this.enemy.src = link
    this.ene1hp = 150
    this.ene2hp = 250
    this.ene3hp = 325
    this.damage1 = 8
    this.damage2 = 10
    this.damage3 = 18
    this.x = x || 0
    this.y = y || 0
    this.width = 32
    this.height = 32
    this.image.onload = function () {
      this.draw()
    }.bind(this)
  
    this.draw = function () {
      this.canvasBounds()
  
      this.y += 5
  
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      this.platformBounds()
    }.bind(this)
    this.canvasBounds = () => {
      if (this.y + this.height >= c.height - 64) {
        this.y = c.height - this.height - 64
        inAir = false
      }
      if (this.y >= c.height - 64) {
        this.y = c.height - 64
      }
      if (this.y <= 64) {
        this.y = 64
      }
      if (this.x <= 64) {
        this.x = 64
      }
      if (this.x >= c.width - 64 - 32) {
        this.x = c.width - 64 - 32
      }
  
    }
  
    this.platformBounds = () => {
      //X>=platforms 0 0 -32 x< = platforms (0 2 -1)*64 y> platforms 0 1 -32 y< platforms 0 1 - 16
      for (var plat = 0; plat < platforms.length; plat++) {
        if (this.x > platforms[plat][0] - 32 && this.x < platforms[plat][3] + 32 &&
          this.y > platforms[plat][1] - 32 && this.y < platforms[plat][1] - 16)
          this.y = platforms[plat][1] - 32
        inAir = false
      }
    }
  
  
  }