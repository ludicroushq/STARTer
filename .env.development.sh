export $(dotenvx get --format shell -f .env.development -f .env.local --overload --ignore=MISSING_ENV_FILE 2>/dev/null)
