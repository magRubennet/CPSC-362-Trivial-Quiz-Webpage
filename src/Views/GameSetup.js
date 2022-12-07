import {React, useState, useEffect} from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Select, Container, Box } from '@chakra-ui/react'

export default function GameSetup() {
    const [allCategories, setAllCategories] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        try {
            const frmData = new FormData(e.target);
            e.preventDefault();
            console.log(`https://opentdb.com/api.php?amount=5&category=${frmData.get('category')}&difficulty=${frmData.get('difficulty')}&type=multiple&encode=base64`);
            const response = await Axios.get(`https://opentdb.com/api.php?amount=5&category=${frmData.get('category')}&difficulty=${frmData.get('difficulty')}&type=multiple&encode=base64`);
            console.log(response.data.results)
            navigate('/Game', {state:{ trivia:response.data.results }});

        } catch (error) {
            console.log(error);
        }
    };

    const getAllCategories = async() => {
        try {
            const res = await Axios.get('https://opentdb.com/api_category.php');
            setAllCategories(res.data.trivia_categories);
        } catch (error) {
            console.log(error.message);
            setAllCategories(null);
        }
     };

     useEffect(() => {
        getAllCategories();
     }, []);

    return (
        <>
            <Box
                color='black'
                bgGradient="linear(to-l, #C1FFB7, #B7D8FF)"
                minWidth='max-content'
                minH={'665px'}
                textAlign='center'
            > 
            <Container padding='6'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Stack spacing={6} direction='column'>
                        <Select  border='1px' borderColor='black' placeholder='Choose a topic...' size='lg' name="category" required>
                            {allCategories ? (
                                allCategories && allCategories.map(item => 
                                    <option value={item.id}>{item.name}</option>)
                                ) : (
                                <option></option>
                                )
                            };
                        </Select>
                        <Select  border='1px' borderColor='black' placeholder='Choose difficulty...' size='lg' name="difficulty" required>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </Select>
                        <Button bg={'blue.400'}
                                _hover={{bg: 'gray.400',}}
                                border='1px' borderColor='black' type='submit'> Play </Button>
                    </Stack> 
                </form>
            </Container>
            </Box>
        </>
        
    );
}
