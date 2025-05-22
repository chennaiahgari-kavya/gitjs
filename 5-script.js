//scopechain
{
    let a1 = [501, 502, 503, 504, 505];
    console.log("BLOCK1", a1);
    //block-1 and scope-1
    {

            let a3 = ["car", "bike", "scooty", "lorry", "train"];
            console.log("BLOCK2", a3);
            console.log("BLOCK1", a1);
        
        //block-2 and scope-2
         
        {
            //block-3 and scope-3
            
                let a2 = ["minnu", "Sree", "kranthi", "jassu", "kavya"];
                console.log("BLOCK3", a2);
                console.log("BLOCK1", a1);
                console.log("BLOCK2", a3);
            
        }
    }
}