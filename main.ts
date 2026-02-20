let mySprite = sprites.create(assets.image`cube1`, SpriteKind.Player)
mySprite.ay = 600
mySprite.vx = 120
mySprite.setPosition(20, 80)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index <= 30; index++) {
	
}
