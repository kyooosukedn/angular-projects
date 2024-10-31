import { inject, Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocationList: Housinglocation[] = [
    {
      id: 1,
      name: 'Modern House',
      city: 'San Francisco',
      state: 'CA',
      photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 2,
      name: 'Cozy Cottage',
      city: 'Portland',
      state: 'OR',
      photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      availableUnits: 3,
      wifi: true,
      laundry: true,
    },
    {
      id: 3,
      name: 'Luxury Villa',
      city: 'Miami',
      state: 'FL',
      photo: 'https://images.unsplash.com/photo-1599423300746-b62533397364',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 4,
      name: 'Urban Apartment',
      city: 'New York',
      state: 'NY',
      photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 
      availableUnits: 10,
      wifi: true,
      laundry: true,
    },
    {
      id: 5,
      name: 'Beach House',
      city: 'Los Angeles',
      state: 'CA',
      photo: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
  ];

  constructor() {   }

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation {
    const location = this.housingLocationList.find(location => location.id === id);
    if (!location) {
      throw new Error(`Housing location with id ${id} not found`);
    }
    return location;
  }
}
