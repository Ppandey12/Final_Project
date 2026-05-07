from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__,
            static_folder='templates/static',
            template_folder='templates')

@app.route("/")
def home():
    return render_template("homepage.html")

@app.route("/typinggame")
def typing_game():
    return render_template("typegame.html")

@app.route("/singleword")
def singleword():
    return render_template("singleword.html")

@app.route("/leaderboard")
def leaderboard():
    return render_template("leaderboard.html")


@app.route("/homepage")
def homepage():
    return render_template("homepage.html")



if __name__ == "__main__":
    app.run(debug=True, port=8000)
