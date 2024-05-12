import Client from "./client"
interface CabinBooking {
    id: number;
    cabinId: number;
    client: Client
    clientRequest: string;
    adminComment: string;
    startDate: Date;
    endDate: Date;
    bookingStatus: string;
    quotedPriceForStay: number;
  }
  
  export default CabinBooking;