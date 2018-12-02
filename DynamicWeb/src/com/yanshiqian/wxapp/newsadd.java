package com.yanshiqian.wxapp;

import java.io.IOException;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Statement;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class news
 */
@WebServlet(name = "newsadd", urlPatterns = { "/newsadd" })
public class newsadd extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		/*
		 * 数据库的连接
		 */

		String USERNAME = "root";
		// password
		String PASSWORD = "123456";
		// your database name
		String DBNAME = "wxapp";
		// mysql driver
		String DRIVER = "com.mysql.jdbc.Driver";
		// mysql url
		String URL = "jdbc:mysql://localhost:3306/" + DBNAME;
		response.setContentType("charset=utf-8");

		/*
		 * 获取的请求参数
		 */
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		sdf.setTimeZone(TimeZone.getTimeZone("Asia/Shanghai")); //设置时区
		String date = sdf.format(new Date());
		String title = request.getParameter("title");
		String laiyuan = request.getParameter("laiyuan");
		String content = request.getParameter("content");
		System.out.println("数据"+title+laiyuan+content+"------");
		String sql = "insert into news(title,neirong,laiyuan,shijian) values ('" 
				+ title + "','" 
				+ content + "','" 
				+ laiyuan + "','"
				+date
				+ "')";
		try {
			Class.forName(DRIVER);
			Connection connection = (Connection) DriverManager.getConnection(URL, USERNAME, PASSWORD);
			Statement st = (Statement) connection.createStatement();
			if(content == null||content.equals("")) {
				response.getWriter().println("1");
			}else {				
				st.executeUpdate(sql);
				response.getWriter().println("0");
			}
			

		} catch (Exception e) {
			// TODO: handle exception
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
