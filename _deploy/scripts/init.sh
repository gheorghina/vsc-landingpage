#!/usr/bin/env bash
ENV=$1
echo terraform init -backend=true -backend-config=../environments/${ENV}/backend.tfvars -backend-config="key=vsc-landing/app/infrastructure/${ENV}.tfstate"
terraform init -backend=true -backend-config=../environments/${ENV}/backend.tfvars -backend-config="key=vsc-landing/app/infrastructure/${ENV}.tfstate"