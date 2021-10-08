import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import Modal from "../components/Modal"

const Form = () => {
    // const scriptUrl = "https://script.google.com/macros/s/AKfycbyDBj1bngwDEgxXY1WhqervJ7KpgZhopnU9Z5a3WQtgG2A3r6YbtMSShma1IOSouVc/exec"
    const scriptUrl = ""

    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    })
    const updateFormData = (e, key, val) => {
        // e.preventDefault()
        const t = {...formData}
        t[key] = val
        setFormData(t)
    }

    const formRef = useRef(null)
    const errorMessage = "All form fields are required"
    const [isError, setIsError] = useState()

    const handleSubmit = (e) => {
            e.preventDefault()
            console.log(formData)
            if(formData.name.length === 0 || formData.email.length === 0 || formData.phone.length === 0 || formData.where.length === 0){
                setIsError(true)
                window.scrollTo(0,0)
                return
            } else {
            setLoading(true)

            fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
            .then(res => {
                setLoading(false)
                setActive(true)
            })
            .catch(err => console.log(err))
        }
    }

    
    return (
        <>
            <Modal active={active} setActive={setActive} />

            <FormContainer>                    
            {isError && <p className="error">{errorMessage}</p>}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    name="forms"
                >  
                    <CustomInput placeholder="Name" type="text" name="name" id="name" value={formData.name} onChange={(e) => updateFormData(e, 'name', e.target.value)} />

                    <CustomInput placeholder="Phone Number" type="text" name="phone" id="phone" value={formData.phone} onChange={(e) => updateFormData(e, 'phone', e.target.value)} />

                    <CustomInput placeholder="Email" type="email" name="email" id="email" value={formData.email} onChange={(e) => updateFormData(e, 'email', e.target.value)} />

                    <CustomInput placeholder="Location" type="email" name="location" id="location" value={formData.location} onChange={(e) => updateFormData(e, 'location', e.target.value)} />
                
                    <textarea name="message" id="message" cols="30" rows="5"></textarea>

                    <div className="button-container">
                        <button type="submit">{loading ? "Loading..." : "Submit"}</button>
                    </div>
                </form>
            </FormContainer>
        </>
    )
}

export default Form

const FormContainer = styled.div`
    form {
        width: 100%;

        textarea {
            border-radius: 5px;
            border: 1px solid  rgba(255, 205, 0, 0.5);
            outline: none;
            display: block;
            padding: 1.5rem 1rem;
            font-size: 14px;
            color: #C4C4C4;
            width: 100%;
            background: transparent;
            
            margin-bottom: 22px;
        
            ::placeholder {
                color: #59574F;
                white-space: nowrap;
                font-size: 0.8rem;
            }
        }

        button {
            border: none;
            padding: 1rem 3rem;
            background: #FCD900;
            color: rgba(17, 17, 17, 1);;
            /* max-width: 327px; */
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 2rem;
            border-radius: 5px;
            transition: all 200ms linear;
            &:hover {
                transform: scale(0.95);
            }
        }
    }
`;

const CustomInput = styled.input.attrs(props => ({
    type: 'text',
    size: props.small ? 5 : undefined,
  }))`
    border-radius: 5px;
    border: 1px solid  rgba(255, 205, 0, 0.5);
    outline: none;
    display: block;
    padding: 1.5rem 2rem;
    font-size: 14px;
    color: #C4C4C4;
    width: 100%;
    height: 44px;
    background: transparent;
    
    margin-bottom: 22px;
  
    ::placeholder {
        color: #59574F;
        white-space: nowrap;
        font-size: 0.8rem;
    }

    @media (max-width: 768px) {
        ::placeholder {
            /* font-size: 10px; */
        }
    }
  `