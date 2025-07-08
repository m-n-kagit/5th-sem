#Flappy bird Game
import pygame as py
from  sys import exit
import random 
class Player(py.sprite.Sprite):
        def __init__(self):
            super().__init__() #to ensure that parent class constructor is inititialized properly
            player_fly1 = py.image.load(word_dir+"/sprites/fly_1.png ")

            player_fly2 = py.image.load(word_dir+"/sprites/fly_2.png")
            player_fly3 = py.image.load(word_dir+"/sprites/fly_3.png")
            self.player_fly_frames = [player_fly1,player_fly2,player_fly3]
            self.player_fly_index= 0
            player_image = self.player_fly_frames[self.player_fly_index]
            self.image = py.transform.rotozoom(player_image,0,1.5)
            self.rect = self.image.get_rect(midbottom = (100,220))
            self.gravity=0 
        def animation_state(self):
            self.player_fly_index+=0.2
            if self.player_fly_index>= len(self.player_fly_frames) : self.player_fly_index=0
            player_image = self.player_fly_frames[int(self.player_fly_index)]
            self.image = py.transform.rotozoom(player_image,0,1.5)
        
        def apply_gravity(self): 
             self.gravity += 1
             self.rect.y += self.gravity
             if self.gravity>0:
                self.image = py.transform.rotozoom(self.player_fly_frames[int(self.player_fly_index)],-30,1.5)

        def player_input(self):
             keys  = py.key.get_pressed()
             if keys[py.K_SPACE] and self.rect.y>0:
                  self.gravity =-13

        def update(self):
            self.animation_state()
            self.apply_gravity()
            self.player_input()


py.init()
screen = py.display.set_mode((430,650))
clock = py.time.Clock()
word_dir = "pygame/flappy_bird game project/flappy-bird-assets"
py.display.set_caption("Flappy Bird")
icon_surf = py.image.load(word_dir+"/favicon.ico")
py.display.set_icon(icon_surf)

background_img = py.image.load(word_dir+"/sprites/background-day.png")
background_img_scaled = py.transform.rotozoom(background_img,0,1.5)
base_img = py.image.load(word_dir+"/sprites/base.png")
base_img_scale = py.transform.scale(base_img,(500,112))
game_active = False

player = py.sprite.GroupSingle()
player.add(Player())
inc=0


while(True):
    for event in py.event.get():
            
            if event.type == py.QUIT : 
                py.quit()
                exit()  
                  
    screen.blit(background_img_scaled,(0,-90))
    inc+= 1
    if inc>15:
         inc=0
    screen.blit(base_img_scale,(0 -inc,600 ))
    
    player.draw(screen)
    player.update()
    py.display.update()
    clock.tick(60)
