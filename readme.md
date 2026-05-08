# What my project does:

My project is a web application that offers two typing games: a speed typing game and a mistake typing game. The speed typing game challenges users to type a given word as quickly as possible, while the mistake typing game focuses on accuracy, counting the number of mistakes made while typing and also giving a word per minute (WPM) score. Both games have a time limit of 60 seconds. The application also includes a leaderboard to display the top scores for each game, allowing users to compete against each other.

# How I built it:
I built this project using Flask for the backend and HTML, CSS, and JavaScript for the frontend. I used SQLAlchemy to manage the database, which stores the scores for both games. The frontend is designed to be user-friendly and responsive, with clear instructions and a clean layout. The JavaScript code handles the game logic, including timing, scoring, and updating the leaderboard in real-time. I also implemented a feature to allow users to delete their scores from the leaderboard if they wish.

# Challenges I faced:
One of the main challenges I faced was ensuring that the game logic was accurate and responsive, especially when it came to timing and scoring. I had to carefully manage the state of the game and ensure that the user interface updated correctly based on user input. Another challenge was designing the accuracy game as it would run very slow when I click 
to play and play again, I also had to change the lay out for the sentence to be typed as it was not showing up properly. 

# How to run the project:
1. Clone the repository to your local machine.
2. Navigate to the project directory and create a virtual environment using `python -m venv .venv`.
3. Activate the virtual environment using `source .venv/bin/activate` (Linux/Mac) or `.venv\Scripts\activate` (Windows).
4. Install the required dependencies using `pip install -r requirements.txt`.
5. Run the application using `python app.py`.
6. Run the tests using `pytest test.py`.
7. Open a web browser and navigate to `http://127.0.0:8000
