# MongoDB CRUD and Aggregation Tasks

## Problem Statement

You are working as a database administrator for an online bookstore. Your task is to manage the database of books, customers, and orders efficiently using MongoDB. Your goal is to implement CRUD operations and perform aggregation queries to extract useful insights.

---

## Collections and Sample Data

### Books Collection

Each book should have the following fields:

- `title` (String)
- `author` (String)
- `category` (String)
- `price` (Number)
- `available` (Boolean)
- `publishedDate` (Date)

**Sample Data:**

```json
{
  "_id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "category": "Classic Literature",
  "price": 10.99,
  "available": true,
  "publishedDate": "1925-04-10"
}
```

### Customers Collection

Each customer should have the following fields:

- `firstName` (String)
- `lastName` (String)
- `email` (String)
- `membership` (String: "Gold", "Silver", "Bronze")
- `registeredDate` (Date)

**Sample Data:**

```json
{
  "_id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "membership": "Gold",
  "registeredDate": "2020-05-15"
}
```

### Orders Collection

Each order should have the following fields:

- `customerId` (Number referencing `customers` collection)
- `orderDate` (Date)
- `items` (Array of books ordered)
  - `bookId` (Number referencing `books` collection)
  - `quantity` (Number)
  - `price` (Number)
- `status` (String: "Pending", "Completed", "Canceled")

**Sample Data:**

```json
{
  "_id": 1,
  "customerId": 1,
  "orderDate": "2023-01-15",
  "items": [
    {
      "bookId": 1,
      "quantity": 2,
      "price": 10.99
    }
  ],
  "status": "Completed"
}
```

---

## Tasks

### **CRUD Operations**

1. **Create Operations**
   - - Insert one book into the `books` collection with the following data:

```json
{
  "_id": 2,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "category": "Fiction",
  "price": 12.99,
  "available": true,
  "publishedDate": "1960-07-11"
}
```

- Insert one customer into the `customers` collection with the following data:

  ```json
  {
    "_id": 2,
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com",
    "membership": "Silver",
    "registeredDate": "2021-08-22"
  }
  ```

- Insert one order into the `orders` collection with the following data:
  ```json
  {
    "_id": 2,
    "customerId": 2,
    "orderDate": "2024-02-15",
    "items": [
      {
        "bookId": 2,
        "quantity": 1,
        "price": 12.99
      }
    ],
    "status": "Pending"
  }
  ```

2. **Read Operations**

   - Retrieve all books written by Harper Lee.
   - Find all orders placed by a John Doe using his id.
   - Get all available books sorted by price in descending order.

3. **Update Operations**

   - add 5$ to the price of the book The Great Gatsby .
   - Update all order’s status from "Pending" to "Completed".
   - Update the book To Kill a Mockingbird to unavailable.

4. **Delete Operations**
   - Remove a book from the collection if it's no longer available.
   - Delete all orders that has been Completed.

---

### **Aggregation Tasks**

1. **Calculate Total Revenue from Completed Orders** - Sum the revenue of all completed orders by multiplying the quantity of each book by its price.
2. **Find Average Book Price per Category** - Calculate the average price of books in each category and count the number of books in each.
3. **Count Orders per Membership Type** - Group orders by customer membership type (Gold, Silver, Bronze) and count how many orders each type has placed.
4. **Find the Top 3 Best-Selling Books** - Rank the top 3 books based on total quantity sold across all orders.
5. **Find the Most Expensive Book**: - Identify the book with the highest price in the collection.
6. **Count the Number of Books in Each Category**: - Count how many books exist in each category.
7. **Total Quantity Sold per Book**: - Calculate the total quantity ordered for each book.
8. **Find Books Published After 2000**: - Retrieve books published after the year 2000.
9. **Count Orders per Customer**: - Count how many orders each customer has placed.
