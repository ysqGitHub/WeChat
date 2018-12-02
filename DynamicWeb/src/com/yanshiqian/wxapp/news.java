package com.yanshiqian.wxapp;

import java.io.IOException;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

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
@WebServlet(name = "news", urlPatterns = { "/news" })
public class news extends HttpServlet {
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
		response.setContentType("text/html;charset=utf-8");
		String sql = "select * from news";
		try {
			Class.forName(DRIVER);
			Connection connection = (Connection) DriverManager.getConnection(URL, USERNAME, PASSWORD);
			Statement st = (Statement) connection.createStatement();
			ResultSet rs = st.executeQuery(sql);
			JSONArray jArray = new JSONArray();
			SGet sGet = new SGet();
			while (rs.next()) {
				sGet.setBh(rs.getInt("id"));
				sGet.setBt(rs.getString("title"));
				sGet.setNr(rs.getString("neirong"));
				sGet.setSj(rs.getString("shijian"));
				sGet.setLy(rs.getString("laiyuan"));
				sGet.setTp(rs.getString("tupian"));
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("bh", sGet.getBh());
				jsonObject.put("bt", sGet.getBt());
				jsonObject.put("nr", sGet.getNr());
				jsonObject.put("sj", sGet.getSj());
				jsonObject.put("ly", sGet.getLy());
				jsonObject.put("tp", sGet.getTp());
				jArray.add(jsonObject);
				// System.out.println(rs.getInt("id")+"\t"+rs.getString("title")+"\t"+rs.getString("neirong"));
			}
			response.getWriter().print(jArray.toString());
			/*
			 * rs.close(); st.close(); connection.close();
			 */

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
