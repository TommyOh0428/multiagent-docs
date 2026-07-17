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

### AWS Deployment

A GitHub Actions workflow automatically deploys the `DiscordBotLambdaStack` when changes are pushed to the `main` branch. The workflow is defined in `.github/workflows/deploy-lambda.yml` and performs the following steps:

1. Checks out the repository and sets up Node.js.
2. Installs Node dependencies with `npm ci`.
3. Configures AWS credentials using `aws-actions/configure-aws-credentials@v4`.
4. Runs `npx cdk deploy --require-approval never` to deploy the stack.

Create these repository secrets so the workflow can authenticate with AWS:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

The Lambda code relies on environment variables stored in `.env`. Refer to `.env.example` for the variables that must be provided.
