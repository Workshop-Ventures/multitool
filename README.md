# Workshop Venture Partners: Multitool
Workshop Tool for Everything

# Description
Multitool is a collection of tools to help automate tasks and make development processes easier.

# Usage
There are various tools, each with their own set of commands.

```bash
npm i -g @wvp/multitool
# OR DOWNLOAD LOCALLY AND run npm link in the short term

# View All Commands
multitool help

# Installed Alias
mt help
```

# Tools
For general usage instruction, use `multitool help` to see commands and options.

## Docker
<details>
<summary>View Docker Commands</summary>

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
</details>

---

## Kubernetes (K8S)
<details>
<summary>View K8S Commands</summary>

The Kubernetes Tool (K8S) helps with commands for managing a cluster and accessing resources.

### List Deployments
```bash
mt k8s ls

multitool k8s list-deployments
```

### Show Logs
Currently gets the latest 1000 log lines for a deployment
Health Check Logs are filtered by default via: `grep -v /health`
```bash
# Select from the list
mt k8s log

multitool k8s logs prd-my-service

# Show health check logs as well
multitool k8s logs prd-my-service --show-health
```
</details>

---

