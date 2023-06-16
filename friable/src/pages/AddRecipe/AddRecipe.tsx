import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { IRecipe, IIngredient }from 'shared_data';
import { TextField, Button, MenuItem, Container, Box } from '@mui/material';
import axios from 'axios';

interface Props {
  ingredientsList: IIngredient[];
}

const AddRecipe: React.FC<Props> = ({ ingredientsList }) => {
  
  const [ingredients,setIngredients] = React.useState<IIngredient[]>([])


  useEffect(()=>{
    async function getNeo4jIngredients() {
      try{
        const serverIngredientsResponse = await axios.get('/neo4j/ingredients');
        setIngredients(serverIngredientsResponse.data)
      }catch(err){
        console.log(err)
      }
    }
    getNeo4jIngredients();
  },[])
  const { register, control, handleSubmit, setValue } = useForm<IRecipe>();
  const [instructions, setInstructions] = useState<string[]>(['']);

  const { fields: ingredientsFields, append: ingredientsAppend, remove: ingredientsRemove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  const handleInstructionAdd = () => {
    setInstructions([...instructions, '']);
  };

  const handleInstructionRemove = (index: number) => {
    setInstructions(instructions.filter((_, idx) => idx !== index));
  };

  const handleInstructionChange = (index: number, newValue: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = newValue;
    setInstructions(newInstructions);
  };

  const onSubmit = (data: IRecipe) => {
    // Include the instructions in the form data
    console.log({ ...data, instructions });
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField fullWidth margin="normal" label="Recipe Name" {...register('recipeName')} />
        {/* ... Add similar TextField components for the other IRecipe fields here ... */}

        {ingredientsFields.map((item, index) => (
          <Box key={item.id}>
            <TextField
              select
              fullWidth
              margin="normal"
              label="Ingredient"
              {...register(`ingredients.${index}.name` as const)}
            >
              {ingredientsList.map((ingredient) => (
                <MenuItem key={ingredient.name} value={ingredient.name}>
                  {ingredient.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              margin="normal"
              label="Amount"
              {...register(`ingredients.${index}.amount` as const)}
            />
            <Button onClick={() => ingredientsRemove(index)}>Remove</Button>
          </Box>
        ))}

        <Button onClick={() => ingredientsAppend({ name: '', amount: '' })}>Add Ingredient</Button>

        {instructions.map((instruction, index) => (
          <Box key={index}>
            <TextField
              fullWidth
              margin="normal"
              label="Instruction"
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
            />
            <Button onClick={() => handleInstructionRemove(index)}>Remove</Button>
          </Box>
        ))}

        <Button onClick={handleInstructionAdd}>Add Instruction</Button>

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};
export default AddRecipe

// import React from 'react'
// import { Link } from "react-router-dom";
// //import AddNewRecipeForm from '../../components/addNewRecipeForm';
// import WriteToDBComponent from '../../components/WriteToDBComponent'
// import SearchComponent from '../../components/SearchComponent'
// import { IRecipe } from 'shared_data';

// const AddRecipe=()=> {
//   return (
//     <div >
//     <div >Hello</div>
//       <Link to="/"> to results</Link>
//       <Link to="/Login"> to Login</Link>
//       <AddNewRecipeForm />
//       <WriteToDBComponent/>
//       <SearchComponent/>
//     </div>
//   )
// }
// export const defaultRecipe:IRecipe = {
//   recipeName: "Pasta",
//   utherName: "Sam",
//   prepTime: 20,
//   cookTime: 30,
//   category: "dinner",
//   diteType: "Vegan",
//   ratings: 5,
//   skilLevel: "medium",
//   dishType: "plate",
//   serves: 2,
//   ingredients: [
//       {name: "pasta", amount: "200 grams"},
//       {name: "olive oil", amount: "2 tbs"},
//       {name: "garlic", amount: "2 cloves"},
//       {name: "salt", amount: "to taste"},
//       {name: "pepper", amount: "to taste"},
//   ],
//   instructions: [
//       "Boil the pasta until al dente",
//       "In a pan, saute the garlic in olive oil",
//       "Mix the pasta with the garlic and oil",
//       "Season with salt and pepper"
//   ],
// };




// export const defaultRecipe2:IRecipe = {
//   recipeName: "PastaV2",
//   utherName: "Frodo",
//   prepTime: 20,
//   cookTime: 30,
//   category: "dinner",
//   diteType: "Vegan",
//   ratings: 3,
//   skilLevel: "easy",
//   dishType: "plate",
//   serves: 2,
//   ingredients: [
//       {name: "pasta", amount: "200 grams"},
//       {name: "olive oil", amount: "2 tbs"},
//       {name: "garlic", amount: "2 cloves"},
//       {name: "salt", amount: "to taste"},
//       {name: "pepper", amount: "to taste"},
//       {name: "ketchup", amount: "a lot"},
//       {name: "mayo", amount: "a little less than a lot"},
//   ],
//   instructions: [
//       "Boil the pasta until al dente",
//       "In a pan, saute the garlic in olive oil",
//       "Mix the pasta with the garlic and oil",
//       "Season with salt and pepper",
//       "add the ketchup and mayo and mix with the pasta"
//   ],
// };

// export default AddRecipe