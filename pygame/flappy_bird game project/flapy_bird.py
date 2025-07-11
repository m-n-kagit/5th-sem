#Flappy bird Game
import pygame as py
from  sys import exit
import random 

py.init()
screen = py.display.set_mode((430,650))

class Obstacle(py.sprite.Sprite):
     def __init__(self):
          super().__init__()
          obstacle_img = py.image.load(word_dir+"/sprites/pipe-green.png").convert_alpha()
          width = obstacle_img.get_width()
          height = 2*obstacle_img.get_height() + 150
          obs_img2 = py.transform.scale(obstacle_img,(width,height))
          self.img2 = obs_img2
          self.img1 = py.transform.rotozoom(obs_img2,180,1) #FLIPPED PIPE
          self.image = py.Surface((width,height),py.SRCALPHA)
          self.image.blit(self.img1,(0,-500))
          self.image.blit(self.img2,(0,500))
          self.rect = self.image.get_rect(midbottom=(random.randint(420,500),random.randint(600,720)))

     def update(self):
          self.rect.x-=6
          



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


clock = py.time.Clock()
word_dir = "pygame/flappy_bird game project/flappy-bird-assets"
py.display.set_caption("Flappy Bird")
icon_surf = py.image.load(word_dir+"/favicon.ico")
py.display.set_icon(icon_surf)

background_img = py.image.load(word_dir+"/sprites/background-day.png")
background_img_scaled = py.transform.rotozoom(background_img,0,1.5)
base_img = py.image.load(word_dir+"/sprites/base.png")
base_img_scale = py.transform.scale(base_img,(500,112))

player = py.sprite.GroupSingle()
player.add(Player())
inc=0
obstacle_list = py.sprite.Group()
obstacle = py.sprite.Group()
obstacle.add(Obstacle())

Obstaccle_Event = py.USEREVENT + 1
py.time.set_timer(Obstaccle_Event,1500)

game_active = False

while(True):
    for event in py.event.get():
            
            if event.type == py.QUIT : 
                py.quit()
                exit()
            if event.type == Obstaccle_Event :
                obstacle_list.add(Obstacle()) 
                  
    screen.blit(background_img_scaled,(0,-90))
    inc+= 1
    if inc>15:
         inc=0
    screen.blit(base_img_scale,(0 -inc,600 ))
    
    player.draw(screen)
    player.update()
    obstacle_list.draw(screen)
    obstacle_list.update()
    py.display.update()
    clock.tick(60)
