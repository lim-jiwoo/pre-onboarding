export const login = async (formData:{email: string; password: string}) => {
    try {
        const url = new URL('http://localhost:8080/users/login');
        // url.search = new URLSearchParams({email: formData.email, password: formData.password}).toString();
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({email: formData.email, password: formData.password}),
        });
        if (response.status === 200) {
            response = await response.json();
            return response.token;
        } else {
            response = await response.json();
            throw Error(response.details);
        }
    } catch(e) {
        alert(e);
    }
}

export const signup = async (formData:{email: string; password: string}) => {
    try {
        const url = new URL('http://localhost:8080/users/create');
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({email: formData.email, password: formData.password}),
        });
        if (response.status === 200) {
            response = await response.json();
            return response.token;
        } else {
            response = await response.json();
            throw Error(response.details);
        }
    } catch(e) {
        alert(e);
    }
}