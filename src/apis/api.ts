

export const createUsersFetch = async (user: string) => {
  
    const response = await fetch(`http://localhost:8080/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user
      })
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let {data} = await response.json();
        console.log(data);
        return data.user;
    } else {
    alert("HTTP-Error: " + response.status);
    }

  
};