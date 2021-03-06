import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as API from '../services/launches'
import { Box, Text, Flex, Spacer, Tag } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'

export function LaunchDetails() {

    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log)
        }, [launchId]);

  return (
      
    <Box 
    bg="gray.100" 
    p={4} 
    m={4}
    borderRadius="lg">
    {launch ? (
        <>
            <Flex>
                <Text fontSize="2xl">
                Mission: <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
                </Tag>
            </Flex>
            <Box>
                <Text fontSize="md" color={launch.launch_success ? "green" : "red"}>
                    {launch.details}
                </Text>
            </Box>
            <Box fontSize="sm" color="purple">
                Rocket Details: {" "}
                <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                    {launch.rocket?.rocket_name}
                </Link>
            </Box>
        </>
     )
     :
        <Progress size='xs' isIndeterminate color='purple.300'/>
     }
    </Box>
    );
}
