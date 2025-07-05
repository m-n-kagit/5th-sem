import pygame
from sys import exit

def display_score():
    current_time = pygame.time.get_ticks()//1000 - start_time//1000
    score_surf = test_font.render(f'Score: {current_time}',False,(64,64,64))
    score_rect = score_surf.get_rect(center = (400,50))
    pygame.draw.rect(screen,'Pink',score_rect)
    pygame.draw.rect(screen,'Pink',score_rect,6)
    screen.blit(score_surf,score_rect)
    return current_time
start_time=0
pygame.init() #neccessary to initialize

screen= pygame.display.set_mode((800,400))
screen2 = pygame.Surface((800,400),pygame.SRCALPHA)
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
snail_surface = pygame.image.load("UltimatePygameIntro/graphics/snail/snail1.png").convert_alpha()
# snail_x_pos = 600
player_surface = pygame.image.load("UltimatePygameIntro/graphics/Player/player_stand.png")
player_run = pygame.image.load("UltimatePygameIntro/graphics/Player/player_walk_1.png")
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
                if event.key == pygame.K_SPACE and player_rect.bottom>=300:  player_gravity=-20 #restrict the player to jump more after jumping 
        else:
            if event.type==pygame.KEYDOWN and event.key==pygame.K_SPACE : 
                game_active =True
                snail_rect.left = 800 
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
        
        snail_rect.left-=4
        if snail_rect.left <-100: snail_rect.left=800
        screen.blit(snail_surface,snail_rect)
        player_gravity+=1
        player_rect.bottom+=player_gravity
        if player_rect.bottom>=300 : player_rect.bottom =300
        screen.blit(player_surface,player_rect)
        # keys=pygame.key.get_pressed() #returns 0 and 1 
        # if keys[pygame.K_SPACE]:
        #     print("jump")
        # if(player_rect.colliderect(snail_rect)): #if collision happens
        #     print("Collide")
        #not to executed , just to be used for mouse event cases
        # mouse_pos = pygame.mouse.get_pos()
        # if player_rect.collidepoint(mouse_pos):
        #     print(pygame.mouse.get_pressed()) #this function will return 0 or 1 if pressed by mouse 
        if player_rect.colliderect(snail_rect) : game_active = False
    else:

        screen.blit(screen2,(0,0))
        screen.blit(player_surface_scaled,(320,100))
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