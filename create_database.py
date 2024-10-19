import mysql.connector
from mysql.connector import Error

def create_database():
    connection = None
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",  # Your MySQL username
            password="S@tish_1_kum@r"  # Your MySQL password
        )
        
        cursor = connection.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS university")
        print("Database 'university' created successfully")

    except Error as e:
        print(f"Error creating database: {e}")
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

if __name__ == "__main__":
    create_database()
