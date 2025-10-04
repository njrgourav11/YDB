# Admin Dashboard Documentation

## Overview
The YDB Admin Dashboard is a comprehensive content management system that allows administrators to manage blogs, research papers, and science page content dynamically.

## Features

### 1. Blog Management
- **Create Blog Posts**: Add new blog posts with title, content, excerpt, author, category, and images
- **Edit Blog Posts**: Modify existing blog posts
- **Delete Blog Posts**: Remove blog posts from the system
- **Publish/Draft**: Control publication status of blog posts
- **Categories**: Organize blogs by categories (PCOS, Perimenopause, Wellness, Nutrition, Lifestyle)

### 2. Research Paper Management
- **Add Research Papers**: Include title, journal, year, participants, duration, key findings
- **Status Tracking**: Track papers as Draft, In Review, or Published
- **Category Organization**: Organize papers by research areas
- **Author Management**: Track multiple authors per paper
- **Abstract Storage**: Store detailed abstracts for each paper

### 3. Science Content Management
- **Research Areas**: Manage research focus areas with studies and participant counts
- **Team Members**: Add and manage research team member profiles
- **Dynamic Icons**: Choose from various icons for research areas
- **Color Themes**: Customize color schemes for different research areas

## Access Control
- **Authentication Required**: Users must be logged in to access admin features
- **Admin Route Protection**: Additional security layer for admin dashboard access
- **User Menu Integration**: Admin dashboard accessible from user menu when logged in

## Database Structure

### Collections Used:
1. **blogs**: Stores blog post data
2. **research-papers**: Stores research paper information
3. **research-areas**: Stores research focus areas
4. **team-members**: Stores team member profiles
5. **newsletter**: Stores newsletter subscriptions

## Dynamic Content Integration

### Science Page
- Fetches research areas from Firebase
- Displays clinical studies from research papers collection
- Shows team members from team-members collection
- Falls back to static data if Firebase is unavailable

### Blog Page
- Fully dynamic blog listing from Firebase
- Category filtering based on database content
- Search functionality across titles, excerpts, and tags
- Newsletter subscription integration

### Research Papers Page
- Dedicated page for displaying published research
- Filtering by category and status
- Download links for published papers
- Research impact statistics

## Getting Started

### Prerequisites
- Firebase project setup
- Authentication enabled
- Firestore database configured

### Access the Admin Dashboard
1. Log in to your account
2. Click on your user menu in the header
3. Select "Admin Dashboard"
4. Navigate between different management sections

### Creating Content
1. **Blog Posts**: Use the Blog Manager to create and publish articles
2. **Research Papers**: Add published studies and ongoing research
3. **Science Content**: Manage research areas and team member profiles

## Security Features
- Protected routes requiring authentication
- Admin-specific access controls
- Form validation and error handling
- Secure Firebase integration

## Future Enhancements
- Role-based access control
- Image upload functionality
- Rich text editor for blog content
- Analytics and reporting
- Bulk operations for content management

## Technical Stack
- React with TypeScript
- Firebase Firestore for database
- Firebase Authentication
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons