package com.yanshiqian.wxapp;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Map;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Statement;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class ceshi {

	public static void main(String[] args) throws SQLException {

		String USERNAME = "root";
		// password
		String PASSWORD = "123456";
		// your database name
		String DBNAME = "wxapp";
		// mysql driver
		String DRIVER = "com.mysql.jdbc.Driver";
		// mysql url
		String URL = "jdbc:mysql://localhost:3306/" + DBNAME;

		String sql = "select * from news";
		try {
            Class.forName(DRIVER);
            java.sql.Connection connection = DriverManager.getConnection(URL,USERNAME, PASSWORD);
            Statement st=(Statement) connection.createStatement();
            ResultSet rs=st.executeQuery(sql);
            while(rs.next()) {
            	System.out.println(rs.getInt("id")+"\t"+rs.getString("title")+"\t"+rs.getString("neirong"));
            	
            }
            rs.close();
            st.close();
            connection.close();
        } catch (ClassNotFoundException e) {
            System.out.println("ERROR AT MysqlConnecter");
            e.printStackTrace();
        }
		
		/*String sql = "select * from news";
		MysqlConnecter mysqlConnecter=new MysqlConnecter();
		
       
       
       ArrayList<Map<String, String>> result = mysqlConnecter.select(sql, "title");
       JSONArray jsonArray=new JSONArray();
       JSONObject jsonObject=null;
         for (Map<String, String> map : result) {
        	 jsonObject=new JSONObject();
             System.out.println("----------------------");
             for(Map.Entry<String, String> entry:map.entrySet()){    
            	 
            	 jsonObject.put(entry.getKey(), entry.getValue());
            	jsonArray.add(jsonObject);
                 // System.out.println(entry.getKey()+"--->"+entry.getValue());    
             }   
         }
         System.out.println(jsonArray.toString());*/
         
	}

}
