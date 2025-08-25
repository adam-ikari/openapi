#!/bin/bash
tsp compile src/main.tsp
widdershins \
    --summary tsp-output/schema/openapi.yaml \
    --search false \
    --language_tabs 'javascript:Javascript' 'python:Python' \
    -o doc/openapi.md
