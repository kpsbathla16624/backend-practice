export async function createCustomer(req: any, res: any) {
    try {
        const { db } = req.app;
        const { name, email, phone, address } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }

        const existing = await db.collection('Customers').findOne({
            email: email.toLowerCase()
        });

        if (existing) {
            return res.status(400).json({ message: "Customer with this email already exists" });
        }

        const result = await db.collection('Customers').insertOne({
            name,
            email,
            phone,
            address
        });

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
