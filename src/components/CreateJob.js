import React from 'react'
import { Subscribe } from 'unstated'

import JGOContainer from '../container/container'

const CreateJob = () => {
  return (
    <div>
      <Subscribe to={[JGOContainer]}>
        {jobs =>
          <div>
            <form onSubmit={jobs.handleAddJob}>
              <input
                type="text"
                value={jobs.state.job}
                onChange={jobs.handleInputChange}
              />
              <button>Submit</button>
            </form>
          </div>
        }
      </Subscribe>
    </div>
    );
}

export default CreateJob