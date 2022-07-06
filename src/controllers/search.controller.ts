import { Request, Response } from "express";

import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);
    
    res.render('pages/home', {
        menu: createMenuObject(''),
        list,
        query
    });
}