import uploadPhoto from './5-photo-reject';
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser and await their results
    const photo = await uploadPhoto('profile.jpg');
    const user = await createUser('Guillaume', 'Salva');
    // Return the results in the desired format
    return {
      photo,
      user
    };
  } catch (error) {
    // Return an object with null values if any of the promises fail
    return {
      photo: null,
      user: null
    };
  }
}

