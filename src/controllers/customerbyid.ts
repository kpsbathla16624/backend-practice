import { ObjectId } from "mongodb";

export async function getCustomerbyid(req: any, res: any) {
    try {
        const { db } = req.app;
        const{id} = req.query;
        if (!id) {
            res.status(404).json({ message: "id is required" });
        }
      
        const result = await db.collection('Customers').findOne(
         {   _id: new ObjectId(id)}
        );
       
        if (!result) {
            return res.status(404).json({ message: "No customers found" });
        }
  
       
        res.status(200).json({
            message: "Customer fetched",
            customers: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
  }
  