# Presentation apps

## Commands

### Cluster Auth

```sh
kubectl auth can-i create deployments

kubectl auth can-i delete nodes

kubectl auth can-i edit secrets --namespace kube-system

kubectl auth can-i list pods --as system:kube-scheduler

kubectl auth can-i delete nodes --as system:kube-scheduler

kubectl auth can-i list nodes --as-group system:masters
```

### Kubernetes Resources

```sh
kubectl apply -f templates

kubectl logs pod/<pod> # fails on multi container

kubectl logs pod/<pod> -c <container>

kubectl logs deploy/<deploy> -f

kubectl logs deploy/<deploy> -c <container> # chooses a pod
```

### Helm

```sh
helm upgrade --install fail-server ./fail-server

helm upgrade --install fail-server ./fail-server

kubectl get replicaset -l app=fail-server --watch

helm history fail-server
```

### Health Probes

```sh

URL=$(minikube ip):$(kubectl get svc fail-server -o json  | jq -r '.spec.ports[0].nodePort')

curl -i $URL/alive
curl -i $URL/ready

curl -XPOST -i -H 'Content-Type:application/json' -d '{"sleep": 30000}' $URL/alive
curl -XPOST -i -H 'Content-Type:application/json' -d '{"sleep": 30000}' $URL/ready

```

### Cluster Events

```sh
kubectl apply -f templates
kubectl get events
```