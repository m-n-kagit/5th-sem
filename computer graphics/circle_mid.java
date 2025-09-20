import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.Scanner;

class Draw extends JPanel{
    private ArrayList<Point> points = new ArrayList<>();
    protected void paintComponent(Graphics g){
        g.setColor(Color.BLACK);
        for(Point p: points){
            g.drawRect(p.x, p.y, 1,1 );
        }
    }
    public void mid_point_algo(int x0,int y0,int r){ // r for radius
        int x=x0,y=y0;
        double pi = 5/4 -r*(1-r);
        double pa;
        while(x<y){
            if(pi<0){
                x+=1;
                pa= pi +2*x +1; 

            }
            else {
                x+=1; y-=1;
                pa = pi +2*x -2*y +1;
            }
            Point p =new Point(x,y);
            points.add(p);
            pi=pa;
        }
        repaint();

    }
}


class circle_mid {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        Draw draw = new Draw();
        int r;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the radius length:");
        r = sc.nextInt();        
        draw.mid_point_algo(0,r, r);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400,400);
        frame.add(draw);
        frame.setVisible(true);
        
    }
    
}
