## Project Overview

In this project I will be building an application ecosystem in a Minikube Cluster to run locally, making use of helm
charts

I have set the following requirements 

- Web app connected to a Database
- Database deployed with stateful set and making sure data is persisted to a volume
- Secret for database credentials
- Config Map for  any configurations 
- Services and ingress for networking and networking rules
- everything organised in a namespace
- Made into a helm chart
- utilize helm charts for some other third part services to add logging