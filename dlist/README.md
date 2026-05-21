# Simple Express Web API Sample

A minimal Node.js + Express sample API.

## Install

```bash
npm install
```

## Run

```bash
npm start
```

## Sample endpoints

- `GET /` — welcome message
- `GET /api/hello` — hello response
- `GET /api/users` — sample user list
- `POST /api/echo` — echoes the request JSON body

## Example curl

```bash
curl http://localhost:3000/api/hello
curl -X POST http://localhost:3000/api/echo -H "Content-Type: application/json" -d '{"name":"Alice"}'
```
