function Character(link, x, y) {
  this.image = new Image()
  this.image.src = link
  this.health = 100
  this.items = []
  this.ammo = 0
  this.gun = 0
  this.gunLvl = 0
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
    } else {

    }

  }

  this.platformBounds = () => {
    //X>=platforms 0 0 -32 x< = platforms (0 2 -1)*64 y> platforms 0 1 -32 y< platforms 0 1 - 16
    for (var plat = 0; plat < platforms.length; plat++) {
    if (this.x > platforms[plat][0] - 32 && this.x < platforms[plat][3] + 32 && this.y > platforms[plat][1] - 32 && this.y < platforms[plat][1] - 16)
      this.y = platforms[plat][1] - 32
    inAir = false
  }
  }


}