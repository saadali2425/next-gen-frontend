git clone https://github.com/saadali2425/next-gen-frontend.git
cd next-gen-frontend
Install Angular CLI (if not already installed)

bash
Copy code
npm install -g @angular/cli
Install Dependencies

bash
Copy code
npm install
Update Environment Variables

Update the src/environments/environment.ts file with your backend API URL, e.g.:

typescript
Copy code
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api/',
};
Start the Angular Development Server

bash
Copy code
ng serve
The frontend should now be running at http://localhost:4200/.