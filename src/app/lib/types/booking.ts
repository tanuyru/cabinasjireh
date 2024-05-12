import Client from "./client"
interface CabinBooking {
    id: string;
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