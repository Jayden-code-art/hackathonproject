mySprite = sprites.create(assets.image("""
    cube1
    """), SpriteKind.player)
mySprite.ay = 600
mySprite.vx = 120
mySprite.set_position(20, 80)
scene.camera_follow_sprite(mySprite)
for index in range(31):
    pass