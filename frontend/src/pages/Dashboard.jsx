import React from 'react';
import {useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm';
import GoalItem from '../components/GoalItem';
import Spinner from '../components/Spinner'
import { getGoals} from '../features/goals/goalSlice';
// import { reset} from '../features/goals/goalSlice';


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state)=>state.auth)
  const {goals, isLoading, isError, message} = useSelector((state) => 
  state.goals)

  useEffect(()=>{
      // if(isError){
      //   console.log(message);
      // }
      console.log('useEffect working');

      if(user && user.role==='admin'){
        navigate('/admin')
      }

      if (!user){
        navigate('/login')
      }
      dispatch(getGoals())

      // return() => {
      //   dispatch(reset())
      // }


  },[user])

// if (isLoading) {
//   return <Spinner/>
// }

return (
  <>
  <section className='heading'>
    <h1>Welcome {user&& user.name}</h1>
    <p>User Home</p>
    <Link to={'/incubation'}>
<button  >
Book slot
</button>
</Link>
  </section>
 

  </>
  )
}

export default Dashboard                    