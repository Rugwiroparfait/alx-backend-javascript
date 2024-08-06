import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Use Promise.all to handle both promises
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // Destructure the responses to get the relevant data
      const { body: photoBody } = photoResponse;
      const { body: userBody } = userResponse;
      // Log the details as specified
      console.log(`${photoBody} ${userBody.firstName} ${userBody.lastName}`);
    })
    .catch(() => {
      // Handle any error that occurs during the promise resolution
      console.log('Signup system offline');
    });
}

