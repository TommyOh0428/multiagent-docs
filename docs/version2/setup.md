# Setup

This project requires virtual environment to manage dependencies.
This project has built with Python 3.11.

#### How to create virtual environment

```bash
# create virtual environment
python3 -m venv venv

# activate virtual environment using shell script
source activate_venv.sh

# install all dependencies
pip install -r requirements.txt
```

#### Run locally

```bash
uvicorn main:app --reload --port 8080
```

Configure Discord's interactions endpoint to the public URL that forwards to
`POST /`. A health check is available at `GET /health`.

#### Deploy to Cloud Run

Authenticate with `gcloud`, then run:

```bash
export GCP_PROJECT_ID="your-project-id"
export GCP_REGION="us-central1" # optional
./deploy.sh
```
