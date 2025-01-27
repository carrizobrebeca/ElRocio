import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchReservas = createAsyncThunk(
  "reservas/fetchReservas",
  async () => {
    const response = await axios.get(`http://localhost:3001/reservas/`
    );
    return response.data;
  }
);

export const fetchReservasById = createAsyncThunk(
  "reservas/fetchReservasById",
  async (id) => {
    const response = await axios.get(`http://localhost:3001/reservas/${id}`
    );
    return response.data;
  }
);
export const crearReserva = createAsyncThunk(
  "reservas/crearReserva",
  async (reservaData) => {
    const response = await axios.post(
      `http://localhost:3001/reservas`,
      reservaData
    );
    return response.data;
  }
);



const reservaSlice = createSlice({
  name: "reservas",
  initialState: {
    allReservas: [],
    reservasDB : [],
    selectedReserva: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchReservas.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchReservas.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.reservasDB = action.payload;
      
    })
    .addCase(fetchReservas.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
      .addCase(crearReserva.pending, (state) => {
        state.status = "loading";
      })
      .addCase(crearReserva.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allReservas = action.payload;
        alert("Reserva creada con éxito");
      })
      .addCase(crearReserva.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        alert("Error al crear Reserva");
      })
      .addCase(fetchReservasById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReservasById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedReserva = action.payload;
      })
      .addCase(fetchReservasById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    
  },
});

export default reservaSlice.reducer;
