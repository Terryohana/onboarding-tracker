export function* completeTaskSaga() {
  try {

    console.log('Would perform task update on backend here');

    // Update can be performed here
    // If update would unsuccessful we would change flag back and show error to user

    yield;

  } catch (error) {
    console.error(error);
  }
}
