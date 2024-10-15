export async function getCustomer(req: any, res: any) {
  try {
      const { db } = req.app;
      
      // Fetch all customers from the 'Customers' collection
      const result = await db.collection('Customers').find().toArray();
     
      if (result.length === 0) {
          return res.status(404).json({ message: "No customers found" });
      }

     
      res.status(200).json({
          message: "Customers fetched",
          customers: result,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }
}
