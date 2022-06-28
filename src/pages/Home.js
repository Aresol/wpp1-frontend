import {useEffect, useState} from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import ImageCard from '../components/ImageCard'

const Home = () => {
    const [workouts, setWorkouts] = useState(null) // Create the state

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => ( //only if workouts then (&&) map throught the workouts
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        <ImageCard/>
        </div>
    )
}

export default Home