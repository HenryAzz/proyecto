import { Response, Request, Router, response } from "express";
import { Property } from "../models/Property";
import { json } from "../../jsonejemplo";
const router = Router();


router.get("/", async (req: Request, res: Response) => {
     
    try {
      const db = await Property.findAll();
      if (db.length > 1){
          return res.json(db);

      }
   const props = json.map(async(e)=>{
    console.log(e)
    await Property.create(e)})
   res.status(200).json(props)
    } catch (error) {
    }
  });
  
router.post("/", async (req: Request, res: Response) => {
 
  try {
    const db = await Property.create(req.body);
    res.json(db);
  } catch (error) {
    res.send(error);
  }
});

export default router;
