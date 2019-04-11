import { Container } from 'unstated'

class JGOContainer extends Container {
  state = {
    jobs: [
      'FullStack',
      'DBA'
    ],
    job: ''
  }

  handleDeleteJob = (job) => {
    this.setState({
      jobs: this.state.jobs.filter(c => c !== job)
    })
  }

    
  handleInputChange = (event) => {
    const job = event.target.value
    this.setState({ job });
  };

  handleAddJob = (event) => {
    event.preventDefault()
    this.setState(({jobs}) => ({
      jobs: jobs.concat(this.state.job)
    }))
    this.setState({ job: '' });
  }
}

export default JGOContainer