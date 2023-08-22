## Project Overview

In this project I will be building a full stack application and making use of helm and kubernetes to deploy it into a 
local minikube cluster.

I have set the following requirements 

### Web App Setup

- Simple React Database UI App Connected to a Django Backend
- Django is set up to talk Postgres permanent storage
- To Run the App and test locally just run replace the placeholders in the
  docker-compose.yaml file with your postgresql db credentials and run `docker-compose up --build`

### Kubernetes setup
- Database deployed with stateful set and making sure data is persisted to a volume
- Secret for database credentials
- Config Map for  any configurations 
- Services and ingress for networking and networking rules
- everything organised in a namespace
- Made into a helm chart
- utilize helm charts for some other third part services to add logging