export interface BlogPostType {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  excerpt: string;
  content: string;
  tags: string[];
  coverImage: string;
  readingTime: string;
}

export const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "Building a Modern Web Application with Next.js and Tailwind CSS",
    slug: "building-modern-web-application-nextjs-tailwind",
    date: "2024-03-15",
    author: {
      name: "Jane Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "Learn how to create a high-performance web application using Next.js and Tailwind CSS, with a focus on best practices and modern development techniques.",
    content: `
# Building a Modern Web Application with Next.js and Tailwind CSS

Next.js has emerged as one of the most powerful React frameworks for building modern web applications. Combined with the utility-first approach of Tailwind CSS, developers can create stunning, high-performance websites with exceptional developer experience.

## Why Next.js?

Next.js provides several key features that make it an excellent choice for modern web development:

- **Server-side rendering (SSR)** and **static site generation (SSG)** out of the box
- **Automatic code splitting** for faster page loads
- **Built-in API routes** for backend functionality
- **Image optimization** via the \`Image\` component
- **Fast refresh** for a seamless development experience

## The Power of Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in web applications:

- **Utility-first approach** for rapid UI development
- **Highly customizable** design system
- **Small production bundles** with PurgeCSS integration
- **Responsive design** made simple
- **Dark mode** support

## Setting Up Your Project

First, create a new Next.js project with Tailwind CSS:

\`\`\`bash
npx create-next-app my-project --typescript
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Configure your tailwind.config.js:

\`\`\`js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Building Components

With Next.js and Tailwind CSS set up, you can start building components:

\`\`\`jsx
// components/Button.tsx
export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  );
}
\`\`\`

## Conclusion

Next.js and Tailwind CSS form a powerful combination for modern web development. By leveraging the strengths of both technologies, you can build fast, responsive, and visually appealing web applications with an excellent developer experience.
    `,
    tags: ["Next.js", "Tailwind CSS", "React", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1200&h=630&fit=crop&q=80",
    readingTime: "8 min read"
  },
  {
    id: 2,
    title: "Understanding React Server Components in Next.js 13",
    slug: "understanding-react-server-components-nextjs-13",
    date: "2024-02-22",
    author: {
      name: "Jane Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "Dive into React Server Components and understand how they're implemented in Next.js 13 to improve performance and developer experience.",
    content: `
# Understanding React Server Components in Next.js 13

React Server Components represent a paradigm shift in how we build React applications. Next.js 13 has fully embraced this technology, offering significant performance improvements and a better developer experience.

## What Are React Server Components?

React Server Components allow developers to render components on the server, reducing the JavaScript bundle size sent to the client. This results in faster page loads and improved performance, especially for data-heavy applications.

Key benefits include:

- **Reduced client-side JavaScript**
- **Direct access to backend resources**
- **Automatic code splitting**
- **Improved initial page load**

## Server Components vs. Client Components

In Next.js 13, components are server components by default. This means they:

- Run only on the server
- Have access to backend resources
- Cannot use hooks or browser APIs
- Don't increase the client JavaScript bundle

Client components are explicitly marked with the "use client" directive and:

- Run on both the client and server
- Can use React hooks, event handlers, and browser APIs
- Are hydrated on the client
- Increase the JavaScript bundle size

## Using Server Components in Next.js 13

Here's how to use Server Components effectively:

\`\`\`jsx
// app/page.tsx (Server Component)
import { getDatabaseData } from '@/lib/data';
import ClientCounter from './ClientCounter';

async function ServerComponent() {
  // Direct database access
  const data = await getDatabaseData();

  return (
    <div>
      <h1>Server-rendered data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      {/* Include a client component when needed */}
      <ClientCounter />
    </div>
  );
}

export default ServerComponent;
\`\`\`

\`\`\`jsx
// app/ClientCounter.tsx
"use client";

import { useState } from 'react';

export default function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Best Practices

When working with React Server Components:

1. **Default to server components** unless you need client-side interactivity
2. **Push interactivity down the component tree** to minimize client JavaScript
3. **Use "use client" boundaries strategically** to optimize performance
4. **Leverage server actions** for form submissions and data mutations

## Conclusion

React Server Components in Next.js 13 provide a powerful new way to build performant web applications. By understanding the differences between server and client components and when to use each, you can create faster, more efficient React applications.
    `,
    tags: ["React", "Next.js", "Server Components", "Web Development"],
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=630&fit=crop&q=80",
    readingTime: "10 min read"
  },
  {
    id: 3,
    title: "Build a REST API with Node.js, Express, and MongoDB",
    slug: "build-rest-api-nodejs-express-mongodb",
    date: "2024-01-18",
    author: {
      name: "Jane Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "A comprehensive guide to building a RESTful API from scratch using Node.js, Express, and MongoDB with best practices for production deployment.",
    content: `
# Build a REST API with Node.js, Express, and MongoDB

Creating a robust RESTful API is a fundamental skill for backend developers. This guide will walk you through building a production-ready API using Node.js, Express, and MongoDB.

## Setting Up Your Project

First, initialize your project and install the necessary dependencies:

\`\`\`bash
mkdir api-project
cd api-project
npm init -y
npm install express mongoose dotenv cors helmet morgan
npm install --save-dev nodemon typescript @types/express @types/node
\`\`\`

## Project Structure

A well-organized project structure improves maintainability:

\`\`\`
/api-project
  /src
    /controllers    # Route controllers
    /models         # Mongoose models
    /routes         # Express routes
    /middleware     # Custom middleware
    /services       # Business logic
    /utils          # Utility functions
    /config         # Configuration files
    app.ts          # Express app setup
    server.ts       # Server entry point
  .env              # Environment variables
  package.json
  tsconfig.json
\`\`\`

## Connecting to MongoDB

Create a database connection using Mongoose:

\`\`\`typescript
// src/config/database.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
\`\`\`

## Creating Models

Define your data models using Mongoose schemas:

\`\`\`typescript
// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
\`\`\`

## Setting Up Routes and Controllers

Organize your API endpoints with routes and controllers:

\`\`\`typescript
// src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/User';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// More controller methods...
\`\`\`

\`\`\`typescript
// src/routes/userRoutes.ts
import express from 'express';
import { getUsers, getUserById } from '../controllers/userController';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.get('/', authMiddleware, getUsers);
router.get('/:id', authMiddleware, getUserById);

export default router;
\`\`\`

## Error Handling

Implement centralized error handling:

\`\`\`typescript
// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  res.status(500).json({
    message: 'Something went wrong',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
};
\`\`\`

## Putting It All Together

\`\`\`typescript
// src/app.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error handling
app.use(errorHandler);

export default app;
\`\`\`

\`\`\`typescript
// src/server.ts
import app from './app';
import connectDB from './config/database';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
\`\`\`

## Conclusion

You now have a solid foundation for a Node.js REST API with Express and MongoDB. This architecture is scalable, maintainable, and follows best practices for production applications. As you expand your API, continue to focus on error handling, validation, authentication, and testing to ensure reliability and security.
    `,
    tags: ["Node.js", "Express", "MongoDB", "API", "Backend"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop&q=80",
    readingTime: "12 min read"
  },
  {
    id: 4,
    title: "Mastering TypeScript: Advanced Types and Patterns",
    slug: "mastering-typescript-advanced-types-patterns",
    date: "2023-12-10",
    author: {
      name: "Jane Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&crop=faces&fit=crop&q=80"
    },
    excerpt: "Take your TypeScript skills to the next level by exploring advanced type features, design patterns, and real-world examples.",
    content: `
# Mastering TypeScript: Advanced Types and Patterns

TypeScript has become the language of choice for many developers building complex JavaScript applications. This article explores advanced TypeScript features that can help you write more robust, maintainable code.

## Advanced Type Features

### Conditional Types

Conditional types allow you to create types that depend on type conditions:

\`\`\`typescript
type IsArray<T> = T extends any[] ? true : false;

// Usage
type CheckString = IsArray<string>;  // false
type CheckArray = IsArray<number[]>; // true
\`\`\`

### Mapped Types

Mapped types allow you to transform the properties of an existing type:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Usage
interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;
// Equivalent to: { readonly id: number; readonly name: string; }
\`\`\`

### Template Literal Types

TypeScript 4.1 introduced template literal types, which combine literals through concatenation:

\`\`\`typescript
type Direction = 'top' | 'right' | 'bottom' | 'left';
type Margin = \`margin-\${Direction}\`;

// Margin will be: 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left'
\`\`\`

## Utility Types

TypeScript provides several built-in utility types that can help you manipulate types:

### Partial and Required

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// All properties are optional
type PartialUser = Partial<User>;

// All properties are required (remove optional flags)
type RequiredUser = Required<User>;
\`\`\`

### Pick and Omit

\`\`\`typescript
// Only include specified properties
type UserBasicInfo = Pick<User, 'id' | 'name'>;

// Exclude specified properties
type UserWithoutEmail = Omit<User, 'email'>;
\`\`\`

### Record

\`\`\`typescript
// Create an object type with specific key and value types
type UserRoles = Record<string, 'admin' | 'editor' | 'viewer'>;

const roles: UserRoles = {
  'user1': 'admin',
  'user2': 'editor'
};
\`\`\`

## Advanced Patterns

### The Builder Pattern

The builder pattern can be elegantly implemented in TypeScript:

\`\`\`typescript
class RequestBuilder {
  private url: string = '';
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET';
  private headers: Record<string, string> = {};
  private body: any = null;

  setUrl(url: string): RequestBuilder {
    this.url = url;
    return this;
  }

  setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE'): RequestBuilder {
    this.method = method;
    return this;
  }

  setHeader(key: string, value: string): RequestBuilder {
    this.headers[key] = value;
    return this;
  }

  setBody(body: any): RequestBuilder {
    this.body = body;
    return this;
  }

  build(): Request {
    return new Request(this.url, {
      method: this.method,
      headers: this.headers,
      body: this.body ? JSON.stringify(this.body) : null
    });
  }
}

// Usage
const request = new RequestBuilder()
  .setUrl('https://api.example.com/data')
  .setMethod('POST')
  .setHeader('Content-Type', 'application/json')
  .setBody({ name: 'John' })
  .build();
\`\`\`

### The Factory Pattern

Factories can help create objects with complex initialization:

\`\`\`typescript
interface Product {
  name: string;
  price: number;
}

class ProductFactory {
  static createBook(name: string, price: number, author: string): Product & { author: string } {
    return { name, price, author };
  }

  static createElectronic(name: string, price: number, warranty: number): Product & { warranty: number } {
    return { name, price, warranty };
  }
}

// Usage
const book = ProductFactory.createBook('TypeScript Guide', 29.99, 'Jane Developer');
const laptop = ProductFactory.createElectronic('Laptop', 999.99, 24);
\`\`\`

## Type-Safe APIs

### Zod for Runtime Validation

Combining TypeScript with Zod provides both compile-time and runtime type safety:

\`\`\`typescript
import { z } from 'zod';

// Define a schema
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(18).optional()
});

// Infer TypeScript type from schema
type User = z.infer<typeof UserSchema>;

// Validate at runtime
function processUserData(data: unknown): User {
  return UserSchema.parse(data); // Throws if invalid
}

try {
  const user = processUserData({
    id: 1,
    name: 'John',
    email: 'invalid-email' // Will throw validation error
  });
} catch (error) {
  console.error('Validation failed:', error);
}
\`\`\`

## Conclusion

Mastering these advanced TypeScript features and patterns can significantly improve your development experience and code quality. TypeScript's type system is one of the most powerful available in mainstream programming languages, offering a balance between static typing and flexibility.

As you incorporate these techniques into your projects, you'll find that they not only catch errors early but also serve as documentation and design tools, making your codebase more maintainable and easier to reason about.
    `,
    tags: ["TypeScript", "JavaScript", "Web Development", "Programming"],
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=630&fit=crop&q=80",
    readingTime: "15 min read"
  }
];
