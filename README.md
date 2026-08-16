# 🚀 User Signup System — Low Level Design (LLD)

A **TypeScript-based Low Level Design** of a modular and extensible User Signup System that supports multiple authentication providers such as **Manual (Email/Password), Google, Microsoft, and Meta**.

The project demonstrates how common design patterns can be combined to build a scalable authentication workflow while keeping responsibilities clean and extensible.

> **Design Patterns:** Strategy • Factory • Repository • Singleton

---

## 📖 Class Diagram

> Save the class diagram image inside `assets/class-diagram.png`

![Class Diagram](./assets/class-diagram.png)

---

## ✨ Features

* Multiple signup methods (Manual, Google, Microsoft & Meta)
* Strategy Pattern for provider-specific verification
* Factory Pattern for selecting verification strategies
* Repository layer for database abstraction
* Singleton Database manager
* Authentication service for token generation
* Easily extensible for new OAuth providers
* Clean separation of responsibilities (SOLID-friendly)

---

## 🏗️ Architecture

```text
                Signup Client
                      │
                      ▼
                Signup Service
                      │
                      ▼
         VerifyUserStrategyFactory
                      │
      ┌───────────────┼────────────────┐
      │               │                │
   Manual         Google         Microsoft
   Strategy       Strategy        Strategy
      │               │                │
      └───────────────┼────────────────┘
                      ▼
               Verified User
                      │
                      ▼
               User Repository
                      │
                      ▼
                  Database
                      │
                      ▼
          Authentication Service
                      │
                      ▼
                 Auth Token
```

---

## 🔄 Signup Flow

1. Client sends a signup request with the selected provider.
2. `SignupService` receives the request.
3. Factory returns the appropriate verification strategy.
4. Strategy validates/verifies the user.
5. Repository persists the verified user.
6. Authentication service generates an auth token.
7. Token is returned to the client.

---

## 🎯 Design Patterns Used

### Strategy Pattern

Encapsulates different verification mechanisms for each signup provider.

**Implementations:**

* Manual Strategy
* Google Strategy
* Microsoft Strategy
* Meta Strategy

Adding a new provider requires creating a new strategy without modifying existing ones.

### Factory Pattern

Responsible for selecting and creating the appropriate verification strategy based on the signup method.

This removes conditional logic from the service layer.

### Repository Pattern

Acts as an abstraction over the database layer and isolates data access from business logic.

### Singleton Pattern

Ensures a single shared database manager instance across the application.

---

## 📂 Project Structure

```text
src/
│
├── auth/
│   └── AuthenticationService.ts
│
├── database/
│   ├── Database.ts
│   └── UserRepository.ts
│
├── factory/
│   └── VerifyUserStrategyFactory.ts
│
├── models/
│   ├── User.ts
│   ├── SignupRequest.ts
│   └── VerifiedUser.ts
│
├── strategy/
│   ├── VerifyUserStrategy.ts
│   ├── VerifyUserStrategyManual.ts
│   ├── VerifyUserStrategyGoogle.ts
│   ├── VerifyUserStrategyMicrosoft.ts
│   └── VerifyUserStrategyMeta.ts
│
├── service/
│   └── SignupService.ts
│
└── index.ts
```

---

## ➕ Extending the System

Adding a new provider (e.g. Apple) requires only three steps:

1. Create `VerifyUserStrategyApple`
2. Register it inside `VerifyUserStrategyFactory`
3. Add `APPLE` to the signup method enum

No changes are required in the business workflow, following the **Open/Closed Principle**.

---

## 💡 Key Learning Outcomes

* Applying Strategy for interchangeable behaviors
* Using Factory to eliminate conditional object creation
* Separating business logic from persistence using Repository
* Managing shared resources with Singleton
* Designing an extensible authentication workflow using SOLID principles

---

## 🛠️ Tech Stack

* **Language:** TypeScript
* **Architecture:** Object-Oriented Design
* **Patterns:** Strategy, Factory, Repository, Singleton

---

## 📌 Future Improvements

* Password hashing (bcrypt/argon2)
* JWT refresh token support
* Email verification
* Apple & GitHub OAuth providers
* Dependency Injection
* Unit testing with Jest

---

### ⭐ If you found this project useful, consider giving it a star!
