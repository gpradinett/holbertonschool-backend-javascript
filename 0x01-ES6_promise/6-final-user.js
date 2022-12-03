import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((res) => {
      const resulList = [];

      resulList.forEach((res) => {
        if (res.status === 'fulfilled') {
          resulList.push(res);
        } else {
          resulList.push({ status: res.status, value: `${res.reason}` });
        }
      });
      return resulList;
    });
}
