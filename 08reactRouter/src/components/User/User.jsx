import { useParams } from 'react-router-dom'

function User() {

    const {id} = useParams();

  return (
    <div className='bg-gray-700 text-white p-5'>User:{id} </div>
  )
}

export default User