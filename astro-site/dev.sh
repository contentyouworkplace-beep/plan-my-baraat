#!/bin/bash
export PATH="/Users/rahulmedhe/.nvm/versions/node/v22.23.1/bin:$PATH"
cd "$(dirname "$0")"
exec npx astro dev --port 4321
