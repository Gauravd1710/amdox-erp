from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "AI Forecast Service Running",
    }


@app.post("/forecast")
def forecast():
    return {
        "forecast": [
            68000,
            69000,
            70500,
            72000,
        ],
    }
