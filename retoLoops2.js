export function solution(car) {
    if (car.licensePlate === undefined || car.licensePlate === null) {
      car.drivingLicense = false;
      return car;
    } else {
      car.drivingLicense = true;
      return car;
    }
  }
  
  // Prueba 1
  solution({
    color: 'red',
    brand: 'Kia',
  });
  
  // Prueba 2
  solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });
  
  // Prueba 3
  solution({ licensePlate: 'RGB255' });