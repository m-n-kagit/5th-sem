import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame{

        MyFrame(){
        this.setTitle("Hey! this is basics of gui.");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(false);
        this.setSize(420,420);
        this.setVisible(true);
        // this.getContentPane().setBackground(Color.green);
        // this.getContentPane().setBackground(new Color(255,255,0));
        }

}

class basic {
    public static void main(String[] args){
        JLabel label = new JLabel();
        ImageIcon image = new ImageIcon("test.png");
        label.setIcon(image);
        label.setText("Bro, do you even code?");
        // label.setHorizontalTextPosition(JLabel.TOP);
        // label.setVerticalTextPosition(JLabel.TOP);
        label.setFont(new Font("MV Boli",Font.PLAIN,20));
        JFrame frame = new JFrame();
        frame.setTitle("Hey! this is basics of gui.");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setResizable(true);
        frame.add(label);
        frame.getContentPane().setBackground(new Color(255,255,0));
        frame.pack();
        frame.setVisible(true);
        // frame.getContentPane().setBackground(Color.green);
        // MyFrame frame = new MyFrame();
    }    
}
