import { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { Heading } from '@chakra-ui/react'
import { LaunchItem } from './LaunchItem'
import { CircularProgress } from '@chakra-ui/react'

export function LaunchList() {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches().then(setLaunches).catch(console.log);
    }, []);

  return (
    <>
      <div className="title-container">
        <Heading as="h1" size="lg" m={4}>
          SpaceX Launches List
        </Heading>
      </div>
      {launches.length === 0 ? (
        <div className="progress-container"><CircularProgress isIndeterminate color='purple.300'/></div>
      ) : (
        <section>
            {launches.map(launch => {
            return (
            <LaunchItem key={launch.flight_number} {...launch} />
            );
            })}
        </section>
        )}
    </>
  )
}



