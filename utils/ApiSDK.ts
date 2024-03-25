const apiUrl = process.env.NEXT_PUBLIC_API_URL;

import axios from "axios";

export async function Login(username: string, password: string) {
    try {
        const response = await axios.post(apiUrl + "/auth/login", { username, password });

        // Handle response
        if (response.status == 200) {
          // Successful login
          console.log('Login successful');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('tokenExpires', response.data.tokenExpires);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          localStorage.setItem('refreshExpires', response.data.refreshExpires);

          return response.data
        } else {
          // Failed login
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
}