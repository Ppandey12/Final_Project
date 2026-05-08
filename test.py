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


# Testing routes

def test_homepage(client):
    response = client.get("/homepage")
    assert response.status_code == 200


def test_typing_game_page(client):
    response = client.get("/typinggame")
    assert response.status_code == 200


def test_leaderboard_page(client):
    response = client.get("/leaderboard")
    assert response.status_code == 200


# Testing score saving

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

def test_save_score(client):
    response = client.post("/save-score", json={
        "game_name": "typing",
        "score": 100
    })

    assert response.status_code == 200

    with app.app_context():
        score = Score.query.first()
        assert score.score == 100


# testing score deletion

def test_delete_typing_score(client):
    with app.app_context():
        score = TypingGameScore(wpm=50, mistakes=2)
        db.session.add(score)
        db.session.commit()
        score_id = score.id

    response = client.post(f"/delete-typing-score/{score_id}")
    assert response.status_code == 302  # redirect

    with app.app_context():
        deleted = TypingGameScore.query.get(score_id)
        assert deleted is None
