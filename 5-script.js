//scopechain
{
    let a1 = [501, 502, 503, 504, 505];
    console.log("BLOCK1", a1);
    //block-1 and scope-1
    {

        function block2() {
            let a3 = ["car", "bike", "scooty", "lorry", "train"];
            console.log("BLOCK2", a3[2]);
        } block2();
        //block-2 and scope-2
        {
            //block-3 and scope-3
            function block1() {
                let a2 = ["minnu", "Sree", "kranthi", "jassu", "kavya"];
                console.log(a2[2]);
                console.log("BLOCK3", a1);
            }
            block1();
        }
    }
}