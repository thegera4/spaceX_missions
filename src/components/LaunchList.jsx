import { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { Heading } from '@chakra-ui/react'
import { LaunchItem } from './LaunchItem'

export function LaunchList() {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches().then(setLaunches).catch(console.log);
    }, []);

  return (
    <>
        <Heading as="h1" size="lg" m={4}>
            SpaceX Launches
        </Heading>
        {launches.length === 0 ? (
            <div>Loading...</div>
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



