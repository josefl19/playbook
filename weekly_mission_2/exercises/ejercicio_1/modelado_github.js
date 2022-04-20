// Objeto Repo
const repo = {
    name: "LaunchX",
    author: "josefl19",
    language: "Javascript",
    numberOfCommits: 119,
    stars: 3,
    forks: 2,
    issues_open: 2,
    issues_close: 4,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo: " + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

// Objeto Issue
const issue = {
    title: "Error al ejecutar npm test",
    repositoryNameAssociated: "playbook",
    status: "Open",
    numberOfComments: 9,
    labels: ['nodejs', 'npm', 'test', 'open'],
    author: "josefl19",
    dateCreated: Date() - 21,
    lastUpdated: Date(),
    getTitleAndAuthor: function() {
        return `Issue: ${this.title} created by ${this.author}`
    },
    getGeneralInfo: function() {
        return `Issue: ${this.title}, status: ${this.status}, created on: ${this.dateCreated} and last update on ${this.lastUpdated}`
    }
}

console.log()
console.log(issue.getTitleAndAuthor())
console.log("Topicos del tema: " + issue.labels.toString())
console.log(issue.getGeneralInfo())

const pullRequest = {
    title: "Pull request correccion de actividades",
    branchName: "exercise",
    dateCreated: Date() - 10,
    status: "Aceptado",
    repositoryNameAssociated: "MissionNodeJs",
    getStatus: function() {
        return `Estado del pull request: ${this.status}`
    },
    getTitleAndAuthor: function() {
        return `${this.title} relacionado a ${this.repositoryNameAssociated}`
    }
}

console.log()
console.log(pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())