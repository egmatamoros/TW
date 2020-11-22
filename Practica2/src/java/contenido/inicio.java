/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package contenido;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.input.SAXBuilder;
/**
 *
 * @author hp
 */
public class inicio extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String ruta=request.getRealPath("/");                
	  SAXBuilder builder = new SAXBuilder();
	  File xmlFile = new File(ruta+"documento.xml");
        response.setContentType("text/html;charset=UTF-8");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Practica 2 inicio</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<center>");
            out.println("<h1>CREAR, ALTAS, BAJAS Y CAMBIOS</h1>");
            out.println("</center>");
            out.println("<a href='./crear'>Crear nueva pregunta</a><br>");
            out.println("<table border=1 align='center'>");
            out.println("<tr>");
            out.println("<th WIDTH='20%'>Nombre de la pregunta</th> <th WIDTH='80%'>Acciones</th>");
            out.println("</tr>");
	  try {
		Document document = (Document) builder.build(xmlFile);
		Element rootNode = document.getRootElement();
		List list = rootNode.getChildren("PREGUNTA");             
		for (int i = 0; i < list.size(); i++) 
                {
                   out.println("<tr>");
		   out.println("<td>PREGUNTA" + (i+1) +"</td>");
                   out.println("<td align='center'><a href='./leer?id="+i+"'>Leer Pregunta</a> | <a href='./modificar?id="+i+"'>Modificar Pregunta</a> | <a href='./eliminar?id="+i+"'>Eliminar Pregunta</a></td>");
                   out.println("</tr>");
		}
            out.println("</table>");
            out.println("</body>");
            out.println("</html>");                

	  } 
          catch (IOException io) 
          {
		System.out.println(io.getMessage());
	  } 
          catch (JDOMException jdomex) 
          {
		System.out.println(jdomex.getMessage());
	  }        
        }
    }

}
