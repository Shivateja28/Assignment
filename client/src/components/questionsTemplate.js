import './questions.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'


function Questions(){

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit = async(userCredentialsObject)=>{
        console.log(JSON.stringify(userCredentialsObject))        
              axios.post("http://localhost:3002/submitquestions/submit", userCredentialsObject)
      .then(response=>{
        console.log("Yes")
        console.log(response.data)
      })
      .catch((err)=>{
        console.log("No")
        console.log(err)})


    }

    return(
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div class="q-card">
                    <div class = "question">
                        <p style={{color:"#000000"}}><span style={{color:"#5655C6"}}>Q1. </span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                    </div>
                    <div class = "options">
                        <label htmlFor="yes">
                            <input
                            {...register('answer1', { required: true })}
                            type="radio"
                            name="answer1"
                            value="Yes"
                            className="form-check-input"
                            id="yes"
                            />
                            {' '}Yes
                            <input
                            {...register('answer1', { required: true })}
                            type="radio"
                            name="answer1"
                            value="No"
                            className="form-check-input"
                            id="no"
                            />
                            {' '}No
                        </label>
                    </div>
                    
                </div>
                <div class="q-card">
                    <div class = "question">
                        <p style={{color:"#000000"}}><span style={{color:"#5655C6"}}>Q2. </span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                    </div>
                    <div class = "options">
                        <label htmlFor="yes">
                            <input
                            {...register('answer2', { required: true })}
                            type="radio"
                            name="answer2"
                            value="Yes"
                            className="form-check-input"
                            id="yes"
                            />
                            {' '}Yes
                            <input
                            {...register('answer2', { required: true })}
                            type="radio"
                            name="answer2"
                            value="No"
                            className="form-check-input"
                            id="no"
                            />
                            {' '}No
                        </label>
                    </div>
                    
                </div>
                <div class="q-card">
                    <div class = "question">
                        <p style={{color:"#000000"}}><span style={{color:"#5655C6"}}>Q3. </span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                    </div>
                    <input type="text" name="hello" placeholder='Long answer text' className='text-input' {...register('answer3')} />
                </div>
                <div class="q-card">
                    <div class = "question">
                        <p style={{color:"#000000"}}><span style={{color:"#5655C6"}}>Q5. </span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                    </div>
                    <div class = "options">
                        <label htmlFor="yes">
                            <input
                            {...register('answer4', { required: true })}
                            type="radio"
                            name="answer4"
                            value="Yes"
                            className="form-check-input"
                            id="yes"
                            />
                            {' '}Yes
                            <input
                            {...register('answer4', { required: true })}
                            type="radio"
                            name="answer4"
                            value="No"
                            className="form-check-input"
                            id="no"
                            />
                            {' '}No
                        </label>
                    </div>
                </div>
                <div class="q-card">
                    <div class = "question">
                        <p style={{color:"#000000"}}><span style={{color:"#5655C6"}}>Q5. </span>Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                    </div>
                    <input type="text" name="hello" placeholder='Long answer text' className='text-input' {...register('answer5')} />
                </div>

                <div class = "client-name ">
                    <p class='para-name'>Client Name</p>
                   
                    <div className="img-card">
                    </div>
                    <div className='names'>
                        Courtney Henry
                    </div>
                    
                </div>
            <div className='button-box d-flex justify-content-center '>
                
                    <button className='decline rounded'>Decline</button>
               
                
                    <button type = "Submit" className='accept-button rounded'>Accept</button>
                
           </div>
            </form>
        </div>
    )
}

export default Questions