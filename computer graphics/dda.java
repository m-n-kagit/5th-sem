import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

class Draw extends JPanel {
    private java.util.List<Point> points = new ArrayList<>();
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        g.setColor(Color.RED);
        for (Point p: points){
            g.fillRect(p.x,p.y,1,1);
        }
    }

    public void Ddaline(int x0, int y0, int xend, int yend) {
        int dx, dy;
        float x, y;
        dx = xend - x0;
        dy = yend - y0;
        x = x0;
        y = y0;
        int steps;
        if (Math.abs(dx) > Math.abs(dy)) {
            steps = Math.abs(dx);
        } else {
            steps = Math.abs(dy);
        }
        float xi, yi;
        xi = dx / steps;
        yi = dy / steps;

        for (int k = 0; k < steps; k++) {
            points.add(new Point(Math.round(x), Math.round(y)));
            x += xi;
            y += yi;
            System.out.println(Math.round(x)+" "+ Math.round(y));
        }
        repaint(); //Triger drawing  , from javax.swing.JComponent 
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("DDA line drawing");
        Draw d = new Draw();
        frame.add(d);
        frame.setSize(500,500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        d.Ddaline(50,50,400,400);
    }
}