#!/bin/bash
npm version patch -m "Doc: Next version $(node -p "require('./package.json').version" | awk -F. '{print $1"."$2"."$3+1}')"
