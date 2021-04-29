# Fail server

A server that fails on command

Set `HELM_EXPERIMENTAL_OCI=1` for some features

## Publish

```sh
docker build . -t ryanwholey/fail-server:latest
docker push ryanwholey/fail-server:latest
```

## Deploy

```sh
helm upgrade --install fail-server ./fail-server
```

## Fail

```
URL=$(minikube ip):$(kubectl get svc fail-server -o json  | jq -r '.spec.ports[0].nodePort')

curl -i $URL/alive
curl -i $URL/ready

curl -XPOST -i -H 'Content-Type:application/json' -d '{"sleep": 30000}' $URL/alive
curl -XPOST -i -H 'Content-Type:application/json' -d '{"sleep": 30000}' $URL/ready

```
