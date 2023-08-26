const BASE_URL = "http://localhost:3000";

export const getUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/indexes`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
