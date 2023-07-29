/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise.then(
    (resolvedValue) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    },
    (rejectedReason) => {
      console.log('Got a response from the API');
      return new Error();
    },
  );
}
