from flask import Flask, render_template, request, redirect, url_for
from db_connection import get_db_connection

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-feedback', methods=['POST'])
def submit_feedback():
    feedback = request.form['feedback']
    connection = get_db_connection()
    try:
        cursor = connection.cursor()
        cursor.execute('INSERT INTO feedback (comment) VALUES (%s)', (feedback,))
        connection.commit()
    finally:
        cursor.close()
        connection.close()
    return redirect(url_for('thank_you'))

@app.route('/thank-you')
def thank_you():
    return render_template('thank_you.html')

if __name__ == '__main__':
    app.run(debug=True)
