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
    stage('Deploy') {
      steps {
        sh 'echo "deploying..."'
      }
    }
  }
}