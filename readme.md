# API de Posts

This is a backend project developed with Node.js, Express, and Sequelize that allows managing a table of posts. Each post contains a title and content, and CRUD (Create, Read, Update, and Delete) operations can be performed on them.

## Tecnologías Utilizadas

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for Node.jsthat facilitates the creation of web applications.
- **Sequelize**: ORM (Object-Relational Mapping) for Node.jsthat allows interaction with SQL databases.

# Endpoints de la API de Posts

---

## 1. Obtener todos los posts 📜

- **Method**: `GET`
- **path**: `/posts`
- **Description**: Returns a list of all posts .

---

## 2. Obtener un post por ID 🔍

- **Method**: `GET`
- **path**: `/posts/:id`
- **Description**: Returns a specific post based on the provided ID.
- **Parameters**:
  - `id`:ID of the post to retrieve.

---

## 3. Create a New Post ✏️

- **Method**: `POST`
- **path**: `/posts`
- **Description**: Creates a new post.
- **Request Body**:
  ```json
  { 
    "title": "Post Title", 
    "content": "Post Content"
  }
---

## 4. Update an Existing Post 🔄

- **Method**: `PUT`
- **path**: `/posts/:id`
- **Description**: Updates an existing post in the database.
- **Parameters**:
  - **`id`**: ID of the post to update.
---

- **Request Body**:
  Send a JSON with the new title and content of the post:
  ```json
  {
    "title": "New Title", 
    "content": "New Content"
  }

## 5. Delete a Post 🗑️

- **Method**: `DELETE`
- **Path**: `/posts/:id`
- **Description**: Deletes a specific post from the database based on the provided ID
---

- **Parameters**:
  - **`id`**: 
    - **Type**: integer
    - **Description**: ID of the post you want to delete.

---


## installation

Follow these steps to set up the project on your local machine

1. **Clone the repository:**:
   ```bash
   git clone https://github.com/WayneJOLY/post-project-BackEnd.git
   cd repository_name