# 🌍 Ionic Mobile App – Country, Weather, and News Data Viewer

This project is a mobile application built with **Ionic Framework** that retrieves and displays **country**, **weather**, and **news** information using online APIs. I developed this project independently on my local machine, using GitHub for version control — with each commit reflecting meaningful progress.  
The application has been successfully tested in a **virtual machine environment**.

---

# 🏠 Home Page Features
- Displays my **student number** and a **settings** icon.
- Allows users to **search for a country** by entering its full name or part of its name.
- Provides a **Search** button to fetch country results.
- Offers navigation to the **Settings Page** via the settings icon.

---

# ⚙️ Settings Page
- Allows users to select the **unit of measurement** (e.g., Metric or Imperial).
- If no unit is previously selected, **"Metric"** is selected by default.
- Saves the user's preference for future sessions.

---

# 🌎 Countries Page
- Shows a list of countries that match the user's input.
- Data is retrieved live from the [restcountries.com](https://restcountries.com/) API.
- Each country entry provides two options:
  - **News**: Opens the News Page for the selected country.
  - **Weather**: Opens the Weather Page for the selected country.

---

# 📰 News Page
- Displays **latest news stories** for the selected country.
- News data is fetched from [newsdata.io](https://newsdata.io/).

---

# ⛅ Weather Page
- Displays **current weather data** based on the **latitude** and **longitude** of the selected country.
- Weather information is retrieved dynamically using online APIs.

---

# 🚀 How to Run This Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sujikm/Ionic-Mobile-App.git
