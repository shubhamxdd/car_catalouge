export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RapidAPI_Host,
  };

  // "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
  // { headers: headers }
  const res = await fetch("http://localhost:3001/car_details");

  const result = await res.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 150;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
