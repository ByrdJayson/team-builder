import React from 'react'



export default function TeamForm(props){

    const { onSubmit } = props;
    return (
        <div className="form">
            <form>
                <input name='name' type="text" placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <select name="role" id="role">
                    <option value="Please Select a Role">Please Select a Role</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Design">Design</option>
                </select>
                <button type='submit' onSubmit={onSubmit}>Submit</button>
                
            </form>
        </div>
    )
}