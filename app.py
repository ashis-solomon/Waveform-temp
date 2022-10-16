from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/audio',methods=['POST','GET'])
def audio():
    pass_str = request.form.get('hoo')
    print(request.form)
    name = request.args.get("name")
    print(name)
    trk = request.args.get("trk")
    print(trk)
    print("ashissss")
    return render_template('audio.html',pass_str=pass_str,name=name,trk=trk)

if __name__ == "main":
    app.run(debug=True)