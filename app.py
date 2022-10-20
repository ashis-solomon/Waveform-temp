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


@app.route('/stat',methods=['POST','GET'])
def stat():
    pass_str = request.form.get('hoo')
    items=pass_str.split('!@#$%')
    print(items)
    print("hey")
    print(items[1])
    print("hey")
    print(items[0])
    print("hey")
    print(items[2])
    # print(request.form)
    return render_template('stat.html',pass_str=pass_str)

@app.route('/chart')
def chart():
    return render_template('chart.html')

@app.route('/tryout')
def tryout():
    return render_template('tryout.html')

@app.route('/statTRY')
def statTRY():
    return render_template('statTRY.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == "main":
    app.run(debug=True)
