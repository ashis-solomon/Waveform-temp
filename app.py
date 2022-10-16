from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/audio',methods=['POST','GET'])
def audio():
    displayName = request.args.get("displayName")
    print(displayName)
    trkID = request.args.get("trkID")
    print(trkID)
    trkPop = request.args.get("trkPop")
    print(trkPop)
    return render_template('audio.html',displayName=displayName,trkID=trkID,trkPop=trkPop)

if __name__ == "main":
    app.run(debug=True)