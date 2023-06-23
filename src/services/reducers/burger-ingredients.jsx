import { createSlice } from '@reduxjs/toolkit';
import { getBurgerIngredients } from '../action/burger-ingredients';


const burgerIngredientsSlice = createSlice({
    name: 'burgerIngredients',
    initialState: {
        burgerIngredients: [],
        loadingBurgerIngredients: false,
        errorLoadingBurgerIngredients: 'NULL data'        
    },
    reducers: {},
    /*{
        IncrementCount: (state, action) => {
            const {_id, type, count} = action.payload;
            let newCount = 0;
            if(type === 'bun') { newCount = 2; }
            else { newCount = count + 1;}            
            const index =state.burgerIngredients.findIndex(item => item._id === _id);
            if(index !== -1) {
                state.burgerIngredients[index] = {...state.burgerIngredients[index], count: newCount}
            }
        },
        DecrementCount: (state, action) => {
            const {_id, type, count} = action.payload;
            let newCount = 0;
            if(type !== 'bun') { newCount = 0;}
            else { newCount = count - 1;}
            const index =state.burgerIngredients.findIndex(item => item._id === _id);
            if(index !== -1) {
                state.burgerIngredients[index] = {...state.burgerIngredients[index], count: newCount}
            }
        }
    },*/
    extraReducers: (builder) => {
        builder
            .addCase(getBurgerIngredients.pending, (state) => {
                return state = {
                    ...state,
                    loadingBurgerIngredients: true,
                    errorLoadingBurgerIngredients: null
                }
            })
            .addCase(getBurgerIngredients.rejected, (state, action) => {
                return state = {
                    ...state,
                    loadingBurgerIngredients: false,
                    errorLoadingBurgerIngredients: action.payload
                }
            })
            .addCase(getBurgerIngredients.fulfilled, (state, action) => {
                return state = {
                    ...state,
                    //burgerIngredients: action.payload.map((item) => {return {...item, count: 0/*, uuid: uuidv4()*/}}),
                    burgerIngredients: action.payload,
                    loadingBurgerIngredients: false,
                    errorLoadingBurgerIngredients: null
                }
            })
    }
});
//export const {IncrementCount, DecrementCount} = burgerIngredientsSlice.actions;
export default burgerIngredientsSlice.reducer;