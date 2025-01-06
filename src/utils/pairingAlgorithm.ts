interface Location {
  latitude: number;
  longitude: number;
}

interface Driver {
  id: string;
  name: string;
  rating: number;
  rides: number;
  vehicle: string;
  location: Location;
  isAvailable: boolean;
}

interface RideRequest {
  riderId: string;
  pickup: Location;
  destination: Location;
}

// Calculate distance between two points using Haversine formula
const calculateDistance = (point1: Location, point2: Location): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (point2.latitude - point1.latitude) * Math.PI / 180;
  const dLon = (point2.longitude - point1.longitude) * Math.PI / 180;
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(point1.latitude * Math.PI / 180) * Math.cos(point2.latitude * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Find the best driver for a ride request
export const findBestDriver = (
  drivers: Driver[],
  rideRequest: RideRequest
): Driver | null => {
  const availableDrivers = drivers.filter(driver => driver.isAvailable);
  
  if (availableDrivers.length === 0) return null;

  // Score each driver based on distance and rating
  const scoredDrivers = availableDrivers.map(driver => {
    const distance = calculateDistance(driver.location, rideRequest.pickup);
    const ratingScore = driver.rating * (driver.rides / 100); // Weight rating by experience
    const distanceScore = Math.max(0, 10 - distance); // Higher score for closer drivers
    
    return {
      driver,
      score: ratingScore + distanceScore
    };
  });

  // Sort by score and return the best match
  scoredDrivers.sort((a, b) => b.score - a.score);
  return scoredDrivers[0]?.driver || null;
};

// Calculate estimated arrival time based on distance
export const calculateETA = (driverLocation: Location, pickup: Location): number => {
  const distance = calculateDistance(driverLocation, pickup);
  const averageSpeed = 30; // km/h
  return Math.ceil(distance / averageSpeed * 60); // Returns minutes
};