#!/bin/bash
set -e  # Exit on error

# Variabler
RESOURCE_GROUP="rag-system"
LOCATION="northeurope"
PROJECT_NAME="ragsystem"
SUBSCRIPTION_ID=$(az account show --query id -o tsv)

# Opprett ressursgruppe
echo "Oppretter ressursgruppe..."
az group create --name $RESOURCE_GROUP --location $LOCATION

# Deploy ARM template
echo "Deployer Azure-ressurser..."
az deployment group create \
    --name "${PROJECT_NAME}-deployment" \
    --resource-group $RESOURCE_GROUP \
    --template-file azuredeploy.json \
    --parameters projectName=$PROJECT_NAME

echo "Azure infrastruktur deployment fullført!"
