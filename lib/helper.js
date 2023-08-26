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


export const getUsers=async(userId)=>{
    const response=await fetch (`${BASE_URL}/api/users/indexes/${userId}`)
    const json =await response.json()

    if (json)return json;
    return{}
}

//posting new user
export async function addUser(formData){
  try {
    
    const Options={
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(formData)

    }
    const response=await fetch(`${BASE_URL}/api/users/indexes`,Options);
    const json=await response.json()

    return json;
  } catch (error) {
    return error
  }
}

//Update user
export async function updateUsers(userId,formData){
  const Options={
    method:'PUT',
    headers:{'Content-Type':"application/json"},
    body:JSON.stringify(formData)

  }
  const response=await fetch(`${BASE_URL}/api/users/indexes${userId}`,Options);
    const json=await response.json()
    return json
}

//Delete User
export async function deleteUsers(userId){
  const Options={
    method:'DELETE',
    headers:{'Content-Type':"application/json"},

  }
  const response=await fetch(`${BASE_URL}/api/users/indexes${userId}`,Options);
    const json=await response.json()
    return json
}