var _a;
import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';
export var CART_PERSISTENT_STATE = 'cartData';
var initialState = (_a = loadState(CART_PERSISTENT_STATE)) !== null && _a !== void 0 ? _a : {
    items: []
};
export var cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add: function (state, action) {
            var existed = state.items.find(function (i) { return i.id === action.payload; });
            if (!existed) {
                state.items.push({ id: action.payload, count: 1 });
                return;
            }
            state.items.map(function (i) {
                if (i.id === action.payload) {
                    i.count += 1;
                }
                return i;
            });
        },
        remove: function (state, action) {
            var existed = state.items.find(function (i) { return i.id === action.payload; });
            if (existed) {
                if (existed.count === 1) {
                    state.items = state.items.filter(function (i) { return i.id !== action.payload; });
                }
                else {
                    state.items.map(function (i) {
                        if (i.id === action.payload) {
                            i.count -= 1;
                        }
                        return i;
                    });
                }
                return;
            }
        },
        delete: function (state, action) {
            state.items = state.items.filter(function (i) { return i.id !== action.payload; });
        },
        clean: function (state) {
            state.items = [];
        }
    }
});
export default cartSlice.reducer;
export var cartActions = cartSlice.actions;
