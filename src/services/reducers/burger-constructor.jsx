import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from "uuid";

export const burgerConstructionSlice = createSlice({
    name: 'burgerConstructor',
    initialState: {
        bun: [],
        ingredients: [],
    },
    reducers:
    {
        //BUN
        AddReplaceBun: {
            reducer: (state, action) => {                
                state.bun[0] = action.payload;
                state.bun[1] = action.payload;
            },
            prepare: (arrayItem) => {
                const uuid = uuidv4();                
                return {payload: {...arrayItem, uuid}}
            }
        },
        //INGREDIENTS
        AddIngredient: {
            reducer: (state, action) => {                
                state.ingredients.push(action.payload);
            },
            prepare: (arrayItem) => {
                const uuid = uuidv4();                
                return {payload: {...arrayItem, uuid}}                
            }
        },
        DelIngredient: {
            reducer: (state, action) => {                
                state.ingredients = state.ingredients.filter((task) => task.uuid !== action.payload);
            }
        },
        ReorderIngredient: {
            reducer:(state, action) => {
                const { hoverIndex, dragIndex } = action.payload;
                const IngredientsCopy = [...state.ingredients];
                const [removed] = IngredientsCopy.splice(dragIndex, 1);
                IngredientsCopy.splice(hoverIndex, 0, removed);
                state.ingredients = IngredientsCopy;
                //state.ingredients.splice(action.payload.dragIndex, 0, state.ingredients.splice(action.payload.hoverIndex, 1)[0]); //by AI
            }            
        }
    }
});

export const {AddReplaceBun, AddIngredient, DelIngredient, UpdateIngredient, ReorderIngredient} = burgerConstructionSlice.actions;
export default burgerConstructionSlice.reducer;