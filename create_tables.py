import mysql.connector
from mysql.connector import Error

def create_tables():
    connection = None
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",  # Your MySQL username
            password="S@tish_1_kum@r",  # Your MySQL password
            database="university"
        )
        
        cursor = connection.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS feedback (
                id INT AUTO_INCREMENT PRIMARY KEY,
                comment TEXT NOT NULL
            )
        ''')
        connection.commit()
        print("Table 'feedback' created successfully")

    except Error as e:
        print(f"Error creating table: {e}")
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

if __name__ == '__main__':
    create_tables()
