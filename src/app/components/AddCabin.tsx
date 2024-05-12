import React, { useState } from 'react';
import Cabin from '@/app/lib/types/cabin';

const AddCabin: React.FC = () => {
  const [newCabin, setNewCabin] = useState<Cabin>({
    id: 0,
    name: '',
    description: '',
    urlsToPhotos: [],
    pricePerMonth: 0,
    pricePerWeek: 0,
    pricePerNight: 0,
  });

  // Handle form submission to add the new cabin

  return (
    <div>
      {/* Form inputs for cabin properties */}
    </div>
  );
};

export default AddCabin;