import pytest
from app import app, db, TypingGameScore, Score


@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'

    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()


# ---------------- TEST HOME ROUTES ---------------- #

def test_homepage(client):
    response = client.get("/homepage")
    assert response.status_code == 200


def test_typing_game_page(client):
    response = client.get("/typinggame")
    assert response.status_code == 200


def test_leaderboard_page(client):
    response = client.get("/leaderboard")
    assert response.status_code == 200


# ---------------- TEST SAVE TYPING SCORE ---------------- #

def test_save_typing_score(client):
    response = client.post("/save-typing-score", json={
        "wpm": 45,
        "mistakes": 3
    })

    assert response.status_code == 200

    with app.app_context():
        score = TypingGameScore.query.first()
        assert score.wpm == 45
        assert score.mistakes == 3
