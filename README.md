# Isotropy

### Installation

```bash
npm i -g isotropy
```

### Commands

Initialize a project with a default "hello world" template.
If the dir option is omitted, the current directory is used.

```bash
isotropy init <dir>
```

Init with a specific template.

```bash
isotropy init <dir> -t <git_url>

#example
isotropy init -t https://github.com/isotropy/hello-world
```

Run a project from the current directory in dev mode locally.

```bash
isotropy run
```

Run a project from a specific directory.

```bash
isotropy run <dir>
```

Deploy a Project to the Cloud. The Cloud must implement Isotropy Deployment Specification 1.0 APIs.
By default, it is set to www.looptype.com. To change the defaults, edit cloud.json in the ~/.isotropy directory.

```bash
isotropy deploy
```

You can also specify a directory

```bash
isotropy deploy <dir>
```

Deploy to a specific cloud (as defined in cloud.json) with:

```bash
isotropy deploy <dir> -c <cloud_name>
```

### Example YAML File

```yaml
name: Simple Todos
version: "0.0.1"
schema: "1.0"
git: https://github.com/isotropy/simple-todos
services:
  - name: server
    nodes: 2
    type: http
    locations:
      - location: /
        type: nodejs
        main: server/dist/index.js
      - location: /static
        type: static
        path: static
  - name: auth-server
    nodes: 1
    type: http
    locations:
      - location: /
        type: nodejs
        main: auth-server/dist/index.js
modules:
  - name: static
  - name: client
    build:
      - type: typescript
  - name: server
    build:
      - type: typescript
    connections:
      - type: webdisk
        path: src/disk.ts
        disk: todos
      - type: postgres
        path: src/db.ts
        db: todosdb
      - type: redis
        path: src/redis.ts
        db: todoscache
  - name: auth-server
    build:
      - type: typescript
    connections:
      - type: postgres
        path: src/db.ts
        db: authdb
```
