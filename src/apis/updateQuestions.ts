

export const updateQuestionFetch = async (name:string, _id: string, questions1:Array<any>, questions2:Array<any>) => {
    
    const response = await fetch(`http://localhost:8080/api/v1/questions`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          questions1: questions1,
          questions2: questions2
        })
      })
      if (response.ok) { // if HTTP-status is 200-299
          // get the response body (the method explained below)
          let data = await response.json();
          console.log(data);
          return data;
      } else {
      alert("HTTP-Error: " + response.status);
      }

    return 'Average'
}