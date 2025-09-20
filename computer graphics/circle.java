import javax.swing.*;
import java.awt.*;

class Draw extends JPanel{
    int r= 200;

    protected void paintComponent(Graphics g){
        super.paintComponent(g);
        g.setColor(Color.black);
        if(r>0){
            g.drawOval(100-r/2, 100-r/2, r, r);
            r--;
            try{

                Thread.sleep(10);   
            }
            catch(Exception e ){
                System.out.println("Exception :"+e);
            }
            repaint();
        }

    }
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        Draw d = new Draw();
        frame.setVisible(true);
        frame.setSize(400,400);
        frame.add(d);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
    }
}

