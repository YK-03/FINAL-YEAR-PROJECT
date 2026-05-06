# 🍱 SharePlate

> **Share a Plate, Change a Life**  
> A community-driven food rescue platform connecting food donors with recipients to reduce food waste and help communities in need.

---

## 📌 Overview

**SharePlate** is a full-stack food donation platform designed to bridge the gap between **surplus food** and **people who need it**.

The platform allows **donors** to post excess food and enables **verified recipients/community organizations** to discover, claim, and coordinate pickups efficiently through a clean and real-time dashboard experience.

Instead of letting edible food go to waste, SharePlate helps redirect it toward meaningful impact.

---

## ✨ Key Features

- 🍲 **Food Donation Posting**  
  Donors can upload surplus food details including quantity and pickup location.

- 📍 **Recipient Discovery System**  
  Recipients can browse nearby available donations through an interactive map interface.

- 🤝 **Real-Time Claim Workflow**  
  Recipients can instantly claim donations and track pickup status.

- 🗺️ **Live Route Tracking with OSRM**  
  Integrated **OSRM (Open Source Routing Machine)** for route generation and delivery path visualization between donor and recipient locations.

- 🛰️ **Interactive Maps**  
  Real-time location visualization using **Leaflet + OpenStreetMap**.

- 🔐 **Role-Based Authentication**  
  Separate dashboards and access control for donors, recipients, and admins.

- ✅ **Admin Verification System**  
  User verification ensures platform trust and authenticity.

- 📊 **Dashboard Analytics**  
  Track claims, deliveries, available meals, and activity updates.

- 📱 **Responsive Modern UI**  
  Clean and accessible interface optimized for usability.

---

# 🖼️ Application Preview

## 🌐 Landing Page

![Landing Page](./public/assets/shareplate-home.jpg)

---

## 🍲 Donor Dashboard

Features:
- Publish food donations
- Manage active donations
- View pickup locations
- Real-time activity updates

![Donor Dashboard](./public/assets/donor-dashboard.png)

---

## 📍 Recipient Dashboard

Features:
- Browse nearby meals
- Claim available food
- Track deliveries
- View live pickup routes

![Recipient Dashboard](./public/assets/recipient-dashboard.png)

---

# 🔄 Platform Workflow

```text
1. Donor uploads surplus food
        ↓
2. Recipients browse nearby donations
        ↓
3. Recipient claims donation
        ↓
4. OSRM generates optimized route
        ↓
5. Pickup is coordinated
        ↓
6. Food gets delivered successfully
        ↓
7. Donation marked completed
