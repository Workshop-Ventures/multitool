# Workshop Venture Partners: Multitool
Workshop Tool for Everything

# Description
Multitool is a collection of tools to help automate tasks and make development processes easier.

# Usage
There are various tools, each with their own set of commands.

```bash
npm i -g @wsv/multitool
# OR DOWNLOAD LOCALLY AND run npm link in the short term

multitool help

mt help
```

# Tools
## Docker
The docker tool helps manage starting and stopping assistant containers for local development.
We have containers for mongodb, mysql, redis, rabbitmq, localstack and a grafana/metrics stack

### List Containers
```bash
multitool docker ls
```

### Start a container
```bash
multitool docker start mongodb
```

### Stop a container
```bash
multitool docker stop mongodb
```

### Start All Shared Containers
Shared containers just means the list of things shared between services

```bash
multitool docker start-all-shared

mt docker start-all
```

### Stop All Shared Containers
```bash
multitool docker stop-all-shared

mt docker stop-all
```
