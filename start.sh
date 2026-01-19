#!/bin/bash

cd backend || {
  echo "backend folder not found"
  exit 1
}

npm start

