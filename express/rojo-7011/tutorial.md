# Hacer un servidor en Express que `LISTE` y `CREE` productos con Mongoose. y crear el  `pull request`.

>Instalamos express-generator de manera global

```sh
    npm install -g express-generator
```

> Una vez clonado el proyecto, lo creamos con

```sh
    express rojo-7011
```

>despues hacemos la instalacion normal

```sh
    npm install
    npm install express dotenv mongoose
```

>Crear, listar y buscar


```sh
curl --request POST http://localhost:3001/products --header "Content-Type: application/json" --data '{ "name": "NodeJs", "brand": "Undefined js", "price": "404.40"}' | jq

curl --request POST http://localhost:3001/products --header "Content-Type: application/json" --data '{ "name": "Abaco", "brand": "acme", "price": "315.25"}' | jq

curl --request POST http://localhost:3001/products --header "Content-Type: application/json" --data '{ "name": "Express", "brand": "js", "price": "110.25"}' | jq

curl --request GET http://localhost:3001/products/64c075db461e3c5368360da8  | jq

curl --request GET http://localhost:3001/products  | jq

```
