/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author hp
 */
public class pedirDatos extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String figura= request.getParameter("figura");
        PrintWriter out= response.getWriter();
            out.println("<html>");
            out.println("<head>");
            out.println("<title>dibujar un "+figura+" </title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h3>Ah elegido dibujar un "+figura+"</h3>");
            out.println("<h3>Por favor, indica las coordenadas del "+figura+".</h3>");
            out.println("<form action='dibujo' method='get'>");
            if(figura.equals("Rectangulo")){
                out.println("Coordenada x: <input type='number' name='xr' value='0' min='0' step='1'/><br>");
                out.println("Coordenada y: <input type='number' name='yr' value='0' min='0' step='1'/><br>");
                out.println("Ancho: <input type='number' name='anc' value='2' min='2' step='1'/><br>");
                out.println("Alto: <input type='number' name='alt' value='1' min='1' step='1'/><br>");
            }else if(figura.equals("Circulo")){
                out.println("Coordenada x: <input type='number' name='xc' value='0' min='0' step='1'/><br>");
                out.println("Coordenada y: <input type='number' name='yc' value='0' min='0' step='1'/><br>");
                out.println("Radio: <input type='number' name='radio' value='2' min='1' step='1'/><br>");
                
            }else if(figura.equals("Triangulo")){
                out.println("Coordenada x1: <input type='number' name='coordX1Tri' value='0' min='0' step='1'/><br><br>");
                out.println("Coordenada y1: <input type='number' name='coordY1Tri' value='0' min='0' step='1'/><br><br>");
                out.println("Coordenada x2: <input type='number' name='coordX2Tri'  min='0' step='1'/><br><br>");
                out.println("Coordenada y2: <input type='number' name='coordY2Tri'  min='0' step='1'/><br><br>");
                out.println("Coordenada x3: <input type='number' name='coordX3Tri'  min='0' step='1'/><br><br>");
                out.println("Coordenada y3: <input type='number' name='coordY3Tri'  min='0' step='1'/><br><br>");
                
                
            }
            out.println("<input id='figura' name='figura' type='hidden' value='"+ figura +"'><br>");
            out.println("<input type='submit'>");
            out.println("</form>");
            out.println("</center>");
            out.println("</body>");
            out.println("</html>");
    }   
}
