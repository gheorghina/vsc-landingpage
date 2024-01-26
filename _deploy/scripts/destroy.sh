#!/usr/bin/env bash
ENV=$1
terraform init -upgrade -backend=true -backend-config=backend.tfvars -backend-config="key=vsc-landing/app/infrastructure/${ENV}.tfstate" || exit_on_error "could not initiate terraform"
terraform destroy $VAR