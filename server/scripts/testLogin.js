fetch('http://localhost:5000/api/users/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test69@example.com',
    password: '123456',
  }),
})
  .then(res => res.json())
  .then(data => console.log('Login Response:', data));