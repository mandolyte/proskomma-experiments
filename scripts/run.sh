#!/bin/sh 
if [ "$2x" = "x" ]; then
    echo "Usage: run.sh query_filename data_filename"
    echo "where data_filename is in the ../data/en_ult folder"
    exit
fi
node do_graph.js ../data/en_ult/$2 $1