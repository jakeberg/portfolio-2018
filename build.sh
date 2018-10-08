#!/usr/bin/env bash
docker build -t portfolio-2018 .
docker run -p 3000:3000 -it portfolio-2018