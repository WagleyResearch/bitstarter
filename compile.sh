#!/bin/bash
echo "Hello World"
echo -n "filename: "
read text
git add $text
git commit -m "Added file"
git push heroku master

