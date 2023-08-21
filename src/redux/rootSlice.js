import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getDivisions = createAsyncThunk(
    'divisions', 
    async (_, {dispatch} ) => {
        const {data} = await axios.get('https://api.football.kg/api/v1/team/division/')
        dispatch(setDivisions(data))
    }
)

export const getDivision = createAsyncThunk(
    'division', 
    async (id,{dispatch}) => {
        const {data} = await axios.get(`https://api.football.kg/api/v1/tables/table/?division=${id}`)
        dispatch(setOneDivision(data.results))
    }
)

export const getChess = createAsyncThunk(
    'division', 
    async (id,{dispatch}) => {
        const {data} = await axios.get(`https://api.football.kg/api/v1/tables/chess/?divizion=${id}`)
        dispatch(setChess(data))
    }
)

const initialState = {
  divisions: [],
  division: [],
  chess: []
}

const rootSlice = createSlice({
  name: 'divisions',
  initialState,
  reducers:{
    setDivisions(state, action){state.divisions = action.payload},
    setOneDivision(state, action){state.division = action.payload},
    setChess(state, action){state.chess = action.payload}
  }
})


export const {setDivisions, setOneDivision, setChess} = rootSlice.actions

export default rootSlice.reducer