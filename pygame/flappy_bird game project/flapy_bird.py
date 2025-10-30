#Flappy bird Game
import pygame as py
from  sys import exit
import random 

py.init()
screen = py.display.set_mode((430,650))

score = 0
# x_pos = random.randint(430,500)
class Obstacle_norm(py.sprite.Sprite):
     def __init__(self):
          super().__init__()
          global x_pos 
          obstacle_img = py.image.load(word_dir+"/sprites/pipe-green.png").convert_alpha()
          self.image  = obstacle_img
          self.rect = self.image.get_rect(midbottom=(x_pos,random.randint(600,720)))

     def update(self):
          self.rect.x-=6
          if(self.rect.x<=-100):
               self.kill()
          

class Obstacle_flipped(py.sprite.Sprite):
     def __init__(self):
          super().__init__()
          global x_pos
          obstacle_img = py.image.load(word_dir+"/sprites/pipe-green.png").convert_alpha()
          obstacle_img_f = py.transform.rotozoom(obstacle_img,180,1)
          self.image  = obstacle_img_f          
          self.rect = self.image.get_rect(midbottom=(x_pos,random.randint(0,180)))
          self.score=False

     def update(self):
          global score
          self.rect.x-=6
          if(self.rect.x<=-100):
               self.kill()
          if(self.rect.x<=100 and not self.score): 
               score += 1
               print(score)
               self.score = True




def collision_sprite(): #sprite provide predefined collision method, checks if the sprite is colliding any other sprite
    if py.sprite.spritecollide(player.sprite,obstacle_list,False) or player.sprite.rect.y>=600 or py.sprite.spritecollide(player.sprite,obstacle_f,False):
         #returns the all the collisions sprites
        obstacle_list.empty()
        obstacle_f.empty()
        print("Collision")
        return False
    else:
        return True
          



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
            self.player_fly_index+=0.3
            if self.player_fly_index>= len(self.player_fly_frames) : self.player_fly_index=0
            player_image = self.player_fly_frames[int(self.player_fly_index)]
            self.image = py.transform.rotozoom(player_image,0,1.5)
        
        def apply_gravity(self): 
             self.gravity += 1
             self.rect.y += self.gravity
             if self.gravity>0:
                self.image = py.transform.rotozoom(self.player_fly_frames[int(self.player_fly_index)],-15,1.5)

        def player_input(self):
             keys  = py.key.get_pressed()
             if keys[py.K_SPACE] and self.rect.y>0:
                  self.gravity =-10

        def update(self):
            self.animation_state()
            self.apply_gravity()
            self.player_input()


def display_score(score):
     global text_font
     global screen
     score_t = text_font.render(f"Score:{score}",False,(212, 81, 11))
     s_rect = score_t.get_rect(midbottom=(220,100))
     screen.blit(score_t,s_rect)

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
# obstacle.add(Obstacle_norm())
obstacle_f = py.sprite.Group()
# obstacle_f.add(Obstacle_flipped())
Obstaccle_Event = py.USEREVENT + 1
py.time.set_timer(Obstaccle_Event,1500)
text_font =py.font.Font("UltimatePygameIntro/font/Pixeltype.ttf",50)


game_active = False

while(True):
    for event in py.event.get():
            
            if event.type == py.QUIT : 
                py.quit()
                exit()
            if game_active:
                if event.type == Obstaccle_Event :
                    obstacle_list.add(Obstacle_norm())
                    obstacle_f.add(Obstacle_flipped()) 
            if event.type == py.KEYDOWN and event.key == py.K_SPACE and not game_active:
                print("Pressed spacekey")
                score=0
                game_active = True
    if(game_active):             
        screen.blit(background_img_scaled,(0,-90))
        inc+= 1
        if inc>15:
            inc=0
        screen.blit(base_img_scale,(0 -inc,600 ))
        x_pos = random.randint(430,500)
    
        player.draw(screen)
        player.update()
        obstacle_list.draw(screen)
        
        obstacle_f.draw(screen)
        obstacle_f.update()
        game_active = collision_sprite()
        display_score(score)


    else:
        x_pos = random.randint(430,500)
        screen.blit(background_img_scaled,(0,-90))
        message = text_font.render("Press Space bu tton to start",False,(200,111,156))
        score_t = text_font.render(f"Your Score:{score}",False,(212, 81, 11))
        score_rect = score_t.get_rect(midbottom = (220,100))
        message_rect=message.get_rect(midbottom=(220,500))
        screen.blits([(message,message_rect),(score_t,score_rect)])
        screen.blit(base_img_scale,(0,600 ))
        player.sprite.gravity=0
        player.sprite.rect.midbottom = (100,220)
        player.sprite.image = py.transform.rotozoom(player.sprite.player_fly_frames[0],0,1.5)
        player.draw(screen)


    obstacle_list.update()
    py.display.update()
    clock.tick(60)
