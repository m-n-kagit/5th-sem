import pygame
from sys import exit
from random import randint , choice

pygame.init() #neccessary to initialize
screen= pygame.display.set_mode((800,400))
screen2 = pygame.Surface((800,400),pygame.SRCALPHA)

def display_score():
    current_time = pygame.time.get_ticks()//1000 - start_time//1000
    score_surf = test_font.render(f'Score: {current_time}',False,(64,64,64))
    score_rect = score_surf.get_rect(center = (400,50))
    pygame.draw.rect(screen,'Pink',score_rect)
    pygame.draw.rect(screen,'Pink',score_rect,6)
    screen.blit(score_surf,score_rect)
    return current_time

#for the obstacle logic
def obstacle_movement(obstacle_list):
    if obstacle_list:
        for obstacle_rect in obstacle_list:
            obstacle_rect.x -=4.5
            if obstacle_rect.bottom==300:
                screen.blit(snail_surface,obstacle_rect)
            else :
                screen.blit(fly_surface,obstacle_rect)

            #below one builds a new list in which the element which is exceeding the limit is ignored and remaining is added 
            obstacle_list =[obstacle for obstacle in  obstacle_list if obstacle.x > -100 ]
        return obstacle_list
    else:
        return []

def collisions(player,obstacles):
    if obstacles:
        for obstacle_rect in obstacles:
            if player.colliderect(obstacle_rect): return False
        return True
    else:
        return True
start_time=0

def player_animation():
    global player_surface , player_index #making changes to the global variables
    if(player_rect.bottom < 300) : 
        player_surface = player_jump
        
    else :
        player_index+=0.2
        if(player_index>=2):
            player_index=0
        player_surface = player_run[int(player_index)]

def collision_sprite(): #sprite provide predefined collision method, checks if the sprite is colliding any other sprite
    if pygame.sprite.spritecollide(player.sprite,obstacle_group,False):
         #returns the all the collisions sprites
        obstacle_group.empty()
        return False
    else:
        return True





class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__() #to ensure that super class is initialized correctly
        player_walk1 = pygame.image.load("UltimatePygameIntro/graphics/Player/player_walk_1.png").convert_alpha()
        player_walk2 = pygame.image.load("UltimatePygameIntro/graphics/Player/player_walk_2.png").convert_alpha()
        self.player_jump = pygame.image.load("UltimatePygameIntro/graphics/Player/jump.png").convert_alpha()
        self.player_run = [player_walk1,player_walk2]
        self.player_index=0
        self.image =self.player_run[self.player_index]
        self.rect = self.image.get_rect(midbottom = (200,300))
    def player_input(self):
        keys = pygame.key.get_pressed() #without iterating in the pygame event 
        if keys[pygame.K_SPACE] and self.rect.bottom >=300:
            self.gravity = -20
    def apply_gravity(self):
        self.gravity +=1
        self.rect.y+=self.gravity
        if self.rect.bottom >=300:
            self.rect.bottom = 300
    def animation_state(self):
        if self.rect.bottom < 300:
            self.image = self.player_jump
        else:
            self.player_index+=0.1
            if(self.player_index>=len(self.player_run)): self.player_index=0
            self.image= self.player_run[int(self.player_index)]
    def update(self):
        self.player_input()
        self.apply_gravity()
        self.animation_state()

class Obstacle(pygame.sprite.Sprite):
    def __init__(self,type):
        super().__init__()
        if type =='fly':
            fly_frame1= pygame.image.load("UltimatePygameIntro/graphics/Fly/Fly1.png").convert_alpha()
            fly_frame2= pygame.image.load("UltimatePygameIntro/graphics/Fly/Fly2.png").convert_alpha()
            self.frames= [fly_frame1,fly_frame2]
            y_pos = 210
        else:
            snail_frame1 = pygame.image.load("UltimatePygameIntro/graphics/snail/snail1.png").convert_alpha()
            snail_frame2 = pygame.image.load("UltimatePygameIntro/graphics/snail/snail2.png").convert_alpha()
            self.frames = [snail_frame1,snail_frame2]
            y_pos= 300
        self.animation_index = 0
        self.image = self.frames[self.animation_index]
        self.rect = self.image.get_rect(midbottom = (randint(900,1100),y_pos))

    def animation_state(self):
        self.animation_index += 0.1
        if self.animation_index>=len(self.frames) : self.animation_index = 0
        self.image = self.frames[int(self.animation_index)]
    
    def update(self):
        self.animation_state()
        self.rect.x-=6
        self.destroy()

    def destroy(self):
        if self.rect.x<= -100:
            self.kill() #the predefined method in the sprite class to delete the element 

player = pygame.sprite.GroupSingle()
player.add(Player()) #adding instance of the player class 


screen2.set_alpha(180)
screen2.fill((32, 120, 131))
pygame.display.set_caption('Runner')
clock = pygame.time.Clock()
game_active=False
#test_surface = pygame.Surface((100,200))
#test_surface.fill('Red')
test_font = pygame.font.Font("UltimatePygameIntro/font/Pixeltype.ttf",50) #(font type , font size)
# text_surface = test_font.render("My Game",False,"Black") #("actualfont",anti alias,color)
sky_surface = pygame.image.load("UltimatePygameIntro/graphics/Sky.png").convert()
ground_surface = pygame.image.load("UltimatePygameIntro/graphics/ground.png").convert()

obstacle_group  = pygame.sprite.Group()


snail_frame1 = pygame.image.load("UltimatePygameIntro/graphics/snail/snail1.png").convert_alpha()
snail_frame2 = pygame.image.load("UltimatePygameIntro/graphics/snail/snail2.png").convert_alpha()
snail_frames = [snail_frame1,snail_frame2]
snail_index=0
snail_surface = snail_frames[0]
snail_animation_timer  = pygame.USEREVENT +2
pygame.time.set_timer(snail_animation_timer,500)
fly_frame1= pygame.image.load("UltimatePygameIntro/graphics/Fly/Fly1.png").convert_alpha()
fly_frame2= pygame.image.load("UltimatePygameIntro/graphics/Fly/Fly2.png").convert_alpha()
fly_index=0
fly_frames = [fly_frame1,fly_frame2]
fly_surface = fly_frames[fly_index]
fly_animation_timer = pygame.USEREVENT +3
pygame.time.set_timer(fly_animation_timer,200)
# snail_x_pos = 600
player_surface = pygame.image.load("UltimatePygameIntro/graphics/Player/player_stand.png").convert_alpha()
player_walk1 = pygame.image.load("UltimatePygameIntro/graphics/Player/player_walk_1.png").convert_alpha()
player_walk2 = pygame.image.load("UltimatePygameIntro/graphics/Player/player_walk_2.png").convert_alpha()
player_jump = pygame.image.load("UltimatePygameIntro/graphics/Player/jump.png").convert_alpha()
 
player_run = [player_walk1,player_walk2]
player_index=0
player_jump_sound = pygame.mixer.Sound("UltimatePygameIntro/audio/jump.mp3")
player_jump_sound.set_volume(0.5)
# player_surface_scaled = pygame.transform.scale2x(player_surface)
player_surface_scaled = pygame.transform.rotozoom(player_surface,0,2)
player_rect = player_surface.get_rect(midbottom = (80,300))
snail_rect = snail_surface.get_rect(bottomright = (750,300))
score_surf = test_font.render("Score:",False,"Black")
score_rect = score_surf.get_rect(center=(400,50))
player_gravity=0
title = test_font.render("The Runner Game",False,(17, 18, 18))
title_rect = title.get_rect(center=(400,50))
game_message = test_font.render('Press space to start',False,(111,196,169))
game_message_rect = game_message.get_rect(center=(400,340))
score=0
MyEvent = pygame.USEREVENT + 1 #to define a new user event in the event queue
pygame.time.set_timer(MyEvent,1500)
obstacle_rect_list = []
bg_music = pygame.mixer.Sound("UltimatePygameIntro/audio/music.wav")
bg_music.set_volume(0.25)
# bg_music.play()
music_started =False
while True:
    for event in pygame.event.get(): #gets all of the events
        if (event.type == pygame.QUIT): 
            pygame.quit()
            exit()
        if game_active:
            if event.type== pygame.MOUSEMOTION: #MOUSEBUTTONDOWN(release) ,MOUSEBUTTONUP
                if player_rect.collidepoint(event.pos) : print("Collide")
                # print(event.pos)
            if event.type== pygame.MOUSEBUTTONDOWN: #MOUSEBUTTONDOWN(release) ,MOUSEBUTTONUP
                player_gravity=-20 
                # print(event.pos)
            if(event.type == pygame.KEYDOWN):
                print("Key down")
                if event.key == pygame.K_SPACE and player_rect.bottom>=300:  
                    player_gravity=-20 #restrict the player to jump more after jumping 
                    player_jump_sound.play()
            if not music_started:
                bg_music.play(-1) #loop the music forever
                music_started = True
        else:
            if event.type==pygame.KEYDOWN and event.key==pygame.K_SPACE : 
                game_active =True
                # snail_rect.left = 800 
            bg_music.stop() #for stopping the music loop
            music_started=False
        if game_active :
            if  event.type == MyEvent :
                obstacle_group.add(Obstacle(choice(['fly','snail','snail','snail'])))
                # if(randint(0,2)): #for snail
                #     obstacle_rect_list.append(snail_surface.get_rect(bottomright = (randint(800,1000),300)))     
                # else: #for fly
                #     obstacle_rect_list.append(fly_surface.get_rect(bottomright = (randint(800,1000),200)))     
            # if event.type ==snail_animation_timer:
            #     if snail_index==0 : snail_index =1
            #     else : snail_index =0
            #     snail_surface = snail_frames[snail_index]

            # if event.type == fly_animation_timer:
            #     if fly_index==0 : fly_index =1
            #     else : fly_index =0
            #     fly_surface = fly_frames[fly_index]

    if game_active : 
        
        #draw all elements
        #update everything 
        screen.blit(sky_surface,(0,0))
        screen.blit(ground_surface,(0,300))
        score=display_score()
        # screen.blit(text_surface,(300,50))
        # pygame.draw.rect(screen,'Pink',score_rect)
        # pygame.draw.rect(screen,'Pink',score_rect,6)
        # pygame.draw.line(screen,"Black",(0,0),(800,400),4)
        # screen.blit(score_surf,score_rect)
        # snail_x_pos-=4 , We should use snail_rect for animating this character
        # if(snail_x_pos< -100): 
        #     snail_x_pos=800 , for moving with creating its rectangle
        
        # snail_rect.left-=4
        # if snail_rect.left <-100: snail_rect.left=800
        # screen.blit(snail_surface,snail_rect)
        # player_gravity+=1
        # obstacle_rect_list = obstacle_movement(obstacle_rect_list)  
        # player_rect.bottom+=player_gravity
        # if player_rect.bottom>=300 : player_rect.bottom =300
        # player_animation()
        # screen.blit(player_surface,player_rect)
        player.draw(screen)
        player.update()
        obstacle_group.draw(screen)
        obstacle_group.update()

        # keys=pygame.key.get_pressed() #returns 0 and 1 
        # if keys[pygame.K_SPACE]:
        #     print("jump")
        # if(player_rect.colliderect(snail_rect)): #if collision happens
        #     print("Collide")
        #not to executed , just to be used for mouse event cases
        # mouse_pos = pygame.mouse.get_pos()
        # if player_rect.collidepoint(mouse_pos):
        #     print(pygame.mouse.get_pressed()) #this function will return 0 or 1 if pressed by mouse 
        #if player_rect.colliderect(snail_rect) : game_active = False
        # game_active = collisions(player_rect,obstacle_rect_list)
        game_active = collision_sprite()
    else:

        screen.blit(screen2,(0,0))
        screen.blit(player_surface_scaled,(320,100))
        # obstacle_rect_list.clear()
        player_rect.midbottom = (80,300)
        player_gravity =0
        start_time = pygame.time.get_ticks()
        screen.blit(title,title_rect)
        if score>0:
            score_message = test_font.render(f'Your Score: {score}',False,(111,196,169))
            score_message_rect= game_message.get_rect(center=(450,340))
            screen.blit(score_message,score_message_rect)
        
        else:
            screen.blit(game_message,game_message_rect)
    pygame.display.update() #updates the display surface Pushes all your drawn changes to the visible screen.

    clock.tick(60) #tries to limit the loop to 60 FPS.