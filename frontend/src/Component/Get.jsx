import { Box, Button, Center, Flex, Image, Input, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Get = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [sort,setSort] = useState('')
    const [page,setPage] = useState(1)

    useEffect(() => {
        let obj={}
        let params={}
        if(filter){
            params.role=filter
        }
        if(search){
            params.techstack = search
        }

        if(sort){
            params.date = sort
        }

        if(page){
            params.page = page
        }


        obj.params = params


        axios.get(`https://jungle-green-katydid-suit.cyclic.app/jobs`,obj).then((res) => setData(res.data)).catch((err) => console.log(err))
    }, [search,filter,sort])

    const ref1 = useRef(null)

    



    return (
        <Box>

            <Center>
                <Input type='text' placeholder='search by language' ref={ref1} />
                <Button onClick={() => setSearch(ref1.current.value)}>Search</Button>
            </Center>

            <Box>
                <Select onChange={(e) => setFilter(e.target.value)}>
                    <option value={''}>--filter by role--</option>
                    <option value={'Frontend'}>Frontend</option>
                    <option value={'Backend'}>Backend</option>
                    <option value={'FullStack'}>FullStack</option>
                    <option value={'etc'}>etc</option>

                </Select>

                <Select onChange={(e) => setSort(e.target.value)}>
                    <option value={''}>--sort by date--</option>
                    <option value={'asc'}>asc</option>
                    <option value={'desc'}>desc</option>
                    {/* <option value={'FullStack'}>FullStack</option>
                    <option value={'etc'}>etc</option> */}

                </Select>
            </Box>

            {data.length != 0 ? <Box>
                {data.map((el) => {
                    return <Flex alignItems={'center'} m={'1%'} justifyContent={'center'} borderRadius={'10px'} border={'1px solid black'}>
                        <Box><Image src='https://cdn.dribbble.com/users/467195/screenshots/14239555/media/3ebc72900f2e357acfb2968b7fefad46.png?resize=400x0' w={'20%'} borderRadius={'50%'} /></Box>
                        <Flex flexDirection={'column'} w={'30%'}>
                            <Text>{el.company}</Text>
                            <Text>{el.position}</Text>
                            <Flex justifyContent={'space-around'} alignItems={'center'}>
                                <Text>{el.postedAt}</Text>
                                <Text>Contact</Text>
                                <Text>{el.location}</Text>
                            </Flex>
                        </Flex>

                        <Flex justifyContent={'space-around'} alignItems={'center'} w={'70%'} p={'0% 16%'}>
                            <Text>{el.role}</Text>
                            <Text>{el.level}</Text>
                            <Text>{el.language}</Text>
                        </Flex>

                    </Flex>
                })}
            </Box> : ''}
            <Button onClick={()=>setPage(page+1)}>Next</Button>
            <Button onClick={()=>setPage(page-1)}>Prev</Button>

        </Box>
    )
}

export default Get
