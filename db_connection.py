import mysql.connector
from mysql.connector import Error

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",  # Your MySQL username
            password="S@tish_1_kum@r",  # Your MySQL password
            database="university"
        )
        return connection
    except Error as e:
        print(f"Error connecting to database: {e}")
        return None
