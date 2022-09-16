#!/bin/bash
set -ex

TMP_CURRENT_DIR="$( pwd )"
THIS_SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $THIS_SCRIPT_DIR

npm install
echo '$' "node "$THIS_SCRIPT_DIR/index.js""
node "$THIS_SCRIPT_DIR/index.js"


node index.js