# Semana 8: Crear y Listar productos con Mongoose

Base de datos creada en MongoDB: `warehouse -> products`

Crear producto, ejemplo:

```bash
curl --request POST \
  http://localhost:3001/products \
  --header "Content-Type: application/json" \
  --data '{
    "name": "Olive Oil Dispenser Bottle",
    "description": "Leaflai oil bottle is made of lead-free glass and is 100% healthy and environmentally friendly.",
    "tags": ["kitchen", "picnic", "home"],
    "value": 15.99
  }'
```

Listar productos:

```bash
http://localhost:3001/products
```
