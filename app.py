from flask import Flask, render_template, request, redirect, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_folder='', template_folder='')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///feedback.db'
db = SQLAlchemy(app)

class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    feedback = db.Column(db.Text, nullable=False)

@app.route('/')
def index():
    feedbacks = Feedback.query.order_by(Feedback.id.desc()).limit(5).all()
    if not feedbacks:
        feedbacks = []
    
    print(f"Current working directory: {os.getcwd()}")
    print("Directory contents:")
    print(os.listdir())

    return render_template('feedback.html', feedbacks=feedbacks)

@app.route('/submit', methods=['POST'])
def submit_feedback():
    print("Form data:", request.form)
    try:
        name = request.form['name']
        feedback_text = request.form['feedback']
        
        if not name or not feedback_text:
            return "Please fill in both name and feedback fields.", 400
        
        feedback = Feedback(name=name, feedback=feedback_text)
        db.session.add(feedback)
        db.session.commit()
        return redirect(url_for('index'))
    except KeyError as e:
        print(f"KeyError: {e}")
        return f"Missing required field: {e}", 400

@app.route('/delete/<int:id>')
def delete_feedback(id):
    feedback = Feedback.query.get_or_404(id)
    db.session.delete(feedback)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/init-db')
def init_db():
    with app.app_context():
        db.drop_all()
        db.create_all()
    return "Database initialized successfully"

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('', path)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)