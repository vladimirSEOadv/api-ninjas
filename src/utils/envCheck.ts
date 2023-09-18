export const envCheck = () => {
  try {
    console.log(import.meta.env.VITE_TEST_ENV);
  } catch (error) {
    console.log(error);
    console.log("ENV NOT FOUND");
  }
};
