import { getCabinByIdDb, getCabinBookingByIdDb, addCabinDb, removeCabinDb, updateCabinDb,addCabinBookingDb, removeCabinBookingDb, updateCabinBookingDb } from './mongodbimp';
import Cabin from './types/cabin';
import CabinBooking from './types/booking';
import Client from './types/client';
// Cabin API functions
export const addCabin = async (cabin: Cabin): Promise<void> => {
    await addCabinDb(cabin);
}

export const getCabinById = async (cabinId: string): Promise<Cabin | null> => {
    return await getCabinByIdDb(cabinId);
}
export const getCabinBookingById = async (cabinBookingId: string): Promise<CabinBooking | null> => {
    return await getCabinBookingByIdDb(cabinBookingId);
}

export const removeCabin = async (cabinId: string): Promise<void> => {
    await removeCabinDb(cabinId);
}

export const updateCabin = async (cabin: Cabin): Promise<void> => {
    await updateCabinDb(cabin);
}

// CabinBooking API functions
export const addCabinBooking = async (cabinBooking: CabinBooking): Promise<void> => {
    await addCabinBookingDb(cabinBooking);
}

export const deleteCabinBooking = async (bookingId: number): Promise<void> => {
    await removeCabinBookingDb(bookingId);
}

export const updateCabinBooking = async (cabinBooking: CabinBooking): Promise<void> => {
    await updateCabinBookingDb(cabinBooking);
}
