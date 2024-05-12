import { CosmosClient } from '@azure/cosmos';
import Cabin from './types/cabin';
import CabinBooking from './types/booking';
import Client from './types/client';

const endpoint = 'YOUR_COSMOSDB_ENDPOINT'; 
const key = 'YOUR_COSMOSDB_KEY'; 
const client = new CosmosClient({ endpoint, key }); 
const databaseId = 'YOUR_DATABASE_ID'; 
const containerId = 'YOUR_CONTAINER_ID';

const container = client.database(databaseId).container(containerId);


export const addCabinDb = async (cabin: Cabin): Promise<void> => { await container.items.create(cabin); }

export const removeCabinDb = async (cabinId: number): Promise<void> => { await container.item(cabinId.toString()).delete(); }

export const updateCabinDb = async (cabin: Cabin): Promise<void> => { await container.item(cabin.id.toString()).replace(cabin); }

export const addCabinBookingDb = async (cabinBooking: CabinBooking): Promise<void> => { await container.items.create(cabinBooking); }

export const removeCabinBookingDb = async (bookingId: number): Promise<void> => { await container.item(bookingId.toString()).delete(); }

export const updateCabinBookingDb = async (cabinBooking: CabinBooking): Promise<void> => { await container.item(cabinBooking.id.toString()).replace(cabinBooking); }