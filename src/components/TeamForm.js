import React from 'react'



export default function TeamForm(props){

    const { values, submit, update } = props;
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const name = evt.target.name;

        const {
            value
        } = evt.target;
        update(name, value);
    }
    
    
    return (
        <div className="form">
            <form onSubmit={onSubmit}> 
                <input name='name' type="text" placeholder='Name' value={values.name} onChange={onChange} />
                <input type="email" name='email' placeholder='Email' value={values.email} onChange={onChange}/>
                <select name="role" id="role" value={values.role} onChange={onChange}>
                    <option value="Please Select a Role">Please Select a Role</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Design">Design</option>
                </select>
                <button type='submit'>Submit</button>
                
            </form>
        </div>
    )
}