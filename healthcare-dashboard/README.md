# Healthcare Dashboard

A modern, responsive healthcare dashboard built with Angular for managing patient information. This application provides doctors with an intuitive interface to view, search, and manage their patients' medical records.

## 📸 Screenshot

![Healthcare Dashboard](https://raw.githubusercontent.com/ADITYABHURAN/Moh/main/healthcare-dashboard/public/screenshot.png)

## ✨ Features

- **Patient Management**: View detailed patient information including medical history and appointments
- **Advanced Search**: Search patients by name, date of birth, and appointment date ranges
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional medical interface with intuitive navigation
- **Real-time Updates**: Dynamic patient cards with comprehensive medical information

## 🛠️ Tech Stack

- **Framework**: Angular 21.0.4
- **Language**: TypeScript
- **Styling**: SCSS with custom responsive design
- **Forms**: Reactive Forms
- **State Management**: RxJS Observables
- **Architecture**: Standalone Components (Modern Angular)

## 📂 Project Structure

```
healthcare-dashboard/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── patient.model.ts          # Patient interface
│   │   ├── services/
│   │   │   └── patient.service.ts        # Patient data service
│   │   ├── components/
│   │   │   ├── dashboard/                # Main dashboard component
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.scss
│   │   │   └── patient-card/             # Reusable patient card
│   │   │       ├── patient-card.component.ts
│   │   │       ├── patient-card.component.html
│   │   │       └── patient-card.component.scss
│   │   ├── app.ts
│   │   └── app.html
│   └── styles.scss
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v21 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ADITYABHURAN/Moh.git
cd Moh/healthcare-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200/`

The application will automatically reload when you modify source files.

## 🏗️ Building for Production

To build the project for production:

```bash
npm run build
```

Build artifacts will be stored in the `dist/healthcare-dashboard/browser` directory.

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Multi-column grid layout
- **Tablet**: 768px - 1024px - Adjusted grid layout
- **Mobile**: < 768px - Single column, stacked layout

## 🎨 Key Components

### Dashboard Component
- Header with personalized greeting
- Search functionality with Basic/Advanced tabs
- Reactive forms for patient search
- Scrollable patient list

### Patient Card Component
- Reusable component with @Input decorator
- Displays comprehensive patient information:
  - Personal details (Name, DOB, Sex, Residence)
  - Medical identifiers (MRN, ID Number, SSN)
  - Contact information (Phone, Email)
  - Medical details (Hospital, Department, Physician, Conditions)
  - Next appointment information
- Fully responsive with hover effects

## 🔧 Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Generate new component
ng generate component component-name
```

## 📦 Deployment

This project is configured for deployment on Vercel. The `vercel.json` configuration file is included for proper Angular routing.

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set Root Directory to `healthcare-dashboard`
3. Vercel will automatically detect Angular and deploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Aditya Bhuran**
- GitHub: [@ADITYABHURAN](https://github.com/ADITYABHURAN)

## 🙏 Acknowledgments

- Built with [Angular CLI](https://github.com/angular/angular-cli)
- UI/UX design inspiration from modern healthcare applications
- Avatar images from [Pravatar](https://pravatar.cc)

---

For more information on using the Angular CLI, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
