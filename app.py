from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/audio',methods=['POST'])
def audio():
    pass_str = request.form.get('hoo')
    print(request.form)
    return render_template('audio.html',pass_str=pass_str)

if __name__ == "main":
    app.run(debug=True)