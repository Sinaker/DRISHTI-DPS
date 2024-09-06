# Running on localhost:5000
from flask import Flask,render_template,request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/search')
def search():
    return "you searched for: "

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    return 'You submitted: ' + name

if __name__ == "__main__": 
    app.run(debug=True) 
