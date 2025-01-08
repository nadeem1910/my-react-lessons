import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const{
    register,
    handleSubmit,
    watch,
    formState: {errors , isSubmitting},
  } = useForm();

  async function onSubmit(data){
    // Simulating API Call reason -> for preventing multiple submission of form
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("Submitting the form",data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name -: </label>
        <input type="text" {...register('firstName',
          {
            required: true,
            minLength: {value:3,message:"atleast 3 characters"}, 
            maxLength: {value:20,message:"atmax 20 characters"}
          })} />
            {errors.firstName && <p>{errors.firstName.message}</p>}

        <br/>
        <br/>

        <label>Middle Name -: </label>
        <input type="text" {...register('middleName',
          {
            required: true, 
            minLength: 3, 
            maxLength:20
          })} />

        <br/>
        <br/>

        <label>Last Name -: </label>
<input
  type="text"
  {...register('lastName', {
    required: "Last name is required",
    minLength: {
      value: 3,
      message: "At least 3 characters"
    },
    maxLength: {
      value: 20,
      message: "At most 20 characters"
    },
    pattern: {
      value: /^[A-Za-z]+$/i,
      message: "Not as per the pattern"
    }
  })}
 />
{errors.lastName && <p>{errors.lastName.message}</p>}

        {/* <label>Last Name -: </label>
        <input type="text" {...register('lastName' , 
          {
            required: true, 
            minLength: 3, 
            maxLength:20
          },{
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Not as per the pattern"
            }
          })} />
          {errors.lastName && <p>{errors.lastName.message}</p>} */}
        <br />
        <br />

        <input type="submit"  disabled={isSubmitting} 
        value={isSubmitting?"Form submitting":"Submit"}/>
      </form>
    </div>
  )
}

export default App
