import {useEffect, useState} from 'react'
import { UserInterface } from '../types/User.interface.ts'
import {fetchData} from '../utils/api.ts'

const UseEffect= () => {

  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {

    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()

    return () => {

    }
  }, [])

  return (
    <div>
      <h4>Render of users</h4>
      {isLoading && <p>Loading...</p>}
      {error && <h2>{error}</h2>}
      {/*<input type="number" onChange={(e) => setCount(+e.target.value)}/>*/}
      <ul>
        {users.map((user: UserInterface) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffect