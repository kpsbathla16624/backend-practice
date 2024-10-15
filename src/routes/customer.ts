import { createCustomer } from "../controllers/createcustomer";
import { getCustomerbyid } from "../controllers/customerbyid";
import { getCustomer } from "../controllers/getcustomer";


const express  = require('express');

const router = express.Router();



router.post('/addcustomers', createCustomer);
router.get('/getcustomers', getCustomer);
router.get('/getcustomersbyid', getCustomerbyid);
module.exports = router;