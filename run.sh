#!/bin/bash
echo "i'm run.sh"
echo "testing npm"
if [ -x "$(command -v npm)" ];
then
  echo 'using standard npm ...'
  sudo PORT=80 npm start
else
  echo 'using /opt/node/bin/npm ...'
  sudo PORT=80 /opt/node/bin/npm start
fi