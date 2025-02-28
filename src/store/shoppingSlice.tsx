import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ShoppingItem {
    items: string[];
}

const initialState: ShoppingItem = {
    items: ["Milk", "Eggs"],
};

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items.splice(action.payload, 1);
        },
    },
})

export const {addItem} = shoppingSlice.actions;
export default shoppingSlice.reducer;