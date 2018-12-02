package com.yanshiqian.test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class BiaoDanTest
 */
@WebServlet(name = "biaodan", urlPatterns = { "/biaodan" })
public class BiaoDanTest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BiaoDanTest() {
        super();
        
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

PrintWriter out=response.getWriter();
		out.println("<html>");
		out.println("<head>");
		out.println("<meta charset=\"UTF-8\" />");
		out.println("<title>Request Parameters Example</title>");
		out.println("</head>");
		out.println("<body bgcolor=\"white\">");
		out.println("<a href=\"../reqparams.html\">");
		out.println("<img src=\"../images/code.gif\" height=24 width=24 align=right border=0 alt=\"view code\"></a>");
		out.println("<a href=\"../index.html\">");
		out.println("<img src=\"../images/return.gif\" height=24 width=24 align=right border=0 alt=\"return\"></a>");
		out.println("<h3>Request Parameters Example</h3>");
		out.println("Parameters in this request:<br>");
		out.println("First Name:");
		 out.println("= 测试<br>");
		out.println("Last Name:");
		 out.println("= 测试2");
		out.println("<P>");
		out.println("<form action=\"RequestParamExample\" method=POST>");
		out.println("First Name:");
		out.println("<input type=text size=20 name=firstname>");
		out.println("<br>");
		out.println("Last Name:");
		out.println("<input type=text size=20 name=lastname>");
		out.println("<br>");
		out.println("<input type=submit>");
		out.println("</form>");
		out.println("</body>");
		out.println("</html>");

	}

}
