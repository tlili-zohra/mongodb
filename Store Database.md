# **Store Database**

## **Real-Life Problem Statement**

A small **electronics store** wants to **digitize its inventory and sales system** to keep track of products, customers, and sales. Currently, they manage everything manually, which leads to **inventory confusion, lost customer orders, and difficulty tracking purchases**. The goal is to implement a **MongoDB database** to store products, customers, and sales efficiently.

## **Objective**

Create a MongoDB database for an electronics store that manages **products, customers, and sales** efficiently. The database should allow CRUD operations on these entities to facilitate inventory and customer transactions.

## **Data Structure with Sample Data**

### **Products Collection**

```json
{
  "_id": 1,
  "name": "Laptop",
  "brand": "Dell",
  "price": 1200.99,
  "stock": 5
}
```

```json
{
  "_id": 2,
  "name": "Smartphone",
  "brand": "Samsung",
  "price": 799.99,
  "stock": 10
}
```

### **Customers Collection**

```json
{
  "_id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "123-456-7890"
}
```

```json
{
  "_id": 2,
  "name": "Jane Smith",
  "email": "janesmith@example.com",
  "phone": "987-654-3210"
}
```

### **Sales Collection**

```json
{
  "_id": 1,
  "customer_id": 1,
  "product_id": 1,
  "quantity": 2,
  "total_price": 2401.98,
  "status": "Completed"
}
```

```json
{
  "_id": 2,
  "customer_id": 2,
  "product_id": 2,
  "quantity": 1,
  "total_price": 799.99,
  "status": "Pending"
}
```

## **CRUD Tasks with Example Data**

### **1. Create a new product**

Add a new product:

```json
{
  "_id": 3,
  "name": "Tablet",
  "brand": "Apple",
  "price": 499.99,
  "stock": 7
}
```

### **2. Read all available products**

Retrieve all products in the store.

### **3. Update the stock quantity of a product**

Reduce the stock of "Laptop" by 2 after a sale.

### **4. Delete a discontinued product**

Remove "Tablet" from the database.

### **5. Create a new customer**

Add a new customer:

```json
{
  "_id": 3,
  "name": "Michael Brown",
  "email": "michaelbrown@example.com",
  "phone": "555-678-1234"
}
```

### **6. Read customer details by email**

Fetch the details of "johndoe@example.com".

### **7. Update a customer’s phone number**

Update John Doe's phone number to "321-654-0987".

### **8. Delete a customer account**

Remove "janesmith@example.com" from the database.

### **9. Create a new sale**

Store a new sale:

```json
{
  "_id": 3,
  "customer_id": 1,
  "product_id": 2,
  "quantity": 3,
  "total_price": 2399.97,
  "status": "Pending"
}
```

### **10. Retrieve all sales of a customer**

Fetch all sales made by "johndoe@example.com".

### **11. Find products below a certain stock level**

Retrieve all products with stock less than 5.

### **12. Calculate total revenue from completed sales**

Sum up the `total_price` field of all sales where `status` is "Completed".

### **13. Update multiple products' prices**

Increase the price of all "Samsung" products by 10%.

### **14. Retrieve customers who have made purchases above a certain amount**

Find customers whose total purchases exceed $1000.

### **15. Get the most sold product**

Find the product with the highest total quantity sold.

### **16. Retrieve customers who haven't made a purchase**

Find all customers who do not have any sales records.

### **17. Retrieve sales details along with customer and product information**

Join the sales, customers, and products collections to display a complete sales report.

### **18. Implement a loyalty points system**

Update customers to include a `loyalty_points` field that has 0 default value.
