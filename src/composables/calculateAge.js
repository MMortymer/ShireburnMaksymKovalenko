// calculateAge.js

export function useCalculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  if (isNaN(birthDate)) return 'Invalid Date';

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}