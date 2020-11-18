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
public class dibujo extends HttpServlet {


    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String figura = request.getParameter("figura");
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Dibujar un "+figura+"</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<center>");
        if(figura.equals("Rectangulo")){
            out.println("<h1>Rectangulo</h1>");
            out.println("<h3> Coordenada x: "+request.getParameter("xr")+"</h3>");
            out.println("<h3> Coordenada y: "+request.getParameter("yr")+"</h3>");
            out.println("<h3> Ancho: "+request.getParameter("anc")+"</h3>");
            out.println("<h3> Alto: "+request.getParameter("alt")+"</h3>");
        }else if(figura.equals("Circulo")){
            out.println("<h1>Circulo</h1>");
            
            out.println("<h3> Coordenada x: "+request.getParameter("xc")+"</h3>");
            out.println("<h3> Coordenada y: "+request.getParameter("yc")+"</h3>");
            out.println("<h3> Radio: "+request.getParameter("radio")+"</h3>");
        }else if(figura.equals("Triangulo")){
            out.println("<h1>Triangulo</h1>");
            out.println("<h3> Coordenada del vertice 1: ("+request.getParameter("coordX1Tri")+","+request.getParameter("coordY1Tri")+")</h3>");
            out.println("<h3> Coordenada del vertice 2: ("+request.getParameter("coordX2Tri")+","+request.getParameter("coordY2Tri")+")</h3>");
            out.println("<h3> Coordenada del vertice 3: ("+request.getParameter("coordX3Tri")+","+request.getParameter("coordY3Tri")+")</h3>");
        }
        out.println("</center>");
        out.println("<center>");
        out.println("<canvas id='myCanvas' width='800px' height='500px' style='border: 2px solid red;'></canvas>");
        out.println("<script>");
        out.println("var canvas = document.getElementById('myCanvas');");
        out.println("var contexto = canvas.getContext('2d');");
        if (figura.equals("Rectangulo")) {
            
            out.println("contexto.fillStyle='black'");
            out.println("contexto.fillRect(" + request.getParameter("xr") + ","+request.getParameter("yr")+","+request.getParameter("anc")+","+request.getParameter("alt")+");");
        }else if (figura.equals("Circulo")) {
            
            
            out.println("contexto.beginPath();");
            out.println("contexto.arc(" + request.getParameter("xc") + ","+request.getParameter("yc")+","+request.getParameter("radio")+",0,2*Math.PI);");
            out.println("contexto.closePath;");
            out.println("contexto.stroke();");
        }else if (figura.equals("Triangulo")) {
            
            
            out.println("contexto.beginPath();");
            out.println("contexto.fillStyle='red';");
            out.println("contexto.moveTo("+request.getParameter("coordX1Tri") +","+request.getParameter("coordY1Tri") +")");
            out.println("contexto.lineTo("+request.getParameter("coordX2Tri") +","+request.getParameter("coordY2Tri") +")");
            out.println("contexto.lineTo("+request.getParameter("coordX3Tri") +","+request.getParameter("coordY3Tri") +")");
            out.println("contexto.fill();");
        }

        out.println("</script>");
        out.println("</center>");
        out.println("</body>");
        out.println("</html>");
    }


}
