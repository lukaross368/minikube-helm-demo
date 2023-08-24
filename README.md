## Project Overview

In this project I will be building a full stack application and making use of helm and kubernetes to deploy it into a 
local minikube cluster.

### Web App Setup (Run locally with docker compose)

- Simple React Database UI App Connected to a Django Backend
- Django is set up to talk Postgres permanent storage
- To Run the App and test locally just run replace the placeholders in the
  docker-compose.yaml file with your postgresql db credentials and run `docker-compose up --build`

### Kubernetes Setup (Run in minikube with helm)

- Install Minikube, kubectl and helm
- run `cd helm_chart` and `helm install <release_name> helm_app-0.1.0.tgz` to spin up kubernetes resources