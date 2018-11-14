//canvas
var c = document.getElementById("c");
var ctx = c.getContext("2d");

//variables
var interval = 0
var frames = 0
var assets = {
    //level builders
    side: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0013_ground.png?alt=media&token=42c12b42-7ce4-45ff-9099-3ff5aabbf626",
    platform1: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0012_platform.png?alt=media&token=9a757d24-0e59-4ceb-b4f0-dbd6b85c1cdd",
    platform2: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0012_platform.png?alt=media&token=9a757d24-0e59-4ceb-b4f0-dbd6b85c1cdd",
    platform3: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0012_platform.png?alt=media&token=9a757d24-0e59-4ceb-b4f0-dbd6b85c1cdd",
    corner: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0013_ground.png?alt=media&token=42c12b42-7ce4-45ff-9099-3ff5aabbf626",

    //Characters
    char1: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0011_char1.png?alt=media&token=4053b45a-700f-4de2-b156-37b965695ed5",
    char2: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0011_char1.png?alt=media&token=4053b45a-700f-4de2-b156-37b965695ed5",

    //resources
    ammo: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0000_bullets.png?alt=media&token=7ed6417d-f9f6-46b7-be01-5e955f336de4",
    meds: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0001_meds.png?alt=media&token=82ae1edb-d89d-4b4a-a43e-fac256fd84cb",

    //types of guns
    pistol: "https://cdn.onlinewebfonts.com/svg/img_376373.png",
    shotgun: "https://cdn.onlinewebfonts.com/svg/img_376373.png",
    automaticRifle: "https://cdn.onlinewebfonts.com/svg/img_376373.png",
    sMG: "https://cdn.onlinewebfonts.com/svg/img_376373.png",

    //rare
    common: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0009_gun0.png?alt=media&token=2daca942-b43b-4712-bfe3-46a1b7e360d3",
    uncommon: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0007_gun2.png?alt=media&token=9c4fd084-bc41-4111-9e00-250e9f33d62f",
    rare: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0008_gun1.png?alt=media&token=524eb796-0491-4acb-ac3c-6a7d233ff461",
    epic: "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0006_gun3.png?alt=media&token=bf42ed93-1dcc-4a9f-b43e-accefa423a2d"

}
var platforms = [
    //Center
    [c.width/2-2.5*32,c.height-160-30,5,c.width/2+2.5*32],
    [c.width/2-4*32,c.height-260-30,8,c.width/2+4*32],
    [c.width/2-5*32,c.height-360-30,10,c.width/2+5*32],
    [c.width/2-6*32,c.height-460-30,12,c.width/2+6*32],
    [c.width/3-2*32,c.height-560-30,4,c.width/3+2*32],
    [c.width/3+10*32,c.height-560-30,4,c.width/3+14*32],

    //left
    [64,c.height-145,10,64+10*32],
    [64,c.height-245 - 17,8,8+10*32],
    [64,c.height-345-17,5,64+5*32],
    [64,c.height-445-17,4,64+4*32],
    [64,c.height-545-17,3,64+3*32],
    [64,c.height-645-17,2,64+2*32],

    //right
    [c.width-10*32-64,c.height-145,9,c.width-64-32],
    [c.width-64-8*32,c.height-245 ,7,c.width-64-32],
    [c.width-64-5*32,c.height-345,4,c.width-64-32],
    [c.width-64-4*32,c.height-445,3,c.width-64-32],
    [c.width-64-3*32,c.height-545,2,c.width-64-32],
    [c.width-64-2*32,c.height-645,1,c.width-64-32],



]
//instances
var char1 = new Character(assets.char1, c.width / 2 - 128, 128)
var meds = new Resources(128, 128)
var ammo = new Resources(256, 128)
var gun = new wepon(324, 128)
var level = new Board()

//main functions
function start() {
    interval = 0
    frames = 0
    interval = setInterval(update, 1000 / 60)
}

console.log(gun)

function update() {
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.fillRect(0, 0, c.width, c.height)
    level.draw();
    platformsGenerator()
    char1.draw()
    ammo.draw()
    meds.draw()
    gun.draw()
    controles()

}

(start())

//AUXILIAR FUNCTIONS
function platformsGenerator() {
    for (var plat = 0; plat < platforms.length; plat++) {
        level.drawPlatforms(platforms[plat][0], platforms[plat][1], platforms[plat][2])

    }
}


