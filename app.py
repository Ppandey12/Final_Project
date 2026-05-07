from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__,
            static_folder='templates/static',
            template_folder='templates')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///scores.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    game_name = db.Column(db.String(50), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

with app.app_context():
    db.create_all()


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
    scores = Score.query.order_by(Score.score.desc()).all()
    return render_template("leaderboard.html", scores=scores)


@app.route("/homepage")
def homepage():
    return render_template("homepage.html")

@app.route("/save-score", methods=["POST"])
def save_score():
    data = request.get_json()
    print(data)  # 👈 ADD THIS

    new_score = Score(
        game_name=data["game_name"],
        score=data["score"]
    )

    db.session.add(new_score)
    db.session.commit()

    return {"message": "score saved"}

if __name__ == "__main__":
    app.run(debug=True, port=8000)
