import { MongoClient } from 'mongodb';
import Cabin from './types/cabin';
import CabinBooking from './types/booking';
import Client from './types/client';

const url = 'mongodb://localhost:27017';
const dbName = 'cabinBookingDB';

export const addCabinDb = async (cabin: Cabin): Promise<void> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinsCollection = db.collection('cabins');
    
    await cabinsCollection.insertOne(cabin);
    
    await client.close();
}

export const removeCabinDb = async (cabinId: string): Promise<void> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinsCollection = db.collection('cabins');
    
    await cabinsCollection.deleteOne({ id: cabinId });
    
    await client.close();
}

export const updateCabinDb = async (cabin: Cabin): Promise<void> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinsCollection = db.collection('cabins');
    
    await cabinsCollection.updateOne({ id: cabin.id }, { $set: cabin });
    
    await client.close();
}

export const addCabinBookingDb = async (cabinBooking: CabinBooking): Promise<void> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinBookingsCollection = db.collection('cabinBookings');
    
    await cabinBookingsCollection.insertOne(cabinBooking);
    
    await client.close();
}

export const removeCabinBookingDb = async (bookingId: string): Promise<void> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinBookingsCollection = db.collection('cabinBookings');
    
    await cabinBookingsCollection.deleteOne({ id: bookingId });
    
    await client.close();
}

export const updateCabinBookingDb = async (cabinBooking: CabinBooking): Promise<void> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinBookingsCollection = db.collection('cabinBookings');
    
    await cabinBookingsCollection.updateOne({ id: cabinBooking.id }, { $set: cabinBooking });
    
    await client.close();
}

export const getCabinByIdDb = async (cabinId: string): Promise<Cabin | null> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinsCollection = db.collection('cabins');
    
    const result = await cabinsCollection.findOne({ id: cabinId });
    
    await client.close();

    return result ? result : null;
}

export const getCabinBookingByIdDb = async (bookingId: string): Promise<CabinBooking | null> => {
    const client = new MongoClient(url);
    
    await client.connect();
    const db = client.db(dbName);
    
    const cabinBookingsCollection = db.collection('cabinBookings');
    
    const result = await cabinBookingsCollection.findOne({ id: bookingId });
    
    await client.close();

    return result ? result : null;
}