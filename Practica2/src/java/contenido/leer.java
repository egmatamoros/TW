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
public class leer extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String ruta=request.getRealPath("/");                
	  SAXBuilder builder = new SAXBuilder();
          request.getParameter("id" );
	  File xmlFile = new File(ruta+"documento.xml");
        response.setContentType("text/html;charset=UTF-8");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Practica 2 leer</title>");            
            out.println("</head>");
            out.println("<body>");
	  try {
		Document document = (Document) builder.build(xmlFile);
		Element rootNode = document.getRootElement();
		List list = rootNode.getChildren("PREGUNTA"); 
                Element nodoPregunta=null;
		for (int i = 0; i < list.size(); i++) 
                {
                 if(String.valueOf(i).equals(request.getParameter("id" ))){
                   Element node = (Element) list.get(i);
                   nodoPregunta=node;
                 }
		}
                List dragsOpc   = nodoPregunta.getChild("DRAGS").getChildren("OPCION");
            List targetsOpc = nodoPregunta.getChild("TARGETS").getChildren("OPCION");
            
            out.println("<center>");
            out.println("<h1>Pregunta"+ request.getParameter("id" ) + " </h1>");
            out.println("<p>Pregunta: "+nodoPregunta.getAttributeValue("TEXTO")+"</p>");
            out.println("<p>Respuesta: "+nodoPregunta.getAttributeValue("RESPUESTA")+"</p>");
            out.println("<hr>");
            for (int i = 0; i < dragsOpc.size(); i++) {
                Element dOpcion = (Element) dragsOpc.get(i);
                Element tOpcion = (Element) targetsOpc.get(i);
                out.println("<b>TEXTO:</b>"+(dOpcion.getText()) +"<br>");
                out.println(""+("<img src='"+dOpcion.getAttributeValue("IMAGEN"))+"' width=\"100\" height=\"100\">"+"<br/>");
                out.println("<hr>");
                out.println("<b>TEXTO:</b>"+(tOpcion.getText())+"<br>");
                out.println(""+("<img src='"+tOpcion.getAttributeValue("IMAGEN"))+"' width=\"100\" height=\"100\">"+"<br/>");
                out.println("<hr>");
            }
            out.println("</center>");
            out.println("</body>");
            out.println("</html>");
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
