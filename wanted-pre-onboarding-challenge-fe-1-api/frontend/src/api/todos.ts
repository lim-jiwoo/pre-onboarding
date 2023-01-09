export const getTodos = async () => {
    try {
        const url = new URL('http://localhost:8080/todos');
        const token = localStorage.getItem('token') || '';
        let response = await fetch(url, {
            headers: {
                'Authorization': token,
            },
        });
        if (response.status === 200) {
            const { data } = await response.json();
            return data;
        } else {
          throw Error(response.statusText);
        }
    } catch(e) {
        alert(e);
    }
};

export const getTodoById = async (id:string) => {
    try {
        const url = new URL(`http://localhost:8080/todos/${id}`);
        const token = localStorage.getItem('token') || '';
        let response = await fetch(url, {
            headers: {
                'Authorization': token,
            },
        });
        if (response.status === 200) {
          const { data } = await response.json();
          return data;
        } else {
          throw Error(response.statusText);
        }
    } catch(e) {
        alert(e);
    }
};

export const createTodo = async (title:string, content:string) => {
    try {
        const url = new URL(`http://localhost:8080/todos`);
        const token = localStorage.getItem('token') || '';
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({title, content}),
        });
        if (response.status === 200) {
          const { data } = await response.json();
          return data;
        } else {
          throw Error(response.statusText);
        }
    } catch(e) {
        alert(e);
    }
};

export const updateTodo = async (id:string, title:string, content:string) => {
    try {
        const url = new URL(`http://localhost:8080/todos/${id}`);
        const token = localStorage.getItem('token') || '';
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({title, content}),
        });
        if (response.status === 200) {
          const { data } = await response.json();
          return data;
        } else {
          throw Error(response.statusText);
        }
    } catch(e) {
        alert(e);
    }
};

export const deleteTodo = async (id:string) => {
  try {
    const url = new URL(`http://localhost:8080/todos/${id}`);
    const token = localStorage.getItem('token') || '';
    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        },
    });
    if (response.status !== 200) {
      throw Error(response.statusText);
    }
  } catch(e) {
      alert(e);
  }
};
