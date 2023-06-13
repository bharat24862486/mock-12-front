import { Box, Button, Center, Heading, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react';
import axios from "axios";



const Init = {
    company: "",
    postedAt: "",
    city: "",
    location: "",
    role: "",
    level: "",
    contract: "",
    position: "",
    language: ""
}



const Post = () => {
    const [state, setState] = useState(Init)

    const change = (e) => {
        let {name,value} = e.target
        console.log(name,value)
        setState({...state, [name]:value})
    }

    function submit(){
        let date = new Date()
        state.postedAt = date.toLocaleDateString().split('/').reverse().join('-')

        console.log(state)

        axios.post(`https://jungle-green-katydid-suit.cyclic.app/jobs/add`,state).then((res)=>{
            console.log(res)
            return alert('data has been added')
        }).catch((err)=>console.log(err))
    }

    console.log(state)


    return (
        <Box>
            <Center><Heading>Post Jobs</Heading></Center>

            <Input type='text' name='company' placeholder='Company' m={'1%'} w={'50%'}  onChange={(e)=>change(e)}/>
            <Input type='text' name='city' placeholder='City' m={'1%'} w={'50%'}  onChange={(e)=>change(e)}/>
            <Input type='text' name='location' placeholder='Location' m={'1%'} w={'50%'}  onChange={(e)=>change(e)}/>
            <Select name='role' m={'auto'} mt={'1%'} mb={'1%'} w={'50%'} onChange={(e)=>change(e)}>
                <option value={''}>--select role--</option>
                <option value={'Frontend'}>Frontend</option>
                <option value={'Backend'}>Backend</option>
                <option value={'FullStack'}>FullStack</option>
                <option value={'etc'}>etc</option>

            </Select>
            <Select name='level' m={'auto'} mt={'1%'} mb={'1%'} w={'50%'} onChange={(e)=>change(e)}>
                <option value={''}>--select level--</option>
                <option value={'Junior'}>Junior</option>
                <option value={'Senior'}>Senior </option>
                {/* <option value={'FullStack '}>FullStack</option> */}
                <option value={'etc'}>etc</option>

            </Select>

            <Select name='position' m={'auto'} mt={'1%'} mb={'1%'} w={'50%'} onChange={(e)=>change(e)}>
                <option value={''}>--select position--</option>
                <option value={'Backend Developer'}>Backend Developer</option>
                <option value={'Junior Frontend Developer'}>Junior Frontend Developer</option>
                <option value={'Junior Backend Developer'}>Junior Backend Developer</option>
                <option value={'FSD'}>FSD</option>

            </Select>

            <Select name='language' m={'auto'} mt={'1%'} mb={'1%'} w={'50%'} onChange={(e)=>change(e)}>
                <option value={''}>--select language--</option>
                <option value={'Javascript'}>Javascript</option>
                <option value={'Java'}>Java</option>
                <option value={'C'}>C</option>
                <option value={'C++'}>C++</option>
                <option value={'etc'}>etc</option>

            </Select>

            <Select name='contract' m={'auto'} mt={'1%'} mb={'1%'} w={'50%'} onChange={(e)=>change(e)}>
                <option value={''}>--select contract--</option>
                <option value={'Full time'}>Full time</option>
                <option value={'Part time'}>Part time</option>
                {/* <option value={'C'}>C</option>
                <option value={'C++'}>C++</option>
                <option value={'etc'}>etc</option> */}

            </Select>
            
            {/* <Input type='text' name='contract' placeholder='Contract' m={'1%'} w={'50%'}  onChange={(e)=>change(e)}/> */}
            
            <Button m={'1%'} w={'50%'} onClick={submit}>Submit</Button>

        </Box>
    )
}

export default Post
