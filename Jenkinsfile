pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo "building magic..."'
      }
    }
    stage('Test') {
      steps {
        sh 'echo "testing magic..."'
        input(message: 'Deploy?', id: 'deploy', ok: 'Yes')
      }
    }
    stage('Commit') {
      steps {
        sh 'echo "committing..."'
      }
    }
    stage('deploy') {
      steps {
        input(message: 'Deploy in Prod?', id: 'deploy', ok: 'deploy')
      }
    }
  }
}