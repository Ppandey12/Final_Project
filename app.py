from flask import Flask, render_template, request, redirect, url_for, abort
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone

app = Flask(
    __name__,
    static_folder='templates/static',
    template_folder='templates'
)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///scores.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ---------------- MODELS ---------------- #

class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    game_name = db.Column(db.String(50), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))


class TypingGameScore(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    wpm = db.Column(db.Integer, nullable=False)
    mistakes = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))


# Create tables
with app.app_context():
    db.create_all()


# ---------------- ROUTES ---------------- #

@app.route("/")
def home():
    return render_template("homepage.html")


@app.route("/homepage")
def homepage():
    return render_template("homepage.html")


@app.route("/typinggame")
def typing_game():
    return render_template("typegame.html")


@app.route("/singleword")
def singleword():
    return render_template("singleword.html")


# ---------------- LEADERBOARD ---------------- #

@app.route("/leaderboard")
def leaderboard():

    scores = Score.query.order_by(Score.score.desc()).all()

    typing_scores = TypingGameScore.query.order_by(
        TypingGameScore.wpm.desc()
    ).all()

    return render_template(
        "leaderboard.html",
        scores=scores,
        typing_scores=typing_scores
    )


# ---------------- SAVE SCORE (NORMAL GAME) ---------------- #

@app.route("/save-score", methods=["POST"])
def save_score():

    data = request.get_json()

    new_score = Score(
        game_name=data["game_name"],
        score=data["score"]
    )

    db.session.add(new_score)
    db.session.commit()

    return {"message": "score saved"}


# ---------------- SAVE TYPING SCORE ---------------- #

@app.route("/save-typing-score", methods=["POST"])
def save_typing_score():

    data = request.get_json()

    new_score = TypingGameScore(
        wpm=data["wpm"],
        mistakes=data["mistakes"]
    )

    db.session.add(new_score)
    db.session.commit()

    return {"message": "typing score saved"}


# ---------------- DELETE NORMAL SCORE ---------------- #

@app.route("/delete-score/<int:id>", methods=["POST"])
def delete_score(id):

    score = Score.query.get_or_404(id)

    db.session.delete(score)
    db.session.commit()

    return redirect(url_for("leaderboard"))


# ---------------- DELETE TYPING SCORE ---------------- #

@app.route("/delete-typing-score/<int:id>", methods=["POST"])
def delete_typing_score(id):

    score = TypingGameScore.query.get_or_404(id)

    db.session.delete(score)
    db.session.commit()

    return redirect(url_for("leaderboard"))


# ---------------- RUN APP ---------------- #

if __name__ == "__main__":
    app.run(debug=True, port=8000)
