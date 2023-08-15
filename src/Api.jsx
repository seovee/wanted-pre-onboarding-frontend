const BASE_API_url = "https://www.pre-onboarding-selection-task.shop";

// Auth Signup(구현 완료 X)
export const signupAPI = async (email, password) => {
  const url = BASE_API_url;
  const signupData = {
    email,
    password,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  };
  try {
    const response = await fetch(`${url}/auth/signup`, requestOptions);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
