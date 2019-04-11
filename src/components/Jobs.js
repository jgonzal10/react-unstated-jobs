import React from 'react';
import { Subscribe } from 'unstated';


import JGOContainer from '../container/container'

const Jobs = () => (
  <ul>
    <Subscribe to={[JGOContainer]}>
      {jobs =>
        jobs.state.jobs.map(job => (
          <li key={job}>
            {job} <button onClick={() => jobs.handleDeleteJob(job)}>[X]</button>
          </li>
        ))
      }
    </Subscribe>
  </ul>
);

export default Jobs