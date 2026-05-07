from sqlalchemy import Column, Integer, String, Float
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    password = Column(String)


class Score(Base):
    __tablename__ = "scores"

    id = Column(Integer, primary_key=True)
    username = Column(String)
    wpm = Column(Float)
    accuracy = Column(Float)
