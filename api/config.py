from decouple import config


def register_env_variables():
    """Configures all used environment variables"""

    # Register env variables
    FLASK_APP = config(
        "FLASK_APP"
    )  # This does nothing but shows how you can add new values to .flaskenv
