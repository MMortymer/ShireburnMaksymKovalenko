export function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  if (isNaN(birthDate)) return false;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function birthdayToAgeString(dateOfBirth) {
  const age = calculateAge(dateOfBirth);
  return typeof age === 'number' ? age + ' y.o.' : '?' + ' y.o.';
}