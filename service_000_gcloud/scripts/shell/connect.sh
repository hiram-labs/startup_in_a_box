#! /bin/sh

CLUSTER_NAME=general

if [ "$#" -eq  "1" ]
    then
        CLUSTER_NAME=$1
fi

gcloud container clusters get-credentials $CLUSTER_NAME \
    && kubectl create clusterrolebinding cluster-admin-binding \
    --clusterrole=cluster-admin \
    --user=$(gcloud config get-value account)