# multi container deployment

## Deployment

```sh
kubectl apply -f templates
```

### Logs

```sh
kubectl logs pod/<pod> # fails
kubectl logs pod/<pod> -c <container>
kubectl logs deploy/<deploy> -c <container> -f
```
