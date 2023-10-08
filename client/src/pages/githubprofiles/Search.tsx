import { useEffect, useState } from 'react'
import MainButton from 'src/components/MainButton'
import { useFetch } from 'src/hooks/useFetch'

const Search = ({
  setUsers
}: {
  setUsers: React.Dispatch<React.SetStateAction<GitHubUserItem[]>>
}) => {
  const [inputValue, setInputValue] = useState('')
  const [url, setUrl] = useState('')
  const [errorValidation, setErrorValidation] = useState('')
  const { data, error } = useFetch<GitHubSearchResponse>(url)

  useEffect(() => {
    if (data) {
      setUsers(() => data.items)
    }
  }, [data, setUsers])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setErrorValidation('')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue === 'doublevpartners') {
      return setErrorValidation(() => 'doublevpartners is not a valid value')
    } else if (inputValue.length < 4) {
      return setErrorValidation(() => 'You must enter at least 4 characters')
    } else {
      setUrl(`https://api.github.com/search/users?q=${inputValue}`)
    }
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-lg'>
      <h2 className='text-xl font-bold mb-4'>API Fetch Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='input'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Input Value:
          </label>
          <input
            type='text'
            id='input'
            className='w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter input'
          />
        </div>
        <MainButton text='Search' />
      </form>
      {error && <div>{error.message}</div>}
      {errorValidation && (
        <div className=' text-red-700'>{errorValidation}</div>
      )}
    </div>
  )
}

export default Search
