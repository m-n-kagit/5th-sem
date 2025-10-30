#not to executed , just to be used for mouse event cases
mouse_pos = pygame.mouse.get_pos()
if player_rect.collidepoint(mouse_pos):#this function will return 0 or 1 if COLLIDE by mouse 
    print(pygame.mouse.get_pressed()) #(true,true,true)


#using this in the event loop
