

var n;

function SetScreenPostns() {
    UIColSpce = 48;
    LnkTxtSpce = 24;

    if (ScrnWdth <= 451) {
      UIColSpce = 38;
      LnkTxtSpce = 18;
    }

    LnkTxtRto = 340 / 100 ;//width to height ratio of link text text image
    PhsBxMrgn = 20;


    ASqreStle = document.getElementById("ASqre").style;
    BSqreStle = document.getElementById("BSqre").style;
    SqrsCntStle = document.getElementById("SqrsCnt").style;
    UIColStle = document.getElementById("UICol").style;
    LnkTxtStle = document.getElementById("LnkTxt").style;
    LnkTxtimgdc = document.getElementById("LnkTxtimg");
    LnkTxtLnimgdc = document.getElementById("LnkTxtLnimg");
    UISlect = document.getElementsByClassName("UISlect");


    //Measure screen size, calculate box and header, footer orientation and size
    if (ScrnWdth > ScrnHght) {
        Orntn = "Lndscpe";
        if ((ScrnHght * 2) > ScrnWdth) {//Landscape with UI column at top

            Sqre = ScrnWdth / 2;
            RmningV = ScrnHght - Sqre;
            RmningUIColV = RmningV - LnkTxtSpce;

            //Square size reduced to allow fixed-sized UI column and LnkTxt link space on page
            if (RmningV <= (UIColSpce + LnkTxtSpce)) {
                RmningUIColV = UIColSpce;
                Sqre = ScrnHght - (LnkTxtSpce + UIColSpce);
            }
            console.log("Landscape with UI column at top");
            //Position A & B Squares
            ASqreStle.left = "".concat(( ( ((ScrnWdth - (Sqre * 2)) / 2) * 1)), "px");
            ASqreStle.top = "".concat((((ScrnHght - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
            BSqreStle.left = "".concat((ScrnWdth / 2), "px");
            BSqreStle.top = "".concat((((ScrnHght - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
            //Position gperill link at bottom
            LnkTxtStle.height = "".concat(LnkTxtSpce, "px");
            LnkTxtStle.top = "".concat((((ScrnHght - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce + Sqre), "px");
            LnkTxtStle.width = "100%";
            LnkTxtStle.left = "0px";
            //Position UI column at top
            UIColStle.height = "".concat(UIColSpce, "px");
            UIColStle.top = "".concat((((ScrnHght - (UIColSpce + LnkTxtSpce + Sqre)) / 2)), "px");
            //100% width, left-aligned
            UIColStle.width = "100%";
            UIColStle.left = "0px";
            ///Rectangle containing both square tiles
            SqrsCntStle.left = "".concat(( ( ((ScrnWdth - (Sqre * 2)) / 2) * 1)), "px");
            SqrsCntStle.width = "".concat((Sqre * 2), "px");
            SqrsCntStle.top = "".concat(((((ScrnHght - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce)), "px");
            SqrsCntStle.height = "".concat(Sqre, "px");

            //Switch to UI box sizes calculated as proportion of screen width
            NwPhsBxMrgn = 10;
            NwTtlHght = (((ScrnWdth - (NwPhsBxMrgn * 4)) - 10) / 5);
            OldUIColSpce = UIColSpce;

            if (ScrnWdth < ((UIColSpce * 5) + ((PhsBxMrgn * 4)) + 10 )) {

                UIColSpce = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.top = "".concat((((ScrnHght - (LnkTxtSpce + UIColSpce + Sqre)) / 2) + UIColSpce), "px");
                ASqreStle.left = "0px";
                BSqreStle.left = "".concat(Sqre, "px");
                BSqreStle.top = "".concat((((ScrnHght - (LnkTxtSpce + UIColSpce + Sqre)) / 2) + UIColSpce), "px");
                ///Rectangle containing both square tiles
                SqrsCntStle.top = "".concat((((ScrnHght - (LnkTxtSpce + UIColSpce + Sqre)) / 2) + UIColSpce), "px");
                //Position UI column at top
                UIColStle.height = "".concat(UIColSpce, "px");
                UIColStle.top = "".concat((((ScrnHght - (LnkTxtSpce + UIColSpce + Sqre)) / 2) ), "px");
                UIColStle.left = "0px";
                //Position gperill link at bottom
                LnkTxtStle.top = "".concat((((ScrnHght - (LnkTxtSpce + UIColSpce + Sqre)) / 2) + Sqre + UIColSpce), "px");
            }

            //Position UI boxes
            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColSpce, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColSpce, "px");

                if (ScrnWdth < ((UIColSpce * 5) + ((PhsBxMrgn * 5) + 10))) {
                    document.getElementById(PhsePreBXBx).style.top = "0px";
                } else {
                   document.getElementById(PhsePreBXBx).style.top = "".concat((OldUIColSpce - UIColSpce), "px");
                }
                document.getElementById(PhsePreBXBx).style.left = "".concat( ((UIColSpce + PhsBxMrgn) * i) + ((ScrnWdth - (Sqre * 2)) / 2), "px");
            }

            //LnkTxt text image
            LnkTxtimgdc.src = "graphics/LnkTxtH.png";
            LnkTxtimgdc.style.height = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtimgdc.style.width = "auto";
            LnkTxtimgdc.style.left = "".concat(((ScrnWdth - 4) - ((LnkTxtSpce - 4) * LnkTxtRto)), "px");
            //LnkTxt text image underline
            LnkTxtLnimgdc.src = "graphics/LnkTxtlnH.png";
            LnkTxtLnimgdc.style.height = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtLnimgdc.style.width = "auto";
            LnkTxtLnimgdc.style.left = "".concat(((ScrnWdth - 4) - ((LnkTxtSpce - 4) * LnkTxtRto)), "px");

        } else {//Landscape with UI column on left side
            Sqre = ScrnHght;
            RmningH = ScrnWdth - (Sqre * 2);
            RmningUIColH = RmningH - LnkTxtSpce;

            if (RmningH <= (UIColSpce + LnkTxtSpce)) {
                RmningUIColH = UIColSpce;
                Sqre = (ScrnWdth - (LnkTxtSpce + UIColSpce)) / 2;
            }
            console.log("Landscape with UI column on the side");
            //Position A & B Squares
            ASqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
            ASqreStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2)) + UIColSpce), "px");
            BSqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
            BSqreStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2)) + UIColSpce + Sqre), "px");
            //Position gperill link on the right side
            LnkTxtStle.width = "".concat(LnkTxtSpce, "px");
            LnkTxtStle.left = "".concat((((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 3)*2) + UIColSpce) + (Sqre * 2)), "px");
            LnkTxtStle.height = "100%";
            LnkTxtStle.top = "0px";
            //Position UI column on left
            UIColStle.top = "0px";
            UIColStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1)), "px");
            UIColStle.width = "".concat(UIColSpce, "px");
            UIColStle.height = "100%";
            //Rectangle containing both square tiles
            SqrsCntStle.left = "".concat((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) + UIColSpce), "px");
            SqrsCntStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
            SqrsCntStle.width = "".concat((Sqre * 2), "px");
            SqrsCntStle.height = "".concat(Sqre, "px");

            //Switch to UI box sizes calculated as proportion of screen height
            NwPhsBxMrgn = 10;
            NwTtlHght = (((ScrnHght - (NwPhsBxMrgn * 4)) - 10) / 5);
            OldUIColSpce = UIColSpce;

            if (ScrnHght < ((UIColSpce * 5) + ((PhsBxMrgn * 5) + 10))) {
                UIColSpce = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2)) + UIColSpce), "px");
                ASqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
                BSqreStle.left = "".concat((((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2)) + UIColSpce) + Sqre), "px");
                BSqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
                //Rectangle containing both square tiles
                SqrsCntStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2)) + UIColSpce), "px");
                SqrsCntStle.top = "".concat(((ScrnHght - Sqre) / 2) + 1, "px");
                SqrsCntStle.height = "".concat(Sqre, "px");
                SqrsCntStle.width = "".concat((Sqre * 2), "px");
                //Position UI column on left
                UIColStle.width = "".concat(UIColSpce, "px");
                UIColStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1) + 0), "px");
                //Position gperill link on the right side
                LnkTxtStle.left = "".concat((((((ScrnWdth - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1) + UIColSpce) + (Sqre * 2)), "px");

            }

            //Position UI boxes
            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColSpce, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColSpce, "px");

                if (ScrnHght < ((UIColSpce * 5) + ((PhsBxMrgn * 5) + 10))) {
                    document.getElementById(PhsePreBXBx).style.left = "0px";
                } else {
                   document.getElementById(PhsePreBXBx).style.left = "".concat((OldUIColSpce - UIColSpce), "px");
                }
                document.getElementById(PhsePreBXBx).style.top = "".concat(((UIColSpce + PhsBxMrgn) * i) + ((ScrnHght - Sqre) / 2), "px");
            }

            //LnkTxt text image
            LnkTxtimgdc.src = "graphics/LnkTxtV.png";
            LnkTxtimgdc.style.width = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtimgdc.style.height = "auto";
            LnkTxtimgdc.style.left = "0px";
            //LnkTxt text image undeline
            LnkTxtLnimgdc.src = "graphics/LnkTxtlnV.png";
            LnkTxtLnimgdc.style.width = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtLnimgdc.style.height = "auto";
            LnkTxtLnimgdc.style.left = "0px";
        }
    } else {
        Orntn = "Portrt";//Portrait with UI boxes on left side
        if ((ScrnWdth * 2) > ScrnHght) {
            Sqre = ScrnHght / 2;
            RmningH = ScrnWdth - Sqre;
            RmningUIColH = RmningH - LnkTxtSpce;

            if (RmningH <= (UIColSpce + LnkTxtSpce)) {
                RmningUIColH = UIColSpce;
                Sqre = ScrnWdth - (LnkTxtSpce + UIColSpce);
            }
            console.log("Portrait with UI column on the side");
            //Position A & B Squares
            ASqreStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
            ASqreStle.left = "".concat((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
            BSqreStle.top = "".concat((((ScrnHght - (Sqre * 2)) / 2) + Sqre), "px");
            BSqreStle.left = "".concat((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
            //Position gperill link on the right side
            LnkTxtStle.top = "0px";
            LnkTxtStle.left = "".concat(((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce) + Sqre), "px");
            LnkTxtStle.width = "".concat(LnkTxtSpce, "px");
            LnkTxtStle.height = "100%";
            //Position UI column on the left
            UIColStle.top = "0px";
            UIColStle.left = "".concat(((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2), "px");
            UIColStle.width = "".concat(UIColSpce, "px");
            UIColStle.height = "100%";
            //Rectangle containing both square tiles
            SqrsCntStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
            SqrsCntStle.left = "".concat((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
            SqrsCntStle.width = "".concat(Sqre, "px");
            SqrsCntStle.height = "".concat((Sqre * 2), "px");

            //Switch to UI box sizes calculated as proportion of screen height
            NwPhsBxMrgn = 10;
            NwTtlHght = (((ScrnHght - (NwPhsBxMrgn * 4))) / 5);
            OldUIColSpce = UIColSpce;

            if (ScrnHght < (((UIColSpce * 5) + ((PhsBxMrgn * 4) + ((ScrnHght - (Sqre * 2)) / 2))))　) {

                n = n +1;
                UIColSpce = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.left = "".concat((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
                ASqreStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
                BSqreStle.left = "".concat((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
                BSqreStle.top = "".concat((((ScrnHght - (Sqre * 2)) / 2) + Sqre), "px");
                //Position and size central rectangle
                SqrsCntStle.left = "".concat((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce), "px");
                SqrsCntStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
                SqrsCntStle.height = "".concat((Sqre * 2), "px");
                SqrsCntStle.width = "".concat(Sqre, "px");
                //Position UI column on the left
                UIColStle.left = "".concat(((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2), "px");
                UIColStle.width = "".concat(UIColSpce, "px");
                //Position gperill link on the right side
                LnkTxtStle.left = "".concat(((((ScrnWdth - (UIColSpce + LnkTxtSpce + Sqre)) / 2) + UIColSpce) + Sqre), "px");
                LnkTxtStle.width = "".concat(LnkTxtSpce, "px");
            }

            //Position UI boxes
            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColSpce, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColSpce, "px");

                if (ScrnHght < ((UIColSpce * 5) + ((PhsBxMrgn * 4) + ((ScrnHght - (Sqre * 2)) / 2)))) {
                    document.getElementById(PhsePreBXBx).style.left = "0px";
                    document.getElementById(PhsePreBXBx).style.top = "".concat(((UIColSpce + PhsBxMrgn) * i), "px");
                } else {
                  document.getElementById(PhsePreBXBx).style.left = "0px";
                   //document.getElementById(PhsePreBXBx).style.top = "".concat((OldUIColSpce - UIColSpce), "px");
                   document.getElementById(PhsePreBXBx).style.top = "".concat((((UIColSpce + PhsBxMrgn) * i) + ((ScrnHght - (Sqre * 2)) / 2)), "px");
                }

            }


            //LnkTxt text image
            LnkTxtimgdc.src = "graphics/LnkTxtV.png";
            LnkTxtimgdc.style.width = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtimgdc.style.height = "auto";
            LnkTxtimgdc.style.left = "0px";
            //LnkTxt text image undeline
            LnkTxtLnimgdc.src = "graphics/LnkTxtlnV.png";
            LnkTxtLnimgdc.style.width = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtLnimgdc.style.height = "auto";
            LnkTxtLnimgdc.style.left = "0px";
        } else {//Portrait with UI column at top
            Sqre = ScrnWdth;
            RmningV = ScrnHght - (Sqre * 2);
            RmningUIColV = RmningV - 24;

            if (RmningV <= (UIColSpce + 24)) {
                RmningUIColV = UIColSpce;
                Sqre = (ScrnHght - (24 + UIColSpce)) / 2;
            }
            console.log("Portrait with UI column at top");
            //Position A & B Squares
            ASqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
            ASqreStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) + UIColSpce), "px");
            BSqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
            BSqreStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) + Sqre + UIColSpce), "px");
            //Position gperill link at the bottom
            LnkTxtStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) + (Sqre * 2) + UIColSpce), "px");
            LnkTxtStle.left = "0px";
            LnkTxtStle.width = "100%";
            LnkTxtStle.height = "".concat(LnkTxtSpce, "px");
            //Position UI column at the top
            UIColStle.left = "0px";
            UIColStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2)), "px");
            UIColStle.width = "100%";
            UIColStle.height = "".concat(UIColSpce, "px");
            //Position and size central rectangle
            SqrsCntStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
            SqrsCntStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) + UIColSpce), "px");
            SqrsCntStle.width = "".concat(Sqre, "px");
            SqrsCntStle.height = "".concat((Sqre * 2), "px");

            //
            //document.getElementById("PslySqreA").style.top = "".concat((((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1) + UIColSpce) + Sqre - Sqre/4), "px");
            //document.getElementById("PslySqreA").style.left = "".concat((Sqre/4), "px");


            NwPhsBxMrgn = 10;
            NwTtlHght = (ScrnWdth - (NwPhsBxMrgn * 4)) / 5;
            OldUIColSpce = UIColSpce;

            if (ScrnWdth < ((UIColSpce * 5) + ((PhsBxMrgn * 4) + (((ScrnWdth - Sqre) / 2))))) {
                UIColSpce = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.top = "".concat(((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1) + UIColSpce), "px");
                ASqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
                BSqreStle.top = "".concat((((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1) + UIColSpce) + Sqre), "px");
                BSqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
                //Position and size central rectangle
                SqrsCntStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
                SqrsCntStle.top = "".concat(((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1) + UIColSpce), "px");
                SqrsCntStle.height = "".concat((Sqre * 2), "px");
                SqrsCntStle.width = "".concat(Sqre, "px");
                //Position UI column at the top
                UIColStle.height = "".concat(UIColSpce, "px");
                UIColStle.top = "".concat(((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2), "px");
                //Position gperill link at the bottom
                LnkTxtStle.top = "".concat(((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) + UIColSpce) + (Sqre * 2)), "px");
                //
                //document.getElementById("PslySqreA").style.top = "".concat((((((ScrnHght - ((Sqre * 2) + UIColSpce + LnkTxtSpce)) / 2) * 1) + UIColSpce) + Sqre - Sqre/4), "px");
                //document.getElementById("PslySqreA").style.left = "".concat((Sqre/4), "px");

            }


            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColSpce, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColSpce, "px");

                if (ScrnWdth < ((OldUIColSpce * 5) + (20 * 4))) {

                    document.getElementById(PhsePreBXBx).style.top = "0px";
                    document.getElementById(PhsePreBXBx).style.left = "0px";
                } else {
                    document.getElementById(PhsePreBXBx).style.top = "0px";
                    document.getElementById(PhsePreBXBx).style.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
                }
                document.getElementById(PhsePreBXBx).style.left = "".concat(((UIColSpce + PhsBxMrgn) * i), "px");
            }

            //LnkTxt text image
            LnkTxtimgdc.src = "graphics/LnkTxtH.png";
            LnkTxtimgdc.style.height = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtimgdc.style.width = "auto";
            LnkTxtimgdc.style.left = "".concat(((ScrnWdth - 4) - ((LnkTxtSpce - 4) * LnkTxtRto)), "px");
            //LnkTxt text image undeline
            LnkTxtLnimgdc.src = "graphics/LnkTxtlnH.png";
            LnkTxtLnimgdc.style.height = "".concat((LnkTxtSpce - 4), "px");
            LnkTxtLnimgdc.style.width = "auto";
            LnkTxtLnimgdc.style.left = "".concat(((ScrnWdth - 4) - ((LnkTxtSpce - 4) * LnkTxtRto)), "px");
        }
    }

    //Set outer square sizes
    document.getElementById("ASqre").style.width = "".concat(Sqre, "px");
    document.getElementById("ASqre").style.height = "".concat(Sqre, "px");
    document.getElementById("BSqre").style.width = "".concat(Sqre, "px");
    document.getElementById("BSqre").style.height = "".concat(Sqre, "px");

}





function Set4SubBxs() {
    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("SqreQrtrs")[i].style.width = "".concat((Sqre / 2), "px");
        document.getElementsByClassName("SqreQrtrs")[i].style.height = "".concat((Sqre / 2), "px");
    }

    // B Square sub box A
    document.getElementById("StatSeqBx").style.left = "".concat(0, "px");
    document.getElementById("StatSeqBx").style.top = "".concat(0, "px");
    // B Square sub box B
    document.getElementById("PhseSeqBx").style.left = "".concat((Sqre / 2), "px");
    document.getElementById("PhseSeqBx").style.top = "".concat(0, "px");
    // B Square sub box C
    document.getElementById("TmpoDspBx").style.left = "".concat(0, "px");
    document.getElementById("TmpoDspBx").style.top = "".concat((Sqre / 2), "px");
    // B Square sub box D
    document.getElementById("PlaySeqBx").style.left = "".concat((Sqre / 2), "px");
    document.getElementById("PlaySeqBx").style.top = "".concat((Sqre / 2), "px");
}

function SetWreFrme() {
  SqrsCntStle = document.getElementById("SqrsCnt").style;
  ASqreStle = document.getElementById("ASqre").style;
  BSqreStle = document.getElementById("BSqre").style;
  LnkTxtStle = document.getElementById("LnkTxt").style;
  UIColStle = document.getElementById("UICol").style;
  LnkTxtimgdc = document.getElementById("LnkTxtimg");
  LnkTxtLnimgdc = document.getElementById("LnkTxtLnimg");
  UISlect = document.getElementsByClassName("UISlect");



  lnered = "1px solid red";
  lnepink = "3px solid pink";
  lneblu = "1px solid blue";
  lnegreen = "1px solid green";
  bigoffset = "-3px";
  lneoffset = "-1px";

  //wire frame lines
  LnkTxtStle.outline = lnered;
  LnkTxtStle.outlineOffset = lneoffset;
  UIColStle.outline = lnered;
  UIColStle.outlineOffset = lneoffset;
  SqrsCntStle.outline = lnepink;
  SqrsCntStle.outlineOffset = bigoffset;
  ASqreStle.outline = lneblu;
  ASqreStle.outlineOffset = lneoffset;
  BSqreStle.outline = lneblu;
  BSqreStle.outlineOffset = lneoffset;

  for (i = 0; i < 5; i++) {
  UISlect[i].style.outline = lnegreen;
  UISlect[i].style.outlineOffset = lneoffset;
  }

}
