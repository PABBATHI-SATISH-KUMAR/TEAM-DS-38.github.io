import mysql.connector
from mysql.connector import Error

def insert_feedback(comment):
    connection = None
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",  # Your MySQL username
            password="S@tish_1_kum@r",  # Your MySQL password
            database="university"
        )
        cursor = connection.cursor()
        cursor.execute('INSERT INTO feedback (feedback) VALUES (%s)', (comment,))  # Change 'comment' to 'feedback'
        connection.commit()
        print("Feedback inserted successfully.")

    except Error as e:
        print(f"Error inserting feedback: {e}")
    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()

if __name__ == '__main__':
    insert_feedback('This is a test feedback.')  # Example feedback
