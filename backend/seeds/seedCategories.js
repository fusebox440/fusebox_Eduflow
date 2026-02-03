import mongoose from 'mongoose';
import Category from '../models/category.js';
import dotenv from 'dotenv';

dotenv.config();

const seedCategories = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");

    // Clear existing categories (optional)
    // await Category.deleteMany({});

    const categories = [
      {
        name: "Web Development",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack web developer"
      },
      {
        name: "Mobile Development",
        description: "Master iOS, Android, and cross-platform mobile app development with React Native and Flutter"
      },
      {
        name: "Data Science",
        description: "Learn data analysis, machine learning, Python, SQL and work with real-world datasets"
      },
      {
        name: "Cloud & DevOps",
        description: "Master AWS, Azure, Docker, Kubernetes and modern cloud infrastructure deployment"
      },
      {
        name: "UI/UX Design",
        description: "Learn design principles, Figma, prototyping and create amazing user experiences"
      }
    ];

    // Insert categories
    const result = await Category.insertMany(categories);
    console.log(`✅ Successfully created ${result.length} categories:`);
    result.forEach((cat, index) => {
      console.log(`${index + 1}. ${cat.name} - ${cat.description}`);
    });

    // Close connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
};

seedCategories();
